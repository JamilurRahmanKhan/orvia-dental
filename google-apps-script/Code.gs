/**
 * Orvia Dental — free booking + leads backend.
 *
 * Runs entirely on Google's free tier: Apps Script + Calendar + Sheets + MailApp.
 * No paid API, no paid hosting, no third-party service.
 *
 * SETUP (see google-apps-script/README.md for the full walkthrough):
 *   1. Create a Google Sheet. Open Extensions > Apps Script and paste this file in as Code.gs.
 *   2. Set the four constants below.
 *   3. Run `setup` once from the Apps Script editor (creates the sheet tabs + headers).
 *   4. Deploy > New deployment > Web app. Execute as "Me", access "Anyone".
 *   5. Copy the deployment URL into the site's VITE_BOOKING_API_URL env var.
 */

// ---- Configuration ----
const CALENDAR_ID = 'primary' // or a specific calendar's ID from Google Calendar settings
const NOTIFY_EMAIL = '' // practice inbox for new-booking/lead emails; leave '' to skip email
const TIMEZONE = 'America/Chicago'
const SLOT_MINUTES = 30
const BOOKING_SHEET = 'Bookings'
const LEADS_SHEET = 'Leads'

// Business hours by day of week (0=Sunday). null = closed. Must match src/config/practice.js.
const HOURS = [null, [8, 19], [8, 19], [8, 19], [8, 19], [8, 17], [9, 14]]

// ---------------------------------------------------------------------------

function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  ensureSheet_(ss, BOOKING_SHEET, [
    'Timestamp', 'Name', 'Phone', 'Email', 'Reason', 'Date', 'Time',
    'New/Existing patient', 'Insurance', 'SMS consent', 'Notes', 'Calendar Event ID', 'Status',
  ])
  ensureSheet_(ss, LEADS_SHEET, [
    'Timestamp', 'Source', 'Name', 'Phone', 'Email', 'Message', 'Insurance plan', 'Consent',
  ])
  Logger.log('Sheets ready: ' + BOOKING_SHEET + ', ' + LEADS_SHEET)
}

function ensureSheet_(ss, name, headers) {
  let sheet = ss.getSheetByName(name)
  if (!sheet) sheet = ss.insertSheet(name)
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers)
    sheet.setFrozenRows(1)
  }
  return sheet
}

function doGet(e) {
  const action = e.parameter.action
  try {
    if (action === 'availability') {
      return jsonOut_({ ok: true, slots: getAvailability_(e.parameter.date) })
    }
    return jsonOut_({ ok: true, message: 'Orvia Dental booking API is running.' })
  } catch (err) {
    return jsonOut_({ ok: false, error: String(err) })
  }
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || '{}')
    if (body.action === 'book') return jsonOut_(createBooking_(body))
    if (body.action === 'lead') return jsonOut_(createLead_(body))
    return jsonOut_({ ok: false, error: 'Unknown action' })
  } catch (err) {
    return jsonOut_({ ok: false, error: String(err) })
  }
}

function jsonOut_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}

// ---- Availability ----

function getAvailability_(dateStr) {
  if (!dateStr) throw new Error('Missing date')
  const day = new Date(dateStr + 'T00:00:00')
  const dow = day.getDay()
  const hours = HOURS[dow]
  if (!hours) return []

  const cal = CalendarApp.getCalendarById(CALENDAR_ID)
  const dayStart = new Date(day)
  dayStart.setHours(0, 0, 0, 0)
  const dayEnd = new Date(day)
  dayEnd.setHours(23, 59, 59, 999)
  const busy = cal.getEvents(dayStart, dayEnd).map((ev) => ({ start: ev.getStartTime(), end: ev.getEndTime() }))

  const slots = []
  const now = new Date()
  for (let h = hours[0] * 60; h < hours[1] * 60; h += SLOT_MINUTES) {
    const start = new Date(day)
    start.setHours(0, h, 0, 0)
    const end = new Date(start.getTime() + SLOT_MINUTES * 60000)
    if (start < now) continue
    const overlaps = busy.some((b) => start < b.end && end > b.start)
    if (!overlaps) slots.push(Utilities.formatDate(start, TIMEZONE, 'HH:mm'))
  }
  return slots
}

// ---- Booking ----

function createBooking_(data) {
  required_(data, ['name', 'phone', 'date', 'time', 'reason'])

  const [hh, mm] = data.time.split(':').map(Number)
  const start = new Date(data.date + 'T00:00:00')
  start.setHours(hh, mm, 0, 0)
  const end = new Date(start.getTime() + SLOT_MINUTES * 60000)

  // Re-check the slot is still free (avoids a double-book race).
  const cal = CalendarApp.getCalendarById(CALENDAR_ID)
  const stillFree = !cal.getEvents(start, end).length
  if (!stillFree) return { ok: false, error: 'That time was just taken. Please pick another.' }

  const title = `${data.reason} — ${data.name}`
  const description = [
    `Phone: ${data.phone}`,
    data.email ? `Email: ${data.email}` : '',
    data.patientType ? `Patient: ${data.patientType}` : '',
    data.insurance ? `Insurance: ${data.insurance}` : '',
    data.notes ? `Notes: ${data.notes}` : '',
  ].filter(Boolean).join('\n')

  const event = cal.createEvent(title, start, end, { description })
  if (data.phone) event.addPopupReminder(60)

  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = ensureSheet_(ss, BOOKING_SHEET, [])
  sheet.appendRow([
    new Date(), data.name, data.phone, data.email || '', data.reason,
    data.date, data.time, data.patientType || '', data.insurance || '',
    data.smsConsent ? 'Yes' : 'No', data.notes || '', event.getId(), 'Confirmed',
  ])

  notify_(`New booking: ${data.name}`, `${title}\n${Utilities.formatDate(start, TIMEZONE, 'EEE MMM d, h:mm a')}\n\n${description}`)

  return {
    ok: true,
    confirmation: {
      name: data.name,
      reason: data.reason,
      date: data.date,
      time: Utilities.formatDate(start, TIMEZONE, 'h:mm a'),
    },
  }
}

// ---- Leads (contact form, insurance verify, etc.) ----

function createLead_(data) {
  required_(data, ['name'])
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = ensureSheet_(ss, LEADS_SHEET, [])
  sheet.appendRow([
    new Date(), data.source || 'contact form', data.name, data.phone || '',
    data.email || '', data.message || '', data.insurancePlan || '', data.consent ? 'Yes' : 'No',
  ])
  notify_(`New ${data.source || 'contact'} lead: ${data.name}`, JSON.stringify(data, null, 2))
  return { ok: true }
}

function required_(data, fields) {
  const missing = fields.filter((f) => !data[f])
  if (missing.length) throw new Error('Missing required field(s): ' + missing.join(', '))
}

function notify_(subject, body) {
  if (!NOTIFY_EMAIL) return
  try {
    MailApp.sendEmail(NOTIFY_EMAIL, `[Orvia Dental] ${subject}`, body)
  } catch (err) {
    Logger.log('Email notify failed: ' + err)
  }
}

// Thin client for the free Google Apps Script backend (see google-apps-script/).
// Configure VITE_BOOKING_API_URL in .env after deploying the script.

const ENDPOINT = import.meta.env.VITE_BOOKING_API_URL || ''

export const backendConfigured = Boolean(ENDPOINT)

async function post(payload) {
  if (!ENDPOINT) {
    return { ok: false, error: 'not-configured' }
  }
  try {
    // Apps Script web apps don't send CORS headers for simple requests unless the
    // client avoids a CORS preflight — text/plain keeps this a "simple request".
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    })
    return await res.json()
  } catch (err) {
    return { ok: false, error: String(err) }
  }
}

export async function fetchAvailability(dateStr) {
  if (!ENDPOINT) return { ok: false, error: 'not-configured', slots: [] }
  try {
    const url = `${ENDPOINT}?action=availability&date=${encodeURIComponent(dateStr)}`
    const res = await fetch(url)
    return await res.json()
  } catch (err) {
    return { ok: false, error: String(err), slots: [] }
  }
}

export function submitBooking(data) {
  return post({ action: 'book', ...data })
}

export function submitLead(data) {
  return post({ action: 'lead', ...data })
}

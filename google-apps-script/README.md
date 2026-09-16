# Booking + leads backend — free, no paid tier

This runs entirely on Google's free tier: Apps Script (compute), Calendar (booking), Sheets (storage), MailApp (email). Nothing here needs a credit card or a paid plan.

## What you need to do (this part only you can do — it requires your Google login)

1. **Create a Google Sheet.** Go to [sheets.new](https://sheets.new), name it "Orvia Dental Bookings" (or anything).
2. **Open the script editor.** In the Sheet: **Extensions → Apps Script**.
3. **Paste the code.** Delete the placeholder `Code.gs` content and paste in [`Code.gs`](./Code.gs) from this folder.
4. **Set your calendar.** At the top of the script:
   - `CALENDAR_ID`: leave as `'primary'` to use your main Google Calendar, or paste a specific calendar's ID (Calendar → Settings → that calendar → "Integrate calendar" → Calendar ID).
   - `NOTIFY_EMAIL`: your email, to get a notification on every booking/lead. Leave `''` to skip.
   - `HOURS`: already matches the site's hours in `src/config/practice.js` — update both together if hours change.
5. **Run `setup` once.** In the Apps Script editor, select the `setup` function from the dropdown at the top and click **Run** (▶). The first run will ask you to authorize the script — this is Google's standard consent screen for a script accessing your own Calendar/Sheets/Gmail; only you can click through it.
6. **Deploy as a web app.** **Deploy → New deployment** → gear icon → **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**, authorize again if asked.
7. **Copy the Web app URL** it gives you (ends in `/exec`).
8. **Give that URL to the site.** In the project root, create a file named `.env` (copy `.env.example`) and set:
   ```
   VITE_BOOKING_API_URL=https://script.google.com/macros/s/XXXXXXXX/exec
   ```
9. Rebuild the site (`npm run build`) so the URL is baked in, or restart `npm run dev`.

That's it — no billing account, no API key, no paid tier anywhere in this path.

## Updating the script later

Every time you change `Code.gs`, paste the new version into the Apps Script editor and use **Deploy → Manage deployments → edit (pencil) → New version → Deploy**. The URL stays the same, so you don't need to update `.env` again.

## What it does

- `GET ?action=availability&date=YYYY-MM-DD` — returns open 30-minute slots for that date, computed from your real Calendar's busy times and the `HOURS` you set.
- `POST {action:'book', name, phone, email, reason, date, time, patientType, insurance, notes, smsConsent}` — re-checks the slot is still free, creates a Calendar event, appends a row to the **Bookings** sheet, emails you (if `NOTIFY_EMAIL` is set), and returns a confirmation.
- `POST {action:'lead', source, name, phone, email, message, insurancePlan, consent}` — appends a row to the **Leads** sheet (contact form, insurance-verify requests, etc.) and emails you.

## Limits to know about (still free, just be aware)

- Apps Script web apps have a daily quota (~20,000 URL fetch calls / consumer account) — far more than a single clinic's traffic needs.
- `MailApp.sendEmail` is capped at 100 emails/day on a consumer Gmail account (1,500/day on Workspace) — fine for booking notifications.
- The web app runs as *you*, so it can only see/write to *your* Calendar and *your* Sheet — exactly what we want here, no separate service account needed.

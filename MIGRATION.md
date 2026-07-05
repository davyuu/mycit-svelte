# CIT React to SvelteKit migration

## What broke

The old React app submits form responses directly from the browser to `process.env.FORM_SHEETS_URL` or `process.env.PRAYER_SHEETS_URL`. The form payload is URL encoded and then the browser expects the endpoint to return JSON.

That is fragile because Google Apps Script and Google Sheets endpoints often redirect and can return text or HTML instead of JSON. Since the old app posts from the browser, any CORS, redirect, deployment permission, or response-shape change breaks user submissions.

## New architecture

The rebuilt SvelteKit app sends form data to `/api/forms` first. That server route then posts to the configured Google Sheets or Apps Script URL.

Benefits:

- Google Sheet URLs stay private server-side environment variables.
- Browser CORS and redirect handling no longer affect the form.
- The server accepts text, JSON, or HTML-like success responses from Apps Script.
- A future move to Sheets API v4, Supabase, Firebase, Planning Center, or another store only changes the server route.

## Required environment variables

```bash
FORM_SHEETS_URL="https://script.google.com/macros/s/.../exec"
PRAYER_SHEETS_URL="https://script.google.com/macros/s/.../exec"
```

`PRAYER_SHEETS_URL` is optional. If it is missing, prayer requests fall back to `FORM_SHEETS_URL`.

## Migration steps

1. Keep the existing Google Sheet and Apps Script deployment active.
2. Copy the old `FORM_SHEETS_URL` and `PRAYER_SHEETS_URL` values into the SvelteKit host environment.
3. Deploy the `rebuild-cit-app` branch to a preview environment.
4. Submit test forms for Connect, Prayer, Alpha, Next, citKids, and Join A Team.
5. Confirm the Sheet receives rows with the existing `responses` sheet name and response key order.
6. Update DNS or hosting to point traffic from the old React bundle to the SvelteKit deployment.
7. After launch, replace the Apps Script URL with a typed persistence adapter if desired.

## Routes rebuilt

- `/`
- `/message`
- `/connect`
- `/prayer`
- `/alpha`
- `/next`
- `/volunteer`
- `/kids`
- `/giving`
- `/events`
- `/youth`
- `/stats`
- `/confirm`

## Future design upgrade

Most app copy, colours, nav entries, and option lists live in `src/lib/data/content.ts`. Form layout is centralized in `FormShell.svelte`, and page headers are centralized in `PageHeader.svelte`, so a redesign should start there instead of editing every route.

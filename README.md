# CalmLearn on Vercel + Postgres

This project now stores participant records in a managed Postgres database,
which works on Vercel.

## Required environment variables
Set these in Vercel Project Settings -> Environment Variables:

- `DATABASE_URL` = your Postgres connection string
- `RESEARCHER_KEY` = researcher dashboard password/key

If `RESEARCHER_KEY` is not set, default is `calmlearn-research-key`.

## Deploy to Vercel
1. Push this repo to GitHub.
2. Import repo into Vercel.
3. Add env vars (`DATABASE_URL`, `RESEARCHER_KEY`).
4. Redeploy.

## Local development
1. Create `.env.local` with:
   - `DATABASE_URL=...`
   - `RESEARCHER_KEY=...`
2. Install deps:
   - `npm install`
3. Run locally with Vercel runtime:
   - `npm run dev`
4. Open:
   - `http://localhost:3000/index.html`

## API routes
- `POST /api/submissions` (participant save)
- `GET /api/submissions` (researcher only)
- `GET /api/submissions.csv` (researcher only)
- `GET /api/researcher/verify` (researcher only)
- `GET /api/health`

## Researcher access
- Login: `http://localhost:3000/researcher-login.html`
- Dashboard: `http://localhost:3000/dashboard.html`

## Notes
- Database table is auto-created on first API call.
- This supports 50+ participants easily.
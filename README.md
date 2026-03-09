# CalmLearn with Google Sheets

This project now stores participant data directly in Google Sheets via Google Apps Script.

## 1) Configure frontend endpoint
Open `sheets-config.js` and set:

```js
window.CALMLEARN_SHEETS_URL = "https://script.google.com/macros/s/REPLACE_WITH_DEPLOYMENT_ID/exec";
```

## 2) Create Google Sheet + Apps Script
1. Create a Google Sheet.
2. Open Extensions -> Apps Script.
3. Paste `google-sheets-apps-script/Code.gs` into script editor.
4. Set `RESEARCHER_KEY` in the script.
5. Deploy -> New Deployment -> Web app.

Deployment settings:
- Execute as: `Me`
- Who has access: `Anyone`

Copy the Web App URL and put it in `sheets-config.js`.

## 3) Data headers (sheet columns)
Use this exact header order (auto-created by script if sheet is empty):

1. `id`
2. `participant_id`
3. `created_at`
4. `topic`
5. `method_order`
6. `age_range`
7. `learning_style`
8. `baseline_stress`
9. `baseline_confidence`
10. `baseline_reading_comfort`
11. `textbook_reading_time`
12. `textbook_quiz_time`
13. `textbook_score`
14. `textbook_quiz_total`
15. `textbook_post_stress`
16. `textbook_post_confidence`
17. `calm_breathing_pre_stress`
18. `calm_breathing_post_stress`
19. `calm_reading_time`
20. `calm_quiz_time`
21. `calm_score`
22. `calm_quiz_total`
23. `calm_post_stress`
24. `calm_post_confidence`
25. `participant_started_at`
26. `participant_completed_at`

## 4) Researcher access
- Researcher login page: `researcher-login.html`
- Dashboard: `dashboard.html`
- Researcher key used at login must match `RESEARCHER_KEY` in Apps Script.

## 5) Endpoints used by frontend
- `POST <script_url>` with payload for submission
- `GET <script_url>?action=verify&key=...`
- `GET <script_url>?action=list&key=...`
- `GET <script_url>?action=csv&key=...`
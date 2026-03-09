const SHEET_NAME = 'CalmLearnData';
const RESEARCHER_KEY = 'replace-with-your-key';

const HEADERS = [
  'id',
  'participant_id',
  'created_at',
  'topic',
  'method_order',
  'age_range',
  'learning_style',
  'baseline_stress',
  'baseline_confidence',
  'baseline_reading_comfort',
  'textbook_reading_time',
  'textbook_quiz_time',
  'textbook_score',
  'textbook_quiz_total',
  'textbook_post_stress',
  'textbook_post_confidence',
  'calm_breathing_pre_stress',
  'calm_breathing_post_stress',
  'calm_reading_time',
  'calm_quiz_time',
  'calm_score',
  'calm_quiz_total',
  'calm_post_stress',
  'calm_post_confidence',
  'participant_started_at',
  'participant_completed_at'
];

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }
  return sheet;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function isAuthorized_(key) {
  return key && key === RESEARCHER_KEY;
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    if (!payload.participant_id) {
      return json_({ ok: false, error: 'participant_id is required' });
    }

    const sheet = getSheet_();
    const nowIso = new Date().toISOString();

    const methodOrder = Array.isArray(payload.method_order)
      ? payload.method_order.join(' -> ')
      : String(payload.method_order || '');

    const values = [
      Utilities.getUuid(),
      payload.participant_id || '',
      nowIso,
      payload.topic || 'Photosynthesis',
      methodOrder,
      payload.age_range || '',
      payload.learning_style || '',
      payload.baseline_stress || '',
      payload.baseline_confidence || '',
      payload.baseline_reading_comfort || '',
      payload.textbook_reading_time || '',
      payload.textbook_quiz_time || '',
      payload.textbook_score || '',
      payload.textbook_quiz_total || '',
      payload.textbook_post_stress || '',
      payload.textbook_post_confidence || '',
      payload.calm_breathing_pre_stress || '',
      payload.calm_breathing_post_stress || '',
      payload.calm_reading_time || '',
      payload.calm_quiz_time || '',
      payload.calm_score || '',
      payload.calm_quiz_total || '',
      payload.calm_post_stress || '',
      payload.calm_post_confidence || '',
      payload.participant_started_at || '',
      payload.participant_completed_at || ''
    ];

    sheet.appendRow(values);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: err.message });
  }
}

function doGet(e) {
  try {
    const action = (e.parameter.action || 'health').toLowerCase();

    if (action === 'health') {
      getSheet_();
      return json_({ ok: true });
    }

    if (action === 'verify') {
      const key = e.parameter.key || '';
      if (!isAuthorized_(key)) {
        return json_({ ok: false, error: 'unauthorized' });
      }
      return json_({ ok: true });
    }

    if (action === 'list') {
      const key = e.parameter.key || '';
      if (!isAuthorized_(key)) {
        return json_({ ok: false, error: 'unauthorized' });
      }

      const sheet = getSheet_();
      const data = sheet.getDataRange().getValues();
      if (data.length <= 1) return json_({ rows: [] });

      const headers = data[0];
      const rows = data.slice(1).map((row) => {
        const obj = {};
        headers.forEach((h, i) => {
          obj[h] = row[i];
        });
        return obj;
      });

      return json_({ rows: rows.reverse() });
    }

    if (action === 'csv') {
      const key = e.parameter.key || '';
      if (!isAuthorized_(key)) {
        return ContentService.createTextOutput('unauthorized');
      }

      const sheet = getSheet_();
      const data = sheet.getDataRange().getValues();
      const csv = data
        .map((row) => row.map((v) => {
          const s = String(v).replace(/"/g, '""');
          return '"' + s + '"';
        }).join(','))
        .join('\n');

      return ContentService
        .createTextOutput(csv)
        .setMimeType(ContentService.MimeType.CSV);
    }

    return json_({ ok: false, error: 'unknown action' });
  } catch (err) {
    return json_({ ok: false, error: err.message });
  }
}
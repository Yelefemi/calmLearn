const { Pool } = require("pg");

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

let initPromise = null;

function toInt(value) {
  if (value === null || value === undefined || value === "") return null;
  const n = Number(value);
  return Number.isFinite(n) ? Math.trunc(n) : null;
}

async function initSchema() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS submissions (
      id BIGSERIAL PRIMARY KEY,
      participant_id TEXT NOT NULL UNIQUE,
      topic TEXT,
      method_order JSONB,
      age_range TEXT,
      learning_style TEXT,
      baseline_stress INTEGER,
      baseline_confidence INTEGER,
      baseline_reading_comfort INTEGER,
      textbook_reading_time INTEGER,
      textbook_quiz_time INTEGER,
      textbook_score INTEGER,
      textbook_quiz_total INTEGER,
      textbook_post_stress INTEGER,
      textbook_post_confidence INTEGER,
      calm_breathing_pre_stress INTEGER,
      calm_breathing_post_stress INTEGER,
      calm_reading_time INTEGER,
      calm_quiz_time INTEGER,
      calm_score INTEGER,
      calm_quiz_total INTEGER,
      calm_post_stress INTEGER,
      calm_post_confidence INTEGER,
      participant_started_at BIGINT,
      participant_completed_at BIGINT,
      client_created_at TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);
}

async function ensureDb() {
  if (!initPromise) {
    initPromise = initSchema();
  }
  return initPromise;
}

function normalizePayload(b = {}) {
  return {
    participant_id: b.participant_id ? String(b.participant_id) : null,
    topic: b.topic || "Photosynthesis",
    method_order: Array.isArray(b.method_order) ? b.method_order : [],
    age_range: b.age_range || null,
    learning_style: b.learning_style || null,
    baseline_stress: toInt(b.baseline_stress),
    baseline_confidence: toInt(b.baseline_confidence),
    baseline_reading_comfort: toInt(b.baseline_reading_comfort),
    textbook_reading_time: toInt(b.textbook_reading_time),
    textbook_quiz_time: toInt(b.textbook_quiz_time),
    textbook_score: toInt(b.textbook_score),
    textbook_quiz_total: toInt(b.textbook_quiz_total),
    textbook_post_stress: toInt(b.textbook_post_stress),
    textbook_post_confidence: toInt(b.textbook_post_confidence),
    calm_breathing_pre_stress: toInt(b.calm_breathing_pre_stress),
    calm_breathing_post_stress: toInt(b.calm_breathing_post_stress),
    calm_reading_time: toInt(b.calm_reading_time),
    calm_quiz_time: toInt(b.calm_quiz_time),
    calm_score: toInt(b.calm_score),
    calm_quiz_total: toInt(b.calm_quiz_total),
    calm_post_stress: toInt(b.calm_post_stress),
    calm_post_confidence: toInt(b.calm_post_confidence),
    participant_started_at: toInt(b.participant_started_at),
    participant_completed_at: toInt(b.participant_completed_at),
    client_created_at: new Date().toISOString()
  };
}

async function upsertSubmission(payload) {
  await ensureDb();

  const q = `
    INSERT INTO submissions (
      participant_id, topic, method_order, age_range, learning_style,
      baseline_stress, baseline_confidence, baseline_reading_comfort,
      textbook_reading_time, textbook_quiz_time, textbook_score, textbook_quiz_total,
      textbook_post_stress, textbook_post_confidence,
      calm_breathing_pre_stress, calm_breathing_post_stress,
      calm_reading_time, calm_quiz_time, calm_score, calm_quiz_total,
      calm_post_stress, calm_post_confidence,
      participant_started_at, participant_completed_at, client_created_at, updated_at
    ) VALUES (
      $1,$2,$3,$4,$5,
      $6,$7,$8,
      $9,$10,$11,$12,
      $13,$14,
      $15,$16,
      $17,$18,$19,$20,
      $21,$22,
      $23,$24,$25,NOW()
    )
    ON CONFLICT(participant_id) DO UPDATE SET
      topic = EXCLUDED.topic,
      method_order = EXCLUDED.method_order,
      age_range = EXCLUDED.age_range,
      learning_style = EXCLUDED.learning_style,
      baseline_stress = EXCLUDED.baseline_stress,
      baseline_confidence = EXCLUDED.baseline_confidence,
      baseline_reading_comfort = EXCLUDED.baseline_reading_comfort,
      textbook_reading_time = EXCLUDED.textbook_reading_time,
      textbook_quiz_time = EXCLUDED.textbook_quiz_time,
      textbook_score = EXCLUDED.textbook_score,
      textbook_quiz_total = EXCLUDED.textbook_quiz_total,
      textbook_post_stress = EXCLUDED.textbook_post_stress,
      textbook_post_confidence = EXCLUDED.textbook_post_confidence,
      calm_breathing_pre_stress = EXCLUDED.calm_breathing_pre_stress,
      calm_breathing_post_stress = EXCLUDED.calm_breathing_post_stress,
      calm_reading_time = EXCLUDED.calm_reading_time,
      calm_quiz_time = EXCLUDED.calm_quiz_time,
      calm_score = EXCLUDED.calm_score,
      calm_quiz_total = EXCLUDED.calm_quiz_total,
      calm_post_stress = EXCLUDED.calm_post_stress,
      calm_post_confidence = EXCLUDED.calm_post_confidence,
      participant_started_at = EXCLUDED.participant_started_at,
      participant_completed_at = EXCLUDED.participant_completed_at,
      client_created_at = EXCLUDED.client_created_at,
      updated_at = NOW()
    RETURNING id
  `;

  const values = [
    payload.participant_id,
    payload.topic,
    JSON.stringify(payload.method_order || []),
    payload.age_range,
    payload.learning_style,
    payload.baseline_stress,
    payload.baseline_confidence,
    payload.baseline_reading_comfort,
    payload.textbook_reading_time,
    payload.textbook_quiz_time,
    payload.textbook_score,
    payload.textbook_quiz_total,
    payload.textbook_post_stress,
    payload.textbook_post_confidence,
    payload.calm_breathing_pre_stress,
    payload.calm_breathing_post_stress,
    payload.calm_reading_time,
    payload.calm_quiz_time,
    payload.calm_score,
    payload.calm_quiz_total,
    payload.calm_post_stress,
    payload.calm_post_confidence,
    payload.participant_started_at,
    payload.participant_completed_at,
    payload.client_created_at
  ];

  const result = await pool.query(q, values);
  return result.rows[0];
}

async function getAllSubmissions() {
  await ensureDb();
  const result = await pool.query(`SELECT * FROM submissions ORDER BY id DESC`);
  return result.rows;
}

module.exports = {
  pool,
  ensureDb,
  normalizePayload,
  upsertSubmission,
  getAllSubmissions
};
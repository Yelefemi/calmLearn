const { normalizePayload, upsertSubmission, getAllSubmissions } = require("../lib/postgres");
const { requireResearcher } = require("../lib/auth");

module.exports = async (req, res) => {
  try {
    if (req.method === "POST") {
      const payload = normalizePayload(req.body || {});
      if (!payload.participant_id) {
        return res.status(400).json({ error: "participant_id is required" });
      }
      await upsertSubmission(payload);
      return res.status(200).json({ ok: true });
    }

    if (req.method === "GET") {
      if (!requireResearcher(req, res)) return;
      const rows = await getAllSubmissions();
      return res.status(200).json({ count: rows.length, rows });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    return res.status(500).json({
      error: "Submission handler failed",
      detail: err.message
    });
  }
};
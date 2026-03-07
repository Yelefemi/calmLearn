const { ensureDb } = require("../../lib/postgres");
const { requireResearcher } = require("../../lib/auth");

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!requireResearcher(req, res)) return;

  try {
    await ensureDb();
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Verification failed", detail: err.message });
  }
};
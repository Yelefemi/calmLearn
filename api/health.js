const { ensureDb } = require("../lib/postgres");

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await ensureDb();
    return res.status(200).json({ ok: true, database: "postgres" });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
};
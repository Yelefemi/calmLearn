const { getAllSubmissions } = require("../lib/postgres");
const { requireResearcher } = require("../lib/auth");

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!requireResearcher(req, res)) return;

  try {
    const rows = await getAllSubmissions();

    if (!rows.length) {
      res.setHeader("Content-Type", "text/csv");
      return res.status(200).send("id,participant_id\n");
    }

    const headers = Object.keys(rows[0]);
    const esc = (v) => {
      if (v === null || v === undefined) return "";
      const s = String(v).replace(/"/g, '""');
      return `"${s}"`;
    };

    const csv = [
      headers.join(","),
      ...rows.map((row) => headers.map((h) => esc(row[h])).join(","))
    ].join("\n");

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=calmlearn_submissions.csv");
    return res.status(200).send(csv);
  } catch (err) {
    return res.status(500).json({ error: "CSV export failed", detail: err.message });
  }
};
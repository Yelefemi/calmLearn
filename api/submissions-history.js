const { getSubmissionHistory } = require("../lib/postgres");

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { participant_id } = req.query;
    const rows = await getSubmissionHistory(participant_id ? String(participant_id) : null);
    return res.status(200).json({ count: rows.length, rows });
  } catch (err) {
    return res.status(500).json({
      error: "History retrieval failed",
      detail: err.message
    });
  }
};

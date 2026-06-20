function getResearcherKey() {
  return normalizeResearcherKey(process.env.RESEARCHER_KEY) || "Calmlearn2026";
}

function normalizeResearcherKey(value) {
  if (value === null || value === undefined) return "";
  return String(value).trim().replace(/^["']|["']$/g, "");
}

function requireResearcher(req, res) {
  const incoming = req.headers["x-researcher-key"];
  if (!incoming || normalizeResearcherKey(incoming) !== getResearcherKey()) {
    res.status(401).json({ error: "Unauthorized researcher access" });
    return false;
  }
  return true;
}

module.exports = { getResearcherKey, normalizeResearcherKey, requireResearcher };

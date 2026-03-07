function getResearcherKey() {
  return process.env.RESEARCHER_KEY || "calmlearn-research-key";
}

function requireResearcher(req, res) {
  const incoming = req.headers["x-researcher-key"];
  if (!incoming || incoming !== getResearcherKey()) {
    res.status(401).json({ error: "Unauthorized researcher access" });
    return false;
  }
  return true;
}

module.exports = { getResearcherKey, requireResearcher };
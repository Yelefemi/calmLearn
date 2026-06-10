const { getSubmissionByParticipant } = require("../../lib/postgres");

module.exports = async (req, res) => {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { participant_id } = req.query;
    if (!participant_id) {
      return res.status(400).json({ error: "participant_id is required" });
    }

    const submission = await getSubmissionByParticipant(String(participant_id));
    if (!submission) {
      return res.status(404).json({ error: "Participant not found" });
    }

    // Return relevant score data
    return res.status(200).json({
      participant_id: submission.participant_id,
      topic: submission.topic,
      age_range: submission.age_range,
      learning_style: submission.learning_style,
      textbook_score: submission.textbook_score,
      textbook_quiz_total: submission.textbook_quiz_total,
      textbook_quiz_time: submission.textbook_quiz_time,
      calm_score: submission.calm_score,
      calm_quiz_total: submission.calm_quiz_total,
      calm_quiz_time: submission.calm_quiz_time,
      baseline_stress: submission.baseline_stress,
      baseline_confidence: submission.baseline_confidence,
      textbook_post_stress: submission.textbook_post_stress,
      textbook_post_confidence: submission.textbook_post_confidence,
      calm_post_stress: submission.calm_post_stress,
      calm_post_confidence: submission.calm_post_confidence,
      created_at: submission.created_at
    });
  } catch (err) {
    return res.status(500).json({
      error: "Score retrieval failed",
      detail: err.message
    });
  }
};

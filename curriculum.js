const ageProfiles = [
  {
    id: "ages-5-7",
    label: "Ages 5-7",
    level: "foundation",
    depth: "simple words, familiar examples, and short practice tasks",
    learnerAction: "name the idea, spot it in an example, and explain it in one sentence"
  },
  {
    id: "ages-8-10",
    label: "Ages 8-10",
    level: "building",
    depth: "clear definitions, worked examples, and short explanations",
    learnerAction: "use the idea in a simple task and explain the reason for an answer"
  },
  {
    id: "ages-11-13",
    label: "Ages 11-13",
    level: "developing",
    depth: "linked ideas, evidence, vocabulary, and multi-step practice",
    learnerAction: "connect the idea to evidence, examples, and a second related concept"
  },
  {
    id: "ages-14-16",
    label: "Ages 14-16",
    level: "advanced",
    depth: "precise vocabulary, analysis, comparison, and exam-style reasoning",
    learnerAction: "apply the idea to unfamiliar situations and justify the answer"
  }
];

const subjectBlueprints = {
  english: {
    label: "English",
    references: [
      "Cambridge Dictionary grammar resources: https://dictionary.cambridge.org/grammar/british-grammar/",
      "Purdue OWL writing resources: https://owl.purdue.edu/owl/general_writing/"
    ],
    topics: [
      topicBlueprint("reading-comprehension", "Reading Comprehension", "finding meaning in a passage", [
        ["main idea", "the central message of a passage"],
        ["supporting detail", "a fact or example that explains the main idea"],
        ["inference", "a sensible conclusion based on clues"],
        ["context clue", "nearby words that help explain meaning"]
      ], "After reading a paragraph about rain, a learner can identify that the main idea is why rain matters, then use details about crops and drinking water as evidence."),
      topicBlueprint("grammar-basics", "Grammar Basics", "building clear and correct sentences", [
        ["subject", "who or what the sentence is about"],
        ["verb", "the action or state in the sentence"],
        ["punctuation", "marks that organize meaning"],
        ["agreement", "matching subjects and verbs correctly"]
      ], "The sentence 'The students read quietly.' is clear because it has a subject, a matching verb, and correct punctuation."),
      topicBlueprint("creative-writing", "Creative Writing", "planning and shaping original writing", [
        ["setting", "where and when a story happens"],
        ["character", "a person or figure in a story"],
        ["plot", "the order of events"],
        ["description", "details that help readers imagine an idea"]
      ], "A short story becomes stronger when the writer introduces a character, gives them a problem, and describes the setting clearly."),
      topicBlueprint("speaking-and-listening", "Speaking And Listening", "communicating ideas clearly with others", [
        ["audience", "the people receiving the message"],
        ["tone", "the feeling or attitude in speech"],
        ["active listening", "paying attention and responding thoughtfully"],
        ["evidence", "details used to support a spoken point"]
      ], "In a class discussion, a learner listens first, answers the question directly, and supports the answer with one clear reason.")
    ]
  },
  maths: {
    label: "Maths",
    references: [
      "Khan Academy math: https://www.khanacademy.org/math",
      "NRICH mathematics resources: https://nrich.maths.org/"
    ],
    topics: [
      topicBlueprint("number-skills", "Number Skills", "working confidently with numbers", [
        ["place value", "the value of a digit based on its position"],
        ["operation", "a calculation such as addition, subtraction, multiplication, or division"],
        ["estimation", "a quick reasonable answer"],
        ["pattern", "a repeated or predictable number rule"]
      ], "A learner can estimate 198 + 203 as about 400 before calculating the exact answer."),
      topicBlueprint("geometry-basics", "Geometry Basics", "understanding shapes, space, and measurement", [
        ["angle", "the amount of turn between two lines"],
        ["perimeter", "the distance around a shape"],
        ["area", "the space inside a flat shape"],
        ["property", "a feature that helps identify a shape"]
      ], "A rectangle with sides 6 cm and 4 cm has perimeter 20 cm because all four side lengths are added."),
      topicBlueprint("fractions-and-ratios", "Fractions And Ratios", "comparing parts and relationships", [
        ["fraction", "a part of a whole"],
        ["numerator", "the top number in a fraction"],
        ["denominator", "the bottom number showing equal parts"],
        ["ratio", "a comparison between quantities"]
      ], "If 3 out of 8 slices are eaten, the fraction eaten is 3/8 and the fraction left is 5/8."),
      topicBlueprint("data-and-probability", "Data And Probability", "using information to compare and predict", [
        ["data", "information collected for study"],
        ["bar chart", "a chart that compares amounts with bars"],
        ["probability", "how likely an event is"],
        ["trend", "a general pattern in data"]
      ], "A bar chart can show which fruit students prefer, while probability can describe how likely one choice is.")
    ]
  },
  science: {
    label: "Science",
    references: [
      "OpenStax Biology 2e: https://openstax.org/books/biology-2e/",
      "NASA Climate Kids: https://climatekids.nasa.gov/",
      "Khan Academy science: https://www.khanacademy.org/science"
    ],
    topics: [
      topicBlueprint("living-things", "Living Things", "how organisms survive and interact", [
        ["cell", "a basic unit of life"],
        ["habitat", "the place where an organism lives"],
        ["adaptation", "a feature that helps survival"],
        ["food chain", "a path showing how energy moves between organisms"]
      ], "A cactus has adaptations such as thick stems and spines that help it survive in dry habitats."),
      topicBlueprint("matter-and-energy", "Matter And Energy", "how materials and energy change", [
        ["matter", "anything that has mass and takes up space"],
        ["state", "a form of matter such as solid, liquid, or gas"],
        ["energy transfer", "energy moving from one place or object to another"],
        ["reaction", "a change that can form new substances"]
      ], "Ice melting into water is a change of state caused by heat energy entering the material."),
      topicBlueprint("earth-and-space", "Earth And Space", "Earth systems, weather, and objects in space", [
        ["rotation", "Earth spinning on its axis"],
        ["orbit", "the path of an object around another object"],
        ["weather", "short-term atmospheric conditions"],
        ["climate", "long-term patterns of weather"]
      ], "Day and night happen because Earth rotates, while seasons are linked to Earth's tilt and orbit."),
      topicBlueprint("photosynthesis", "Photosynthesis", "how plants make food using light", [
        ["chlorophyll", "the green pigment that captures light energy"],
        ["glucose", "a sugar that stores chemical energy"],
        ["carbon dioxide", "a gas plants use during photosynthesis"],
        ["oxygen", "a gas released as a by-product"]
      ], "Plants use light, water, and carbon dioxide to make glucose, then release oxygen into the air.")
    ]
  },
  social: {
    label: "Social Studies",
    references: [
      "National Geographic Education: https://education.nationalgeographic.org/",
      "UNICEF child rights resources: https://www.unicef.org/child-rights-convention"
    ],
    topics: [
      topicBlueprint("community-and-citizenship", "Community And Citizenship", "how people live and work together", [
        ["community", "a group of people connected by place or purpose"],
        ["responsibility", "a duty or action someone should take"],
        ["rule", "an agreed guide for behavior"],
        ["cooperation", "working together toward a goal"]
      ], "Keeping a classroom tidy is a shared responsibility because it helps everyone learn comfortably."),
      topicBlueprint("maps-and-places", "Maps And Places", "using maps to understand locations", [
        ["map key", "symbols that explain a map"],
        ["direction", "where something is, such as north or south"],
        ["landmark", "an important or easy-to-recognize place"],
        ["scale", "how map distance compares with real distance"]
      ], "A learner can use a map key and directions to find a library near a school."),
      topicBlueprint("culture-and-identity", "Culture And Identity", "how people express belonging and values", [
        ["culture", "shared ways of life, beliefs, and traditions"],
        ["identity", "how a person or group understands who they are"],
        ["tradition", "a practice passed from one generation to another"],
        ["respect", "treating people and differences with care"]
      ], "Food, language, music, and celebrations can all express culture and identity."),
      topicBlueprint("money-and-needs", "Money, Needs And Choices", "making thoughtful choices with limited resources", [
        ["need", "something important for living or learning"],
        ["want", "something people would like but may not require"],
        ["saving", "keeping money or resources for later"],
        ["budget", "a plan for using money or resources"]
      ], "A budget helps a learner choose between buying a needed notebook and a wanted toy.")
    ]
  },
  ict: {
    label: "ICT",
    references: [
      "BBC Bitesize computing: https://www.bbc.co.uk/bitesize/subjects/zvc9q6f",
      "Common Sense Education digital citizenship: https://www.commonsense.org/education/digital-citizenship"
    ],
    topics: [
      topicBlueprint("digital-safety", "Digital Safety", "using technology carefully and respectfully", [
        ["password", "a secret code that protects an account"],
        ["privacy", "control over personal information"],
        ["trusted adult", "a safe person who can help with online problems"],
        ["digital footprint", "the record left by online activity"]
      ], "A strong password and careful sharing help protect personal information online."),
      topicBlueprint("computer-basics", "Computer Basics", "understanding common devices and parts", [
        ["hardware", "the physical parts of a computer"],
        ["software", "programs or apps that run on a device"],
        ["input", "information sent into a computer"],
        ["output", "information produced by a computer"]
      ], "A keyboard is input hardware, while a screen shows output."),
      topicBlueprint("coding-logic", "Coding Logic", "giving clear instructions to solve problems", [
        ["algorithm", "a step-by-step set of instructions"],
        ["sequence", "steps in order"],
        ["loop", "instructions repeated more than once"],
        ["debugging", "finding and fixing mistakes"]
      ], "A recipe is like an algorithm because it gives steps in order to reach a result."),
      topicBlueprint("data-literacy", "Data Literacy", "collecting, organizing, and using information", [
        ["record", "one stored piece or row of information"],
        ["field", "a category of information"],
        ["sort", "putting data into an order"],
        ["filter", "showing only data that matches a rule"]
      ], "A class list can be sorted by name or filtered to show learners in one group.")
    ]
  }
};

function topicBlueprint(id, title, focus, concepts, example) {
  return { id, title, focus, concepts, example };
}

function optionQuestion(prompt, correct, distractors) {
  return { prompt, options: [correct, ...distractors], answer: "a" };
}

function buildQuestions(topic, subjectLabel, profile) {
  const [c1, c2, c3, c4] = topic.concepts;
  return [
    optionQuestion(`In ${topic.title}, what does "${c1[0]}" mean?`, c1[1], c2[1], "a random guess with no evidence"),
    optionQuestion(`Which idea best matches "${c2[0]}"?`, c2[1], c3[1], "a decoration that does not affect learning"),
    optionQuestion(`What is the role of "${c3[0]}" in ${topic.title}?`, c3[1], c4[1], "a rule that always removes examples"),
    optionQuestion(`Which statement correctly explains "${c4[0]}"?`, c4[1], c1[1], "an unrelated topic from another subject"),
    optionQuestion(`Which example fits ${topic.title}?`, topic.example, "Ignoring the main idea and choosing randomly.", "Using only the title without checking details."),
    optionQuestion(`What should a ${profile.label} learner do first when studying ${topic.title}?`, "Find the key idea before moving to details.", "Skip the explanation and start guessing.", "Choose the longest answer every time."),
    optionQuestion(`Why is ${topic.title} useful in ${subjectLabel}?`, `It helps learners understand ${topic.focus}.`, "It removes the need to practice.", "It only matters when using a timer."),
    optionQuestion(`Which study action supports ${topic.title}?`, `Use examples to practice ${topic.focus}.`, "Avoid all examples.", "Memorize unrelated words."),
    optionQuestion(`For ${profile.level} learners, what is the best target?`, profile.learnerAction, "finish quickly without checking meaning", "ignore feedback after a quiz"),
    optionQuestion(`Which answer shows strong understanding of ${topic.title}?`, "It uses the correct idea and gives a reason.", "It repeats one word without meaning.", "It avoids the question completely.")
  ];
}

function buildTopic(blueprint, subjectLabel, subjectReferences, profile) {
  const questions = buildQuestions(blueprint, subjectLabel, profile);
  return {
    id: blueprint.id,
    title: blueprint.title,
    summary: `${blueprint.title} focuses on ${blueprint.focus}. For ${profile.label}, this means using ${profile.depth}.`,
    focus: blueprint.focus,
    concepts: blueprint.concepts,
    example: blueprint.example,
    ageFocus: profile.learnerAction,
    questions,
    references: subjectReferences
  };
}

function buildSubjectsForAge(profile) {
  return Object.fromEntries(Object.entries(subjectBlueprints).map(([id, subject]) => [
    id,
    {
      label: subject.label,
      topics: subject.topics.map((topic) => buildTopic(topic, subject.label, subject.references, profile))
    }
  ]));
}

const curriculumData = ageProfiles.map((profile) => ({
  id: profile.id,
  label: profile.label,
  subjects: buildSubjectsForAge(profile)
}));

function toSubjectArray(subjectsObj) {
  return Object.entries(subjectsObj).map(([id, subject]) => ({ id, ...subject }));
}

function buildTextbookParagraphs(topic, subjectLabel, ageLabel) {
  const conceptText = topic.concepts.map(([term, meaning]) => `${term}: ${meaning}`).join("; ");
  return [
    `${topic.title} is part of ${subjectLabel} for ${ageLabel}. The lesson focuses on ${topic.focus}.`,
    `Key vocabulary: ${conceptText}. These words help learners discuss the topic clearly instead of guessing.`,
    `Example: ${topic.example}`,
    `Learning goal: ${topic.ageFocus}. Before the quiz, learners should summarize the topic, name two key ideas, and explain one example.`
  ];
}

function buildGuidedSteps(topic) {
  return [
    {
      heading: "Step 1: Key Idea",
      body: topic.summary,
      hint: "Start with the main idea before trying to remember details."
    },
    {
      heading: "Step 2: Vocabulary",
      body: `Important words include ${topic.concepts[0][0]}, ${topic.concepts[1][0]}, ${topic.concepts[2][0]}, and ${topic.concepts[3][0]}.`,
      hint: `Explain ${topic.concepts[0][0]} in your own words.`
    },
    {
      heading: "Step 3: Worked Example",
      body: topic.example,
      hint: "Connect the example to one key word from the lesson."
    },
    {
      heading: "Step 4: Review",
      body: `To show understanding, ${topic.ageFocus}.`,
      hint: "A short explanation with a reason is stronger than a memorized phrase."
    }
  ];
}

window.CalmLearnCurriculum = {
  getAgeGroups() {
    return curriculumData;
  },
  getAgeGroup(ageGroupId) {
    return curriculumData.find((g) => g.id === ageGroupId) || null;
  },
  getSubjects(ageGroupId) {
    const group = this.getAgeGroup(ageGroupId);
    return group ? toSubjectArray(group.subjects) : [];
  },
  getSubject(ageGroupId, subjectId) {
    const group = this.getAgeGroup(ageGroupId);
    if (!group) return null;
    const subject = group.subjects[subjectId];
    return subject ? { id: subjectId, ...subject } : null;
  },
  getTopic(ageGroupId, subjectId, topicId) {
    const subject = this.getSubject(ageGroupId, subjectId);
    return subject?.topics.find((t) => t.id === topicId) || null;
  },
  getRenderableTopic(ageGroupId, subjectId, topicId) {
    const ageGroup = this.getAgeGroup(ageGroupId);
    const subject = this.getSubject(ageGroupId, subjectId);
    const topic = this.getTopic(ageGroupId, subjectId, topicId);
    if (!ageGroup || !subject || !topic) return null;

    return {
      ...topic,
      subjectLabel: subject.label,
      ageLabel: ageGroup.label,
      textbookTitle: topic.title,
      textbookIntro: `${subject.label} topic for ${ageGroup.label}.`,
      textbookParagraphs: buildTextbookParagraphs(topic, subject.label, ageGroup.label),
      guidedSteps: buildGuidedSteps(topic),
      quizTitle: `${topic.title} Quiz`
    };
  },
  getActiveSelection() {
    const ageGroupId = localStorage.getItem("participantAgeGroup");
    const subjectId = localStorage.getItem("activeSubject");
    const topicId = localStorage.getItem("activeTopicId");
    return {
      ageGroupId,
      subjectId,
      topicId,
      ageGroup: this.getAgeGroup(ageGroupId),
      subject: this.getSubject(ageGroupId, subjectId),
      topic: this.getRenderableTopic(ageGroupId, subjectId, topicId)
    };
  }
};

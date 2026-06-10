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
  science: {
    label: "Science",
    references: [
      "OpenStax Biology 2e: https://openstax.org/books/biology-2e/",
      "NASA Climate Kids: https://climatekids.nasa.gov/",
      "Khan Academy science: https://www.khanacademy.org/science"
    ],
    topics: [
      topicBlueprint("photosynthesis", "Photosynthesis", "how plants convert sunlight into chemical energy and why that matters for food, oxygen, and solar fuels", [
        ["chlorophyll", "the green pigment that captures light energy"],
        ["glucose", "a sugar that stores chemical energy"],
        ["carbon dioxide", "a gas plants use during photosynthesis"],
        ["oxygen", "a gas released as a by-product"],
        ["light reactions", "the stage that captures light and makes ATP and NADPH"],
        ["Calvin cycle", "the stage that uses energy to build sugars from carbon dioxide"]
      ], "Plants use light, water, and carbon dioxide to make glucose, then release oxygen into the air.", [
        { prompt: "What is the main pigment plants use to capture light?", options: ["Chlorophyll", "Hemoglobin", "Keratin"], answer: "a" },
        { prompt: "Which gas do plants take in for photosynthesis?", options: ["Carbon dioxide", "Oxygen", "Nitrogen"], answer: "a" },
        { prompt: "Which gas is released as a by-product of photosynthesis?", options: ["Oxygen", "Carbon dioxide", "Methane"], answer: "a" },
        { prompt: "What simple sugar is produced by photosynthesis?", options: ["Glucose", "Fructose", "Lactose"], answer: "a" },
        { prompt: "Where in the plant cell does photosynthesis primarily occur?", options: ["Chloroplast", "Mitochondrion", "Nucleus"], answer: "a" },
        { prompt: "Which of the following is a raw material for photosynthesis?", options: ["Water", "Protein", "Salt"], answer: "a" },
        { prompt: "Photosynthesis consists of which two main stages?", options: ["Light reactions and Calvin cycle", "Glycolysis and Krebs cycle", "Transcription and translation"], answer: "a" },
        { prompt: "Which molecules are produced during the light reactions to fuel the Calvin cycle?", options: ["ATP and NADPH", "DNA and RNA", "ADP and FADH2"], answer: "a" },
        { prompt: "Stomata in leaves are important because they...", options: ["allow gas exchange", "produce chlorophyll", "transport water to roots"], answer: "a" },
        { prompt: "A limiting factor for photosynthesis can be...", options: ["light intensity", "shoe size", "hair color"], answer: "a" },
        { prompt: "The overall simplified equation for photosynthesis includes which products?", options: ["Glucose and oxygen", "Carbon dioxide and water", "Sucrose and nitrogen"], answer: "a" },
        { prompt: "Why is photosynthesis important for ecosystems?", options: ["It provides primary energy for food webs", "It removes all water from soil", "It creates fossil fuels directly"], answer: "a" },
        { prompt: "Which application links photosynthesis research to renewable energy?", options: ["Bioenergy and solar fuels", "Coal mining", "Plastic production"], answer: "a" },
        { prompt: "Which pigment family besides chlorophyll can absorb light?", options: ["Carotenoids", "Collagens", "Lignins"], answer: "a" },
        { prompt: "When light is limiting, plants may...", options: ["grow larger leaves to capture more light", "stop producing DNA", "turn into animals"], answer: "a" },
        { prompt: "Why do scientists study photosynthesis?", options: ["To improve crops and energy technologies", "To reduce the need for any sunlight", "To make plants stop growing"], answer: "a" }
      ])
    ]
  }
};

function topicBlueprint(id, title, focus, concepts, example, questions) {
  return { id, title, focus, concepts, example, questions: questions || [] };
}

function optionQuestion(prompt, correct, ...distractors) {
  const flatDistractors = distractors.flat();
  return { prompt, options: [correct, ...flatDistractors].slice(0, 3), answer: "a" };
}

function mathsQuestions(topic, profile) {
  const banks = {
    "counting-and-number-bonds": [
      ["What is 4 + 3?", "7", "6", "8"],
      ["Which number is less than 9?", "6", "12", "10"],
      ["Which pair makes 10?", "4 and 6", "3 and 8", "5 and 6"],
      ["There are 8 apples. 3 are eaten. How many are left?", "5", "4", "11"],
      ["What does a number bond show?", "Parts that make a total", "Only the biggest number", "A shape with corners"]
    ],
    "addition-and-subtraction": [
      ["12 + 5 = ?", "17", "15", "18"],
      ["14 - 6 = ?", "8", "7", "9"],
      ["Which story matches 10 - 4?", "10 balls, 4 taken away", "10 balls and 4 more added", "4 groups of 10 balls"],
      ["The difference between 9 and 5 is...", "4", "14", "3"],
      ["Which inverse checks 11 - 7 = 4?", "4 + 7 = 11", "11 + 7 = 18", "7 - 4 = 3"]
    ],
    "early-fractions": [
      ["One of two equal parts is called...", "a half", "a quarter", "a whole"],
      ["One of four equal parts is called...", "a quarter", "a half", "a side"],
      ["Which shows equal parts?", "A cake cut into 2 same-size pieces", "A cake cut into one big and one tiny piece", "A cake that is not cut"],
      ["If you eat 1 of 2 equal pieces, you ate...", "1/2", "2/1", "1/4"],
      ["What does whole mean?", "One complete object or group", "One tiny piece only", "A number bigger than 100"]
    ],
    "shapes-and-measures": [
      ["How many sides does a square have?", "4", "3", "5"],
      ["A corner is...", "where two sides meet", "the space inside a shape", "how heavy something is"],
      ["Which object is usually measured by length?", "A pencil", "A sound", "A smell"],
      ["A triangle has how many corners?", "3", "4", "2"],
      ["Which shape has 4 equal sides?", "Square", "Triangle", "Circle"]
    ],
    "place-value-and-operations": [
      ["In 346, what is the value of 3?", "300", "30", "3"],
      ["346 + 128 = ?", "474", "464", "484"],
      ["Which estimate is best for 198 + 203?", "about 400", "about 300", "about 500"],
      ["Which operation reverses multiplication?", "division", "addition", "subtraction"],
      ["72 - 29 is closest to...", "40", "20", "60"]
    ],
    "fractions-and-decimals": [
      ["What is 3/10 as a decimal?", "0.3", "3.0", "0.03"],
      ["In 5/8, the denominator is...", "8", "5", "13"],
      ["Which fraction is equivalent to 1/2?", "2/4", "1/4", "3/4"],
      ["Which is greater?", "3/4", "1/4", "1/8"],
      ["0.25 is the same as...", "1/4", "1/2", "3/4"]
    ],
    "multiplication-and-division": [
      ["6 x 7 = ?", "42", "36", "49"],
      ["48 divided by 6 = ?", "8", "6", "9"],
      ["Which number is a factor of 24?", "6", "5", "7"],
      ["What is the product of 9 and 4?", "36", "32", "13"],
      ["Which division checks 5 x 8 = 40?", "40 divided by 8 = 5", "40 divided by 5 = 9", "8 divided by 5 = 40"]
    ],
    "measurement-and-area": [
      ["Area of a rectangle with length 8 cm and width 3 cm is...", "24 cm2", "22 cm2", "11 cm2"],
      ["Perimeter means...", "distance around a shape", "space inside a shape", "weight of a shape"],
      ["Perimeter of a square with side 5 cm is...", "20 cm", "10 cm", "25 cm"],
      ["Which unit measures length?", "centimetre", "litre", "kilogram"],
      ["Area is measured in...", "square units", "degrees", "minutes"]
    ],
    "fractions-ratios-and-percentages": [
      ["Simplify 6/8.", "3/4", "2/8", "6/4"],
      ["3/4 as a percentage is...", "75%", "34%", "60%"],
      ["The ratio 2:3 has how many parts in total?", "5", "6", "1"],
      ["25% is the same as...", "1/4", "1/2", "3/4"],
      ["Which is equivalent to 0.5?", "50%", "5%", "15%"]
    ],
    "equations-and-unknowns": [
      ["Solve x + 7 = 19.", "x = 12", "x = 26", "x = 7"],
      ["Solve 3x = 21.", "x = 7", "x = 18", "x = 63"],
      ["What keeps an equation balanced?", "Doing the same operation to both sides", "Changing only the left side", "Removing the equals sign"],
      ["If y - 5 = 8, then y = ...", "13", "3", "40"],
      ["A solution is...", "a value that makes an equation true", "any letter in a question", "the largest number in the equation"]
    ],
    "expressions-and-formulae": [
      ["In P = 2l + 2w, if l = 5 and w = 3, P = ...", "16", "10", "13"],
      ["Which is an expression?", "3x + 4", "3x + 4 = 10", "x = 2"],
      ["Substitution means...", "replacing a letter with a given value", "removing every number", "guessing the answer"],
      ["If a = 4, what is 2a + 3?", "11", "9", "14"],
      ["A variable is...", "a letter or symbol that can change value", "only the final answer", "a drawing of a shape"]
    ],
    "data-and-probability": [
      ["Mean of 2, 4, 6, and 8 is...", "5", "4", "6"],
      ["Range of 3, 7, 9, and 12 is...", "9", "15", "4"],
      ["Probability describes...", "how likely an event is", "how long a ruler is", "how to spell a word"],
      ["A fair coin has probability of heads...", "1/2", "1/3", "2/1"],
      ["The sample space for rolling a normal die has...", "6 outcomes", "2 outcomes", "10 outcomes"]
    ],
    "algebraic-fractions-and-indices": [
      ["Simplify 6x/9.", "2x/3", "6/9x", "3x/2"],
      ["x2 x x3 equals...", "x5", "x6", "x1"],
      ["Factorise 6x + 9.", "3(2x + 3)", "6(x + 9)", "9(6x + 1)"],
      ["A common factor of 8x and 12 is...", "4", "5", "8x + 12"],
      ["An index shows...", "repeated multiplication", "only subtraction", "a decimal place"]
    ],
    "linear-and-simultaneous-equations": [
      ["Solve 2x + 3 = 15.", "x = 6", "x = 9", "x = 5"],
      ["In 7x, the coefficient is...", "7", "x", "7x"],
      ["If x + y = 10 and x = 4, y = ...", "6", "14", "4"],
      ["Elimination in simultaneous equations means...", "removing one unknown to solve", "removing all numbers", "choosing the largest coefficient"],
      ["A linear equation has highest power...", "1", "2", "0"]
    ],
    "subject-of-formula": [
      ["Make w the subject of A = lw.", "w = A/l", "w = Al", "w = l/A"],
      ["Make x the subject of y = x + 5.", "x = y - 5", "x = y + 5", "x = 5 - y"],
      ["Make r the subject of C = 2r.", "r = C/2", "r = 2C", "r = C + 2"],
      ["To isolate a variable means...", "make it stand alone", "hide it inside brackets", "replace it with zero"],
      ["The inverse operation of multiplying by 4 is...", "dividing by 4", "adding 4", "subtracting 4"]
    ],
    "quadratics-and-graphs": [
      ["The roots of x2 - 5x + 6 are...", "2 and 3", "1 and 6", "-2 and -3"],
      ["A quadratic has highest power...", "2", "1", "3"],
      ["The gradient describes...", "steepness of a line", "where a graph begins", "the area under a shape"],
      ["An intercept is where a graph...", "crosses an axis", "has no values", "turns into a table"],
      ["Factorise x2 + 5x + 6.", "(x + 2)(x + 3)", "(x + 1)(x + 6)", "(x - 2)(x - 3)"]
    ]
  };

  const topicQuestions = banks[topic.id];
  if (!topicQuestions) return null;

  return [
    ...topicQuestions.map(([prompt, correct, ...distractors]) => optionQuestion(prompt, correct, distractors)),
    optionQuestion(`Which definition matches "${topic.concepts[0][0]}"?`, topic.concepts[0][1], topic.concepts[1][1], "a step that ignores the numbers"),
    optionQuestion(`Which example fits ${topic.title}?`, topic.example, "Changing the numbers without using a rule.", "Choosing an answer before reading the question."),
    optionQuestion(`What should you check before choosing an answer in ${topic.title}?`, "The operation, units, and whether the result is reasonable.", "Only whether the answer is the longest option.", "Only whether the question has a familiar word."),
    optionQuestion(`For ${profile.label}, what is a strong way to study ${topic.title}?`, profile.learnerAction, "finish quickly without checking", "choose the longest answer"),
    optionQuestion(`Why is ${topic.title} useful in Maths?`, `It helps learners understand ${topic.focus}.`, "It removes the need to show working.", "It only matters when using a timer.")
  ];
}

function buildQuestions(topic, subjectLabel, profile) {
  if (subjectLabel === "Maths") {
    const questions = mathsQuestions(topic, profile);
    if (questions) return questions;
  }

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
  const questions = (blueprint.questions && blueprint.questions.length) ? blueprint.questions : buildQuestions(blueprint, subjectLabel, profile);
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
      topics: (subject.topicsByAge?.[profile.id] || subject.topics).map((topic) => buildTopic(topic, subject.label, subject.references, profile))
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
  if (topic.id === "photosynthesis") {
    return [
      `Photosynthesis is the process by which plants capture sunlight and convert it into chemical energy stored in sugar. For ${ageLabel}, this topic connects biology, agriculture, and energy research in ${subjectLabel}.`,
      "Chlorophyll in the chloroplast absorbs light energy. Water supplies electrons and hydrogen, while carbon dioxide supplies the carbon used to build glucose.",
      "The light reactions make ATP and NADPH and release oxygen. The Calvin cycle uses ATP and NADPH to fix carbon dioxide into sugars.",
      "Scientists study photosynthesis because the process supports crop growth, food production, fuel production, and new ideas for artificial solar energy systems."
    ];
  }
  const conceptText = topic.concepts.map(([term, meaning]) => `${term}: ${meaning}`).join("; ");
  return [
    `${topic.title} is part of ${subjectLabel} for ${ageLabel}. The lesson focuses on ${topic.focus}.`,
    `Key vocabulary: ${conceptText}. These words help learners discuss the topic clearly instead of guessing.`,
    `Example: ${topic.example}`,
    `Learning goal: ${topic.ageFocus}. Before the quiz, learners should summarize the topic, name two key ideas, and explain one example.`
  ];
}

function buildGuidedSteps(topic) {
  if (topic.id === "photosynthesis") {
    return [
      {
        heading: "Step 1: Big Idea",
        body: "Photosynthesis lets plants capture light and turn it into chemical energy stored in sugar.",
        hint: "Say it as: light in, sugar out."
      },
      {
        heading: "Step 2: Main Ingredients",
        body: "Chlorophyll captures light, water provides material for the reaction, and carbon dioxide supplies carbon.",
        hint: "Match each ingredient to its job."
      },
      {
        heading: "Step 3: Two Stages",
        body: "The light reactions make ATP and NADPH and release oxygen, while the Calvin cycle uses that energy to build glucose.",
        hint: "One stage captures energy; the other builds sugar."
      },
      {
        heading: "Step 4: Why Scientists Care",
        body: "Researchers study photosynthesis to improve crop yields, support bioenergy, and design solar fuel technology.",
        hint: "Link the biology to food and energy."
      }
    ];
  }
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
      quizTitle: `${topic.title} Quiz`,
      noteHighlights: topic.id === "photosynthesis" ? [
        "Light energy is captured by chlorophyll.",
        "Water and carbon dioxide are the main inputs.",
        "ATP and NADPH power sugar building.",
        "Glucose stores chemical energy.",
        "Oxygen is released during the process.",
        "Scientists study photosynthesis for crops and solar fuels."
      ] : []
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

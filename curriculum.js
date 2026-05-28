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
    topicsByAge: {
      "ages-5-7": [
        topicBlueprint("counting-and-number-bonds", "Counting And Number Bonds", "counting, comparing, and making small totals", [
          ["counting", "saying numbers in the correct order"],
          ["number bond", "two numbers that join to make a total"],
          ["more than", "a number or amount that is bigger"],
          ["less than", "a number or amount that is smaller"]
        ], "If 4 counters and 3 counters are put together, the total is 7. So 4 and 3 are a number bond for 7."),
        topicBlueprint("addition-and-subtraction", "Addition And Subtraction", "joining groups and finding what is left", [
          ["addition", "putting groups together to find a total"],
          ["subtraction", "taking away or finding the difference"],
          ["total", "the whole amount after adding"],
          ["difference", "how much one number is greater or smaller than another"]
        ], "There are 9 pencils. If 4 pencils are used, 5 pencils are left because 9 - 4 = 5."),
        topicBlueprint("early-fractions", "Early Fractions", "seeing halves and quarters as equal parts", [
          ["whole", "one complete object or group"],
          ["half", "one of two equal parts"],
          ["quarter", "one of four equal parts"],
          ["equal parts", "parts that are the same size"]
        ], "A sandwich cut into 2 equal pieces has 2 halves. One piece is 1/2 of the sandwich."),
        topicBlueprint("shapes-and-measures", "Shapes And Measures", "naming shapes and comparing simple measurements", [
          ["shape", "the form or outline of an object"],
          ["side", "a straight edge of a flat shape"],
          ["corner", "a point where two sides meet"],
          ["length", "how long something is"]
        ], "A square has 4 equal sides and 4 corners.")
      ],
      "ages-8-10": [
        topicBlueprint("place-value-and-operations", "Place Value And Operations", "using place value to calculate accurately", [
          ["place value", "the value of a digit based on its position"],
          ["operation", "a calculation such as addition, subtraction, multiplication, or division"],
          ["estimate", "a quick reasonable answer"],
          ["inverse operation", "an operation that reverses another operation"]
        ], "346 + 128 = 474. An estimate is 350 + 130 = 480, so 474 is reasonable."),
        topicBlueprint("fractions-and-decimals", "Fractions And Decimals", "comparing parts of a whole", [
          ["fraction", "a number that shows equal parts of a whole"],
          ["numerator", "the top number showing selected parts"],
          ["denominator", "the bottom number showing total equal parts"],
          ["decimal", "a number written with a decimal point to show parts of one"]
        ], "3/10 is the same as 0.3 because both mean three tenths."),
        topicBlueprint("multiplication-and-division", "Multiplication And Division", "using equal groups and sharing", [
          ["multiple", "a number in a times table"],
          ["factor", "a whole number that divides exactly into another number"],
          ["product", "the answer to a multiplication"],
          ["quotient", "the answer to a division"]
        ], "6 x 7 = 42, so 42 is the product and both 6 and 7 are factors of 42."),
        topicBlueprint("measurement-and-area", "Measurement And Area", "measuring length, perimeter, and space inside shapes", [
          ["unit", "a standard amount used for measuring"],
          ["perimeter", "the distance around a shape"],
          ["area", "the space inside a flat shape"],
          ["scale", "a rule showing how a drawing compares with real size"]
        ], "A rectangle with length 8 cm and width 3 cm has area 24 cm2 because 8 x 3 = 24.")
      ],
      "ages-11-13": [
        topicBlueprint("fractions-ratios-and-percentages", "Fractions, Ratios And Percentages", "converting and comparing proportional amounts", [
          ["equivalent fraction", "a fraction with the same value as another fraction"],
          ["ratio", "a comparison between quantities"],
          ["percentage", "a number out of 100"],
          ["simplify", "write a number or expression in an easier equivalent form"]
        ], "6/8 simplifies to 3/4. As a percentage, 3/4 is 75%."),
        topicBlueprint("equations-and-unknowns", "Equations And Unknowns", "finding missing values while keeping both sides equal", [
          ["equation", "a statement that two expressions are equal"],
          ["unknown", "a value represented by a letter or symbol"],
          ["balance", "keeping both sides of an equation equal"],
          ["solution", "the value that makes an equation true"]
        ], "If x + 7 = 19, then x = 12 because 12 + 7 = 19."),
        topicBlueprint("expressions-and-formulae", "Expressions And Formulae", "using letters and rules to represent calculations", [
          ["expression", "numbers, letters, and operations without an equals sign"],
          ["formula", "a rule written with letters and symbols"],
          ["substitution", "replacing a letter with a given value"],
          ["variable", "a letter or symbol that can change value"]
        ], "In the formula P = 2l + 2w, if l = 5 and w = 3, then P = 16."),
        topicBlueprint("data-and-probability", "Data And Probability", "summarizing information and describing chance", [
          ["mean", "the total of values divided by how many values there are"],
          ["range", "the difference between the largest and smallest values"],
          ["probability", "how likely an event is"],
          ["sample space", "the list of all possible outcomes"]
        ], "For scores 2, 4, 6, and 8, the mean is 5 because 20 divided by 4 is 5.")
      ],
      "ages-14-16": [
        topicBlueprint("algebraic-fractions-and-indices", "Algebraic Fractions And Indices", "simplifying fractions, powers, and algebraic terms", [
          ["algebraic fraction", "a fraction that contains letters or algebraic expressions"],
          ["index", "a power that shows repeated multiplication"],
          ["factorise", "write an expression as a product of factors"],
          ["common factor", "a factor shared by two or more terms"]
        ], "6x/9 simplifies to 2x/3 because both 6 and 9 divide by 3."),
        topicBlueprint("linear-and-simultaneous-equations", "Linear And Simultaneous Equations", "solving equations with one or more unknowns", [
          ["linear equation", "an equation where the highest power of the unknown is 1"],
          ["coefficient", "a number multiplying a variable"],
          ["simultaneous equations", "two or more equations solved together"],
          ["elimination", "removing one unknown to solve simultaneous equations"]
        ], "For 2x + 3 = 15, x = 6 because 2 x 6 + 3 = 15."),
        topicBlueprint("subject-of-formula", "Subject Of Formula", "rearranging formulae so a chosen variable stands alone", [
          ["subject", "the variable that is written alone on one side of a formula"],
          ["rearrange", "change the form of a formula while keeping it equivalent"],
          ["inverse operation", "an operation that reverses another operation"],
          ["isolate", "make one variable stand alone"]
        ], "If A = lw, then w = A/l because dividing both sides by l isolates w."),
        topicBlueprint("quadratics-and-graphs", "Quadratics And Graphs", "linking algebraic equations with their graphs", [
          ["quadratic", "an expression or equation where the highest power is 2"],
          ["root", "a value that makes an expression equal zero"],
          ["gradient", "the steepness of a line"],
          ["intercept", "where a graph crosses an axis"]
        ], "The roots of x2 - 5x + 6 are x = 2 and x = 3 because (x - 2)(x - 3) = 0.")
      ]
    }
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

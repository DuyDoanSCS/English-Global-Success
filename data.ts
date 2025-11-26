import { Unit } from './types';

export const textbookData: Unit[] = [
  {
    id: 1,
    title: "Unit 1",
    topic: "Family Life",
    vocabulary: [
      {
        word: "breadwinner",
        type: "noun",
        pronunciation: "/'bredwɪnə(r)/",
        meaning: "Người trụ cột đi làm nuôi gia đình (a person who earns money to support their family)",
        example: "In many families, the father is the main breadwinner.",
        synonyms: ["provider", "earner"]
      },
      {
        word: "homemaker",
        type: "noun",
        pronunciation: "/'həʊmmeɪkə(r)/",
        meaning: "Người nội trợ (a person who manages a home)",
        example: "My mother is a homemaker; she manages the home and raises the children.",
        synonyms: ["housewife", "househusband"]
      },
      {
        word: "groceries",
        type: "noun",
        pronunciation: "/'grəʊsəriz/",
        meaning: "Thực phẩm và tạp hóa",
        example: "Mum usually shops for groceries on weekends."
      },
      {
        word: "housework",
        type: "noun",
        pronunciation: "/'haʊswɜːk/",
        meaning: "Việc nhà (cleaning, cooking, washing, etc.)",
        example: "We split the housework equally among family members.",
        synonyms: ["chores", "household tasks"]
      },
      {
        word: "heavy lifting",
        type: "noun phrase",
        pronunciation: "/ˌhevi ˈlɪftɪŋ/",
        meaning: "Công việc nặng nhọc (mang vác)",
        example: "My dad does the heavy lifting like moving furniture and repairing things."
      },
      {
        word: "laundry",
        type: "noun",
        pronunciation: "/'lɔːndri/",
        meaning: "Quần áo cần giặt hoặc đã giặt",
        example: "My sister does the laundry every evening."
      },
      {
        word: "responsibility",
        type: "noun",
        pronunciation: "/rɪˌspɒnsəˈbɪləti/",
        meaning: "Trách nhiệm",
        example: "Sharing housework teaches children to take responsibility."
      },
      {
        word: "gratitude",
        type: "noun",
        pronunciation: "/ˈɡrætɪtjuːd/",
        meaning: "Lòng biết ơn",
        example: "Doing chores helps develop children's gratitude to their parents."
      },
      {
        word: "strengthen",
        type: "verb",
        pronunciation: "/ˈstreŋθn/",
        meaning: "Làm mạnh thêm, củng cố",
        example: "Doing chores together helps strengthen family bonds."
      }
    ],
    grammar: [
      {
        title: "Present Simple (Hiện tại đơn)",
        description: "Talk about habits, daily routines, or permanent truths.",
        usage: [
          { situation: "Habits/Routines", example: "My mother cooks every day." },
          { situation: "General Truths", example: "The sun rises in the East." }
        ],
        structure: "S + V(s/es)",
        signalWords: ["always", "usually", "often", "sometimes", "never", "every day"],
        note: "Use distinct from actions happening right now."
      },
      {
        title: "Present Continuous (Hiện tại tiếp diễn)",
        description: "Talk about actions happening at the moment of speaking.",
        usage: [
          { situation: "Happening now", example: "She isn't cooking now. She's working." },
          { situation: "Temporary actions", example: "I am staying with my aunt this week." }
        ],
        structure: "S + am/is/are + V-ing",
        signalWords: ["now", "at the moment", "at present", "today", "Look!", "Listen!"],
        note: "Don't use with stative verbs (like, love, need, want, know, agree)."
      }
    ],
    exercises: [
      {
        id: 1,
        title: "Pronunciation: /br/, /kr/, and /tr/",
        category: "Pronunciation",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            question: "Choose the word containing the sound /br/",
            options: ["crash", "brush", "train", "crane"],
            answer: "brush",
            explanation: "/br/ is found in 'brush', 'breadwinner', 'brown'."
          },
          {
            id: 2,
            question: "Choose the word containing the sound /kr/",
            options: ["track", "create", "brick", "treat"],
            answer: "create",
            explanation: "/kr/ is found in 'create', 'crash', 'cream'."
          },
           {
            id: 3,
            question: "Choose the word containing the sound /tr/",
            options: ["bread", "crash", "train", "cream"],
            answer: "train",
            explanation: "/tr/ is found in 'train', 'track', 'tree'."
          },
          {
            id: 4,
            question: "Identify the sound in the underlined part: 'BREADwinner'",
            options: ["/br/", "/kr/", "/tr/", "/gr/"],
            answer: "/br/",
            explanation: "Bread starts with /br/."
          },
          {
            id: 5,
            question: "Identify the word with a different starting sound.",
            options: ["train", "track", "tree", "crash"],
            answer: "crash",
            explanation: "Train, track, tree start with /tr/. Crash starts with /kr/."
          }
        ]
      },
      {
        id: 2,
        title: "Vocabulary: Multiple Choice",
        category: "Vocabulary",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            question: "My mother is a ______. She doesn't go to work, but stays at home to look after the family.",
            options: ["breadwinner", "homemaker", "doctor", "teacher"],
            answer: "homemaker",
            explanation: "Homemaker fits the context of staying home to care for the family."
          },
          {
            id: 2,
            question: "Mr. Lewis is the ______ of the family, but he still helps his wife with the housework.",
            options: ["homemaker", "breadwinner", "child", "supporter"],
            answer: "breadwinner",
            explanation: "Breadwinner refers to the person earning the primary income."
          },
          {
            id: 3,
            question: "Doing chores also helps develop children's ______ to their parents.",
            options: ["gratitude", "attitude", "anger", "boredom"],
            answer: "gratitude",
            explanation: "Gratitude (lòng biết ơn) is developed by appreciating parents' hard work."
          },
          {
            id: 4,
            question: "My dad usually does the ______ lifting like moving furniture.",
            options: ["strong", "hard", "heavy", "huge"],
            answer: "heavy",
            explanation: "Collocation: 'heavy lifting'."
          },
          {
            id: 5,
            question: "We divide the household ______ equally in our family.",
            options: ["jobs", "chores", "works", "employment"],
            answer: "chores",
            explanation: "Household chores implies domestic tasks."
          }
        ]
      },
      {
        id: 3,
        title: "Grammar: Present Simple vs Continuous",
        category: "Grammar",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            question: "Mrs Lan usually ______ (do) the cooking in her family.",
            options: ["does", "is doing", "did", "doing"],
            answer: "does",
            explanation: "'Usually' indicates a habit -> Present Simple."
          },
          {
            id: 2,
            question: "I'm afraid he can't answer the phone now. He ______ (put out) the rubbish.",
            options: ["puts out", "is putting out", "put out", "putting out"],
            answer: "is putting out",
            explanation: "'Now' and 'can't answer' indicate an action happening right now -> Present Continuous."
          },
          {
            id: 3,
            question: "My sister ______ (study) for her exams at the moment.",
            options: ["studies", "studied", "is studying", "studying"],
            answer: "is studying",
            explanation: "'At the moment' -> Present Continuous."
          },
          {
            id: 4,
            question: "Look! The sun ______ (shine) brightly.",
            options: ["shines", "is shining", "shone", "shining"],
            answer: "is shining",
            explanation: "'Look!' is a signal for something happening right now."
          },
          {
            id: 5,
            question: "He ______ (not / like) eating vegetables.",
            options: ["doesn't like", "isn't liking", "don't like", "not like"],
            answer: "doesn't like",
            explanation: "'Like' is a stative verb and usually takes Simple Present."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Unit 2",
    topic: "Humans and the Environment",
    vocabulary: [
      {
        word: "carbon footprint",
        type: "noun",
        pronunciation: "/ˌkɑːbən ˈfʊtprɪnt/",
        meaning: "Lượng khí thải carbon (amount of CO2 produced)",
        example: "We should try to reduce our carbon footprint by using public transport.",
        synonyms: ["CO2 emissions"]
      },
      {
        word: "eco-friendly",
        type: "adjective",
        pronunciation: "/ˌiːkəʊ ˈfrendli/",
        meaning: "Thân thiện với môi trường",
        example: "I use eco-friendly bags when shopping instead of plastic ones.",
        synonyms: ["environmentally friendly", "green"]
      },
      {
        word: "sustainable",
        type: "adjective",
        pronunciation: "/səˈsteɪnəbl/",
        meaning: "Bền vững, không gây hại lâu dài cho môi trường",
        example: "Sustainable lifestyle is a choice we make to change to a greener life.",
        antonyms: ["unsustainable"]
      },
      {
        word: "organic",
        type: "adjective",
        pronunciation: "/ɔːˈɡænɪk/",
        meaning: "Hữu cơ (không dùng hóa chất nhân tạo)",
        example: "Buying organic food is better for our health."
      },
      {
        word: "litter",
        type: "noun/verb",
        pronunciation: "/'lɪtə(r)/",
        meaning: "Rác rưởi / Xả rác",
        example: "Please do not drop litter in the park."
      },
      {
        word: "household appliances",
        type: "noun phrase",
        pronunciation: "/ˌhaʊshəʊld əˈplaɪənsɪz/",
        meaning: "Thiết bị gia dụng (fridges, TVs, etc.)",
        example: "Modern household appliances save a lot of energy."
      }
    ],
    grammar: [
      {
        title: "Passive Voice (Câu bị động)",
        description: "Used when the focus is on the action or the object, not the doer.",
        structure: "Be + Past Participle (V3/ed)",
        usage: [
          { situation: "Unknown doer", example: "The school playground is cleaned up every day." },
          { situation: "Action is more important", example: "A green lifestyle is adopted by more people." }
        ],
        note: "Active: Subject + Verb + Object -> Passive: Object + Be + V3 + (by Subject)"
      },
      {
        title: "Future with 'will' and 'be going to'",
        description: "Talking about future actions.",
        usage: [
          { situation: "Will: Predictions (belief)", example: "I think our team will win." },
          { situation: "Will: Instant decisions", example: "This shirt looks beautiful. I will buy it." },
          { situation: "Be going to: Plans", example: "I have a reservation. We are going to have dinner." },
          { situation: "Be going to: Predictions (evidence)", example: "Look at the dark clouds. It is going to rain." }
        ],
        signalWords: ["tomorrow", "next week", "in the future"]
      }
    ],
    exercises: [
      {
        id: 1,
        title: "Pronunciation: /kl/, /pl/, /gr/, /pr/",
        category: "Pronunciation",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            question: "Which sound group does 'clean' belong to?",
            options: ["/kl/", "/pl/", "/gr/", "/pr/"],
            answer: "/kl/",
            explanation: "'Clean', 'club', 'class' contain /kl/."
          },
          {
            id: 2,
            question: "Which sound group does 'green' belong to?",
            options: ["/kl/", "/pl/", "/gr/", "/pr/"],
            answer: "/gr/",
            explanation: "'Green', 'group', 'ground' contain /gr/."
          },
          {
            id: 3,
            question: "Identify the word starting with /pl/.",
            options: ["please", "class", "grass", "price"],
            answer: "please",
            explanation: "/pl/ is in 'please'."
          },
          {
            id: 4,
            question: "Which word has a different blend?",
            options: ["present", "practice", "protect", "place"],
            answer: "place",
            explanation: "Place starts with /pl/, others with /pr/."
          }
        ]
      },
      {
        id: 2,
        title: "Grammar: Passive Voice Transformation",
        category: "Grammar",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            question: "Change to Passive: 'The students cleaned up the school playground.'",
            options: [
              "The school playground cleaned up by the students.",
              "The school playground was cleaned up by the students.",
              "The school playground is cleaned up by the students.",
              "The school playground were cleaned up by the students."
            ],
            answer: "The school playground was cleaned up by the students.",
            explanation: "Original is Past Simple -> Passive uses 'was/were + V3'. Playground is singular -> 'was'."
          },
          {
            id: 2,
            question: "Change to Passive: 'More people adopt a green lifestyle.'",
            options: [
               "A green lifestyle is adopted by more people.",
               "A green lifestyle was adopted by more people.",
               "A green lifestyle adopted by more people.",
               "A green lifestyle are adopted by more people."
            ],
            answer: "A green lifestyle is adopted by more people.",
            explanation: "Original is Present Simple -> Passive uses 'am/is/are + V3'."
          },
          {
            id: 3,
            question: "Change to Passive: 'They will plant trees tomorrow.'",
            options: [
              "Trees will planted tomorrow.",
              "Trees will be planted tomorrow.",
              "Trees are planted tomorrow.",
              "Trees were planted tomorrow."
            ],
            answer: "Trees will be planted tomorrow.",
            explanation: "Future 'will' -> Passive 'will be + V3'."
          },
          {
            id: 4,
            question: "The rubbish ______ every day.",
            options: ["collect", "collects", "is collected", "are collected"],
            answer: "is collected",
            explanation: "Passive Present Simple. Rubbish is uncountable (singular) -> 'is collected'."
          }
        ]
      },
      {
        id: 3,
        title: "Grammar: Will vs Be Going To",
        category: "Grammar",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            question: "Look at the sun! It ______ (be) a beautiful day.",
            options: ["will be", "is going to be", "is being", "was"],
            answer: "is going to be",
            explanation: "Prediction based on evidence (Look at the sun) -> be going to."
          },
          {
            id: 2,
            question: "I don't think she ______ (come) tonight. She has to revise for her exam.",
            options: ["will come", "is coming", "is going to come", "comes"],
            answer: "will come",
            explanation: "Prediction based on opinion (I don't think) -> will."
          },
          {
            id: 3,
            question: "I have bought a ticket. I ______ (visit) my grandmother next week.",
            options: ["visit", "will visit", "am going to visit", "visited"],
            answer: "am going to visit",
            explanation: "A plan/arrangement made beforehand -> be going to."
          },
          {
            id: 4,
            question: "The phone is ringing. - OK, I ______ (answer) it.",
            options: ["answer", "will answer", "am going to answer", "am answering"],
            answer: "will answer",
            explanation: "Instant decision at the moment of speaking -> will."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Unit 3",
    topic: "Music",
    vocabulary: [
      {
        word: "talent",
        type: "noun",
        pronunciation: "/ˈtælənt/",
        meaning: "Tài năng",
        example: "She has a great talent for singing."
      }
    ],
    grammar: [],
    exercises: [
        {
        id: 1,
        title: "Sample Exercise",
        category: "Vocabulary",
        type: "multiple-choice",
        questions: [
            {
                id: 1,
                question: "Sample Question",
                options: ["A", "B"],
                answer: "A",
                explanation: "Test"
            }
        ]
        }
    ]
  },
  {
    id: 4,
    title: "Unit 4",
    topic: "For a Better Community",
    vocabulary: [],
    grammar: [],
    exercises: []
  },
  {
    id: 5,
    title: "Unit 5",
    topic: "Inventions",
    vocabulary: [],
    grammar: [],
    exercises: []
  }
];
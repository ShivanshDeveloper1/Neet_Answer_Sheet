
// data/PalmData.ts

export type PalmData = {
  title: string;
  description?: string;

  tags?: string[];

  content?: {
    label: string;
    value: string;
  }[];

  faq?: {
    question: string;
    answer: string;
  }[];
};

export const PalmData: PalmData[] = [
  {
    title: "What is Palmistry?",

    tags: ["Palmistry", "Symbolic Reading"],

    description:
      "Palmistry is a symbolic reading tradition that looks at hand lines, shape, and visible patterns to reflect personality traits and life themes. It is meant as guidance and reflection rather than fixed prediction.",
  },

  {
    title: "Major Lines And What They Indicate",

    description:
      "A palm reading usually starts with the major visible lines and their depth, continuity, and shape.",

    content: [
      {
        label: "Life Line",
        value:
          "Traditionally associated with energy, lifestyle rhythm, and major life phases.",
      },

      {
        label: "Head Line",
        value:
          "Often interpreted as symbolic of thinking style and decision patterns.",
      },

      {
        label: "Heart Line",
        value:
          "Linked symbolically with emotions, relationships, and expression.",
      },

      {
        label: "Fate Line",
        value:
          "Traditionally connected with direction, goals, and life structure.",
      },
    ],
  },

  {
    title: "Frequently Asked Questions",

    faq: [
      {
        question:
          "Can one photo predict my full future?",

        answer:
          "No. A palm reading should be treated as symbolic guidance and reflection rather than fixed destiny.",
      },

      {
        question:
          "Which palm should I upload?",

        answer:
          "Upload your active hand in clear light with the full palm visible.",
      },

      {
        question:
          "Do I need high image quality?",

        answer:
          "Clear lighting and visible lines generally create a better reading experience.",
      },
    ],
  },
];

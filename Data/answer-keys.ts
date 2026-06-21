export type AnswerKeySet = {
  name: string;
  url: string | null; // Allows tracking unavailable PDFs cleanly
};

export type AnswerKey = {
  slug: string;
  subject: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  highlights: string[];
  sets: AnswerKeySet[]; // Added this so TypeScript passes successfully!
};

export const answerKeys: AnswerKey[] = [
  {
    slug: 're-neet-2026-physics-answer-key',
    title: 'Physics',
    description:
      'Download the complete PDF of the 21 July 2026 Re-NEET Physics paper answer key with detailed solutions.',
    thumbnail: '/Physics_thumb.png',
    longDescription:
      'Get the complete Physics answer key analysis for the 21 July 2026 Re-NEET examination. This PDF includes correct answers, important concepts, chapter-wise analysis, and detailed explanations to help students review their performance.',
    subject: 'Physics',
    highlights: [
      'Complete Physics Answer Key',
      'Detailed Solutions',
      'Chapter-wise Analysis',
      'Important Concepts Review',
    ],
    sets: [
      { name: 'Set A', url: null }, // Clean null instead of "null" string
      { name: 'Set B', url: null },
      { name: 'Set C', url: '/pdf/physics-set-c.pdf' },
      { name: 'Set D', url: '/pdf/physics-set-d.pdf' },
    ],
  },
  {
    slug: 're-neet-2026-chemistry-answer-key',
    title: 'Chemistry',
    description:
      'Download the complete PDF of the 21 July 2026 Re-NEET Chemistry paper answer key with detailed solutions.',
    thumbnail: '/Chemistry_thumb.png',
    longDescription:
      'Access the Chemistry answer key PDF for the 21 July 2026 Re-NEET exam. Analyze your answers with detailed explanations, important reactions, formulas, and topic-wise performance insights.',
    subject: 'Chemistry',
    highlights: [
      'Complete Chemistry Answer Key',
      'Reaction & Formula Analysis',
      'Detailed Explanations',
      'Topic-wise Review',
    ],
    sets: [
      { name: 'Set A', url: '/pdf/chemistry-set-a.pdf' },
      { name: 'Set B', url: '/pdf/chemistry-set-b.pdf' },
      { name: 'Set C', url: '/pdf/chemistry-set-c.pdf' },
      { name: 'Set D', url: '/pdf/chemistry-set-d.pdf' },
    ],
  },
  {
    slug: 're-neet-2026-biology-answer-key',
    title: 'Biology',
    description:
      'Download the complete PDF of the 21 July 2026 Re-NEET Biology paper answer key with detailed solutions.',
    thumbnail: '/Biology_thumbna.jpg',
    longDescription:
      'Review the Biology answer key of the 21 July 2026 Re-NEET examination. Get detailed solutions, important diagrams, NCERT-based analysis, and performance insights for better preparation.',
    subject: 'Biology',
    highlights: [
      'Complete Biology Answer Key',
      'NCERT Based Analysis',
      'Important Diagrams',
      'Performance Insights',
    ],
    sets: [
      { name: 'Set A', url: '/pdf/biology-set-a.pdf' },
      { name: 'Set B', url: '/pdf/biology-set-b.pdf' },
      { name: 'Set C', url: '/pdf/biology-set-c.pdf' },
      { name: 'Set D', url: '/pdf/biology-set-d.pdf' },
    ],
  },
];

export function getAllAnswerKeys() {
  return answerKeys;
}

export function getAnswerKeyBySlug(slug: string) {
  return answerKeys.find((item) => item.slug === slug);
}
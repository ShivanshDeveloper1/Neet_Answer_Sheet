export type AnswerKeySet = {
  name: string;
  url: string | null;
};

export type AnswerKey = {
  slug: string;
  paper: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  subjects: string[];
  highlights: string[];
  
};

export const answerKeys: AnswerKey[] = [
  {
    slug: 'uptet-paper-1',
    paper: 'Paper 1',
    title: 'UPTET Paper 1 Complete PDF',
    description:
      'Complete Paper 1 Question Paper with all subjects in one PDF.',
    longDescription:
      'Includes Child Development & Pedagogy, Hindi, English, Mathematics and Environmental Studies with detailed solutions.',
    thumbnail: '/UPTET_paper_1.jpeg',

    subjects: [
      'CDP',
      'Hindi',
      'English',
      'Mathematics',
      'EVS',
    ],

    highlights: [
      'Complete Paper 1',
      'CDP + Hindi + English',
      'Mathematics',
      'Environmental Studies',
      'Detailed Solutions',
    ],

  
  },

  {
    slug: 'uptet-paper-2-maths-science',
    paper: 'Paper 2',

    title: 'UPTET Paper 2 (Maths & Science)',

    description:
      'Complete Paper 2 PDF for Mathematics & Science candidates.',

    longDescription:
      'Includes Child Development & Pedagogy, Hindi, English, Mathematics and Science with detailed explanations.',

    thumbnail: '/UPTET_paper_2.jpeg',

    subjects: [
      'CDP',
      'Hindi',
      'English',
      'Mathematics',
      'Science',
    ],

    highlights: [
      'Complete Paper 2',
      'Maths & Science',
      'Detailed Solutions',
      'Previous Year Pattern',
      'Answer Key Included',
    ],

    
  },

  {
    slug: 'uptet-paper-2-social',
    paper: 'Paper 2',

    title: 'UPTET Paper 2 (Social Studies)',

    description:
      'Complete Paper 2 PDF for Social Studies candidates.',

    longDescription:
      'Includes Child Development & Pedagogy, Hindi, English and Social Studies with detailed solutions.',

    thumbnail: '/uptet_paper_3.jpeg',

    subjects: [
      'CDP',
      'Hindi',
      'English',
      'Social Studies',
    ],

    highlights: [
      'Complete Paper 2',
      'Social Studies',
      'Detailed Solutions',
      'Previous Year Pattern',
      'Answer Key Included',
    ],

    
  },
];

export function getAllAnswerKeys() {
  return answerKeys;
}

export function getAnswerKeyBySlug(slug: string) {
  return answerKeys.find((item) => item.slug === slug);
}
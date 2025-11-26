export interface Vocabulary {
  word: string;
  type: string; // noun, verb, adj, etc.
  pronunciation?: string;
  meaning: string;
  example: string;
  synonyms?: string[];
  antonyms?: string[];
  image?: string; // Placeholder for future image support
}

export interface GrammarRule {
  title: string;
  description: string;
  usage: {
    situation: string;
    example: string;
  }[];
  signalWords?: string[];
  structure?: string; // e.g. S + V(s/es)
  note?: string; // For "Remember!" boxes
}

export interface Question {
  id: number;
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
}

export interface Exercise {
  id: number;
  title: string;
  category: 'Pronunciation' | 'Vocabulary' | 'Grammar';
  type: 'multiple-choice' | 'fill-in-blank' | 'transformation' | 'sorting';
  questions: Question[];
}

export interface Unit {
  id: number;
  title: string;
  topic: string;
  vocabulary: Vocabulary[];
  grammar: GrammarRule[];
  exercises: Exercise[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
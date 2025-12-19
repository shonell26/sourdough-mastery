
export interface Book {
  id: number;
  title: string;
  pages?: number;
  recipeCount?: number;
  description: string;
  features: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

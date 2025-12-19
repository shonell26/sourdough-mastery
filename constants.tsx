
import { Book, BlogPost, FAQItem } from './types';

export const IMAGES = {
  BOOK_PIN_VERTICAL: "https://i.ibb.co/kg1ZWP92/Leonardo-Phoenix-10-a-tall-vertical-Pinterest-pin-in-a-profess-0.webp",
  BOOK_MODERN: "https://i.ibb.co/C34R0Rq8/Leonardo-Phoenix-10-Pinterest-pin-in-a-clean-modern-cookbook-0-fotor-20250926183036.webp",
  HERO_LOAF: "https://i.ibb.co/0RxzQNxx/sourdough-beauty.webp",
  BAKER_PORTRAIT: "https://i.ibb.co/dzSsnwv/Phoenix-10-Beautiful-redhaired-woman-in-her-mid30s-standing-in-0.jpg",
  BAKER_KITCHEN_1: "https://i.ibb.co/qY6gChGb/Phoenix-10-Ultrarealistic-farmhouse-kitchen-scene-A-redhaired-0.jpg",
  BAKER_KITCHEN_2: "https://i.ibb.co/F4KMpHgV/Phoenix-10-Ultrarealistic-farmhouse-kitchen-scene-A-redhaired-0-1.jpg",
  BAKER_CLOSEUP: "https://i.ibb.co/3yRpRZF4/Phoenix-10-Hyperrealistic-closeup-shot-23-vertical-of-a-redhai-0.jpg",
  BAKER_LIFESTYLE: "https://i.ibb.co/vvRgfk17/Phoenix-10-A-redhaired-woman-in-her-mid30s-with-loose-curls-fr-0.jpg",
};

export const BOOKS: Book[] = [
  {
    id: 1,
    title: "Book 1: The Complete Sourdough Mastery System",
    pages: 40,
    description: "From Zero to Artisan Baker in 7 Days – Our proven rapid-learning system.",
    features: [
      "Create a vigorous starter in just 72 hours using our accelerated development protocol",
      "Master essential techniques: autolyse, bulk fermentation, shaping, and scoring",
      "Foolproof same-day baking timeline that fits your busy schedule",
      "Professional troubleshooting guide for consistent results every time"
    ]
  },
  {
    id: 2,
    title: "Book 2: Everyday Sourdough Creations",
    recipeCount: 50,
    description: "Perfect for daily baking and family meals.",
    features: [
      "Classic breads: White sourdough, whole wheat, rye, and multigrain varieties",
      "International favorites: German dark rye, French pain de campagne, Italian ciabatta",
      "Breakfast essentials: Pancakes, waffles, English muffins, bagels",
      "Pizza dough, flatbreads, dinner rolls, and sandwich buns",
      "Smart discard recipes that eliminate waste"
    ]
  },
  {
    id: 3,
    title: "Book 3: Advanced Sourdough Creations",
    recipeCount: 50,
    description: "Elevate your skills with bakery-quality specialties.",
    features: [
      "Enriched pastries: Brioche, croissants, Danish, and laminated doughs",
      "Sweet treats: Chocolate cake, cinnamon rolls, donuts, and bread pudding",
      "Artisan crackers and savory snacks with gourmet seasonings",
      "Global specialties: Russian black bread, Polish żurek, Ethiopian-inspired breads",
      "Professional techniques for complex flavor development"
    ]
  },
  {
    id: 4,
    title: "Book 4: The Sourdough Problem Solver",
    description: "Real Problem-Solution Approach: Each chapter addresses specific symptoms with targeted fixes.",
    features: [
      "Scientific Explanations Made Simple: Understand the “why” behind each technique",
      "Professional Baker Insights: Learn techniques used by experienced bakers",
      "Step-by-Step Visual Guides: Clear instructions for every technique",
      "Troubleshooting Flowcharts: Quick diagnosis of what went wrong",
      "Case Studies: Real baker examples showing before and after results"
    ]
  }
];

export const ACCELERATOR_PACK = [
  "30-Day Baking Journal",
  "Daily Sourdough Planner",
  "Weekly Baking Schedule Planner",
  "Hydration & Scaling Calculator",
  "Temperature & Timing Adjustment Chart",
  "Laminated Kitchen Quick-Reference Cards",
  "Visual Dough Stage Photo Pack",
  "The Perfect Loaf Visual Readiness Guide",
  "Sourdough Starter Feeding Log",
  "Scoring Pattern Practice Sheets",
  "20 Artisan Flavor Variations",
  "Sourdough Discard Recipe Pack",
  "Printable Recipe Cards",
  "Sourdough Shopping List (with links)"
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Science of Wild Yeast",
    excerpt: "Why understanding your environment is key to a healthy starter...",
    category: "Basics",
    date: "Oct 12, 2024",
    image: IMAGES.BAKER_KITCHEN_1
  },
  {
    id: 2,
    title: "Scoring for Maximum Oven Spring",
    excerpt: "Turn your loaf into a canvas with these professional scoring techniques...",
    category: "Technique",
    date: "Oct 15, 2024",
    image: IMAGES.BOOK_PIN_VERTICAL
  },
  {
    id: 3,
    title: "5 Secrets to a Crispy Crust",
    excerpt: "It's all about the steam and temperature management...",
    category: "Mastery",
    date: "Oct 20, 2024",
    image: IMAGES.HERO_LOAF
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Is this bundle suitable for total beginners?",
    answer: "Absolutely! The system is designed to take you from 'Zero to Artisan' in just 7 days. Book 1 starts with the absolute basics of building a starter."
  },
  {
    question: "Do I need special equipment?",
    answer: "While we recommend a few basic items like a digital scale and a Dutch oven, we show you how to get amazing results with standard kitchen equipment."
  },
  {
    question: "How long does it take to see results?",
    answer: "With our accelerated development protocol, you can have a vigorous starter ready in just 72 hours and bake your first loaf by day 7."
  },
  {
    question: "Is the content digital or physical?",
    answer: "This is a digital bundle (PDF and interactive printables), giving you instant access so you can start baking today!"
  }
];

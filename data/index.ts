
import { User, Chapters } from "../types";
import { mcqs } from './mcqs';

// 🔒 Add more usernames and passwords below:
// The password field is used for demonstration. In a real app, this would be handled securely.
export const users: User[] = [
  { username: "Ali", password: "201711" },
  { username: "Umer", password: "1234" },
  { username: "Tayyab", password: "2004" },
];

// 📘 Add or edit subjects here:
export const subjects: string[] = [
  "English",
  "Chemistry",
  "Biology",
  "Logic & Reasoning",
  "Physics",
];

// 📗 Add or edit chapters for each subject below:
export const chapters: Chapters = {
  English: ["Grammar", "Comprehension", "Vocabulary"],
  Chemistry: [
    "Fundamental Concepts",
    "Atomic Structure",
    "Gases",
    "Solid",
    "Liquid",
    "Equilibrium",
    "Reaction Kinetics",
    "Thermochemistry",
    "Electrochemistry",
    "Chemical Bonding",
    "Macromolecules",
    "s-Block & p-Block Elements",
    "Transition Elements",
    "Fundamentals of Organic Chemistry",
    "Hydrocarbons",
    "Alkyl Halides",
    "Alcohols & Phenols",
    "Aldehydes & Ketones",
    "Carboxylic Acids",
    "Industrial Chemistry",
  ],
  Biology: [
    "Virus",
    "Bioenergetics",
    "Biological Evolution",
    "Enzyme",
    "Reproduction",
    "Support and Movement",
    "Inheritance",
    "Homeostasis",
    "Biological Molecules",
    "Cell",
    "Coordination and Control",
    "Biotechnology",
    "Circulation",
    "Immunity",
    "Respiration",
    "Digestion",
  ],
  "Logic & Reasoning": ["Analogies", "Series Completion", "Critical Thinking"],
  Physics: [
    "Force and Motion",
    "Work and Energy",
    "Circular Motion",
    "Waves",
    "Thermodynamics",
    "Electrostatics",
    "Current Electricity",
    "Vectors",
    "A.C.",
    "Fluid Dynamics",
    "Electromagnetism",
    "Electromagnetic Induction",
    "Electronics",
    "Dawn of Modern Physics",
    "Atomic Spectra",
    "Nuclear Physics",
  ],
};

// ⏱ Set time allowed per question (in seconds)
export const TIME_PER_QUESTION = 60;

export { mcqs };

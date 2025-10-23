
import { Question } from '../../../types';

const questions: Question[] = [
  {
    "question": "What is the primary function of the electron transport chain in mitochondria?",
    "options": [
      "To directly synthesize ATP",
      "To create a proton gradient",
      "To break down glucose",
      "To oxidize pyruvate"
    ],
    "correctAnswer": "To create a proton gradient"
  },
  {
    "question": "In which type of cells does oxidative phosphorylation NOT occur?",
    "options": [
      "Liver cells",
      "Muscle cells",
      "Neurons",
      "Erythrocytes (Red Blood Cells)"
    ],
    "correctAnswer": "Erythrocytes (Red Blood Cells)"
  },
  {
    "question": "Which process generates the maximum amount of ATP?",
    "options": [
      "Glycolysis",
      "Krebs Cycle",
      "Fermentation",
      "Oxidative phosphorylation"
    ],
    "correctAnswer": "Oxidative phosphorylation"
  },
  {
    "question": "How many ATP molecules are produced from one molecule of FADH₂ in oxidative phosphorylation?",
    "options": ["1 ATP", "2 ATP", "3 ATP", "4 ATP"],
    "correctAnswer": "2 ATP"
  },
  {
    "question": "How many ATP molecules are produced from one molecule of NADH₂ in oxidative phosphorylation?",
    "options": ["1 ATP", "2 ATP", "3 ATP", "4 ATP"],
    "correctAnswer": "3 ATP"
  },
  {
    "question": "An increase in ATP concentration will inhibit the action of which key glycolytic enzyme?",
    "options": [
      "Hexokinase",
      "Phosphofructokinase",
      "Pyruvate kinase",
      "Aldolase"
    ],
    "correctAnswer": "Phosphofructokinase"
  },
  {
    "question": "An increased concentration of NADH will inhibit which enzyme?",
    "options": [
      "Phosphofructokinase",
      "Pyruvate decarboxylate",
      "ATP synthase",
      "Hexokinase"
    ],
    "correctAnswer": "Pyruvate decarboxylate"
  },
  {
    "question": "What molecule serves as an intermediate between respiration and photosynthesis?",
    "options": ["Pyruvate", "Acetyl-CoA", "G3P", "Glucose"],
    "correctAnswer": "G3P"
  },
  {
    "question": "In which part of the cell does glycolysis occur?",
    "options": [
      "Mitochondrial matrix",
      "Inner mitochondrial membrane",
      "Cytoplasm",
      "Nucleus"
    ],
    "correctAnswer": "Cytoplasm"
  },
  {
    "question": "What is the total number of ATPs formed in aerobic respiration, and how many come from the electron transport chain?",
    "options": [
      "38 total, 34 from ETC",
      "36 total, 32 from ETC",
      "32 total, 28 from ETC",
      "30 total, 26 from ETC"
    ],
    "correctAnswer": "36 total, 32 from ETC"
  },
  {
    "question": "In chemoosmosis, what is the path of ion flow?",
    "options": [
      "Stroma to lumen",
      "Lumen to stroma",
      "Matrix to intermembrane space",
      "Cytoplasm to matrix"
    ],
    "correctAnswer": "Lumen to stroma"
  },
  {
    "question": "During glycolysis, which molecule undergoes dehydrogenation?",
    "options": ["Glucose", "Pyruvate", "G3P", "Fructose-1,6-bisphosphate"],
    "correctAnswer": "G3P"
  },
  {
    "question": "What is NOT essential for the process of glycolysis?",
    "options": ["Enzymes", "Glucose", "ATP", "Oxygen"],
    "correctAnswer": "Oxygen"
  },
  {
    "question": "The electron transport chain takes electrons from NADH and FADH₂ and passes them to what molecule?",
    "options": ["ATP synthase", "Cytochrome c", "Coenzyme Q", "Oxygen"],
    "correctAnswer": "Coenzyme Q"
  },
  {
    "question": "What happens to carriers in the electron transport chain?",
    "options": [
      "They are first oxidized, then reduced",
      "They are first reduced, then oxidized",
      "They remain neutral",
      "They are permanently oxidized"
    ],
    "correctAnswer": "They are first reduced, then oxidized"
  },
  {
    "question": "Where are the carriers of the respiratory chain located?",
    "options": [
      "Cytoplasm",
      "Outer mitochondrial membrane",
      "Inner mitochondrial membrane",
      "Mitochondrial matrix"
    ],
    "correctAnswer": "Inner mitochondrial membrane"
  },
  {
    "question": "What is the terminal electron acceptor in the mitochondrial electron transport chain?",
    "options": ["Water", "Nitrate", "Sulfate", "Oxygen"],
    "correctAnswer": "Oxygen"
  },
  {
    "question": "What are the final products of the complete oxidation of pyruvate in aerobic respiration?",
    "options": [
      "Lactic acid and ATP",
      "Ethanol and CO₂",
      "CO₂ and H₂O",
      "Glucose and Oxygen"
    ],
    "correctAnswer": "CO₂ and H₂O"
  },
  {
    "question": "Which enzyme is responsible for moving a phosphate group from ATP to glucose?",
    "options": ["Polymerase", "Ligase", "Kinase", "Nuclease"],
    "correctAnswer": "Kinase"
  },
  {
    "question": "Where are the enzymes for the Krebs cycle located?",
    "options": [
      "Cytoplasm",
      "Outer mitochondrial membrane",
      "Inner mitochondrial membrane",
      "Mitochondrial matrix"
    ],
    "correctAnswer": "Mitochondrial matrix"
  },
  {
    "question": "What type of molecule is ATP?",
    "options": ["A protein", "A carbohydrate", "A lipid", "A nucleotide"],
    "correctAnswer": "A nucleotide"
  },
  {
    "question": "What is the role of Coenzyme Q in the electron transport chain?",
    "options": [
      "It is the final electron acceptor",
      "It pumps protons into the lumen",
      "It accepts electrons from NADH and FADH₂",
      "It synthesizes ATP"
    ],
    "correctAnswer": "It accepts electrons from NADH and FADH₂"
  },
  {
    "question": "The fact that glycolysis enzymes are in the cytoplasm explains why...",
    "options": [
      "It requires oxygen",
      "It produces a large amount of ATP",
      "It occurs in the cytoplasm",
      "It is the final stage of respiration"
    ],
    "correctAnswer": "It occurs in the cytoplasm"
  },
  {
    "question": "Which statement about the relationship between C and B in the respiratory chain (B, C, A, A3) is correct?",
    "options": [
      "B oxidizes C",
      "C oxidizes B",
      "They do not interact",
      "B and C reduce each other"
    ],
    "correctAnswer": "C oxidizes B"
  },
  {
    "question": "What cellular process is directly driven by the proton gradient created by the ETC?",
    "options": [
      "Glycolysis",
      "Krebs cycle",
      "Chemiosmosis (ATP synthesis)",
      "Fermentation"
    ],
    "correctAnswer": "Chemiosmosis (ATP synthesis)"
  },
  {
    "question": "What is the yield of ATP from one molecule of FADH₂ compared to one molecule of NADH₂?",
    "options": [
      "It yields more ATP",
      "It yields less ATP",
      "It yields the same amount",
      "FADH₂ does not yield ATP"
    ],
    "correctAnswer": "It yields less ATP"
  },
  {
    "question": "G3P is a key intermediate that can form all of the following EXCEPT:",
    "options": [
      "Glucose",
      "Phosphate",
      "Chloroplast components",
      "Amino acids"
    ],
    "correctAnswer": "Amino acids"
  },
  {
    "question": "Why does glycolysis occur in the cytoplasm?",
    "options": [
      "It requires mitochondria",
      "The necessary enzymes are located there",
      "It is an aerobic process",
      "It needs a high oxygen concentration"
    ],
    "correctAnswer": "The necessary enzymes are located there"
  },
  {
    "question": "The process of a kinase enzyme involves:",
    "options": [
      "Joining two molecules",
      "Cutting DNA",
      "Transferring a phosphate group",
      "Building a polymer"
    ],
    "correctAnswer": "Transferring a phosphate group"
  },
  {
    "question": "Which statement accurately describes the first step of the electron transport chain?",
    "options": [
      "Oxygen accepts electrons",
      "Coenzyme Q accepts electrons from NADH and FADH₂",
      "ATP is synthesized",
      "Water is split"
    ],
    "correctAnswer": "Coenzyme Q accepts electrons from NADH and FADH₂"
  },
  {
    "question": "In the respiratory chain sequence (B, C, A, A3), what does A oxidize?",
    "options": ["B", "C", "A3", "Nothing"],
    "correctAnswer": "C"
  },
  {
    "question": "What is the main outcome of anaerobic respiration (like glycolysis alone) compared to aerobic respiration?",
    "options": [
      "More ATP is produced",
      "Far less ATP is produced",
      "Pyruvate is fully oxidized",
      "Oxygen is used as an electron acceptor"
    ],
    "correctAnswer": "Far less ATP is produced"
  }
];
export default questions;

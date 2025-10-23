import { Question } from "../../../types";

const questions: Question[] = [
  {
    question:
      "A nucleus undergoes alpha decay. How do its mass number (A) and atomic number (Z) change?",
    options: [
      "A decreases by 2, Z decreases by 1",
      "A decreases by 4, Z decreases by 2",
      "A is unchanged, Z increases by 1",
      "A and Z are unchanged",
    ],
    correctAnswer: "A decreases by 4, Z decreases by 2",
  },
  {
    question:
      "During beta decay, an electron is emitted. What happens to the mass number (A) and atomic number (Z) of the nucleus?",
    options: [
      "A decreases by 4, Z decreases by 2",
      "A is unchanged, Z increases by 1",
      "A increases by 1, Z is unchanged",
      "A and Z are unchanged",
    ],
    correctAnswer: "A is unchanged, Z increases by 1",
  },
  {
    question:
      "A nucleus _{Z}Xᴬ undergoes one alpha decay followed by one beta decay. What is the atomic number (Z) of the final daughter nucleus?",
    options: ["Z - 1", "Z - 2", "Z - 3", "Z"],
    correctAnswer: "Z - 1",
  },
  {
    question:
      "A radioactive sample has a half-life of 8 days. What fraction of the original sample will remain undecayed after 24 days?",
    options: ["1/2", "1/4", "1/8", "1/16"],
    correctAnswer: "1/8",
  },
  {
    question:
      "If a sample has a half-life of 10 years, what fraction will have decayed after 30 years?",
    options: ["1/8", "3/4", "7/8", "1/4"],
    correctAnswer: "7/8",
  },
  {
    question:
      "Which type of radiation (alpha, beta, gamma) has the highest ionizing power?",
    options: [
      "Alpha (α)",
      "Beta (β)",
      "Gamma (γ)",
      "All have equal ionizing power",
    ],
    correctAnswer: "Alpha (α)",
  },
  {
    question:
      "Which type of radiation (alpha, beta, gamma) has the greatest penetrating power?",
    options: [
      "Alpha (α)",
      "Beta (β)",
      "Gamma (γ)",
      "All have equal penetrating power",
    ],
    correctAnswer: "Gamma (γ)",
  },
  {
    question:
      "Which type of nuclear decay emits particles with a continuous energy spectrum?",
    options: [
      "Alpha (α) decay",
      "Beta (β) decay",
      "Gamma (γ) decay",
      "All decay types",
    ],
    correctAnswer: "Beta (β) decay",
  },
  {
    question:
      "Nuclei that have the same mass number (A) but different atomic numbers (Z) are called:",
    options: ["Isotopes", "Isobars", "Isotones", "Isomers"],
    correctAnswer: "Isobars",
  },
  {
    question:
      "Nuclei with the same number of neutrons but different numbers of protons are known as:",
    options: ["Isotopes", "Isobars", "Isotones", "Isomers"],
    correctAnswer: "Isotones",
  },
  {
    question: "What is the SI unit for absorbed dose (D)?",
    options: ["Sievert (Sv)", "Becquerel (Bq)", "Gray (Gy)", "Curie (Ci)"],
    correctAnswer: "Gray (Gy)",
  },
  {
    question: "The Sievert (Sv) is the SI unit used to measure:",
    options: [
      "Absorbed Dose (D)",
      "Activity (A)",
      "Half-life (T₁/₂)",
      "Equivalent Dose (D<0xE2><0x82><0x91>)",
    ],
    correctAnswer: "Equivalent Dose (D<0xE2><0x82><0x91>)",
  },
  {
    question:
      "A proton is composed of which combination of up (u) and down (d) quarks?",
    options: ["udd", "uud", "ddd", "uuu"],
    correctAnswer: "uud",
  },
  {
    question: "What is the quark composition of a neutron?",
    options: ["udd", "uud", "ddd", "uuu"],
    correctAnswer: "udd",
  },
  {
    question:
      "Which radioisotope is commonly used for carbon dating archaeological samples?",
    options: ["Cobalt-60", "Iodine-131", "Carbon-14", "Sodium-24"],
    correctAnswer: "Carbon-14",
  },
  {
    question:
      "A patient with a thyroid gland issue might be diagnosed using which radioisotope?",
    options: ["Carbon-14", "Iodine-131", "Strontium-90", "Cobalt-60"],
    correctAnswer: "Iodine-131",
  },
  {
    question:
      "Cobalt-60 is often used in radiation therapy for cancer and as a source for:",
    options: [
      "Carbon dating",
      "Checking blood circulation",
      "Industrial thickness gauges",
      "Diagnosing thyroid problems",
    ],
    correctAnswer: "Industrial thickness gauges",
  },
  {
    question:
      "Which of the following particles is considered elementary (not made of quarks)?",
    options: ["Proton", "Neutron", "Electron", "Meson"],
    correctAnswer: "Electron",
  },
  {
    question: "A meson is a type of hadron composed of:",
    options: [
      "Three quarks",
      "Two quarks",
      "A quark and an antiquark",
      "Only leptons",
    ],
    correctAnswer: "A quark and an antiquark",
  },
  {
    question: "Protons and neutrons belong to which family of hadrons?",
    options: ["Leptons", "Mesons", "Baryons", "Photons"],
    correctAnswer: "Baryons",
  },
  {
    question:
      "The relationship between half-life (T₁/₂) and the decay constant (λ) is given by:",
    options: [
      "T₁/₂ = λ / 0.693",
      "T₁/₂ = 0.693 / λ",
      "T₁/₂ = λ × 0.693",
      "T₁/₂ = λ",
    ],
    correctAnswer: "T₁/₂ = 0.693 / λ",
  },
  {
    question: "If a nucleus has a decay constant λ, its mean life (T*) is:",
    options: ["λ", "1 / λ", "0.693 / λ", "λ / 0.693"],
    correctAnswer: "1 / λ",
  },
  {
    question:
      "Effects like skin burns and hair loss caused by radiation are classified as:",
    options: [
      "Genetic effects",
      "Somatic effects",
      "Systemic effects",
      "Chronic effects",
    ],
    correctAnswer: "Somatic effects",
  },
  {
    question: "Which fundamental force is responsible for beta decay?",
    options: [
      "Strong nuclear force",
      "Weak nuclear force",
      "Electromagnetic force",
      "Gravitational force",
    ],
    correctAnswer: "Weak nuclear force",
  },
  {
    question:
      "How many disintegrations per second does one Becquerel (Bq) represent?",
    options: ["1", "10⁶", "3.7 x 10¹⁰", "100"],
    correctAnswer: "1",
  },
];
export default questions;

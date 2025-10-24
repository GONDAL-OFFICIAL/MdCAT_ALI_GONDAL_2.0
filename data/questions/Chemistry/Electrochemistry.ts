import { Question } from "../../../types";

const questions: Question[] = [
  {
    question: "What is the oxidation number of Manganese (Mn) in KMnO₄?",
    options: ["+2", "+4", "+6", "+7"],
    correctAnswer: "+7", // Key Q94: D
  },
  {
    question:
      "When balancing redox equations using the oxidation number method, which step is generally NOT part of that specific method (but part of the ion-electron method)?",
    options: [
      "Assigning oxidation numbers",
      "Identifying elements changing oxidation state",
      "Splitting the reaction into two half-reactions",
      "Equalizing electron loss and gain using multipliers",
    ],
    correctAnswer: "Splitting the reaction into two half-reactions", // Key Q95: A [cite: 275, 152]
  },
  {
    question:
      "Which characteristic is INCORRECT for a typical electrolytic cell?",
    options: [
      "An external DC power source is used",
      "Oxidation occurs at the anode",
      "Reduction occurs at the cathode",
      "An AC power source is used",
    ],
    correctAnswer: "An AC power source is used", // Key Q96: C
  },
  {
    question:
      "The bond between NH₃ and BF₃ in the adduct H₃N→BF₃ is best described as a:",
    options: [
      "Ionic bond",
      "Covalent bond",
      "Coordinate covalent bond",
      "Hydrogen bond",
    ],
    correctAnswer: "Coordinate covalent bond", // Key Q97: C
  },
  {
    question:
      "What is the oxidation number of an element (like Magnesium) in its free, uncombined state?",
    options: ["+1", "+2", "-1", "0"],
    correctAnswer: "0", // Key Q113: A [cite: 926, 141]
  },
  {
    question:
      "An electrochemical cell functions based on which type of chemical reaction?",
    options: ["Acid-Base", "Precipitation", "Redox", "Combustion"],
    correctAnswer: "Redox", // Key Q150: B
  },
  {
    question:
      "In which compound does oxygen exhibit a fractional oxidation state (-1/2)?",
    options: [
      "H₂O₂ (Hydrogen Peroxide)",
      "OF₂ (Oxygen Difluoride)",
      "KO₂ (Potassium Superoxide)",
      "Na₂O (Sodium Oxide)",
    ],
    correctAnswer: "KO₂ (Potassium Superoxide)", // Key Q151: C [cite: 746, 747, 748, 749, 146]
  },
  {
    question:
      "The branch of chemistry dealing with the inter-conversion of chemical and electrical energy is:",
    options: [
      "Thermochemistry",
      "Kinetics",
      "Electrochemistry",
      "Organic Chemistry",
    ],
    correctAnswer: "Electrochemistry", //
  },
  {
    question:
      "In which type of cell is electrical energy converted into chemical energy (forcing a non-spontaneous reaction)?",
    options: [
      "Voltaic Cell",
      "Galvanic Cell",
      "Electrolytic Cell",
      "Fuel Cell",
    ],
    correctAnswer: "Electrolytic Cell", // [cite: 137, 207]
  },
  {
    question:
      "A galvanic or voltaic cell converts _______ energy into _______ energy via a _______ redox reaction.",
    options: [
      "Electrical, Chemical, Non-spontaneous",
      "Chemical, Electrical, Spontaneous",
      "Chemical, Electrical, Non-spontaneous",
      "Electrical, Chemical, Spontaneous",
    ],
    correctAnswer: "Chemical, Electrical, Spontaneous", // [cite: 138, 205]
  },
  {
    question:
      "Which process involves the gain of electrons and a decrease in oxidation state?",
    options: ["Oxidation", "Reduction", "Electrolysis", "Ionization"],
    correctAnswer: "Reduction", //
  },
  {
    question: "In the reaction Zn → Zn²⁺ + 2e⁻, zinc is acting as a(n):",
    options: ["Oxidizing agent", "Reducing agent", "Electrolyte", "Catalyst"],
    correctAnswer: "Reducing agent", //
  },
  {
    question:
      "What is the oxidation number of hydrogen in NaH (Sodium Hydride)?",
    options: ["+1", "0", "-1", "+2"],
    correctAnswer: "-1", // [cite: 146]
  },
  {
    question:
      "What is the oxidation number of oxygen in H₂O₂ (Hydrogen Peroxide)?",
    options: ["-2", "-1", "-1/2", "+2"],
    correctAnswer: "-1", // [cite: 146]
  },
  {
    question:
      "The algebraic sum of oxidation numbers in a neutral compound (like K₂Cr₂O₇) must equal:",
    options: ["+1", "-1", "Zero", "The charge of the cation"],
    correctAnswer: "Zero", // [cite: 142]
  },
  {
    question:
      "For the polyatomic ion SO₄²⁻, the sum of the oxidation numbers of sulfur and oxygen atoms must equal:",
    options: ["0", "-1", "-2", "+6"],
    correctAnswer: "-2", // [cite: 145]
  },
  {
    question:
      "Which statement correctly compares electrolytic and electronic conduction?",
    options: [
      "Electrolytic involves ions and increases with temperature; Electronic involves electrons and decreases with temperature.",
      "Electrolytic involves electrons and decreases with temperature; Electronic involves ions and increases with temperature.",
      "Both involve ions and increase with temperature.",
      "Both involve electrons and decrease with temperature.",
    ],
    correctAnswer:
      "Electrolytic involves ions and increases with temperature; Electronic involves electrons and decreases with temperature.", //
  },
  {
    question:
      "The process where a non-spontaneous reaction is driven by electrical energy is called:",
    options: ["Ionization", "Galvanization", "Electrolysis", "Neutralization"],
    correctAnswer: "Electrolysis", // [cite: 161]
  },
  {
    question:
      "During the electrolysis of molten PbCl₂, lead ions (Pb²⁺) move towards the _______ and get _______.",
    options: [
      "Anode, Oxidized",
      "Anode, Reduced",
      "Cathode, Oxidized",
      "Cathode, Reduced",
    ],
    correctAnswer: "Cathode, Reduced", // [cite: 163]
  },
  {
    question:
      "During the electrolysis of molten NaCl, chloride ions (Cl⁻) move towards the _______ and get _______.",
    options: [
      "Anode, Oxidized",
      "Anode, Reduced",
      "Cathode, Oxidized",
      "Cathode, Reduced",
    ],
    correctAnswer: "Anode, Oxidized", // [cite: 165, 166, 167]
  },
  {
    question:
      "In the external circuit connected to an electrolytic cell, electrons flow from the _______ to the _______.",
    options: [
      "Anode, Cathode",
      "Cathode, Anode",
      "Electrolyte, Anode",
      "Cathode, Electrolyte",
    ],
    correctAnswer: "Anode, Cathode", // [cite: 171] (Note: This refers to the direction conventional current flows FROM in the external circuit, originating at the cell's anode)
  },
  {
    question:
      "During the electrolysis of aqueous NaNO₃, which species is preferentially reduced at the cathode?",
    options: [
      "Na⁺ ions",
      "NO₃⁻ ions",
      "Water (producing H₂ and OH⁻)",
      "Oxygen",
    ],
    correctAnswer: "Water (producing H₂ and OH⁻)", // [cite: 177, 178, 179, 180]
  },
  {
    question:
      "During the electrolysis of aqueous NaNO₃, which species is preferentially oxidized at the anode?",
    options: [
      "Na⁺ ions",
      "NO₃⁻ ions",
      "Water (producing O₂ and H⁺)",
      "Nitrogen gas",
    ], // OH⁻ gets oxidized
    correctAnswer: "Water (producing O₂ and H⁺)", // [cite: 181, 183, 184]
  },
  {
    question: "What is the standard electrode potential (E°) defined as?",
    options: [
      "Potential at 0K and 1 atm",
      "Potential when current is flowing",
      "Potential of an electrode in 1M solution of its ions at 298K",
      "Potential difference between anode and cathode",
    ],
    correctAnswer:
      "Potential of an electrode in 1M solution of its ions at 298K", //
  },
  {
    question:
      "What is the arbitrarily assigned standard electrode potential of the Standard Hydrogen Electrode (SHE)?",
    options: ["+1.00 V", "-1.00 V", "0.00 V", "+0.76 V"],
    correctAnswer: "0.00 V", // [cite: 198, 199]
  },
  {
    question: "In a Zn-Cu voltaic cell, which metal acts as the anode?",
    options: ["Copper (Cu)", "Zinc (Zn)", "Both", "Neither"],
    correctAnswer: "Zinc (Zn)", // [cite: 210, 222]
  },
  {
    question:
      "What is the primary function of a salt bridge in a voltaic cell?",
    options: [
      "To allow electron flow between half-cells",
      "To provide ions to maintain electrical neutrality in the half-cells",
      "To act as the electrode material",
      "To measure the cell voltage",
    ],
    correctAnswer:
      "To provide ions to maintain electrical neutrality in the half-cells", // [cite: 211, 219]
  },
  {
    question:
      "A redox reaction is considered feasible or spontaneous if its standard cell potential (E°cell) is:",
    options: ["Positive", "Negative", "Zero", "Less than 1 Volt"],
    correctAnswer: "Positive", //
  },
  {
    question:
      "The Electrochemical Series arranges elements based on their increasing standard _______ potentials.",
    options: ["Oxidation", "Ionization", "Reduction", "Cell"],
    correctAnswer: "Reduction", // [cite: 235]
  },
  {
    question:
      "In the Electrochemical Series, elements with more negative standard reduction potentials are stronger _______ agents.",
    options: ["Oxidizing", "Reducing", "Neutralizing", "Catalyzing"],
    correctAnswer: "Reducing", // [cite: 236]
  },
  {
    question:
      "According to the Electrochemical Series provided, which element is the strongest reducing agent?",
    options: ["F₂", "Li", "Au", "H₂"],
    correctAnswer: "Li", // [cite: 236]
  },
];
export default questions;

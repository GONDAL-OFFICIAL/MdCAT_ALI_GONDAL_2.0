import { Question } from "../../../types";

const questions: Question[] = [
  {
    question:
      "In an isothermal expansion of an ideal gas, which statement is true according to the First Law of Thermodynamics?",
    options: ["ΔQ = ΔU", "ΔU = ΔW", "ΔQ = ΔW", "ΔQ = 0"],
    correctAnswer: "ΔQ = ΔW",
  },
  {
    question:
      "For an ideal gas undergoing an isochoric process, what is the consequence according to the First Law?",
    options: ["ΔQ = ΔW", "ΔU = 0", "ΔQ = ΔU", "ΔW = -ΔU"],
    correctAnswer: "ΔQ = ΔU",
  },
  {
    question: "Which thermodynamic process occurs at constant pressure?",
    options: ["Isothermal", "Isochoric", "Isobaric", "Adiabatic"],
    correctAnswer: "Isobaric",
  },
  {
    question: "In an adiabatic process, what quantity remains zero?",
    options: ["ΔU", "ΔW", "ΔT", "ΔQ"],
    correctAnswer: "ΔQ",
  },
  {
    question:
      "The First Law of Thermodynamics for an adiabatic process simplifies to:",
    options: ["ΔQ = ΔU", "ΔQ = ΔW", "ΔW = -ΔU", "ΔU = 0"],
    correctAnswer: "ΔW = -ΔU",
  },
  {
    question:
      "During an isothermal process involving an ideal gas, what happens to the internal energy?",
    options: [
      "It increases",
      "It decreases",
      "It remains constant (ΔU = 0)",
      "It depends on the pressure change",
    ],
    correctAnswer: "It remains constant (ΔU = 0)",
  },
  {
    question:
      "When an ideal gas expands adiabatically, what happens to its internal energy and temperature?",
    options: [
      "Internal energy increases, temperature increases",
      "Internal energy decreases, temperature decreases",
      "Internal energy increases, temperature decreases",
      "Internal energy decreases, temperature increases",
    ],
    correctAnswer: "Internal energy decreases, temperature decreases",
  },
  {
    question:
      "If work is done *on* an ideal gas during an adiabatic compression, what is the effect on its internal energy?",
    options: [
      "Internal energy increases",
      "Internal energy decreases",
      "Internal energy remains zero",
      "Internal energy becomes negative",
    ],
    correctAnswer: "Internal energy increases",
  },
  {
    question: "Adiabatic compression of a gas results in:",
    options: ["Cooling", "Heating", "No change in temperature", "Liquefaction"],
    correctAnswer: "Heating",
  },
  {
    question: "On a P-V diagram, what does the area under the curve represent?",
    options: [
      "Change in internal energy (ΔU)",
      "Heat added to the system (ΔQ)",
      "Work done during the process (ΔW)",
      "Change in temperature (ΔT)",
    ],
    correctAnswer: "Work done during the process (ΔW)",
  },
  {
    question:
      "For a complete thermodynamic cycle shown on a P-V diagram, what is the total change in internal energy (ΔU)?",
    options: ["Positive", "Negative", "Zero", "Depends on the cycle shape"],
    correctAnswer: "Zero",
  },
  {
    question:
      "If a thermodynamic cycle on a P-V diagram is traced in the clockwise direction, what is the sign of the net work done?",
    options: ["Positive", "Negative", "Zero", "Cannot be determined"],
    correctAnswer: "Positive",
  },
  {
    question:
      "The net work done during a cyclic process is represented on a P-V diagram by:",
    options: [
      "The area under the expansion curve only",
      "The area under the compression curve only",
      "The area enclosed by the loop",
      "The sum of areas under both curves",
    ],
    correctAnswer: "The area enclosed by the loop",
  },
  {
    question:
      "Which process has a steeper slope on a P-V diagram: isothermal or adiabatic?",
    options: [
      "Isothermal",
      "Adiabatic",
      "They have the same slope",
      "Depends on the gas",
    ],
    correctAnswer: "Adiabatic",
  },
  {
    question: "The slope of an adiabatic curve on a P-V diagram is given by:",
    options: ["-P/V", "-γP/V", "0", "∞"],
    correctAnswer: "-γP/V",
  },
  {
    question:
      "What is the approximate value of the adiabatic constant (γ) for a diatomic ideal gas?",
    options: ["1.67", "1.40", "1.29", "1.00"],
    correctAnswer: "1.40",
  },
  {
    question:
      "A polyatomic ideal gas has an adiabatic constant (γ) value of approximately:",
    options: ["1.67", "1.40", "1.29", "1.50"],
    correctAnswer: "1.29",
  },
  {
    question:
      "The internal energy (U) of an ideal gas depends only on which state variable?",
    options: ["Pressure", "Volume", "Temperature", "Number of moles"],
    correctAnswer: "Temperature",
  },
  {
    question:
      "If the temperature of an ideal gas is kept constant during a process, its change in internal energy (ΔU) is:",
    options: ["Positive", "Negative", "Zero", "Equal to work done"],
    correctAnswer: "Zero",
  },
  {
    question: "Mayer's relation, $C_p - C_v = R$, applies to:",
    options: [
      "Any substance",
      "Solids only",
      "Liquids only",
      "One mole of an ideal gas",
    ],
    correctAnswer: "One mole of an ideal gas",
  },
  {
    question:
      "According to the First Law, for a cyclic process, the net heat added (ΔQ) equals:",
    options: [
      "The change in internal energy (ΔU)",
      "The net work done (ΔW)",
      "Zero",
      "The change in temperature (ΔT)",
    ],
    correctAnswer: "The net work done (ΔW)",
  },
  {
    question:
      "In the First Law equation $Delta Q = Delta U + Delta W$, when is $Delta W$ considered positive?",
    options: [
      "When work is done on the system (compression)",
      "When work is done by the system (expansion)",
      "When volume is constant",
      "When heat is removed",
    ],
    correctAnswer: "When work is done by the system (expansion)",
  },
  {
    question:
      "Which thermodynamic process corresponds to a vertical line (infinite slope) on a P-V diagram?",
    options: ["Isobaric", "Isothermal", "Adiabatic", "Isochoric"],
    correctAnswer: "Isochoric",
  },
  {
    question: "What is the value of $gamma$ for a monoatomic ideal gas?",
    options: ["1.29", "1.40", "1.67", "1.00"],
    correctAnswer: "1.67",
  },
  {
    question:
      "For an ideal gas, why is the internal energy considered to be only dependent on temperature?",
    options: [
      "Because the kinetic energy is zero",
      "Because the potential energy between molecules is considered zero",
      "Because pressure and volume are constant",
      "Because heat transfer is always zero",
    ],
    correctAnswer:
      "Because the potential energy between molecules is considered zero",
  },
  {
    question:
      "Which thermodynamic law defines the concept of temperature and thermal equilibrium, stating that if TA = TC and TB = TC, then TA = TB?",
    options: ["First Law", "Second Law", "Third Law", "Zeroth Law"],
    correctAnswer: "Zeroth Law",
  },
  {
    question:
      "A system that can transfer energy but not matter across its boundary is classified as:",
    options: [
      "Open system",
      "Closed system",
      "Isolated system",
      "Adiabatic system",
    ],
    correctAnswer: "Closed system",
  },
  {
    question: "What is the primary difference between heat and temperature?",
    options: [
      "Heat is energy transferred, temperature is degree of hotness",
      "Temperature is energy transferred, heat is degree of hotness",
      "Both measure the same quantity",
      "Heat is measured in Kelvin, temperature in Joules",
    ],
    correctAnswer:
      "Heat is energy transferred, temperature is degree of hotness",
  },
  {
    question: "What is the equivalent of 1 calorie in Joules?",
    options: ["1 J", "0.24 J", "4.2 J", "1000 J"],
    correctAnswer: "4.2 J",
  },
  {
    question: "The units J mol⁻¹K⁻¹ are used for which quantity?",
    options: [
      "Specific Heat (c)",
      "Molar Specific Heat (Cm)",
      "Heat Capacity",
      "Internal Energy (U)",
    ],
    correctAnswer: "Molar Specific Heat (Cm)",
  },
  {
    question:
      "Which thermodynamic process corresponds to a horizontal line (zero slope) on a P-V diagram?",
    options: ["Isochoric", "Isothermal", "Adiabatic", "Isobaric"],
    correctAnswer: "Isobaric",
  },
];
export default questions;

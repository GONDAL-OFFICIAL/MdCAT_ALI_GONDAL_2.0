import { Question } from "../../../types";

const questions: Question[] = [
  {
    question:
      "Which of the following defines the ultimate state of a reversible reaction?",
    options: [
      "Completion of reaction",
      "Complete consumption of reactants",
      "Complete consumption of products",
      "A state when there is no net concentration change",
    ],
    correctAnswer: "A state when there is no net concentration change", // Key Q81: D
  },
  {
    question:
      "According to Le Chatelier's principle, removing a product from a reversible reaction at equilibrium will cause the equilibrium to shift towards the:",
    options: [
      "Reactant side",
      "Product side",
      "No effect",
      "Both sides alternately",
    ],
    correctAnswer: "Product side", // Key Q82: B
  },
  {
    question:
      "Energy changes occur in chemical reactions primarily because of:",
    options: [
      "Changes in temperature",
      "Changes in pressure",
      "Bond formation and breakage",
      "The presence of catalysts",
    ],
    correctAnswer: "Bond formation and breakage", // Key Q85: C
  },
  {
    question: "What is the standard SI unit for heat capacity?",
    options: ["JK⁻¹", "kJ mol⁻¹", "Jg⁻¹K⁻¹", "cal K⁻¹"],
    correctAnswer: "JK⁻¹", // Key Q86: A
  },
  {
    question:
      "In an endothermic reaction, how does the heat content (enthalpy) of the products compare to that of the reactants?",
    options: [
      "Products < Reactants",
      "Products = Reactants",
      "Products > Reactants",
      "Cannot be determined",
    ],
    correctAnswer: "Products > Reactants", // Key Q91: C [cite: 273, 77]
  },
  {
    question:
      "The Born-Haber cycle uses Hess's Law to calculate which thermodynamic quantity for ionic compounds?",
    options: [
      "Enthalpy of formation",
      "Enthalpy of combustion",
      "Lattice energy",
      "Ionization energy",
    ],
    correctAnswer: "Lattice energy", // Key Q92 (Implied by context), Q148 [cite: 273, 133, 738]
  },
  {
    question:
      "The enthalpy change when one mole of water is formed from the reaction of a strong acid and a strong base under standard conditions is defined as:",
    options: [
      "Standard enthalpy of formation",
      "Standard enthalpy of combustion",
      "Standard enthalpy of reaction",
      "Standard enthalpy of neutralization",
    ],
    correctAnswer: "Standard enthalpy of neutralization", // Key Q93: D [cite: 273, 118]
  },
  {
    question: "Le Chatelier's principle helps to estimate the:",
    options: [
      "Rate of reaction",
      "Direction in which equilibrium will shift",
      "Activation energy",
      "Total enthalpy change",
    ],
    correctAnswer: "Direction in which equilibrium will shift", // Key Q110: A
  },
  {
    question:
      "What is the approximate bond energy (enthalpy required to break the bond) for the H-H bond in an H₂ molecule?",
    options: ["242 kJ/mol", "346 kJ/mol", "431 kJ/mol", "436 kJ/mol"],
    correctAnswer: "436 kJ/mol", // Key Q111: C
  },
  {
    question:
      "The Born-Haber cycle is a practical application of which fundamental law?",
    options: [
      "First Law of Thermodynamics",
      "Hess's Law",
      "Le Chatelier's Principle",
      "Law of Mass Action",
    ],
    correctAnswer: "Hess's Law", // Key Q148: C
  },
  {
    question:
      "Which of the following thermodynamic properties is a state function?",
    options: ["Work (W)", "Heat (q)", "Enthalpy (H)", "Path taken"],
    correctAnswer: "Enthalpy (H)", // Key Q149: D [cite: 739, 741, 96]
  },
  {
    question:
      "The study of heat changes during chemical reactions is known as:",
    options: [
      "Kinetics",
      "Electrochemistry",
      "Thermochemistry",
      "Thermodynamics",
    ],
    correctAnswer: "Thermochemistry", // [cite: 72]
  },
  {
    question:
      "Which statement describes an exothermic reaction based on the graphical representation?",
    options: [
      "Energy is absorbed, ΔH is positive",
      "Reactants have lower energy than products, ΔH is positive",
      "Energy is given off, ΔH is negative",
      "Reactants and products have equal energy, ΔH is zero",
    ],
    correctAnswer: "Energy is given off, ΔH is negative", //
  },
  {
    question: "How many Joules are approximately equal to 1 calorie?",
    options: ["1 J", "0.24 J", "4.184 J", "1000 J"],
    correctAnswer: "4.184 J", //
  },
  {
    question:
      "A system that allows the exchange of both energy and matter with its surroundings is called:",
    options: [
      "Isolated system",
      "Closed system",
      "Open system",
      "Adiabatic system",
    ],
    correctAnswer: "Open system", // [cite: 85]
  },
  {
    question:
      "A bomb calorimeter, which allows heat exchange but not matter exchange, represents which type of system?",
    options: ["Isolated", "Open", "Closed", "Isothermal"],
    correctAnswer: "Closed", // [cite: 87]
  },
  {
    question:
      "Which of the following is NOT typically considered a state function in thermodynamics?",
    options: ["Pressure (P)", "Volume (V)", "Work (W)", "Internal Energy (E)"],
    correctAnswer: "Work (W)", // [cite: 96, 97]
  },
  {
    question: "The process of breaking chemical bonds is always:",
    options: ["Exothermic", "Endothermic", "Spontaneous", "Non-spontaneous"],
    correctAnswer: "Endothermic", //
  },
  {
    question:
      "When new chemical bonds are formed during a reaction, energy is:",
    options: [
      "Absorbed",
      "Released",
      "Neither absorbed nor released",
      "Destroyed",
    ],
    correctAnswer: "Released", //
  },
  {
    question: "The First Law of Thermodynamics is essentially a statement of:",
    options: [
      "Conservation of mass",
      "Conservation of energy",
      "Law of definite proportions",
      "Law of multiple proportions",
    ],
    correctAnswer: "Conservation of energy", // [cite: 110, 112]
  },
  {
    question:
      "What is the standard enthalpy of formation (ΔH°f) of an element in its standard state?",
    options: [
      "Always positive",
      "Always negative",
      "Zero",
      "Depends on the element",
    ],
    correctAnswer: "Zero", // [cite: 108]
  },
  {
    question:
      "The enthalpy change when one mole of gaseous atoms is formed from an element or molecule under standard conditions is called:",
    options: [
      "Enthalpy of formation",
      "Enthalpy of combustion",
      "Enthalpy of atomization",
      "Enthalpy of solution",
    ],
    correctAnswer: "Enthalpy of atomization", // [cite: 117]
  },
  {
    question:
      "What is the typical enthalpy of neutralization (ΔH°n) for the reaction between a strong acid and a strong base?",
    options: ["+57.4 kJ/mol", "-57.4 kJ/mol", "0 kJ/mol", "+16.2 kJ/mol"],
    correctAnswer: "-57.4 kJ/mol", //
  },
  {
    question:
      "The enthalpy change when one mole of a substance is completely burned in excess oxygen is the enthalpy of:",
    options: ["Formation", "Atomization", "Solution", "Combustion"],
    correctAnswer: "Combustion", // [cite: 119]
  },
  {
    question:
      "A glass calorimeter typically operates under constant _______ conditions.",
    options: ["Volume", "Temperature", "Pressure", "Energy"],
    correctAnswer: "Pressure", // [cite: 123]
  },
  {
    question:
      "A bomb calorimeter typically measures heat changes under constant _______ conditions.",
    options: ["Pressure", "Temperature", "Volume", "Mass"],
    correctAnswer: "Volume", // [cite: 125]
  },
  {
    question:
      "Hess's Law states that the total enthalpy change for a reaction is:",
    options: [
      "Dependent on the path taken",
      "Dependent on the number of steps",
      "Independent of the path taken",
      "Always zero",
    ],
    correctAnswer: "Independent of the path taken", //
  },
  {
    question:
      "According to Hess's Law, the sum of enthalpy changes around a complete thermodynamic cycle is:",
    options: ["Positive", "Negative", "Zero", "Equal to the lattice energy"],
    correctAnswer: "Zero", // [cite: 127]
  },
];
export default questions;

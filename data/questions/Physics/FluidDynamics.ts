import { Question } from "../../../types";

const questions: Question[] = [
  {
    question:
      "How does the terminal velocity of a falling object change over time?",
    options: [
      "It is always constant",
      "It decreases and then becomes zero",
      "It increases initially and then becomes constant",
      "It increases indefinitely",
    ],
    correctAnswer: "It increases initially and then becomes constant",
  },
  {
    question:
      "The terminal velocity of a sphere is directly proportional to its mass (m) and the square of its radius (r²). If the mass of a sphere is doubled, its terminal velocity will:",
    options: ["Be halved", "Be doubled", "Be quadrupled", "Remain the same"],
    correctAnswer: "Be doubled",
  },
  {
    question:
      "Fluid flow that is smooth and orderly is called ________, while chaotic and irregular flow is called ________.",
    options: [
      "Turbulent, Laminar",
      "Laminar, Turbulent",
      "Static, Dynamic",
      "Viscous, Non-viscous",
    ],
    correctAnswer: "Laminar, Turbulent",
  },
  {
    question:
      "The drag force on a sphere in a laminar flow is given by F = 6πηrv. What are the dimensions of the viscosity constant (η)?",
    options: ["MLT⁻²", "ML⁻¹T⁻¹", "ML⁻²T", "MT⁻¹"],
    correctAnswer: "ML⁻¹T⁻¹",
  },
  {
    question:
      "How does an increase in temperature affect the viscosity of a liquid versus a gas?",
    options: [
      "Decreases in both",
      "Increases in both",
      "Decreases in liquid, increases in gas",
      "Increases in liquid, decreases in gas",
    ],
    correctAnswer: "Decreases in liquid, increases in gas",
  },
  {
    question: "The primary cause of viscosity in gases is:",
    options: [
      "Cohesive forces between molecules",
      "Diffusion of molecules between layers",
      "Pressure applied to the gas",
      "Gravitational forces",
    ],
    correctAnswer: "Diffusion of molecules between layers",
  },
  {
    question: "How does pressure generally affect the viscosity of a gas?",
    options: [
      "It increases viscosity significantly",
      "It decreases viscosity significantly",
      "It has little to no effect",
      "It depends on the temperature",
    ],
    correctAnswer: "It has little to no effect",
  },
  {
    question:
      "Blood is approximately 3-5 times more viscous than water. This is primarily due to:",
    options: [
      "Its higher temperature",
      "The presence of red blood cells",
      "Its lower density",
      "Its flow speed in arteries",
    ],
    correctAnswer: "The presence of red blood cells",
  },
  {
    question:
      "During blood pressure measurement, the 80 mmHg diastolic pressure corresponds to which type of blood flow?",
    options: ["Turbulent flow", "No flow", "Laminar flow", "Streamline flow"],
    correctAnswer: "Streamline flow",
  },
  {
    question:
      "For a compressible fluid, the equation of continuity states that the ________ per unit time is constant.",
    options: ["Volume", "Area", "Mass", "Velocity"],
    correctAnswer: "Mass",
  },
  {
    question:
      "Bernoulli’s principle states that for a horizontal flow, as the speed of a fluid increases, its:",
    options: [
      "Pressure increases",
      "Pressure decreases",
      "Pressure remains constant",
      "Density increases",
    ],
    correctAnswer: "Pressure decreases",
  },
  {
    question: "For a static fluid (V=0), Bernoulli's equation simplifies to:",
    options: [
      "P + ρgH = constant",
      "P + ½ρV² = constant",
      "ρgH = constant",
      "P = constant",
    ],
    correctAnswer: "P + ρgH = constant",
  },
  {
    question:
      "A large water tank of height H=10m has a small leak at a height h=1m from the bottom. What is the range (R) of the water stream hitting the ground?",
    options: ["18 m", "9 m", "6 m", "3 m"],
    correctAnswer: "6 m",
  },
  {
    question:
      "The ability of a water strider or a needle to float on the surface of water, despite being denser, is due to:",
    options: [
      "Viscosity",
      "Bernoulli's Principle",
      "Surface Tension",
      "Drag Force",
    ],
    correctAnswer: "Surface Tension",
  },
  {
    question:
      "In which situation is the drag force on an object proportional to the square of its velocity (v²)?",
    options: [
      "At very low speeds (laminar flow)",
      "At high speeds (turbulent flow)",
      "Only in gases",
      "When the object is stationary",
    ],
    correctAnswer: "At high speeds (turbulent flow)",
  },
];
export default questions;

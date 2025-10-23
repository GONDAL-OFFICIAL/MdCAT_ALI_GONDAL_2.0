import { Question } from "../../../types";

const questions: Question[] = [
  {
    question:
      "Why will a transformer not operate with a D.C. source connected to its primary coil?",
    options: [
      "D.C. produces a constantly changing magnetic flux.",
      "D.C. produces a steady magnetic flux, and induction requires a changing flux.",
      "D.C. sources have zero voltage.",
      "The resistance of the primary coil is infinite for D.C.",
    ],
    correctAnswer:
      "D.C. produces a steady magnetic flux, and induction requires a changing flux.",
  },
  {
    question:
      "Lenz's Law, which describes the direction of induced current, is a direct consequence of which fundamental principle?",
    options: [
      "Law of Conservation of Momentum",
      "Law of Conservation of Charge",
      "Law of Mutual Induction",
      "Law of Conservation of Energy",
    ],
    correctAnswer: "Law of Conservation of Energy",
  },
  {
    question:
      "How are eddy current losses, which cause heat loss in a transformer's core, minimized?",
    options: [
      "By using a solid soft iron core",
      "By using a laminated core made of insulated iron sheets",
      "By increasing the frequency of the A.C. supply",
      "By using thicker copper windings",
    ],
    correctAnswer: "By using a laminated core made of insulated iron sheets",
  },
  {
    question:
      "In an A.C. generator, the induced EMF is maximum at the instant when:",
    options: [
      "The plane of the coil is perpendicular to the magnetic field.",
      "The magnetic flux through the coil is maximum.",
      "The plane of the coil is parallel to the magnetic field.",
      "The coil stops rotating momentarily.",
    ],
    correctAnswer: "The plane of the coil is parallel to the magnetic field.",
  },
  {
    question:
      "When is the magnetic flux (φ = BA cosθ) through a plane surface at its minimum (zero) value?",
    options: [
      "When the field is perpendicular to the plane (θ = 0°)",
      "When the field is parallel to the plane (θ = 90°)",
      "When the area A is minimized",
      "When B is at its maximum",
    ],
    correctAnswer: "When the field is parallel to the plane (θ = 90°)",
  },
  {
    question:
      "An ideal step-up transformer has a primary coil with 100 turns and a secondary coil with 300 turns. If the primary voltage is 50V, what is the secondary voltage?",
    options: ["16.7 V", "50 V", "150 V", "300 V"],
    correctAnswer: "150 V",
  },
  {
    question:
      "The energy lost due to repeated magnetization and demagnetization of a transformer's core is known as hysteresis loss. How is this specific type of loss minimized?",
    options: [
      "By using a laminated core",
      "By using a soft iron core",
      "By using thicker windings",
      "By ensuring the flux per turn is constant",
    ],
    correctAnswer: "By using a soft iron core",
  },
  {
    question:
      "What is the fundamental principle behind the operation of a transformer?",
    options: [
      "Electromagnetic induction",
      "Mutual induction",
      "Self-induction",
      "Static electricity",
    ],
    correctAnswer: "Mutual induction",
  },
  {
    question: "What is the SI unit of magnetic flux (φ)?",
    options: ["Tesla", "Gauss", "Weber", "Volt"],
    correctAnswer: "Weber",
  },
  {
    question:
      "What is the term for the heat loss (I²R) that occurs in the windings of a transformer?",
    options: [
      "Eddy current losses",
      "Hysteresis losses",
      "Flux leakage",
      "Copper losses",
    ],
    correctAnswer: "Copper losses",
  },
  {
    question:
      "An AC generator can be thought of as an electric motor with its:",
    options: [
      "Input and output reversed",
      "Coil and magnets reversed",
      "Speed doubled",
      "Voltage halved",
    ],
    correctAnswer: "Input and output reversed",
  },
  {
    question: "What physical quantity is represented by 'Flux Linkages'?",
    options: [
      "The magnetic flux per unit area",
      "The total magnetic field lines",
      "The product of the number of turns (N) and magnetic flux (φ)",
      "The rate of change of magnetic flux",
    ],
    correctAnswer:
      "The product of the number of turns (N) and magnetic flux (φ)",
  },
  {
    question:
      "In a step-down transformer, how does the current in the secondary coil (I_s) relate to the primary current (I_p)?",
    options: ["I_s < I_p", "I_s > I_p", "I_s = I_p", "I_s = 0"],
    correctAnswer: "I_s > I_p",
  },
  {
    question:
      "A center-tapped transformer, where the center tap wire is at zero volts, is often used in:",
    options: [
      "Amplifier circuits",
      "Oscillator circuits",
      "Rectifier circuits",
      "Filter circuits",
    ],
    correctAnswer: "Rectifier circuits",
  },
  {
    question:
      "According to the provided text, what is the standard AC frequency used in Pakistan?",
    options: ["60 Hz", "120 Hz", "50 Hz", "100 Hz"],
    correctAnswer: "50 Hz",
  },
  {
    question:
      "If the rate of change of flux is given in weber/sec, the induced e.m.f. is measured in which unit?",
    options: ["Amperes", "Teslas", "Webers", "Volts"],
    correctAnswer: "Volts",
  },
  {
    question:
      "What is the core assumption made about the magnetic flux in an ideal transformer?",
    options: [
      "The flux per turn is the same in both primary and secondary coils.",
      "The total flux is zero.",
      "The flux is directly proportional to the current.",
      "The flux is only present in the primary coil.",
    ],
    correctAnswer:
      "The flux per turn is the same in both primary and secondary coils.",
  },
  {
    question:
      "Iron losses are a category of core losses in a transformer that include:",
    options: [
      "Copper loss and flux loss",
      "Eddy current loss and hysteresis loss",
      "Mechanical loss and heat loss",
      "Voltage loss and current loss",
    ],
    correctAnswer: "EddS current loss and hysteresis loss",
  },
  {
    question:
      "The total charge (q) that flows in a circuit with N turns and resistance R due to a total change in flux (Δφ) depends on:",
    options: [
      "The rate of change of flux",
      "The total change in flux",
      "The resistance only",
      "The number of turns only",
    ],
    correctAnswer: "The total change in flux",
  },
  {
    question: "The efficiency of a transformer is defined as the ratio of:",
    options: [
      "Primary power to secondary power",
      "Input power to output power",
      "Output power to input power",
      "Secondary voltage to primary voltage",
    ],
    correctAnswer: "Output power to input power",
  },
  {
    question:
      "In a step-up transformer, the number of turns in the secondary (N_s) is greater than the primary (N_p). This results in:",
    options: [
      "Decreased secondary voltage and decreased secondary current",
      "Increased secondary voltage and increased secondary current",
      "Increased secondary voltage and decreased secondary current",
      "Decreased secondary voltage and increased secondary current",
    ],
    correctAnswer:
      "Increased secondary voltage and decreased secondary current",
  },
  {
    question:
      "Faraday's Law states that an e.m.f. is induced in a coil only when:",
    options: [
      "A steady current flows through it",
      "The magnetic flux through it changes",
      "It is placed in a strong magnetic field",
      "The coil is made of a specific material",
    ],
    correctAnswer: "The magnetic flux through it changes",
  },
  {
    question:
      "When is the induced EMF in an AC generator's coil equal to zero?",
    options: [
      "When the plane of the coil is parallel to the magnetic field",
      "When the coil cuts flux lines at the fastest rate",
      "When the plane of the coil is perpendicular to the magnetic field",
      "When the coil's angular velocity is maximum",
    ],
    correctAnswer:
      "When the plane of the coil is perpendicular to the magnetic field",
  },
  {
    question: "What is the SI unit for the rate of change of flux (weber/sec)?",
    options: ["Tesla", "Volt", "Farad", "Henry"],
    correctAnswer: "Volt",
  },
  {
    question: "What is the primary definition of 'Magnetic Flux'?",
    options: [
      "The magnetic flux per unit area",
      "The product of turns (N) and flux (φ)",
      "A measure of the total number of magnetic field lines passing through a specific area",
      "The rate of change of the magnetic field",
    ],
    correctAnswer:
      "A measure of the total number of magnetic field lines passing through a specific area",
  },
  {
    question:
      "The total induced charge (q) that flows in a circuit due to a change in flux (Δφ) depends on the total change in flux and the resistance (R). On what does it NOT depend?",
    options: [
      "The total change in flux (Δφ)",
      "The number of turns (N)",
      "The resistance (R)",
      "The rate of change of flux (Δφ/Δt)",
    ],
    correctAnswer: "The rate of change of flux (Δφ/Δt)",
  },
  {
    question: "In an AC generator, why are the pole pieces often made concave?",
    options: [
      "To create a strong, uniform radial field",
      "To reduce the generator's weight",
      "To minimize copper losses",
      "To decrease the angular frequency",
    ],
    correctAnswer: "To create a strong, uniform radial field",
  },
  {
    question:
      "When is the magnetic flux (φ = BA cosθ) through a plane surface at its maximum value?",
    options: [
      "When the field is parallel to the plane (θ = 90°)",
      "When the field is perpendicular to the plane (θ = 0°)",
      "When the area (A) is zero",
      "When the field (B) is zero",
    ],
    correctAnswer: "When the field is perpendicular to the plane (θ = 0°)",
  },
  {
    question:
      "The maximum e.m.f. in an AC generator is given by ε_max = NωAB. If the number of turns (N) in the coil is doubled, what happens to the maximum e.m.f.?",
    options: [
      "It is halved",
      "It is doubled",
      "It remains the same",
      "It is quadrupled",
    ],
    correctAnswer: "It is doubled",
  },
  {
    question:
      "In a center-tapped transformer, which part is specifically noted to be at a potential of zero volts?",
    options: [
      "The entire primary coil",
      "The entire secondary coil",
      "The center tap wire",
      "The iron core",
    ],
    correctAnswer: "The center tap wire",
  },
];
export default questions;

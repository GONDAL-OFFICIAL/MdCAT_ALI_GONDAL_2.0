
import { Question } from '../../../types';

const questions: Question[] = [
      {
        question:
          "Which statement best describes the nature of alternating current (A.C.)?",
        options: [
          "It flows in one direction with constant magnitude.",
          "It changes direction and magnitude continuously.",
          "It flows only when a circuit is closed.",
          "It has a constant magnitude but changing direction.",
        ],
        correctAnswer: "It changes direction and magnitude continuously.",
      },
      {
        question:
          "How many times does A.C. reverse its direction in one complete cycle?",
        options: [
          "Once",
          "Twice",
          "Four times",
          "It depends on the frequency.",
        ],
        correctAnswer: "Once",
      },
      {
        question:
          "A complete cycle of alternating current corresponds to a change in angle of how many radians?",
        options: ["π / 2", "π", "2π", "4π"],
        correctAnswer: "2π",
      },
      {
        question:
          "The instantaneous voltage in an A.C. circuit is given by V = V₀ sin(θ). If the peak voltage (V₀) is 170V, what is the instantaneous voltage when θ = π/2 radians (90°)?",
        options: ["0 V", "85 V", "170 V", "120 V"],
        correctAnswer: "170 V",
      },
      {
        question:
          "An A.C. voltage has a peak value (V₀) of 200V. What is its peak-to-peak voltage (V_pp)?",
        options: ["100 V", "200 V", "282 V", "400 V"],
        correctAnswer: "400 V",
      },
      {
        question:
          "An A.C. voltage has a peak value (V₀) of 311V. What is its RMS value (V_rms)?",
        options: ["311 V", "440 V", "220 V", "155.5 V"],
        correctAnswer: "220 V",
      },
      {
        question:
          "If the RMS current (I_rms) in a circuit is 10 A, what is the peak current (I₀)?",
        options: ["10 A", "7.07 A", "14.14 A", "20 A"],
        correctAnswer: "14.14 A",
      },
      {
        question: "What does the RMS value of an A.C. quantity represent?",
        options: [
          "The average value over one cycle",
          "The peak value",
          "The effective D.C. equivalent value",
          "The instantaneous value",
        ],
        correctAnswer: "The effective D.C. equivalent value",
      },
      {
        question:
          "When two A.C. waveforms have a phase difference of π/2 radians (90°), they are said to be in:",
        options: ["Phase", "Anti-phase", "Quadrature", "Resonance"],
        correctAnswer: "Quadrature",
      },
      {
        question:
          "What is the phase difference between voltage and current in a purely resistive A.C. circuit?",
        options: [
          "90° (π/2 radians)",
          "180° (π radians)",
          "45° (π/4 radians)",
          "0°",
        ],
        correctAnswer: "0°",
      },
      {
        question:
          "How does the resistance of a pure resistor change with the frequency of the A.C. supply?",
        options: [
          "It increases with frequency",
          "It decreases with frequency",
          "It is independent of frequency",
          "It becomes zero at high frequency",
        ],
        correctAnswer: "It is independent of frequency",
      },
      {
        question:
          "In a purely capacitive A.C. circuit, what is the phase relationship between current and voltage?",
        options: [
          "Current and voltage are in-phase",
          "Current leads voltage by 90°",
          "Voltage leads current by 90°",
          "Current lags voltage by 180°",
        ],
        correctAnswer: "Current leads voltage by 90°",
      },
      {
        question: "The capacitive reactance (X_C) is given by the formula:",
        options: [
          "X_C = 2πfC",
          "X_C = 1 / (2πfC)",
          "X_C = C / (2πf)",
          "X_C = 2πf / C",
        ],
        correctAnswer: "X_C = 1 / (2πfC)",
      },
      {
        question:
          "What is the average power consumed by a pure inductor over one complete A.C. cycle?",
        options: ["V_rms * I_rms", "I_rms² * X_L", "0", "Infinite"],
        correctAnswer: "0",
      },
      {
        question: "What is the formula for inductive reactance (X_L)?",
        options: ["X_L = ω / L", "X_L = 1 / (ωL)", "X_L = ωL", "X_L = L / ω"],
        correctAnswer: "X_L = ωL",
      },
      {
        question:
          "In a series R-L circuit, the impedance (Z) is calculated using:",
        options: [
          "Z = R + X_L",
          "Z = √(R² + X_L²)",
          "Z = R - X_L",
          "Z = √(R² - X_L²)",
        ],
        correctAnswer: "Z = √(R² + X_L²)",
      },
      {
        question:
          "An R-L circuit has a resistance of 3 Ω and an inductive reactance of 4 Ω. What is its impedance?",
        options: ["7 Ω", "1 Ω", "5 Ω", "12 Ω"],
        correctAnswer: "5 Ω",
      },
      {
        question: "In a series R-C circuit, the voltage:",
        options: [
          "Leads the current",
          "Is in-phase with the current",
          "Lags the current",
          "Is always zero",
        ],
        correctAnswer: "Lags the current",
      },
      {
        question:
          "An R-C circuit has a resistance R=8Ω and capacitive reactance Xc=6Ω. The tangent of the phase angle (tan φ) is:",
        options: ["-0.75", "0.75", "-1.33", "1.33"],
        correctAnswer: "-0.75",
      },
      {
        question:
          "For a series R-L-C circuit, what is the condition for resonance?",
        options: ["X_L > X_C", "X_C > X_L", "X_L = X_C", "R = 0"],
        correctAnswer: "X_L = X_C",
      },
      {
        question:
          "In a series R-L-C circuit, if X_L > X_C, the circuit is predominantly:",
        options: [
          "Resistive",
          "Capacitive (current leads voltage)",
          "Inductive (current lags voltage)",
          "At resonance",
        ],
        correctAnswer: "Inductive (current lags voltage)",
      },
      {
        question:
          "In a series R-L-C circuit, R = 8 Ω, X_L = 12 Ω, and X_C = 6 Ω. What is the total impedance (Z)?",
        options: ["26 Ω", "10 Ω", "14 Ω", "6 Ω"],
        correctAnswer: "10 Ω",
      },
      {
        question:
          "In a phasor diagram for a series RLC circuit, V_R=30V, V_L=50V, and V_C=10V. What is the total voltage V?",
        options: ["90V", "70V", "50V", "40V"],
        correctAnswer: "50V",
      },
      {
        question:
          "The power factor (cos φ) in a series A.C. circuit is defined as:",
        options: ["Z / R", "R / Z", "X_L / R", "X_C / Z"],
        correctAnswer: "R / Z",
      },
      {
        question:
          "What is the power factor of a purely reactive circuit (containing only an inductor or capacitor)?",
        options: ["1", "0", "-1", "0.707"],
        correctAnswer: "0",
      },
      {
        question:
          "The real power consumed in an A.C. circuit is given by P = V_rms * I_rms * cos(φ). What does cos(φ) represent?",
        options: ["Impedance", "Reactance", "Power Factor", "Phase Angle"],
        correctAnswer: "Power Factor",
      },
      {
        question: "What is a key characteristic of electromagnetic (EM) waves?",
        options: [
          "They require a medium to propagate",
          "They are longitudinal waves",
          "They do not need a medium to propagate",
          "Their electric and magnetic fields are parallel",
        ],
        correctAnswer: "They do not need a medium to propagate",
      },
      {
        question:
          "In an EM wave, the angle between the electric field (E), the magnetic field (B), and the direction of propagation is:",
        options: ["0°", "45°", "90°", "180°"],
        correctAnswer: "90°",
      },
      {
        question: "Which of the following EM waves has the highest frequency?",
        options: ["Visible Light", "Ultraviolet", "X-Rays", "Gamma Rays"],
        correctAnswer: "Gamma Rays",
      },
];
export default questions;

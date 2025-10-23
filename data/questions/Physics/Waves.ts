import { Question } from "../../../types";

const questions: Question[] = [
  {
    question:
      "What is the fundamental frequency (f₁) for a closed-end pipe of length L, where v is the speed of sound?",
    options: ["v / L", "v / 2L", "v / 4L", "2v / L"],
    correctAnswer: "v / 4L",
  },
  {
    question:
      "What is the fundamental frequency (f₁) for an open-end pipe of length L?",
    options: ["v / L", "v / 2L", "v / 4L", "v / 8L"],
    correctAnswer: "v / 2L",
  },
  {
    question:
      "The fundamental frequency (1st Harmonic) for a stretched string fixed at both ends (length L) is given by:",
    options: [
      "$f_1 = v / 2L$",
      "$f_1 = v / 4L$",
      "$f_1 = v / L$",
      "$f_1 = 2v / L$",
    ],
    correctAnswer: "$f_1 = v / 2L$",
  },
  {
    question:
      "A closed-end organ pipe (closed at one end) produces which harmonics?",
    options: [
      "Only odd harmonics (1, 3, 5...)",
      "Only even harmonics (2, 4, 6...)",
      "All harmonics (1, 2, 3...)",
      "No harmonics, only the fundamental",
    ],
    correctAnswer: "Only odd harmonics (1, 3, 5...)",
  },
  {
    question:
      "An open-end organ pipe (open at both ends) produces which harmonics?",
    options: [
      "Only odd harmonics",
      "Only even harmonics",
      "All harmonics (odd and even)",
      "Only the 1st and 2nd harmonics",
    ],
    correctAnswer: "All harmonics (odd and even)",
  },
  {
    question:
      "A stretched string fixed at both ends is plucked. Which harmonics will be present?",
    options: [
      "Only odd harmonics",
      "Only even harmonics",
      "All harmonics (odd and even)",
      "Only the fundamental frequency",
    ],
    correctAnswer: "All harmonics (odd and even)",
  },
  {
    question: "The speed of sound in a gas is directly proportional to:",
    options: [
      "The absolute temperature (T)",
      "The square of the absolute temperature (T²)",
      "The square root of the absolute temperature (√T)",
      "The Celsius temperature (t)",
    ],
    correctAnswer: "The square root of the absolute temperature (√T)",
  },
  {
    question:
      "For every 1°C rise in temperature, the speed of sound in air increases by approximately:",
    options: ["0.61 m/s", "1.22 m/s", "6.1 m/s", "0.33 m/s"],
    correctAnswer: "0.61 m/s",
  },
  {
    question:
      "What is the effect of changing the pressure of a gas on the speed of sound, assuming the temperature remains constant?",
    options: [
      "Speed increases proportionally",
      "Speed decreases proportionally",
      "No effect",
      "Speed increases with the square of pressure",
    ],
    correctAnswer: "No effect",
  },
  {
    question:
      "How does the speed of sound in moist air compare to the speed of sound in dry air?",
    options: [
      "It is greater in moist air",
      "It is greater in dry air",
      "It is the same in both",
      "It depends on the pressure",
    ],
    correctAnswer: "It is greater in moist air",
  },
  {
    question:
      "Beats are a phenomenon of regular variation in sound intensity (loudness) caused by the superposition of two waves with:",
    options: [
      "Slightly different frequencies",
      "Identical frequencies",
      "Slightly different amplitudes",
      "The same phase",
    ],
    correctAnswer: "Slightly different frequencies",
  },
  {
    question:
      "A tuning fork with a frequency of 256 Hz is sounded together with another tuning fork, and 4 beats per second are heard. What is a possible frequency for the second fork?",
    options: ["256 Hz", "250 Hz", "260 Hz", "1024 Hz"],
    correctAnswer: "260 Hz",
  },
  {
    question:
      "In a stationary (standing) wave, what is the distance between two consecutive nodes?",
    options: ["λ", "λ / 2", "λ / 4", "2λ"],
    correctAnswer: "λ / 2",
  },
  {
    question:
      "What is the distance between a node and the next (adjacent) antinode in a stationary wave?",
    options: ["λ", "λ / 2", "λ / 4", "λ / 8"],
    correctAnswer: "λ / 4",
  },
  {
    question:
      "Constructive interference occurs between two identical waves when their path difference is:",
    options: ["nλ", "(n+1/2)λ", "λ / 4", "(n+1/4)λ"],
    correctAnswer: "nλ",
  },
  {
    question:
      "Destructive interference occurs when the path difference between two identical waves is:",
    options: ["nλ", "(n+1/2)λ", "2nλ", "λ / 3"],
    correctAnswer: "(n+1/2)λ",
  },
  {
    question:
      "The speed of a transverse wave in a stretched string (mass per unit length μ, tension T) is given by $v = √(T/μ)$. If the tension (T) in the string is quadrupled, the speed of the wave will:",
    options: ["Be halved", "Be doubled", "Be quadrupled", "Remain the same"],
    correctAnswer: "Be doubled",
  },
  {
    question: "Why can sound waves not be polarized?",
    options: [
      "Because they are electromagnetic",
      "Because they are longitudinal",
      "Because they are transverse",
      "Because they travel slower than light",
    ],
    correctAnswer: "Because they are longitudinal",
  },
  {
    question: "What is the frequency range for audible sound waves?",
    options: [
      "Below 20 Hz",
      "20 Hz to 20,000 Hz",
      "Above 20,000 Hz",
      "0 Hz to 100 Hz",
    ],
    correctAnswer: "20 Hz to 20,000 Hz",
  },
  {
    question:
      "In which type of wave do the particles of the medium vibrate at right angles (perpendicular) to the direction of wave propagation?",
    options: [
      "Longitudinal waves",
      "Transverse waves",
      "Sound waves",
      "Stationary waves",
    ],
    correctAnswer: "Transverse waves",
  },
  {
    question:
      "In which type of wave do the particles of the medium vibrate parallel to the direction of wave propagation?",
    options: [
      "Longitudinal waves",
      "Transverse waves",
      "Light waves",
      "Water waves",
    ],
    correctAnswer: "Longitudinal waves",
  },
  {
    question:
      "When a wave passes from one medium to another, which of its properties does **not** change?",
    options: ["Velocity", "Wavelength", "Frequency", "Amplitude"],
    correctAnswer: "Frequency",
  },
  {
    question:
      "Laplace corrected Newton's formula for the speed of sound, stating that the process is:",
    options: ["Isothermal", "Isobaric", "Isochoric", "Adiabatic"],
    correctAnswer: "Adiabatic",
  },
  {
    question: "What do waves transport?",
    options: [
      "Matter only",
      "Energy and momentum only",
      "Matter, energy, and momentum",
      "Neither matter nor energy",
    ],
    correctAnswer: "Energy and momentum only",
  },
  {
    question: "A sound wave with a frequency of 15 Hz is classified as:",
    options: ["Audible", "Infrasonic", "Ultrasonic", "Supersonic"],
    correctAnswer: "Infrasonic",
  },
];
export default questions;

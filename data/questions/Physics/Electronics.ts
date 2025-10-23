import { Question } from "../../../types";

const questions: Question[] = [
  {
    question:
      "In a P-type semiconductor, what are the majority and minority charge carriers, respectively?",
    options: [
      "Electrons, Holes",
      "Holes, Electrons",
      "Holes, Protons",
      "Electrons, Neutrons",
    ],
    correctAnswer: "Holes, Electrons",
  },
  {
    question: "Which type of doping is used to create an N-type semiconductor?",
    options: [
      "Trivalent doping",
      "Pentavalent doping",
      "Divalent doping",
      "Monovalent doping",
    ],
    correctAnswer: "Pentavalent doping",
  },
  {
    question:
      "A P-type semiconductor acts as an ________ site due to the presence of holes.",
    options: ["acceptor", "donor", "neutral", "insulator"],
    correctAnswer: "acceptor",
  },
  {
    question:
      "What is the approximate potential barrier for a Germanium (Ge) PN junction diode?",
    options: ["0.1 V", "0.3 V", "0.7 V", "1.1 V"],
    correctAnswer: "0.3 V",
  },
  {
    question:
      "For a Silicon (Si) diode, the potential barrier is approximately:",
    options: ["0.3 V", "0.5 V", "0.7 V", "0.9 V"],
    correctAnswer: "0.7 V",
  },
  {
    question:
      "How must a PN junction be connected for it to be forward-biased?",
    options: [
      "P-type to negative, N-type to positive",
      "P-type to positive, N-type to negative",
      "Both to positive",
      "Both to negative",
    ],
    correctAnswer: "P-type to positive, N-type to negative",
  },
  {
    question:
      "What happens to the width of the potential barrier in a forward-biased diode?",
    options: [
      "It increases",
      "It remains the same",
      "It decreases gradually",
      "It becomes infinite",
    ],
    correctAnswer: "It decreases gradually",
  },
  {
    question: "In a reverse-biased PN junction:",
    options: [
      "The barrier width decreases, and current is maximum.",
      "The barrier width increases, and current is minimal.",
      "The P-type is connected to the positive terminal.",
      "The external field supports the barrier field.",
    ],
    correctAnswer: "The barrier width increases, and current is minimal.",
  },
  {
    question:
      "An N-type semiconductor has a high concentration of electrons and acts as a ________ site.",
    options: ["acceptor", "insulating", "neutral", "donor"],
    correctAnswer: "donor",
  },
  {
    question:
      "What is the primary function of a diode in an electronic circuit?",
    options: [
      "To amplify a signal",
      "To act as a rectifier",
      "To store charge",
      "To provide resistance",
    ],
    correctAnswer: "To act as a rectifier",
  },
  {
    question:
      "The process of converting an alternating current (AC) into a direct current (DC) is called:",
    options: ["Amplification", "Oscillation", "Rectification", "Modulation"],
    correctAnswer: "Rectification",
  },
  {
    question:
      "If the input frequency to a half-wave rectifier is 60 Hz, what is the output frequency?",
    options: ["30 Hz", "60 Hz", "120 Hz", "0 Hz"],
    correctAnswer: "60 Hz",
  },
  {
    question:
      "What is the maximum theoretical efficiency of a half-wave rectifier?",
    options: ["100%", "81.2%", "50%", "40.6%"],
    correctAnswer: "40.6%",
  },
  {
    question: "The ripple factor of a half-wave rectifier is:",
    options: ["0.48", "1.0", "1.21", "2.0"],
    correctAnswer: "1.21",
  },
  {
    question:
      "A half-wave rectifier has a peak output voltage (V₀) of 10 V. What is its RMS voltage (V_RMS)?",
    options: ["10 V", "7.07 V", "5 V", "14.1 V"],
    correctAnswer: "5 V",
  },
  {
    question:
      "The peak inverse voltage (PIV) across the diode in a half-wave rectifier is equal to:",
    options: ["V₀ / 2", "V₀", "2V₀", "V₀ / √2"],
    correctAnswer: "V₀",
  },
  {
    question: "The peak factor of a half-wave rectifier is:",
    options: ["1.21", "√2", "1", "2"],
    correctAnswer: "2",
  },
  {
    question:
      "If an AC signal of 50 Hz is applied to a full-wave rectifier, what will be the frequency of the output DC signal?",
    options: ["25 Hz", "50 Hz", "100 Hz", "200 Hz"],
    correctAnswer: "100 Hz",
  },
  {
    question: "What is the maximum efficiency of a full-wave rectifier?",
    options: ["40.6%", "75.5%", "81.2%", "95.1%"],
    correctAnswer: "81.2%",
  },
  {
    question:
      "A full-wave rectifier has a significantly lower ripple factor than a half-wave rectifier. What is its value?",
    options: ["1.21", "1.0", "0.81", "0.48"],
    correctAnswer: "0.48",
  },
  {
    question:
      "For a full-wave rectifier, if the peak voltage is V₀, the RMS voltage (V_RMS) is:",
    options: ["V₀ / 2", "V₀", "2V₀", "V₀ / √2"],
    correctAnswer: "V₀ / √2",
  },
  {
    question:
      "A full-wave bridge rectifier is connected to a transformer with a peak output voltage of 12 V. What is the PIV for the diodes?",
    options: ["6 V", "12 V", "24 V", "17 V"],
    correctAnswer: "12 V",
  },
  {
    question:
      "A full-wave rectifier using a centre-tap transformer has a peak voltage of 15 V across each half of the secondary winding. What is the PIV for each diode?",
    options: ["15 V", "7.5 V", "30 V", "10.6 V"],
    correctAnswer: "30 V",
  },
  {
    question: "The peak factor for a full-wave rectified sine wave is:",
    options: ["2", "√2", "1.21", "0.48"],
    correctAnswer: "√2",
  },
  {
    question:
      "A full-wave rectifier has a peak output voltage (V₀) of 20 V. What is its approximate RMS voltage (V_RMS)?",
    options: ["20 V", "10 V", "28.2 V", "14.14 V"],
    correctAnswer: "14.14 V",
  },
  {
    question: "Comparing rectifiers, which statement is true?",
    options: [
      "Half-wave has higher efficiency than full-wave.",
      "Full-wave has a higher ripple factor than half-wave.",
      "Full-wave output frequency is double the input frequency.",
      "Half-wave PIV is always higher than full-wave PIV.",
    ],
    correctAnswer: "Full-wave output frequency is double the input frequency.",
  },
];
export default questions;

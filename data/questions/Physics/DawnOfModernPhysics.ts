import { Question } from "../../../types";

const questions: Question[] = [
  {
    question:
      "Who first introduced the concept of light energy being composed of discrete packets, or 'quanta,' to explain blackbody radiation?",
    options: [
      "Albert Einstein",
      "Max Planck",
      "Louis de Broglie",
      "Carl Anderson",
    ],
    correctAnswer: "Max Planck",
  },
  {
    question: "According to modern physics, what is the rest mass of a photon?",
    options: [
      "Equal to an electron's mass",
      "Infinitesimally small but not zero",
      "Zero",
      "Dependent on its energy",
    ],
    correctAnswer: "Zero",
  },
  {
    question:
      "The energy of a photon is given by the formula E = hf. This means a photon's energy is directly proportional to its:",
    options: ["Wavelength", "Speed", "Frequency", "Mass"],
    correctAnswer: "Frequency",
  },
  {
    question:
      "Despite having no rest mass, a photon carries momentum. What is the formula for a photon's momentum (p)?",
    options: ["p = hf", "p = h/λ", "p = mc²", "p = E/c²"],
    correctAnswer: "p = h/λ",
  },
  {
    question:
      "How do photons behave in the presence of an electric or magnetic field?",
    options: [
      "They are deflected towards the positive pole.",
      "They are deflected towards the negative pole.",
      "They are not deflected.",
      "They oscillate within the field.",
    ],
    correctAnswer: "They are not deflected.",
  },
  {
    question:
      "The photoelectric effect is the emission of ________ from a metal surface when light shines on it.",
    options: ["protons", "photons", "neutrons", "electrons"],
    correctAnswer: "electrons",
  },
  {
    question:
      "In the photoelectric effect, increasing the intensity of the light will:",
    options: [
      "Increase the kinetic energy of the emitted electrons.",
      "Increase the number of emitted electrons.",
      "Increase both the number and kinetic energy of electrons.",
      "Have no effect on the emission.",
    ],
    correctAnswer: "Increase the number of emitted electrons.",
  },
  {
    question:
      "What happens in the photoelectric effect if the frequency of the incident light is below the 'threshold frequency' (f₀)?",
    options: [
      "Electrons are emitted with very low energy.",
      "Fewer electrons are emitted.",
      "No electrons are emitted, regardless of intensity.",
      "The metal becomes positively charged.",
    ],
    correctAnswer: "No electrons are emitted, regardless of intensity.",
  },
  {
    question:
      "Einstein's photoelectric equation is K.E.max = hf - ϕ₀. What does the term ϕ₀ (work function) represent?",
    options: [
      "The total energy of the incident photon.",
      "The kinetic energy of the electron.",
      "The energy required for an electron to escape the metal surface.",
      "The threshold frequency of the metal.",
    ],
    correctAnswer:
      "The energy required for an electron to escape the metal surface.",
  },
  {
    question:
      "The nearly instantaneous emission of electrons in the photoelectric effect was a major failure of which theory?",
    options: [
      "The particle theory of light",
      "The quantum theory",
      "The classical wave theory of light",
      "The theory of relativity",
    ],
    correctAnswer: "The classical wave theory of light",
  },
  {
    question:
      "The Compton effect involves the scattering of a high-energy photon by a(n):",
    options: ["proton", "atomic nucleus", "electron", "neutron"],
    correctAnswer: "electron",
  },
  {
    question:
      "After a photon undergoes Compton scattering, its wavelength is observed to be:",
    options: [
      "shorter (higher frequency)",
      "longer (lower frequency)",
      "unchanged",
      "zero",
    ],
    correctAnswer: "longer (lower frequency)",
  },
  {
    question:
      "The Compton effect is explained by treating the interaction as an elastic collision where both ________ and ________ are conserved.",
    options: [
      "mass, charge",
      "energy, momentum",
      "wavelength, frequency",
      "charge, momentum",
    ],
    correctAnswer: "energy, momentum",
  },
  {
    question:
      "The Compton shift (Δλ) is at its maximum when the photon is scattered at an angle of:",
    options: ["0°", "45°", "90°", "180°"],
    correctAnswer: "180°",
  },
  {
    question:
      "The Compton effect provides definitive experimental proof that photons possess particle-like ________.",
    options: ["mass", "charge", "momentum", "volume"],
    correctAnswer: "momentum",
  },
  {
    question:
      "What is the name of the process where a high-energy photon transforms into an electron-positron pair?",
    options: [
      "Annihilation",
      "Compton Scattering",
      "Pair Production",
      "Photoelectric Effect",
    ],
    correctAnswer: "Pair Production",
  },
  {
    question:
      "For pair production to occur, the incident photon must have a minimum energy of:",
    options: [
      "0.51 MeV",
      "1.02 MeV",
      "1.21 GeV",
      "There is no minimum energy.",
    ],
    correctAnswer: "1.02 MeV",
  },
  {
    question: "Why must pair production occur near a heavy atomic nucleus?",
    options: [
      "To provide the necessary energy.",
      "To conserve momentum.",
      "To create a positron.",
      "To absorb excess electrons.",
    ],
    correctAnswer: "To conserve momentum.",
  },
  {
    question:
      "Annihilation is the process where a particle and its antiparticle collide, converting their mass into:",
    options: [
      "a single, more massive particle",
      "a black hole",
      "energy, typically two photons",
      "a shower of quarks",
    ],
    correctAnswer: "energy, typically two photons",
  },
  {
    question:
      "Who first predicted the existence of antimatter, such as the positron?",
    options: [
      "Carl Anderson",
      "Albert Einstein",
      "Louis de Broglie",
      "P.A.M. Dirac",
    ],
    correctAnswer: "P.A.M. Dirac",
  },
  {
    question:
      "How does an antiparticle, like a positron, compare to its corresponding particle, an electron?",
    options: [
      "Same mass, opposite charge",
      "Opposite mass, same charge",
      "Different mass and charge",
      "Same mass and charge",
    ],
    correctAnswer: "Same mass, opposite charge",
  },
  {
    question:
      "Who proposed the revolutionary idea that particles, like electrons, should also exhibit wave-like behavior?",
    options: [
      "Max Planck",
      "Albert Einstein",
      "Louis de Broglie",
      "Davisson and Germer",
    ],
    correctAnswer: "Louis de Broglie",
  },
  {
    question:
      "The de Broglie wavelength of a particle is given by λ = h/p. This means the wavelength is ________ proportional to the particle's momentum.",
    options: ["directly", "inversely", "not", "exponentially"],
    correctAnswer: "inversely",
  },
  {
    question:
      "Why is the wave nature of a macroscopic object like a baseball not observable?",
    options: [
      "It travels too slowly.",
      "It has no charge.",
      "Its wavelength is infinitesimally small due to its large mass.",
      "It does not have a de Broglie wavelength.",
    ],
    correctAnswer:
      "Its wavelength is infinitesimally small due to its large mass.",
  },
  {
    question:
      "The Davisson-Germer experiment provided the first direct proof of de Broglie's hypothesis by observing the ________ of electrons from a nickel crystal.",
    options: ["reflection", "refraction", "annihilation", "diffraction"],
    correctAnswer: "diffraction",
  },
  {
    question:
      "The electron microscope can achieve much higher resolutions than a light microscope because:",
    options: [
      "Electrons are larger than photons.",
      "The wavelength of electrons can be made much shorter than that of visible light.",
      "Electrons travel faster than light.",
      "The electron beam is more intense.",
    ],
    correctAnswer:
      "The wavelength of electrons can be made much shorter than that of visible light.",
  },
  {
    question:
      "While a photon has zero rest mass, it possesses a 'kinetic mass' in motion. Which formula represents this kinetic mass?",
    options: ["m = E/c", "m = hf", "m = cλ/h", "m = h/cλ"],
    correctAnswer: "m = h/cλ",
  },
  {
    question:
      "In the context of the photoelectric effect, what is the 'stopping potential'?",
    options: [
      "The potential that starts the electron flow.",
      "The potential of the metal surface.",
      "The negative potential required to stop the photoelectric current.",
      "The energy of the most energetic electron.",
    ],
    correctAnswer:
      "The negative potential required to stop the photoelectric current.",
  },
  {
    question:
      "The value of the stopping potential in a photoelectric experiment depends directly on the:",
    options: [
      "intensity of the incident light.",
      "frequency of the incident light.",
      "nature of the metal surface.",
      "time of illumination.",
    ],
    correctAnswer: "frequency of the incident light.",
  },
  {
    question:
      "The work function (ϕ₀) of a metal is the minimum energy required for an electron to escape. What does its value depend on?",
    options: [
      "The frequency of the incident light.",
      "The intensity of the incident light.",
      "The nature of the metal and its surface impurities.",
      "The temperature of the metal.",
    ],
    correctAnswer: "The nature of the metal and its surface impurities.",
  },
  {
    question:
      "Which of these is a key observation of the photoelectric effect that classical wave theory could NOT explain?",
    options: [
      "Light can be reflected.",
      "The instantaneous emission of electrons.",
      "Light exerts pressure.",
      "The color of the light affects the experiment.",
    ],
    correctAnswer: "The instantaneous emission of electrons.",
  },
  {
    question:
      "The Compton effect is most readily observed using high-energy photons like:",
    options: ["Radio waves", "Microwaves", "Visible light", "X-rays"],
    correctAnswer: "X-rays",
  },
  {
    question:
      "The term h/m₀c in the Compton shift formula is a constant known as the:",
    options: [
      "Planck constant",
      "de Broglie wavelength of the photon",
      "Compton wavelength of the electron",
      "Work function of the electron",
    ],
    correctAnswer: "Compton wavelength of the electron",
  },
  {
    question:
      "At what scattering angle (θ) is the Compton shift equal to zero?",
    options: ["θ = 180°", "θ = 90°", "θ = 45°", "θ = 0°"],
    correctAnswer: "θ = 0°",
  },
  {
    question: "The 'materialization of energy' refers to which process?",
    options: [
      "Annihilation",
      "Pair Production",
      "Compton Effect",
      "Photoelectric Effect",
    ],
    correctAnswer: "Pair Production",
  },
  {
    question:
      "When an electron and a positron annihilate, they typically produce two photons traveling in opposite directions. Why opposite directions?",
    options: [
      "To conserve energy",
      "To conserve charge",
      "To conserve momentum",
      "To create a magnetic field",
    ],
    correctAnswer: "To conserve momentum",
  },
  {
    question:
      "Each photon produced during electron-positron annihilation carries away how much energy?",
    options: [
      "1.02 MeV",
      "0.51 MeV",
      "17.5 keV",
      "The total energy of the pair",
    ],
    correctAnswer: "0.51 MeV",
  },
  {
    question:
      "The existence of antimatter was first predicted by P.A.M. Dirac and later confirmed by Carl Anderson through the study of:",
    options: [
      "blackbody radiation",
      "the photoelectric effect",
      "cosmic rays",
      "atomic spectra",
    ],
    correctAnswer: "cosmic rays",
  },
  {
    question:
      "For a macroscopic object like a 200g ball moving at 5 m/hr, the de Broglie wavelength is practically undetectable because it is:",
    options: [
      "extremely large",
      "infinitesimally small",
      "equal to the ball's diameter",
      "only present at light speed",
    ],
    correctAnswer: "infinitesimally small",
  },
  {
    question:
      "What was the accelerating potential used for the electron beam in the Davisson-Germer experiment?",
    options: ["0.3 V", "0.7 V", "54 V", "1.02 MV"],
    correctAnswer: "54 V",
  },
  {
    question:
      "In the Davisson-Germer experiment, the strong peak of diffracted electrons was observed at a scattering angle of:",
    options: ["0°", "45°", "65°", "90°"],
    correctAnswer: "65°",
  },
  {
    question:
      "The Nobel Prize in Physics for the discovery of the wave nature of electrons was awarded to:",
    options: [
      "Einstein and Planck",
      "Dirac and Anderson",
      "Hallwach and Compton",
      "Davisson and Thomson",
    ],
    correctAnswer: "Davisson and Thomson",
  },
  {
    question:
      "If a photon's rest mass is zero, what can be concluded about its momentum?",
    options: [
      "Its momentum is also zero.",
      "Its momentum is non-zero and given by p = h/λ.",
      "Its momentum is infinite.",
      "Its momentum depends on its kinetic mass only.",
    ],
    correctAnswer: "Its momentum is non-zero and given by p = h/λ.",
  },
  {
    question: "What is the reverse process of pair production?",
    options: [
      "Compton scattering",
      "The photoelectric effect",
      "Annihilation of matter",
      "Blackbody radiation",
    ],
    correctAnswer: "Annihilation of matter",
  },
  {
    question:
      "If an electron and a proton have the same de Broglie wavelength, which particle must have a higher speed?",
    options: [
      "The proton",
      "The electron",
      "They must have the same speed",
      "It is impossible for them to have the same wavelength",
    ],
    correctAnswer: "The electron",
  },
  {
    question:
      "If a proton and an alpha particle have the same de Broglie wavelength, what other physical quantity must also be the same for both?",
    options: [
      "Their kinetic energy",
      "Their speed",
      "Their electric charge",
      "Their momentum",
    ],
    correctAnswer: "Their momentum",
  },
  {
    question:
      "Hallwach's early experiments with the photoelectric effect used a setup involving two zinc plates in a vacuum tube and ________ light.",
    options: ["infrared", "visible", "ultraviolet", "microwave"],
    correctAnswer: "ultraviolet",
  },
  {
    question:
      "The principle that quantized energy applies to any oscillating system, not just light, was a key insight from:",
    options: [
      "Einstein's photon theory",
      "Planck's work on blackbody radiation",
      "De Broglie's hypothesis",
      "The Compton effect",
    ],
    correctAnswer: "Planck's work on blackbody radiation",
  },
  {
    question:
      "The Compton wavelength of an electron has a specific, constant value. What is this approximate value?",
    options: [
      "3.00 x 10^8 m",
      "1.66 x 10^-10 m",
      "2.43 x 10^-12 m",
      "9.11 x 10^-31 m",
    ],
    correctAnswer: "2.43 x 10^-12 m",
  },
  {
    question:
      "What is the experimentally observed time lag between light incidence and electron emission in the photoelectric effect?",
    options: [
      "Approximately 1 second",
      "Less than 10^-8 seconds",
      "Several minutes",
      "It depends on the light intensity",
    ],
    correctAnswer: "Less than 10^-8 seconds",
  },
  {
    question:
      "The Davisson-Germer experiment used Bragg's law (2d sinθ = mλ) to analyze their results. What does this law describe?",
    options: [
      "The conservation of momentum",
      "The conditions for constructive interference of waves",
      "The energy of a photon",
      "The rate of electron emission",
    ],
    correctAnswer: "The conditions for constructive interference of waves",
  },
  {
    question:
      "Which formula correctly relates the maximum kinetic energy of a photoelectron (K.E.max) to the stopping potential (V₀)?",
    options: [
      "K.E.max = V₀ / e",
      "K.E.max = e / V₀",
      "K.E.max = eV₀",
      "K.E.max = V₀² / e",
    ],
    correctAnswer: "K.E.max = eV₀",
  },
  {
    question:
      "What was the approximate atomic spacing (d) for the nickel crystal used in the Davisson-Germer experiment?",
    options: [
      "1.66 x 10^-10 m",
      "2.43 x 10^-12 m",
      "54 x 10^-9 m",
      "0.91 x 10^-10 m",
    ],
    correctAnswer: "0.91 x 10^-10 m",
  },
  {
    question:
      "How is the photoelectric current (i) related to the intensity of incident light (I)?",
    options: [
      "i is inversely proportional to I",
      "i is proportional to I²",
      "i is directly proportional to I",
      "i is independent of I",
    ],
    correctAnswer: "i is directly proportional to I",
  },
  {
    question:
      "Which equation correctly describes energy conservation in pair production?",
    options: [
      "hf = m₀c²",
      "hf = 2m₀c² + K.E.",
      "hf = K.E.e- + K.E.e+",
      "E = mc²",
    ],
    correctAnswer: "hf = 2m₀c² + K.E.",
  },
  {
    question:
      "The de Broglie wavelength for an electron accelerated through a potential difference (V) is given by:",
    options: ["λ = h / mv", "λ = h / √(2mVe)", "λ = hc / E", "λ = 2d sinθ"],
    correctAnswer: "λ = h / √(2mVe)",
  },
  {
    question:
      "The work function (ϕ₀) can be calculated using the threshold frequency (f₀) with the formula:",
    options: ["ϕ₀ = h / f₀", "ϕ₀ = f₀ / h", "ϕ₀ = hf₀", "ϕ₀ = c / f₀"],
    correctAnswer: "ϕ₀ = hf₀",
  },
  {
    question:
      "Einstein's mass variation equation shows a photon's rest mass is zero because for a photon, its velocity (v) equals the speed of light (c). What does this cause in the equation m₀ = m√(1 - v²/c²)?",
    options: [
      "The term under the square root becomes 1",
      "The term under the square root becomes negative",
      "The term under the square root becomes zero",
      "The equation becomes invalid",
    ],
    correctAnswer: "The term under the square root becomes zero",
  },
  {
    question:
      "The Davisson-Germer experiment showed a remarkable agreement between the theoretical de Broglie wavelength and the experimental wavelength of electrons, which were approximately:",
    options: [
      "1.66 Å and 1.65 Å",
      "2.43 pm and 2.41 pm",
      "0.91 Å and 0.90 Å",
      "54 nm and 53 nm",
    ],
    correctAnswer: "1.66 Å and 1.65 Å",
  },
  {
    question:
      "The typical energy of X-ray photons used to observe the Compton effect is:",
    options: [
      "Less than 1 eV",
      "Around 2-3 eV",
      "1.02 MeV",
      "Greater than or equal to 17.5 keV",
    ],
    correctAnswer: "Greater than or equal to 17.5 keV",
  },
];
export default questions;

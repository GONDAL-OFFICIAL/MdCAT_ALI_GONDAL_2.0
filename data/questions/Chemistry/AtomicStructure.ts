
import { Question } from '../../../types';

const questions: Question[] = [
      {
        question:
          "Who is credited with the discovery of positive rays (canal rays)?",
        options: [
          "J.J. Thomson",
          "James Chadwick",
          "Niels Bohr",
          "Eugene Goldstein",
        ],
        correctAnswer: "Eugene Goldstein",
      },
      {
        question:
          "Where do positive rays originate in a modified Crookes tube?",
        options: [
          "From the cathode surface",
          "From the anode surface",
          "From the residual gas molecules in the tube",
          "From outside the tube",
        ],
        correctAnswer: "From the residual gas molecules in the tube",
      },
      {
        question:
          "How does the charge-to-mass (e/m) ratio of positive rays compare to that of electrons?",
        options: [
          "It is identical.",
          "It is considerably larger.",
          "It is considerably smaller.",
          "It is always zero.",
        ],
        correctAnswer: "It is considerably smaller.",
      },
      {
        question: "The e/m ratio of positive rays is not constant because:",
        options: [
          "Their charge changes.",
          "Their mass depends on the gas used.",
          "The electric field varies.",
          "The cathode material changes.",
        ],
        correctAnswer: "Their mass depends on the gas used.",
      },
      {
        question:
          "Which gas, when used in a discharge tube, produces positive rays with the highest e/m ratio?",
        options: ["Helium", "Neon", "Hydrogen", "Oxygen"],
        correctAnswer: "Hydrogen",
      },
      {
        question:
          "Which subatomic particle has a relative mass of approximately 1/1836th of a proton?",
        options: ["Neutron", "Positron", "Electron", "Quark"],
        correctAnswer: "Electron",
      },
      {
        question:
          "According to Bohr's model, what happens when an electron jumps from a higher energy orbit (E₂) to a lower energy orbit (E₁)?",
        options: [
          "It absorbs a photon of energy E₂ + E₁.",
          "It emits a photon of energy E₂ - E₁.",
          "It absorbs a photon of energy E₂ - E₁.",
          "It remains in a stable state without any energy change.",
        ],
        correctAnswer: "It emits a photon of energy E₂ - E₁.",
      },
      {
        question:
          "The spectral lines in the Lyman series of the hydrogen spectrum are found in which region?",
        options: ["Visible", "Infrared", "Ultraviolet", "Microwave"],
        correctAnswer: "Ultraviolet",
      },
      {
        question:
          "An electron transition in a hydrogen atom results in the emission of a photon of green light. What is the principal quantum number (n) of the final state?",
        options: ["n=1", "n=2", "n=3", "n=4"],
        correctAnswer: "n=2",
      },
      {
        question:
          "In the Bohr model, the radius of an orbit (r_n) is directly proportional to:",
        options: ["n", "1/n", "n²", "1/n²"],
        correctAnswer: "n²",
      },
      {
        question:
          "In the Bohr model, how does the energy difference between consecutive orbits change as 'n' increases?",
        options: [
          "It increases.",
          "It decreases.",
          "It stays the same.",
          "It becomes zero.",
        ],
        correctAnswer: "It decreases.",
      },
      {
        question:
          "Which quantum number primarily determines the energy level and size of an orbital?",
        options: [
          "Azimuthal (l)",
          "Magnetic (m_l)",
          "Principal (n)",
          "Spin (m_s)",
        ],
        correctAnswer: "Principal (n)",
      },
      {
        question: "What is the shape of a p-orbital?",
        options: ["Spherical", "Dumbbell", "Cloverleaf", "Complex multi-lobed"],
        correctAnswer: "Dumbbell",
      },
      {
        question:
          "For a given principal quantum number n=3, what are the possible values for the azimuthal quantum number (l)?",
        options: ["0, 1, 2, 3", "1, 2, 3", "0, 1, 2", "-2, -1, 0, 1, 2"],
        correctAnswer: "0, 1, 2",
      },
      {
        question:
          "If the azimuthal quantum number (l) is 2, what are the possible values for the magnetic quantum number (m_l)?",
        options: ["0, 1, 2", "-1, 0, +1", "0", "-2, -1, 0, +1, +2"],
        correctAnswer: "-2, -1, 0, +1, +2",
      },
      {
        question:
          "Which of the following sets of quantum numbers (n, l, m_l, m_s) is NOT allowed?",
        options: [
          "(3, 2, -1, +1/2)",
          "(4, 0, 0, -1/2)",
          "(2, 2, 1, +1/2)",
          "(5, 1, 0, +1/2)",
        ],
        correctAnswer: "(2, 2, 1, +1/2)",
      },
      {
        question: "How many orbitals are in a d-subshell (l=2)?",
        options: ["1", "3", "5", "7"],
        correctAnswer: "5",
      },
      {
        question:
          "The d(z²) orbital is unique because its shape consists of a dumbbell along the z-axis and a:",
        options: [
          "Second dumbbell on the x-axis",
          "Torus (donut shape) in the xy-plane",
          "Four lobes between the axes",
          "Spherical node",
        ],
        correctAnswer: "Torus (donut shape) in the xy-plane",
      },
      {
        question:
          "The Aufbau principle states that electrons fill orbitals in order of:",
        options: [
          "Increasing atomic number",
          "Decreasing energy",
          "Increasing energy",
          "Alphabetical order of subshell",
        ],
        correctAnswer: "Increasing energy",
      },
      {
        question:
          "What is the maximum number of electrons an orbital can hold, according to the Pauli Exclusion Principle?",
        options: ["1", "2", "6", "10"],
        correctAnswer: "2",
      },
      {
        question:
          "Hund's rule states that for degenerate orbitals, electrons will:",
        options: [
          "Pair up immediately",
          "Occupy separate orbitals with parallel spins before pairing",
          "Occupy separate orbitals with opposite spins before pairing",
          "Only occupy one orbital per subshell",
        ],
        correctAnswer:
          "Occupy separate orbitals with parallel spins before pairing",
      },
      {
        question:
          "What is the correct electronic configuration for a neutral Copper atom (Cu, Z=29)?",
        options: [
          "[Ar] 4s² 3d⁹",
          "[Ar] 4s¹ 3d¹⁰",
          "[Ar] 4s⁰ 3d¹¹",
          "[Ar] 3d⁹ 4s²",
        ],
        correctAnswer: "[Ar] 4s¹ 3d¹⁰",
      },
      {
        question:
          "What is the correct electronic configuration for the Fe²⁺ ion? (Fe, Z=26)",
        options: ["[Ar] 4s² 3d⁴", "[Ar] 4s⁰ 3d⁶", "[Ar] 4s¹ 3d⁵", "[Ar] 3d⁵"],
        correctAnswer: "[Ar] 4s⁰ 3d⁶",
      },
      {
        question:
          "The concept that half-filled and completely-filled subshells have extra stability explains the anomalous configuration of:",
        options: [
          "Sodium and Chlorine",
          "Chromium and Copper",
          "Helium and Neon",
          "Iron and Cobalt",
        ],
        correctAnswer: "Chromium and Copper",
      },
      {
        question:
          "The Balmer series corresponds to electron transitions ending at n=2. These transitions primarily emit light in what region of the spectrum?",
        options: ["Ultraviolet", "Infrared", "Visible", "X-ray"],
        correctAnswer: "Visible",
      },
      {
        question: "An orbital with n=4 and l=1 is designated as:",
        options: ["4s", "4p", "4d", "4f"],
        correctAnswer: "4p",
      },
      {
        question:
          "Which principle or rule dictates the filling order of orbitals using the (n+l) value?",
        options: [
          "Hund's Rule",
          "Pauli Exclusion Principle",
          "Aufbau Principle",
          "Bohr's Postulates",
        ],
        correctAnswer: "Aufbau Principle",
      },
      {
        question: "The discovery of the neutron is credited to:",
        options: [
          "J.J. Thomson",
          "Ernest Rutherford",
          "Eugene Goldstein",
          "James Chadwick",
        ],
        correctAnswer: "James Chadwick",
      },
      {
        question: "Which of the following describes a nodal plane?",
        options: [
          "A region of maximum electron probability.",
          "A region where the probability of finding an electron is exactly zero.",
          "The path an electron takes around the nucleus.",
          "The boundary surface of an orbital.",
        ],
        correctAnswer:
          "A region where the probability of finding an electron is exactly zero.",
      },
      {
        question:
          "How many p-orbitals exist in a given energy level (for n > 1)?",
        options: ["1", "3", "5", "7"],
        correctAnswer: "3",
      },
      {
        question:
          "The spin quantum number (m_s) can have which of the following values?",
        options: ["0 and 1", "-1, 0, +1", "Only +1/2", "+1/2 and -1/2"],
        correctAnswer: "+1/2 and -1/2",
      },
      {
        question:
          "Which subatomic particle has a positive charge and a mass of approximately 1 amu?",
        options: ["Electron", "Positron", "Proton", "Neutron"],
        correctAnswer: "Proton",
      },
      {
        question:
          "The Paschen series in the hydrogen spectrum involves electron transitions that end at which principal quantum number?",
        options: ["n=1", "n=2", "n=3", "n=4"],
        correctAnswer: "n=3",
      },
      {
        question: "Which orbital shape is described as 'cloverleaf'?",
        options: ["s-orbital", "p-orbital", "d-orbital", "f-orbital"],
        correctAnswer: "d-orbital",
      },
      {
        question:
          "When forming a cation from a main group element, electrons are removed from the:",
        options: [
          "Innermost shell",
          "Outermost shell",
          "d-subshell only",
          "s-subshell only",
        ],
        correctAnswer: "Outermost shell",
      },
      {
        question: "The mass of an atom is concentrated almost entirely in its:",
        options: ["Electron cloud", "Outermost shell", "Nucleus", "Orbitals"],
        correctAnswer: "Nucleus",
      },
      {
        question:
          "Planck's theory states that energy is emitted or absorbed in discrete packets called:",
        options: ["Electrons", "Protons", "Quanta", "Orbits"],
        correctAnswer: "Quanta",
      },
      {
        question:
          "The angular momentum of an electron in a Bohr orbit is an integral multiple of:",
        options: ["h", "h / 2π", "2π / h", "h²"],
        correctAnswer: "h / 2π",
      },
      {
        question:
          "The f-subshell (l=3) first appears in which principal energy level?",
        options: ["n=2", "n=3", "n=4", "n=5"],
        correctAnswer: "n=4",
      },
      {
        question:
          "How many unpaired electrons are in a neutral nitrogen atom (Z=7)?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "3",
      },
      {
        question:
          "A positive ion produced from hydrogen gas (H₂) is simply a(n):",
        options: ["Electron", "Neutron", "Hydride ion", "Proton"],
        correctAnswer: "Proton",
      },
      {
        question: "Which of the following is NOT a property of positive rays?",
        options: [
          "They carry a positive charge.",
          "They are deflected by electric fields.",
          "They have a constant e/m ratio.",
          "Their penetration power is very low.",
        ],
        correctAnswer: "They have a constant e/m ratio.",
      },
      {
        question:
          "The 'm' in the e/m ratio for a canal ray refers to the mass of:",
        options: [
          "A single electron",
          "A single proton",
          "The ion of the gas in the tube",
          "The cathode material",
        ],
        correctAnswer: "The ion of the gas in the tube",
      },
      {
        question:
          "Which orbital is filled after the 3p orbital, according to the Aufbau principle?",
        options: ["3d", "4s", "4p", "3s"],
        correctAnswer: "4s",
      },
      {
        question:
          "A set of orbitals with the same energy level (e.g., the three p-orbitals) are called:",
        options: [
          "Isotopes",
          "Degenerate orbitals",
          "Valence orbitals",
          "Core orbitals",
        ],
        correctAnswer: "Degenerate orbitals",
      },
      {
        question:
          "The concept that 'orbits are not equally spaced' is a key conclusion from which aspect of Bohr's model?",
        options: [
          "The energy formula (E_n ∝ 1/n²)",
          "The radius formula (r_n ∝ n²)",
          "The quantization of angular momentum",
          "The stability of stationary states",
        ],
        correctAnswer: "The radius formula (r_n ∝ n²)",
      },
      {
        question:
          "What is the maximum number of electrons that can be accommodated in a shell with principal quantum number n=3?",
        options: ["2", "8", "18", "32"],
        correctAnswer: "18",
      },
      {
        question: "Which of the following orbitals does not exist?",
        options: ["1s", "3d", "2d", "4f"],
        correctAnswer: "2d",
      },
      {
        question:
          "The probability of finding an electron is uniform in all directions for which type of orbital?",
        options: ["p-orbital", "s-orbital", "d-orbital", "f-orbital"],
        correctAnswer: "s-orbital",
      },
      {
        question:
          "The modern quantum-mechanical model describes an electron's location in terms of:",
        options: [
          "A fixed circular path",
          "A region of high probability (orbital)",
          "An elliptical orbit",
          "A planetary model",
        ],
        correctAnswer: "A region of high probability (orbital)",
      },
      {
        question:
          "For the p-subshell (l=1), the magnetic quantum number (m_l) can have values of -1, 0, and +1. This indicates that there are:",
        options: [
          "Three p-orbitals with different shapes",
          "Three p-orbitals with different sizes",
          "Three p-orbitals with different orientations",
          "One p-orbital that can hold three electrons",
        ],
        correctAnswer: "Three p-orbitals with different orientations",
      },
      {
        question:
          "An element has the electron configuration [Ar] 4s² 3d⁵. This element is:",
        options: [
          "Chromium (Cr)",
          "Manganese (Mn)",
          "Iron (Fe)",
          "Vanadium (V)",
        ],
        correctAnswer: "Manganese (Mn)",
      },
      {
        question:
          "A 'last-in, first-out' logic for removing electrons during ionization is a common fallacy for which group of elements?",
        options: [
          "Alkali metals",
          "Halogens",
          "Noble gases",
          "Transition metals",
        ],
        correctAnswer: "Transition metals",
      },
      {
        question:
          "The phenomenon where spectral lines split in a magnetic field is known as the:",
        options: [
          "Photoelectric effect",
          "Compton effect",
          "Zeeman effect",
          "Aufbau principle",
        ],
        correctAnswer: "Zeeman effect",
      },
      {
        question: "How many nodal planes does a p_x orbital have?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "1",
      },
      {
        question:
          "Which of the following is the 'cardinal rule' for ionizing transition metals?",
        options: [
          "Remove electrons from the d-orbital first.",
          "Remove electrons from the highest principal quantum number (n) shell first.",
          "Remove electrons in the reverse order of filling.",
          "Remove one electron from s and one from d.",
        ],
        correctAnswer:
          "Remove electrons from the highest principal quantum number (n) shell first.",
      },
      {
        question:
          "The Brackett series in the hydrogen spectrum, found in the infrared region, corresponds to transitions ending at:",
        options: ["n=2", "n=3", "n=4", "n=5"],
        correctAnswer: "n=4",
      },
      {
        question:
          "The quantum number 'l' determines the shape of the orbital. What is the letter designation for l=3?",
        options: ["s", "p", "d", "f"],
        correctAnswer: "f",
      },
      {
        question: "The energy of a photon is directly proportional to its:",
        options: ["Wavelength", "Velocity", "Frequency", "Amplitude"],
        correctAnswer: "Frequency",
      },
      {
        question:
          "Which of the d-orbitals have their lobes oriented *along* the coordinate axes?",
        options: [
          "d(xy), d(yz), d(xz)",
          "d(x²-y²), d(z²)",
          "All five d-orbitals",
          "Only the d(xy) orbital",
        ],
        correctAnswer: "d(x²-y²), d(z²)",
      },
];
export default questions;

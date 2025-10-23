import { Question } from "../../../types";

const questions: Question[] = [
  // Coulomb's Law & Dielectrics (~5)
  {
    question:
      "Two point charges, +2 C and +3 C, are separated by 1 m in a vacuum. What is the magnitude of the electrostatic force between them? (Use k = 9 x 10⁹ Nm²/C²)",
    options: ["6 N", "18 x 10⁹ N", "54 x 10⁹ N", "6 x 10⁹ N"],
    correctAnswer: "54 x 10⁹ N",
  },
  {
    question:
      "The force between two charges in a vacuum is 100 N. When the same charges are placed the same distance apart in a dielectric medium with a dielectric constant ($epsilon_r$) of 5, what is the new force?",
    options: ["100 N", "500 N", "20 N", "25 N"],
    correctAnswer: "20 N",
  },
  {
    question:
      "How does inserting a dielectric medium between two point charges affect the electrostatic force between them?",
    options: [
      "It increases the force",
      "It decreases the force",
      "It has no effect on the force",
      "It reverses the direction of the force",
    ],
    correctAnswer: "It decreases the force",
  },
  {
    question:
      "According to Coulomb's Law, if the distance (r) between two point charges is doubled, the force (F) between them becomes:",
    options: ["2F", "F/2", "4F", "F/4"],
    correctAnswer: "F/4",
  },
  {
    question:
      "What is the value of the constant k in Coulomb's Law (in SI units, vacuum)?",
    options: [
      "9 x 10⁹ Nm²/C²",
      "1 / (4πε₀)",
      "8.85 x 10⁻¹² C²/Nm²",
      "Both A and B are correct representations",
    ],
    correctAnswer: "Both A and B are correct representations",
  },
  // E-Field, E-Lines, & Potential (~7)
  {
    question:
      "What is the magnitude of the electric field intensity at a distance of 3 m from a point charge of +2 C in a vacuum? (Use k = 9 x 10⁹ Nm²/C²)",
    options: ["6 x 10⁹ N/C", "2 x 10⁹ N/C", "18 x 10⁹ N/C", "0.67 x 10⁹ N/C"],
    correctAnswer: "2 x 10⁹ N/C",
  },
  {
    question:
      "A charge of -3 C is placed in a uniform electric field of 100 N/C. What is the magnitude and direction of the force experienced by the charge?",
    options: [
      "300 N, in the direction of E",
      "300 N, opposite to the direction of E",
      "33.3 N, in the direction of E",
      "33.3 N, opposite to the direction of E",
    ],
    correctAnswer: "300 N, opposite to the direction of E",
  },
  {
    question:
      "Calculate the absolute electric potential at a point 2 m away from a +4 C point charge in a vacuum. (Use k = 9 x 10⁹ Nm²/C²)",
    options: ["18 x 10⁹ V", "9 x 10⁹ V", "36 x 10⁹ V", "8 x 10⁹ V"],
    correctAnswer: "18 x 10⁹ V",
  },
  {
    question:
      "The potential difference between two points separated by 0.5 m is 10 V. If the electric field is uniform, what is its magnitude?",
    options: ["5 N/C", "10 N/C", "20 N/C", "0.05 N/C"],
    correctAnswer: "20 N/C",
  },
  {
    question:
      "The electric field lines around an isolated positive point charge are directed:",
    options: [
      "Radially inwards",
      "Radially outwards",
      "In circles around the charge",
      "Parallel to each other",
    ],
    correctAnswer: "Radially outwards",
  },
  {
    question: "Why do electric field lines never intersect?",
    options: [
      "They are parallel",
      "The field must have a unique direction at any point",
      "They repel each other",
      "They only exist in two dimensions",
    ],
    correctAnswer: "The field must have a unique direction at any point",
  },
  {
    question:
      "How much work is done when a +5 C charge is moved between two points on the same equipotential surface?",
    options: ["5 J", "0 J", "Depends on the potential value", "Infinite work"],
    correctAnswer: "0 J",
  },
  {
    question:
      "Which of the following are valid units for electric field intensity?",
    options: ["N/C only", "V/m only", "Both N/C and V/m", "J/C"],
    correctAnswer: "Both N/C and V/m",
  },
  // Gauss's Law (~5)
  {
    question:
      "What is the electric field intensity inside a hollow metallic sphere carrying a net charge, assuming electrostatic equilibrium?",
    options: [
      "Infinite",
      "Zero",
      "Uniform but non-zero",
      "Depends on the charge",
    ],
    correctAnswer: "Zero",
  },
  {
    question:
      "The electric field due to an infinite sheet of charge with surface charge density σ is given by:",
    options: ["E = σ / ε₀", "E = σ / 2ε₀", "E = 2σ / ε₀", "E = 0"],
    correctAnswer: "E = σ / 2ε₀",
  },
  {
    question:
      "How is the electric field described near an infinite sheet of charge?",
    options: [
      "It decreases with distance",
      "It increases with distance",
      "It is zero",
      "It is uniform",
    ],
    correctAnswer: "It is uniform",
  },
  {
    question:
      "What is the magnitude of the uniform electric field between two oppositely charged parallel plates with surface charge density σ?",
    options: ["E = σ / 2ε₀", "E = 2σ / ε₀", "E = σ / ε₀", "E = 0"],
    correctAnswer: "E = σ / ε₀",
  },
  {
    question:
      "How does the electric field between two large, oppositely charged parallel plates compare to the field near a single infinite sheet with the same charge density σ?",
    options: [
      "It is half the magnitude",
      "It is the same magnitude",
      "It is double the magnitude",
      "It is zero",
    ],
    correctAnswer: "It is double the magnitude",
  },
  // Parallel Plate Capacitors (~8)
  {
    question:
      "A capacitor stores 10 C of charge when connected to a 5 V battery. What is its capacitance?",
    options: ["50 F", "2 F", "0.5 F", "15 F"],
    correctAnswer: "2 F",
  },
  {
    question:
      "A parallel plate capacitor has plates of area A separated by distance d in a vacuum. If the area A is doubled and the distance d is halved, the new capacitance will be:",
    options: ["C/4", "C", "2C", "4C"],
    correctAnswer: "4C",
  },
  {
    question:
      "Increasing the plate area (A) of a parallel plate capacitor will:",
    options: [
      "Increase capacitance",
      "Decrease capacitance",
      "Not affect capacitance",
      "Increase voltage",
    ],
    correctAnswer: "Increase capacitance",
  },
  {
    question:
      "Decreasing the separation (d) between the plates of a parallel plate capacitor will:",
    options: [
      "Decrease capacitance",
      "Increase capacitance",
      "Not affect capacitance",
      "Decrease charge",
    ],
    correctAnswer: "Increase capacitance",
  },
  {
    question:
      "A parallel plate capacitor has a capacitance of 10 μF in vacuum. If a dielectric with $epsilon_r = 4$ is inserted between the plates, what is the new capacitance?",
    options: ["2.5 μF", "10 μF", "40 μF", "14 μF"],
    correctAnswer: "40 μF",
  },
  {
    question:
      "Inserting a dielectric material between the plates of a capacitor always:",
    options: [
      "Decreases capacitance",
      "Increases capacitance",
      "Increases the electric field",
      "Decreases the stored charge",
    ],
    correctAnswer: "Increases capacitance",
  },
  {
    question:
      "How does a dielectric material affect the electric field between the plates of a charged, isolated capacitor?",
    options: [
      "It increases the electric field",
      "It has no effect on the electric field",
      "It decreases the electric field",
      "It reverses the electric field",
    ],
    correctAnswer: "It decreases the electric field",
  },
  {
    question: "What is the SI unit of capacitance?",
    options: ["Volt (V)", "Coulomb (C)", "Joule (J)", "Farad (F)"],
    correctAnswer: "Farad (F)",
  },
  // Battery Connected vs. Removed (~7)
  {
    question:
      "A capacitor is charged by a battery and then the battery is removed. Which quantity remains constant?",
    options: ["Voltage (V)", "Capacitance (C)", "Charge (Q)", "Energy (U)"],
    correctAnswer: "Charge (Q)",
  },
  {
    question:
      "A capacitor is charged and the battery removed. If the plate separation (d) is then increased, what happens to the voltage (V) across the plates?",
    options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
    correctAnswer: "Increases",
  },
  {
    question:
      "A capacitor is charged and the battery removed. If the plate separation (d) is increased, what happens to the capacitance (C)?",
    options: ["Increases", "Decreases", "Remains constant", "Becomes infinite"],
    correctAnswer: "Decreases",
  },
  {
    question:
      "A capacitor remains connected to a battery. Which quantity remains constant?",
    options: [
      "Charge (Q)",
      "Capacitance (C)",
      "Voltage (V)",
      "Electric Field (E)",
    ],
    correctAnswer: "Voltage (V)",
  },
  {
    question:
      "A capacitor remains connected to a battery. If the plate separation (d) is increased, what happens to the charge (Q) stored on the plates?",
    options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
    correctAnswer: "Decreases",
  },
  {
    question:
      "A capacitor remains connected to a battery. If the plate separation (d) is increased, what happens to the capacitance (C)?",
    options: ["Increases", "Decreases", "Remains constant", "Becomes infinite"],
    correctAnswer: "Decreases",
  },
  {
    question:
      "A parallel plate capacitor is charged by a battery, which is then removed. A dielectric slab ($epsilon_r > 1$) is inserted between the plates. What happens to the stored charge (Q) and voltage (V)?",
    options: [
      "Q constant, V decreases",
      "Q decreases, V constant",
      "Q constant, V increases",
      "Q increases, V decreases",
    ],
    correctAnswer: "Q constant, V decreases",
  },
  // Energy Stored (~5)
  {
    question:
      "A 10 μF capacitor is charged to a potential difference of 5 V. How much energy is stored?",
    options: ["25 μJ", "50 μJ", "125 μJ", "250 μJ"],
    correctAnswer: "125 μJ",
  },
  {
    question:
      "A capacitor stores 20 C of charge at a potential difference of 4 V. The energy stored is:",
    options: ["80 J", "40 J", "5 J", "10 J"],
    correctAnswer: "40 J",
  },
  {
    question:
      "A 2 F capacitor has 16 C of charge stored on it. How much energy is stored?",
    options: ["128 J", "64 J", "32 J", "16 J"],
    correctAnswer: "64 J",
  },
  {
    question:
      "On a graph plotting charge (Q) on the y-axis versus voltage (V) on the x-axis for a capacitor, what does the area under the graph represent?",
    options: [
      "Capacitance",
      "Electric field",
      "Energy stored",
      "Power dissipated",
    ],
    correctAnswer: "Energy stored",
  },
  {
    question: "Where is the energy stored in a charged capacitor?",
    options: [
      "In the charges on the plates",
      "In the dielectric material",
      "In the electric field between the plates",
      "In the connecting wires",
    ],
    correctAnswer: "In the electric field between the plates",
  },
  // Capacitor Grouping (~8)
  {
    question:
      "Two capacitors, 3 μF and 6 μF, are connected in series. What is their equivalent capacitance?",
    options: ["9 μF", "2 μF", "3 μF", "0.5 μF"],
    correctAnswer: "2 μF",
  },
  {
    question:
      "Three capacitors, 2 μF, 3 μF, and 4 μF, are connected in parallel. What is their equivalent capacitance?",
    options: ["0.92 μF", "6 μF", "9 μF", "24 μF"],
    correctAnswer: "9 μF",
  },
  {
    question:
      "If four identical capacitors, each with capacitance C, are connected in series, the equivalent capacitance is:",
    options: ["4C", "C/4", "2C", "C/2"],
    correctAnswer: "C/4",
  },
  {
    question:
      "If three identical capacitors, each with capacitance C, are connected in parallel, the equivalent capacitance is:",
    options: ["C/3", "C", "3C", "9C"],
    correctAnswer: "3C",
  },
  {
    question:
      "When capacitors are connected in series, which quantity is the same for each capacitor?",
    options: ["Voltage", "Capacitance", "Charge", "Energy stored"],
    correctAnswer: "Charge",
  },
  {
    question:
      "When capacitors are connected in parallel, which quantity is the same across each capacitor?",
    options: ["Charge", "Voltage", "Capacitance", "Resistance"],
    correctAnswer: "Voltage",
  },
  {
    question:
      "How does the total voltage relate to individual voltages for capacitors connected in series?",
    options: [
      "V_total = V₁ = V₂ = ...",
      "V_total = V₁ + V₂ + ...",
      "1/V_total = 1/V₁ + 1/V₂ + ...",
      "V_total is always zero",
    ],
    correctAnswer: "V_total = V₁ + V₂ + ...",
  },
  {
    question:
      "How does the total charge relate to individual charges for capacitors connected in parallel?",
    options: [
      "Q_total = Q₁ = Q₂ = ...",
      "1/Q_total = 1/Q₁ + 1/Q₂ + ...",
      "Q_total = Q₁ + Q₂ + ...",
      "Q_total is always zero",
    ],
    correctAnswer: "Q_total = Q₁ + Q₂ + ...",
  },
  // RC Circuits (~5)
  {
    question:
      "An RC circuit has a resistance of 100 Ω and a capacitance of 50 μF. What is the time constant (τ)?",
    options: ["5000 s", "2 s", "0.005 s", "0.5 s"],
    correctAnswer: "0.005 s",
  },
  {
    question:
      "During the charging of a capacitor in an RC circuit, after one time constant (t = τ), the charge on the capacitor reaches approximately what percentage of its maximum value?",
    options: ["37%", "50%", "63%", "100%"],
    correctAnswer: "63%",
  },
  {
    question:
      "During the discharging of a capacitor in an RC circuit, after one time constant (t = τ), what percentage of the initial charge has been lost?",
    options: ["37%", "50%", "63%", "100%"],
    correctAnswer: "63%",
  },
  {
    question:
      "A smaller time constant (τ = RC) in an RC circuit means that the capacitor:",
    options: [
      "Charges and discharges more slowly",
      "Charges and discharges sooner (faster)",
      "Stores more maximum charge",
      "Experiences a higher maximum voltage",
    ],
    correctAnswer: "Charges and discharges sooner (faster)",
  },
  {
    question: "What is the SI unit for the time constant (τ) of an RC circuit?",
    options: ["Farad", "Ohm", "Second", "Coulomb"],
    correctAnswer: "Second",
  },
  // Additional Less Common Points
  {
    question: "What is the definition of the electron volt (eV)?",
    options: [
      "The energy of an electron at rest",
      "The voltage required to stop an electron",
      "The energy gained/lost by an electron moving through 1 V",
      "The charge of one electron",
    ],
    correctAnswer: "The energy gained/lost by an electron moving through 1 V",
  },
  {
    question: "Convert 1 electron volt (eV) to Joules (J).",
    options: ["1 J", "1.6 x 10⁻¹⁹ J", "9.1 x 10⁻³¹ J", "6.63 x 10⁻³⁴ J"],
    correctAnswer: "1.6 x 10⁻¹⁹ J",
  },
  {
    question:
      "The properties that electric charge is both conserved and quantized mean that:",
    options: [
      "Charge can be created and destroyed, and exists in any amount",
      "Charge cannot be created or destroyed, and exists only in discrete multiples of the elementary charge",
      "Charge depends on the medium, and can be fractional",
      "Charge is always positive, and spreads out evenly",
    ],
    correctAnswer:
      "Charge cannot be created or destroyed, and exists only in discrete multiples of the elementary charge",
  },
  {
    question:
      "Which statement correctly compares electrostatic force and gravitational force?",
    options: [
      "Both depend on the medium",
      "Gravity can be repulsive, Electrostatic is always attractive",
      "Electrostatic force depends on the medium, Gravity does not",
      "Both are always attractive",
    ],
    correctAnswer:
      "Electrostatic force depends on the medium, Gravity does not",
  },
  {
    question:
      "The energy stored per unit volume in an electric field is given by the formula:",
    options: ["½ ε₀ E", "½ εᵣ ε₀ E²", "ε₀ E²", "½ CV²"],
    correctAnswer: "½ εᵣ ε₀ E²",
  },
  {
    question: "What happens when an AC supply is connected to a capacitor?",
    options: [
      "A large DC charge builds up",
      "The capacitor continuously charges and discharges",
      "The capacitor acts like an open circuit",
      "The AC supply is short-circuited",
    ],
    correctAnswer: "The capacitor continuously charges and discharges",
  },
];
export default questions;

import { Question } from "../../../types";

const questions: Question[] = [
  // Resistance/Resistivity (~8)
  {
    question:
      "A wire of length L and area A has resistance R. If the length is doubled to 2L and the area is halved to A/2, what is the new resistance?",
    options: ["R", "2R", "R/4", "4R"],
    correctAnswer: "4R",
  },
  {
    question: "The resistivity (ρ) of a material depends on:",
    options: [
      "Its length and area",
      "Its shape",
      "The nature of the material and temperature",
      "The current flowing through it",
    ],
    correctAnswer: "The nature of the material and temperature",
  },
  {
    question:
      "A copper wire has length L, area A, and resistance R. If it is stretched such that its length becomes 2L (assuming volume constant, so area becomes A/2), its resistance becomes:",
    options: ["R", "2R", "4R", "R/2"],
    correctAnswer: "4R", // Note: Derived from R = ρL/A and volume conservation L*A=const
  },
  {
    question:
      "What is the primary factor that determines a material's resistivity?",
    options: [
      "Length of the wire",
      "Cross-sectional area",
      "Nature of the material",
      "Applied voltage",
    ],
    correctAnswer: "Nature of the material",
  },
  {
    question:
      "If a wire's resistance is 10 Ω, what will be the resistance of another wire of the same material, same length, but double the cross-sectional area?",
    options: ["10 Ω", "20 Ω", "5 Ω", "40 Ω"],
    correctAnswer: "5 Ω",
  },
  {
    question:
      "The formula relating resistance (R), resistivity (ρ), length (L), and area (A) is:",
    options: ["R = ρA/L", "R = ρL/A", "R = L/(ρA)", "R = A/(ρL)"],
    correctAnswer: "R = ρL/A",
  },
  {
    question:
      "Resistivity is an intrinsic property, meaning it is independent of:",
    options: [
      "Temperature",
      "Nature of material",
      "Size and shape",
      "Applied field",
    ],
    correctAnswer: "Size and shape",
  },
  {
    question:
      "If the length of a wire is halved and its cross-sectional area is doubled, the resistance R will become:",
    options: ["R/4", "4R", "R", "R/2"],
    correctAnswer: "R/4",
  },
  // Temperature Effects (~7)
  {
    question:
      "For conductors like metals, the temperature coefficient of resistance (α) is:",
    options: ["Positive", "Negative", "Zero", "Variable"],
    correctAnswer: "Positive",
  },
  {
    question:
      "What happens to the resistance of a semiconductor like silicon when its temperature increases?",
    options: [
      "It increases",
      "It decreases",
      "It remains constant",
      "It becomes zero",
    ],
    correctAnswer: "It decreases",
  },
  {
    question:
      "An insulator's resistance generally _______ as temperature increases.",
    options: ["Increases", "Decreases", "Stays the same", "Becomes infinite"],
    correctAnswer: "Decreases",
  },
  {
    question:
      "Materials like Constantan are used for standard resistors because their temperature coefficient (α) is:",
    options: [
      "Very large and positive",
      "Very large and negative",
      "Very small",
      "Exactly zero",
    ],
    correctAnswer: "Very small",
  },
  {
    question:
      "A graph of resistance versus temperature for a typical metal conductor would show:",
    options: [
      "A decreasing curve",
      "An increasing straight line (approximately)",
      "A horizontal line",
      "A sharply dropping curve",
    ],
    correctAnswer: "An increasing straight line (approximately)",
  },
  {
    question:
      "The temperature coefficient of resistance (α) is defined by the relation:",
    options: [
      "α = (R₀ - Rₜ) / (R₀ t)",
      "α = (Rₜ - R₀) / (R₀ t)",
      "α = R₀ / (Rₜ t)",
      "α = Rₜ / (R₀ t)",
    ],
    correctAnswer: "α = (Rₜ - R₀) / (R₀ t)",
  },
  {
    question:
      "If a material has a negative temperature coefficient (α), its resistance:",
    options: [
      "Increases with temperature",
      "Decreases with temperature",
      "Is independent of temperature",
      "Is always zero",
    ],
    correctAnswer: "Decreases with temperature",
  },
  // EMF vs. Vt (~8)
  {
    question:
      "A battery has an EMF (ε) of 12 V and an internal resistance (r) of 0.5 Ω. If it delivers a current (I) of 2 A to an external circuit, what is the terminal potential difference (Vt)?",
    options: ["12 V", "13 V", "11 V", "10 V"],
    correctAnswer: "11 V", // Vt = ε - Ir = 12 - (2 * 0.5) = 11 V
  },
  {
    question:
      "When a battery is discharging (providing current), how does its terminal potential difference (Vt) compare to its EMF (ε)?",
    options: ["Vt > ε", "Vt < ε", "Vt = ε", "Vt = 0"],
    correctAnswer: "Vt < ε",
  },
  {
    question:
      "The EMF of a source is defined as the potential difference across its terminals when:",
    options: [
      "Maximum current is drawn",
      "No current is drawn",
      "The source is charging",
      "The external resistance is zero",
    ],
    correctAnswer: "No current is drawn",
  },
  {
    question:
      "A battery with EMF 6 V and internal resistance 1 Ω is connected to a 5 Ω resistor. What current flows?",
    options: ["1 A", "1.2 A", "6 A", "5 A"],
    correctAnswer: "1 A", // I = ε / (R + r) = 6 / (5 + 1) = 1 A
  },
  {
    question:
      "Using the data from the previous question (ε=6V, r=1Ω, R=5Ω, I=1A), what is the terminal potential difference (Vt)?",
    options: ["6 V", "5 V", "1 V", "7 V"],
    correctAnswer: "5 V", // Vt = ε - Ir = 6 - (1 * 1) = 5 V OR Vt = IR = 1 * 5 = 5 V
  },
  {
    question:
      "Internal resistance (r) causes a voltage drop within the source itself when:",
    options: [
      "No current is flowing",
      "Current is flowing",
      "The source is ideal",
      "Temperature is low",
    ],
    correctAnswer: "Current is flowing",
  },
  {
    question:
      "The difference between the EMF (ε) and the terminal potential difference (Vt) of a discharging source is equal to:",
    options: ["IR", "I²R", "Ir", "ε/R"],
    correctAnswer: "Ir",
  },
  {
    question:
      "If the terminal potential difference (Vt) of a battery is measured to be equal to its EMF (ε), what can be concluded about the current (I) being drawn?",
    options: ["I is maximum", "I = 0", "I is negative", "I = ε/r"],
    correctAnswer: "I = 0",
  },
  // Power/Heat/kWh (~10)
  {
    question:
      "A resistor of 10 Ω has a current of 2 A flowing through it. What is the power dissipated?",
    options: ["20 W", "40 W", "5 W", "100 W"],
    correctAnswer: "40 W", // P = I²R = (2)² * 10 = 40 W
  },
  {
    question:
      "A device is rated at 100 W when connected to a 200 V supply. What is its resistance?",
    options: ["2 Ω", "0.5 Ω", "400 Ω", "100 Ω"],
    correctAnswer: "400 Ω", // P = V²/R => R = V²/P = (200)² / 100 = 400 Ω
  },
  {
    question:
      "A current of 3 A flows through a 5 Ω resistor for 10 seconds. How much heat is generated?",
    options: ["150 J", "75 J", "450 J", "90 J"],
    correctAnswer: "450 J", // H = I²Rt = (3)² * 5 * 10 = 450 J
  },
  {
    question:
      "Which of the following is NOT a valid formula for electric power (P)?",
    options: ["P = IV", "P = I²R", "P = V²/R", "P = IR/V"],
    correctAnswer: "P = IR/V",
  },
  {
    question: "How many Joules are equivalent to 1 kilowatt-hour (kWh)?",
    options: ["1000 J", "3600 J", "3.6 x 10⁶ J", "60 J"],
    correctAnswer: "3.6 x 10⁶ J",
  },
  {
    question:
      "A 2 kW heater is used for 3 hours. How much energy is consumed in kWh?",
    options: ["6 kWh", "2/3 kWh", "3 kWh", "1.5 kWh"],
    correctAnswer: "6 kWh", // Energy = Power (kW) * time (h) = 2 * 3 = 6 kWh
  },
  {
    question:
      "If the cost of electricity is Rs. 10 per kWh, what is the cost of running a 500 W device for 4 hours?",
    options: ["Rs. 2000", "Rs. 20", "Rs. 50", "Rs. 125"],
    correctAnswer: "Rs. 20", // Energy = 0.5 kW * 4 h = 2 kWh. Cost = 2 * 10 = Rs. 20
  },
  {
    question:
      "Joule's Law states that the heat produced in a resistor is proportional to:",
    options: [
      "Current (I)",
      "Square of the current (I²)",
      "Resistance (R)",
      "Both I² and R",
    ],
    correctAnswer: "Both I² and R",
  },
  {
    question:
      "If the voltage across a resistor is doubled, the power dissipated changes by a factor of:",
    options: ["1/2", "2", "1/4", "4"],
    correctAnswer: "4", // P = V²/R
  },
  {
    question:
      "The commercial unit used by electricity companies to measure energy consumption is:",
    options: ["Joule", "Watt", "Kilowatt-hour", "Ampere"],
    correctAnswer: "Kilowatt-hour",
  },
  // Bulbs (~7)
  {
    question:
      "Two bulbs, rated 40 W and 60 W, are connected in series to a voltage source. Which bulb will glow brighter?",
    options: [
      "The 40 W bulb",
      "The 60 W bulb",
      "Both will glow with equal brightness",
      "Neither will glow",
    ],
    correctAnswer: "The 40 W bulb", // Lesser wattage -> Higher resistance -> Brighter in series (P=I²R, I is same)
  },
  {
    question:
      "Two bulbs, rated 40 W and 60 W, are connected in parallel to a voltage source. Which bulb will glow brighter?",
    options: [
      "The 40 W bulb",
      "The 60 W bulb",
      "Both will glow with equal brightness",
      "Neither will glow",
    ],
    correctAnswer: "The 60 W bulb", // Greater wattage -> Lower resistance -> Brighter in parallel (P=V²/R, V is same)
  },
  {
    question:
      "Three bulbs with powers P₁, P₂, P₃ are connected in series. The total power consumed is:",
    options: [
      "P₁ + P₂ + P₃",
      "(P₁P₂P₃) / (P₁P₂ + P₂P₃ + P₁P₃)",
      "1/P₁ + 1/P₂ + 1/P₃",
      "Equivalent to 1/(1/P₁ + 1/P₂ + 1/P₃)",
    ],
    correctAnswer: "Equivalent to 1/(1/P₁ + 1/P₂ + 1/P₃)",
  },
  {
    question:
      "Three bulbs with powers P₁, P₂, P₃ are connected in parallel. The total power consumed is:",
    options: [
      "1/(1/P₁ + 1/P₂ + 1/P₃)",
      "P₁ + P₂ + P₃",
      "Average of P₁, P₂, P₃",
      "Depends on the voltage",
    ],
    correctAnswer: "P₁ + P₂ + P₃",
  },
  {
    question:
      "Why does the bulb with lower wattage glow brighter in a series connection?",
    options: [
      "It has lower resistance",
      "It draws more current",
      "It has higher resistance",
      "It has lower voltage across it",
    ],
    correctAnswer: "It has higher resistance",
  },
  {
    question:
      "Why does the bulb with higher wattage glow brighter in a parallel connection?",
    options: [
      "It has higher resistance",
      "It draws less current",
      "It has lower resistance",
      "It has lower voltage across it",
    ],
    correctAnswer: "It has lower resistance",
  },
  {
    question:
      "If two identical bulbs are connected in series, and then the same two bulbs are connected in parallel to the same source, the total power consumed in the parallel connection will be ____ times the power consumed in the series connection.",
    options: ["1/4", "1/2", "2", "4"],
    correctAnswer: "4", // P_series = V²/(2R), P_parallel = V²/(R/2) = 2V²/R = 4 * P_series
  },
  // Ohmic/Non-Ohmic/Graphs/Max Power (~5)
  {
    question:
      "A substance whose I-V graph is a straight line passing through the origin is described as:",
    options: ["Non-Ohmic", "Ohmic", "Semiconductor", "Insulator"],
    correctAnswer: "Ohmic",
  },
  {
    question:
      "A filament bulb exhibits non-Ohmic behavior because its resistance:",
    options: [
      "Decreases with temperature",
      "Remains constant with temperature",
      "Increases with temperature",
      "Is always zero",
    ],
    correctAnswer: "Increases with temperature",
  },
  {
    question:
      "The slope of a V-I graph (Voltage on y-axis, Current on x-axis) represents:",
    options: [
      "Conductance (1/R)",
      "Resistance (R)",
      "Power (P)",
      "Resistivity (ρ)",
    ],
    correctAnswer: "Resistance (R)",
  },
  {
    question:
      "Maximum power is transferred from a source to an external load resistor (R) when:",
    options: [
      "R is much larger than the internal resistance (r)",
      "R is much smaller than r",
      "R equals r",
      "R is zero",
    ],
    correctAnswer: "R equals r",
  },
  {
    question: "A semiconductor diode is an example of a(n) _______ device.",
    options: ["Ohmic", "Linear", "Non-Ohmic", "Resistive"],
    correctAnswer: "Non-Ohmic",
  },
  // Less Common Facts (~5)
  {
    question:
      "What is the typical order of magnitude for the drift velocity (v<0xE1><0xB5><0xA2>) of electrons in a conductor?",
    options: ["10³ m/s", "10⁻³ m/s", "3 x 10⁸ m/s", "1 m/s"],
    correctAnswer: "10⁻³ m/s",
  },
  {
    question: "Current density (J) is defined as:",
    options: [
      "Total current (I)",
      "Current per unit area (I/A)",
      "Charge per unit time (Q/t)",
      "Drift velocity (v<0xE1><0xB5><0xA2>)",
    ],
    correctAnswer: "Current per unit area (I/A)",
  },
  {
    question:
      "In electrolytes and gases, electric current is due to the flow of:",
    options: [
      "Free electrons only",
      "Positive ions only",
      "Negative ions only",
      "Both positive and negative ions",
    ],
    correctAnswer: "Both positive and negative ions",
  },
  {
    question:
      "Current density (J) is related to drift velocity (v<0xE1><0xB5><0xA2>), charge carrier density (n), and elementary charge (e) by the formula:",
    options: [
      "J = nev<0xE1><0xB5><0xA2>",
      "J = n/ev<0xE1><0xB5><0xA2>",
      "J = e/(nv<0xE1><0xB5><0xA2>)",
      "J = v<0xE1><0xB5><0xA2>/(ne)",
    ],
    correctAnswer: "J = nev<0xE1><0xB5><0xA2>",
  },
  {
    question:
      "Electric current (I) is considered a _______ quantity, while current density (J) is a _______ quantity.",
    options: [
      "vector, scalar",
      "scalar, vector",
      "scalar, scalar",
      "vector, vector",
    ],
    correctAnswer: "scalar, vector",
  },
];
export default questions;

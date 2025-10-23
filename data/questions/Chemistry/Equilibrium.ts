
import { Question } from '../../../types';

const questions: Question[] = [
      {
        question: "What is the defining condition of a chemical equilibrium?",
        options: [
          "The concentrations of reactants and products are equal.",
          "The forward and reverse reaction rates are equal.",
          "All molecular motion has ceased.",
          "The limiting reactants are fully consumed.",
        ],
        correctAnswer: "The forward and reverse reaction rates are equal.",
      },
      {
        question: "A system at dynamic equilibrium is characterized by:",
        options: [
          "Constant macroscopic properties.",
          "A genuinely static state at the molecular level.",
          "A reaction that has gone to completion.",
          "Zero reaction rate in both directions.",
        ],
        correctAnswer: "Constant macroscopic properties.",
      },
      {
        question:
          "Which of the following is a necessary requirement for establishing chemical equilibrium?",
        options: [
          "The presence of a catalyst.",
          "The system must be open to the atmosphere.",
          "The system must be closed.",
          "The reaction must be irreversible.",
        ],
        correctAnswer: "The system must be closed.",
      },
      {
        question:
          "The equilibrium constant, K_c, is dependent only on which factor?",
        options: [
          "Initial concentrations",
          "Pressure",
          "Presence of a catalyst",
          "Temperature",
        ],
        correctAnswer: "Temperature",
      },
      {
        question:
          "If the value of the equilibrium constant K_c is much larger than 1 (K_c >> 1), what does this imply?",
        options: [
          "The equilibrium lies far to the left, favoring reactants.",
          "The reaction is very slow.",
          "The equilibrium lies far to the right, favoring products.",
          "The concentrations of reactants and products are nearly equal.",
        ],
        correctAnswer:
          "The equilibrium lies far to the right, favoring products.",
      },
      {
        question:
          "For a gaseous reaction, when is the value of K_p equal to K_c?",
        options: [
          "When the reaction is endothermic.",
          "When the reaction is exothermic.",
          "When the change in the number of moles of gas (Δn) is zero.",
          "When the temperature is 298 K.",
        ],
        correctAnswer:
          "When the change in the number of moles of gas (Δn) is zero.",
      },
      {
        question: "How does a catalyst affect a system at equilibrium?",
        options: [
          "It increases the value of K_c.",
          "It shifts the equilibrium to favor products.",
          "It increases the rates of both forward and reverse reactions equally.",
          "It decreases the activation energy of the forward reaction only.",
        ],
        correctAnswer:
          "It increases the rates of both forward and reverse reactions equally.",
      },
      {
        question:
          "Consider the exothermic reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g). How will the equilibrium shift if the temperature is increased?",
        options: [
          "Shift to the right (favoring products)",
          "Shift to the left (favoring reactants)",
          "No change in equilibrium position",
          "The value of K_c will increase",
        ],
        correctAnswer: "Shift to the left (favoring reactants)",
      },
      {
        question:
          "For the reaction PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), how will an increase in pressure affect the equilibrium?",
        options: [
          "Shift to the right",
          "Shift to the left",
          "No change",
          "It will increase the rate constant",
        ],
        correctAnswer: "Shift to the left",
      },
      {
        question:
          "If the reaction quotient Q_c is less than K_c, the reaction must:",
        options: [
          "Proceed to the left to reach equilibrium.",
          "Proceed to the right to reach equilibrium.",
          "Already be at equilibrium.",
          "Stop completely.",
        ],
        correctAnswer: "Proceed to the right to reach equilibrium.",
      },
      {
        question:
          "Which of the following stresses will change the value of the equilibrium constant, K_c?",
        options: [
          "Changing the concentration of a reactant.",
          "Changing the pressure of the system.",
          "Adding a catalyst.",
          "Changing the temperature.",
        ],
        correctAnswer: "Changing the temperature.",
      },
      {
        question: "What is the Common Ion Effect?",
        options: [
          "The increase in solubility of a salt when a common ion is added.",
          "The decrease in the ionization of a weak electrolyte when a common ion is added.",
          "A solution that resists pH change.",
          "The product of ion concentrations in a saturated solution.",
        ],
        correctAnswer:
          "The decrease in the ionization of a weak electrolyte when a common ion is added.",
      },
      {
        question: "A buffer solution is typically composed of:",
        options: [
          "A strong acid and a strong base.",
          "A weak acid and its conjugate base.",
          "A salt dissolved in water.",
          "Two different strong acids.",
        ],
        correctAnswer: "A weak acid and its conjugate base.",
      },
      {
        question:
          "According to the Henderson-Hasselbalch equation, the pH of an acidic buffer is equal to the pK_a when:",
        options: [
          "The concentration of the weak acid is zero.",
          "The concentration of the conjugate base is zero.",
          "The concentrations of the weak acid and its conjugate base are equal.",
          "The solution is completely neutralized.",
        ],
        correctAnswer:
          "The concentrations of the weak acid and its conjugate base are equal.",
      },
      {
        question:
          "The solubility product constant, K_sp, represents the equilibrium between:",
        options: [
          "A weak acid and its ions.",
          "A gas and its dissolved form.",
          "An undissolved solid and its dissociated ions in solution.",
          "Reactants and products in a reversible reaction.",
        ],
        correctAnswer:
          "An undissolved solid and its dissociated ions in solution.",
      },
      {
        question:
          "For the reaction 2A(g) ⇌ B(g) + C(g), what is the correct expression for the equilibrium constant K_c?",
        options: [
          "[B][C] / [A]",
          "[B][C] / [A]²",
          "[A]² / [B][C]",
          "[A] / [B][C]",
        ],
        correctAnswer: "[B][C] / [A]²",
      },
      {
        question:
          "If you add more of reactant A to an equilibrium mixture, the reaction will shift to the right to consume the added A. This is an application of:",
        options: [
          "The Law of Mass Action",
          "The Arrhenius Equation",
          "Le Chatelier's Principle",
          "The Henderson-Hasselbalch Equation",
        ],
        correctAnswer: "Le Chatelier's Principle",
      },
      {
        question:
          "A buffer works by consuming added strong acid with its ____ component and added strong base with its ____ component.",
        options: [
          "acidic, basic",
          "basic, acidic",
          "acidic, acidic",
          "basic, basic",
        ],
        correctAnswer: "basic, acidic",
      },
      {
        question:
          "In an 'ICE' table used for equilibrium problems, what does 'C' stand for?",
        options: ["Concentration", "Constant", "Catalyst", "Change"],
        correctAnswer: "Change",
      },
      {
        question:
          "What is the pH of a solution where the concentration of H+ is 1.0 x 10⁻⁴ M?",
        options: ["10", "4", "-4", "1"],
        correctAnswer: "4",
      },
      {
        question:
          "If the forward reaction is endothermic, how will decreasing the temperature affect the equilibrium?",
        options: ["Shift right", "Shift left", "No effect", "Increase K_c"],
        correctAnswer: "Shift left",
      },
      {
        question: "What is the conjugate base of the weak acid H₂CO₃?",
        options: ["CO₃²⁻", "HCO₃⁻", "H₃CO₃⁺", "OH⁻"],
        correctAnswer: "HCO₃⁻",
      },
      {
        question:
          "If K_c for the reaction A + B ⇌ C is 4.0, what is K_c for the reaction C ⇌ A + B?",
        options: ["4.0", "2.0", "0.25", "-4.0"],
        correctAnswer: "0.25",
      },
      {
        question:
          "Adding an inert gas (like Argon) to a gaseous equilibrium at constant volume will:",
        options: [
          "Shift the equilibrium to the right",
          "Shift the equilibrium to the left",
          "Increase the total pressure but not shift the equilibrium",
          "Decrease the total pressure and shift the equilibrium",
        ],
        correctAnswer:
          "Increase the total pressure but not shift the equilibrium",
      },
      {
        question: "In the expression K_p = K_c(RT)Δⁿ, what does 'R' represent?",
        options: [
          "The reaction rate",
          "The universal gas constant",
          "The reactant concentration",
          "The reaction quotient",
        ],
        correctAnswer: "The universal gas constant",
      },
      {
        question:
          "If a strong base like NaOH is added to an acetic acid buffer (CH₃COOH/CH₃COO⁻), which component will react with it?",
        options: [
          "The acetate ion (CH₃COO⁻)",
          "The acetic acid (CH₃COOH)",
          "The sodium ion (Na⁺)",
          "Water (H₂O)",
        ],
        correctAnswer: "The acetic acid (CH₃COOH)",
      },
      {
        question:
          "The value of K_sp for AgCl is 1.8 x 10⁻¹⁰. This small value indicates that AgCl is:",
        options: [
          "Highly soluble in water",
          "Slightly soluble in water",
          "A strong electrolyte",
          "A gas at room temperature",
        ],
        correctAnswer: "Slightly soluble in water",
      },
      {
        question:
          "The state where a reaction appears to have stopped macroscopically but is still occurring at the molecular level is called:",
        options: [
          "Static equilibrium",
          "The transition state",
          "Dynamic equilibrium",
          "The rate-determining step",
        ],
        correctAnswer: "Dynamic equilibrium",
      },
      {
        question:
          "Which of the following describes the 'active mass' of a substance as defined by the Law of Mass Action?",
        options: [
          "Total mass in grams",
          "Molar concentration",
          "Density",
          "Partial pressure",
        ],
        correctAnswer: "Molar concentration",
      },
      {
        question:
          "In the reaction H₂(g) + I₂(g) ⇌ 2HI(g), how does the equilibrium shift when the volume is decreased (pressure is increased)?",
        options: ["Shifts left", "Shifts right", "No shift", "Reaction stops"],
        correctAnswer: "No shift",
      },
      {
        question: "What is the conjugate acid of the weak base ammonia (NH₃)?",
        options: ["NH₂⁻", "NH₄⁺", "H₃O⁺", "N₂H₄"],
        correctAnswer: "NH₄⁺",
      },
      {
        question:
          "If a reaction has a negative ΔH, increasing the temperature will cause the equilibrium constant K_c to:",
        options: ["Increase", "Decrease", "Remain constant", "Become negative"],
        correctAnswer: "Decrease",
      },
      {
        question:
          "If K_c is approximately equal to 1, the equilibrium mixture consists of:",
        options: [
          "Mostly products",
          "Mostly reactants",
          "Comparable amounts of reactants and products",
          "Only reactants",
        ],
        correctAnswer: "Comparable amounts of reactants and products",
      },
      {
        question:
          "If you remove a product from an equilibrium system, the reaction will:",
        options: [
          "Shift left to produce more reactants",
          "Shift right to produce more product",
          "Stop",
          "Be unaffected",
        ],
        correctAnswer: "Shift right to produce more product",
      },
      {
        question:
          "A solution that resists drastic changes in pH is known as a:",
        options: [
          "Neutral solution",
          "Saturated solution",
          "Buffer solution",
          "Standard solution",
        ],
        correctAnswer: "Buffer solution",
      },
      {
        question:
          "The expression for the reaction quotient, Q_c, is identical to K_c, but it is calculated using concentrations that are:",
        options: [
          "Only at equilibrium",
          "Not necessarily at equilibrium",
          "Only for the initial conditions",
          "Only for gases",
        ],
        correctAnswer: "Not necessarily at equilibrium",
      },
      {
        question:
          "Adding a soluble salt containing a common ion to a solution of a slightly soluble salt will:",
        options: [
          "Increase its solubility",
          "Decrease its solubility",
          "Have no effect on its solubility",
          "Change its color",
        ],
        correctAnswer: "Decrease its solubility",
      },
      {
        question:
          "For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), at equilibrium in a 2.0 L container, you have 0.50 mol of N₂, 1.50 mol of H₂, and 0.20 mol of NH₃. What is K_c?",
        options: ["0.095", "10.5", "0.237", "1.50"],
        correctAnswer: "0.095",
      },
      {
        question:
          "A reaction starts with 0.50 M of A. For the reaction A ⇌ 2B, the equilibrium concentration of B is 0.40 M. What is the equilibrium concentration of A?",
        options: ["0.10 M", "0.20 M", "0.30 M", "0.50 M"],
        correctAnswer: "0.30 M",
      },
      {
        question:
          "For the reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) at 500 K, what is the relationship between Kp and Kc?",
        options: ["Kp = Kc", "Kp = Kc(RT)", "Kp = Kc(RT)⁻¹", "Kp = Kc(RT)²"],
        correctAnswer: "Kp = Kc(RT)⁻¹",
      },
];
export default questions;

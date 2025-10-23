
import { Question } from '../../../types';

const questions: Question[] = [
      {
        question: "The rate of a chemical reaction is defined as:",
        options: [
          "The total time the reaction takes to complete.",
          "The change in concentration of a species per unit of time.",
          "The energy released during the reaction.",
          "The point at which equilibrium is reached.",
        ],
        correctAnswer:
          "The change in concentration of a species per unit of time.",
      },
      {
        question:
          "In the rate law, Rate = k[A]ˣ[B]ʸ, the exponents x and y are known as:",
        options: [
          "Stoichiometric coefficients",
          "Rate constants",
          "Orders of reaction",
          "Activation energies",
        ],
        correctAnswer: "Orders of reaction",
      },
      {
        question:
          "How are the orders of reaction (x and y in the rate law) determined?",
        options: [
          "From the stoichiometric coefficients of the balanced equation.",
          "By measuring the temperature change.",
          "Experimentally.",
          "By calculating the equilibrium constant.",
        ],
        correctAnswer: "Experimentally.",
      },
      {
        question:
          "What are the units of the rate constant 'k' for a second-order reaction?",
        options: ["s⁻¹", "mol⋅dm⁻³⋅s⁻¹", "dm³⋅mol⁻¹⋅s⁻¹", "dm⁶⋅mol⁻²⋅s⁻¹"],
        correctAnswer: "dm³⋅mol⁻¹⋅s⁻¹",
      },
      {
        question:
          "If doubling the concentration of reactant [A] quadruples the reaction rate, the reaction is what order with respect to A?",
        options: ["Zero order", "First order", "Second order", "Third order"],
        correctAnswer: "Second order",
      },
      {
        question: "The half-life of a first-order reaction is:",
        options: [
          "Directly proportional to the initial concentration.",
          "Inversely proportional to the initial concentration.",
          "Independent of the initial concentration.",
          "Equal to the rate constant.",
        ],
        correctAnswer: "Independent of the initial concentration.",
      },
      {
        question:
          "For a certain reaction, the half-life is observed to decrease as the initial concentration is increased. What is the order of the reaction?",
        options: [
          "Zero order",
          "First order",
          "Second order",
          "Cannot be determined",
        ],
        correctAnswer: "Second order",
      },
      {
        question:
          "If a reaction is 50% complete in 100 seconds and 75% complete in 200 seconds, what is the order of the reaction?",
        options: ["Zero order", "First order", "Second order", "Third order"],
        correctAnswer: "First order",
      },
      {
        question: "Which plot gives a straight line for a zero-order reaction?",
        options: ["[A] vs. t", "ln[A] vs. t", "1/[A] vs. t", "log(k) vs. 1/T"],
        correctAnswer: "[A] vs. t",
      },
      {
        question:
          "According to collision theory, what two conditions must be met for a collision to be effective?",
        options: [
          "Sufficient energy and high pressure.",
          "Sufficient energy and correct orientation.",
          "High concentration and high temperature.",
          "Correct orientation and the presence of a catalyst.",
        ],
        correctAnswer: "Sufficient energy and correct orientation.",
      },
      {
        question: "What is the activation energy (E_a) of a reaction?",
        options: [
          "The total energy released by the reaction.",
          "The minimum energy required for reactants to turn into products.",
          "The energy difference between products and reactants.",
          "The average kinetic energy of the molecules.",
        ],
        correctAnswer:
          "The minimum energy required for reactants to turn into products.",
      },
      {
        question:
          "How does an increase in temperature always affect the reaction rate and rate constant (k)?",
        options: [
          "It decreases the rate and k.",
          "It increases the rate and k.",
          "It increases the rate but decreases k.",
          "It has no effect on the rate or k.",
        ],
        correctAnswer: "It increases the rate and k.",
      },
      {
        question: "The Arrhenius equation describes the relationship between:",
        options: [
          "Rate constant, temperature, and activation energy.",
          "Equilibrium constant and pressure.",
          "Concentration and time.",
          "Half-life and reaction order.",
        ],
        correctAnswer: "Rate constant, temperature, and activation energy.",
      },
      {
        question:
          "On a potential energy diagram, the peak of the energy barrier represents the:",
        options: [
          "Reactants",
          "Products",
          "Enthalpy change (ΔH)",
          "Activated complex (transition state)",
        ],
        correctAnswer: "Activated complex (transition state)",
      },
      {
        question: "For an endothermic reaction, which statement is true?",
        options: [
          "The products have lower potential energy than the reactants.",
          "The activation energy of the forward reaction is less than the reverse reaction.",
          "The enthalpy change (ΔH) is positive.",
          "The reaction releases heat to the surroundings.",
        ],
        correctAnswer: "The enthalpy change (ΔH) is positive.",
      },
      {
        question:
          "The 'instantaneous rate' of a reaction at a specific time is determined by:",
        options: [
          "The overall change in concentration divided by total time.",
          "The rate at the very beginning of the reaction.",
          "The slope of the tangent to the concentration-time curve at that time.",
          "Averaging the rates at the beginning and end.",
        ],
        correctAnswer:
          "The slope of the tangent to the concentration-time curve at that time.",
      },
      {
        question:
          "The discrepancy between stoichiometric coefficients and experimentally determined reaction orders is evidence that:",
        options: [
          "The reaction is at equilibrium.",
          "The reaction occurs through a multi-step mechanism.",
          "The temperature is too low.",
          "The law of mass action is incorrect.",
        ],
        correctAnswer: "The reaction occurs through a multi-step mechanism.",
      },
      {
        question:
          "The overall order of the reaction with the rate law: Rate = k[X][Y]² is:",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
      },
      {
        question:
          "A reaction with a very high activation energy will likely be:",
        options: [
          "Very fast at room temperature.",
          "Very slow at room temperature.",
          "Spontaneous regardless of temperature.",
          "Strongly exothermic.",
        ],
        correctAnswer: "Very slow at room temperature.",
      },
      {
        question:
          "What is the relationship between the enthalpy change (ΔH) and the activation energies of the forward (Ea,fwd) and reverse (Ea,rev) reactions?",
        options: [
          "ΔH = Ea,fwd + Ea,rev",
          "ΔH = Ea,fwd / Ea,rev",
          "ΔH = Ea,fwd - Ea,rev",
          "ΔH = Ea,rev - Ea,fwd",
        ],
        correctAnswer: "ΔH = Ea,fwd - Ea,rev",
      },
      {
        question: "Which factor does NOT influence the rate of a reaction?",
        options: [
          "Temperature",
          "Concentration of reactants",
          "The equilibrium constant (K_c)",
          "Presence of a catalyst",
        ],
        correctAnswer: "The equilibrium constant (K_c)",
      },
      {
        question: "For a zero-order reaction, the rate is:",
        options: [
          "Directly proportional to the concentration.",
          "Directly proportional to the square of the concentration.",
          "Independent of the concentration.",
          "Inversely proportional to the concentration.",
        ],
        correctAnswer: "Independent of the concentration.",
      },
      {
        question:
          "The rate-determining step in a reaction mechanism is always the:",
        options: ["First step", "Last step", "Fastest step", "Slowest step"],
        correctAnswer: "Slowest step",
      },
      {
        question:
          "The rate law provides a 'window' into the reaction mechanism because it reflects the composition of the:",
        options: [
          "Overall balanced reaction",
          "Final products",
          "Rate-determining step",
          "Initial reactants",
        ],
        correctAnswer: "Rate-determining step",
      },
      {
        question: "The half-life of a zero-order reaction is:",
        options: [
          "Independent of initial concentration",
          "Directly proportional to initial concentration",
          "Inversely proportional to initial concentration",
          "Equal to 0.693/k",
        ],
        correctAnswer: "Directly proportional to initial concentration",
      },
      {
        question:
          "A high activation energy corresponds to a ____ rate constant (k), and a ____ reaction rate.",
        options: ["large, fast", "small, slow", "small, fast", "large, slow"],
        correctAnswer: "small, slow",
      },
      {
        question:
          "For a reaction to occur, the pre-exponential factor 'A' in the Arrhenius equation relates to the frequency and ____ of collisions.",
        options: ["energy", "orientation", "temperature", "pressure"],
        correctAnswer: "orientation",
      },
      {
        question: "The study of reaction rates and mechanisms is called:",
        options: [
          "Thermodynamics",
          "Stoichiometry",
          "Reaction Kinetics",
          "Chemical Equilibrium",
        ],
        correctAnswer: "Reaction Kinetics",
      },
      {
        question: "What is the overall reaction order for Rate = k?",
        options: [
          "Zero order",
          "First order",
          "Second order",
          "Cannot be determined",
        ],
        correctAnswer: "Zero order",
      },
      {
        question:
          "If a reaction is exothermic, what is the sign of its enthalpy change (ΔH)?",
        options: ["Positive", "Negative", "Zero", "Depends on temperature"],
        correctAnswer: "Negative",
      },
      {
        question:
          "If doubling the concentration of a reactant has no effect on the reaction rate, the reaction is what order with respect to that reactant?",
        options: [
          "Zero order",
          "First order",
          "Second order",
          "Negative order",
        ],
        correctAnswer: "Zero order",
      },
      {
        question: "Integrated rate laws relate which two variables?",
        options: [
          "Rate and concentration",
          "Concentration and time",
          "Rate and temperature",
          "Rate constant and activation energy",
        ],
        correctAnswer: "Concentration and time",
      },
      {
        question:
          "Which of the following can be monitored to measure the rate of a reaction?",
        options: [
          "Change in color",
          "Change in pressure",
          "Change in concentration via titration",
          "All of the above",
        ],
        correctAnswer: "All of the above",
      },
      {
        question:
          "In a plot of ln[A] vs. time for a first-order reaction, the slope of the line is equal to:",
        options: ["k", "-k", "E_a", "t₁/₂"],
        correctAnswer: "-k",
      },
      {
        question:
          "For an exothermic reaction A ⇌ B, which has a higher activation energy?",
        options: [
          "The forward reaction (A → B)",
          "The reverse reaction (B → A)",
          "Both are equal",
          "Cannot be determined",
        ],
        correctAnswer: "The reverse reaction (B → A)",
      },
      {
        question:
          "The rate law for a reaction is found to be Rate = k[A]. What happens to the rate if [A] is tripled?",
        options: [
          "It triples",
          "It is 1/3 of the original rate",
          "It increases by a factor of 9",
          "It does not change",
        ],
        correctAnswer: "It triples",
      },
      {
        question: "Which type of reaction has a constant half-life?",
        options: [
          "Zero-order",
          "First-order",
          "Second-order",
          "All of the above",
        ],
        correctAnswer: "First-order",
      },
      {
        question:
          "If a reaction is endothermic (ΔH > 0), what does a potential energy diagram look like?",
        options: [
          "Products are at a lower energy level than reactants.",
          "Products are at a higher energy level than reactants.",
          "Reactants and products are at the same energy level.",
          "There is no activation energy barrier.",
        ],
        correctAnswer: "Products are at a higher energy level than reactants.",
      },
      {
        question:
          "If a reaction is first order in A and second order in B, what is the overall reaction order?",
        options: ["First", "Second", "Third", "Fourth"],
        correctAnswer: "Third",
      },
      {
        question:
          "A first-order reaction has a half-life of 30 minutes. What percentage of the reactant will remain after 90 minutes?",
        options: ["50%", "25%", "12.5%", "6.25%"],
        correctAnswer: "12.5%",
      },
      {
        question:
          "The half-life of a first-order reaction is 69.3 s. What is the value of the rate constant (k)? (k = 0.693 / t₁/₂)",
        options: ["1.0 s⁻¹", "0.1 s⁻¹", "0.01 s⁻¹", "10.0 s⁻¹"],
        correctAnswer: "0.01 s⁻¹",
      },
      {
        question:
          "Reaction X doubles its rate from 298K to 308K. Reaction Y triples its rate over the same temperature range. Which statement is correct?",
        options: [
          "Reaction X has a higher Ea than Y",
          "Reaction Y has a higher Ea than X",
          "Both have the same Ea",
          "Ea cannot be determined",
        ],
        correctAnswer: "Reaction Y has a higher Ea than X",
      },
      {
        question:
          "A first-order reaction has a rate constant of 0.02 min⁻¹. How long will it take for the concentration to drop from 0.8 M to 0.1 M?",
        options: ["50 min", "75 min", "104 min", "208 min"],
        correctAnswer: "104 min",
      },
      {
        question:
          "What are the units for the rate constant of a third-order reaction?",
        options: ["s⁻¹", "dm³⋅mol⁻¹⋅s⁻¹", "dm⁶⋅mol⁻²⋅s⁻¹", "mol⋅dm⁻³⋅s⁻¹"],
        correctAnswer: "dm⁶⋅mol⁻²⋅s⁻¹",
      },
];
export default questions;

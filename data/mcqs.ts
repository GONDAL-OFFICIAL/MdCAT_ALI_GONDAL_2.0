import { Mcqs } from '../types';

// English
import Grammar from './questions/English/Grammar';
import Comprehension from './questions/English/Comprehension';
import Vocabulary from './questions/English/Vocabulary';

// Chemistry
import FundamentalConcepts from './questions/Chemistry/FundamentalConcepts';
import AtomicStructure from './questions/Chemistry/AtomicStructure';
import Equilibrium from './questions/Chemistry/Equilibrium';
import ReactionKinetics from './questions/Chemistry/ReactionKinetics';

// Biology
import Cell from './questions/Biology/Cell';
import BiologicalMolecules from './questions/Biology/BiologicalMolecules';
import CoordinationAndControl from './questions/Biology/CoordinationAndControl';
import Biotechnology from './questions/Biology/Biotechnology';
import Enzyme from './questions/Biology/Enzyme';
import BiologicalEvolution from './questions/Biology/BiologicalEvolution';
import Virus from './questions/Biology/Virus';
import Bioenergetics from './questions/Biology/Bioenergetics';
import SupportAndMovement from './questions/Biology/SupportAndMovement';
import Reproduction from './questions/Biology/Reproduction';
import Inheritance from './questions/Biology/Inheritance';
import Homeostasis from './questions/Biology/Homeostasis';

// Logic & Reasoning
import Analogies from './questions/LogicAndReasoning/Analogies';
import SeriesCompletion from './questions/LogicAndReasoning/SeriesCompletion';
import CriticalThinking from './questions/LogicAndReasoning/CriticalThinking';

// Physics
import Vectors from './questions/Physics/Vectors';
import AC from './questions/Physics/AC';
import FluidDynamics from './questions/Physics/FluidDynamics';
import Electronics from './questions/Physics/Electronics';
import DawnOfModernPhysics from './questions/Physics/DawnOfModernPhysics';
import Electromagnetism from './questions/Physics/Electromagnetism';
import ElectromagneticInduction from './questions/Physics/ElectromagneticInduction';
import CircularMotion from './questions/Physics/CircularMotion';
import Waves from './questions/Physics/Waves';
import AtomicSpectra from './questions/Physics/AtomicSpectra';
import NuclearPhysics from './questions/Physics/NuclearPhysics';
import Thermodynamics from './questions/Physics/Thermodynamics';
import Electrostatics from './questions/Physics/Electrostatics';
import CurrentElectricity from './questions/Physics/CurrentElectricity';

// PAST PAPER
import Mdcat2024 from './questions/PastPapers/Mdcat2024';
import Mdcat2023 from './questions/PastPapers/Mdcat2023';
import Mdcat2022 from './questions/PastPapers/Mdcat2022';
import Mdcat2021 from './questions/PastPapers/Mdcat2021';
import Mdcat2020 from './questions/PastPapers/Mdcat2020';

export const mcqs: Mcqs = {
  English: {
    Grammar,
    Comprehension,
    Vocabulary,
  },
  Chemistry: {
    Equilibrium,
    "Reaction Kinetics": ReactionKinetics,
    "Fundamental Concepts": FundamentalConcepts,
    "Atomic Structure": AtomicStructure,
    // Note: Other chemistry chapters are not included as their data was extensive and truncated in the prompt.
    // Add imports and entries here as you create the files.
    Gases: [],
    Solid: [],
    Liquid: [],
    Thermochemistry: [],
    Electrochemistry: [],
    "Chemical Bonding": [],
    Macromolecules: [],
    "s-Block & p-Block Elements": [],
    "Transition Elements": [],
    "Fundamentals of Organic Chemistry": [],
    Hydrocarbons: [],
    "Alkyl Halides": [],
    "Alcohols & Phenols": [],
    "Aldehydes & Ketones": [],
    "Carboxylic Acids": [],
    "Industrial Chemistry": [],
  },
  Biology: {
    Cell,
    "Biological Molecules": BiologicalMolecules,
    "Coordination and Control": CoordinationAndControl,
    Biotechnology,
    Enzyme,
    "Biological Evolution": BiologicalEvolution,
    Virus,
    Bioenergetics,
    "Support and Movement": SupportAndMovement,
    Reproduction,
    Inheritance,
    Homeostasis,
    // Note: Other biology chapters are not included as they were not in the provided data.
    Circulation: [],
    Immunity: [],
    Respiration: [],
    Digestion: [],
  },
  "Logic & Reasoning": {
    Analogies,
    "Series Completion": SeriesCompletion,
    "Critical Thinking": CriticalThinking,
  },
  Physics: {
    Vectors,
    "A.C.": AC,
    "Fluid Dynamics": FluidDynamics,
    Electronics,
    "Dawn of Modern Physics": DawnOfModernPhysics,
    Electromagnetism,
    "Electromagnetic Induction": ElectromagneticInduction,
    "Circular Motion": CircularMotion,
    Waves,
     // Note: Other physics chapters are not included as they were not in the provided data.
    "Force and Motion": [],
    "Work and Energy": [],
    Thermodynamics,
    Electrostatics,
    "Current Electricity": CurrentElectricity,
    "Atomic Spectra": AtomicSpectra,
    "Nuclear Physics": NuclearPhysics,
  },
  "PAST PAPER": {
    "2024 MDCAT": Mdcat2024,
    "2023 MDCAT": Mdcat2023,
    "2022 MDCAT": Mdcat2022,
    "2021 MDCAT": Mdcat2021,
    "2020 MDCAT": Mdcat2020,
  },
};

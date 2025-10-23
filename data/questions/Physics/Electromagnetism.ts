import { Question } from "../../../types";

const questions: Question[] = [
  {
    question:
      "Under what condition does a charged particle experience the maximum magnetic force when moving in a magnetic field?",
    options: [
      "When it moves parallel to the field (θ=0°)",
      "When it is stationary (v=0)",
      "When it moves perpendicular to the field (θ=90°)",
      "When it moves anti-parallel to the field (θ=180°)",
    ],
    correctAnswer: "When it moves perpendicular to the field (θ=90°)",
  },
  {
    question:
      "If a proton and an alpha particle enter a uniform magnetic field with the same momentum, how does the radius of the proton's path (r_p) compare to the alpha particle's path (r_a)? (Note: charge of alpha = 2e)",
    options: ["r_p = 0.5 * r_a", "r_p = r_a", "r_p = 2 * r_a", "r_p = 4 * r_a"],
    correctAnswer: "r_p = 2 * r_a",
  },
  {
    question:
      "If a proton (mass m, charge e) and an alpha particle (mass ≈ 4m, charge 2e) enter a magnetic field with the same kinetic energy, what is the ratio of their radii (r_p / r_a)?",
    options: ["1:2", "2:1", "1:1", "1:4"],
    correctAnswer: "1:1",
  },
  {
    question:
      "The M.K.S. (SI) unit for magnetic field strength (B) is the Tesla (T). Which of the following is an equivalent unit?",
    options: [
      "Weber (Wb)",
      "Weber per square meter (Wb/m^2)",
      "Gauss (G)",
      "Volt (V)",
    ],
    correctAnswer: "Weber per square meter (Wb/m^2)",
  },
  {
    question:
      "According to the provided conversions, one Tesla (T) is equal to how many Gauss (G)?",
    options: ["10^2 G", "10^4 G", "10^-2 G", "10^-4 G"],
    correctAnswer: "10^4 G",
  },
  {
    question:
      "The time period (T) of a charged particle's circular motion in a uniform B-field is given by T = 2πm / qB. This implies that the time period is:",
    options: [
      "Directly proportional to the particle's velocity.",
      "Inversely proportional to the particle's velocity.",
      "Dependent on the radius of the path.",
      "Independent of the particle's velocity and radius.",
    ],
    correctAnswer: "Independent of the particle's velocity and radius.",
  },
  {
    question:
      "What is the correct expression for the total Lorentz force on a charge q in the presence of both an electric field E and a magnetic field B?",
    options: ["F = qE", "F = q(v x B)", "F = qE + q(v x B)", "F = I(L x B)"],
    correctAnswer: "F = qE + q(v x B)",
  },
  {
    question:
      "A charged particle moves undeflected through crossed electric (E) and magnetic (B) fields. What is its velocity (v)?",
    options: ["v = EB", "v = E / B", "v = B / E", "v = qE / B"],
    correctAnswer: "v = E / B",
  },
  {
    question:
      "A charged particle will move in a helical path (a spiral) in a uniform magnetic field if the angle between its velocity and the magnetic field is:",
    options: [
      "Exactly 0°",
      "Exactly 90°",
      "Between 0° and 90°",
      "Exactly 180°",
    ],
    correctAnswer: "Between 0° and 90°",
  },
  {
    question:
      "Which of the following statements accurately describes magnetic field lines?",
    options: [
      "They originate from positive charges.",
      "They form closed loops.",
      "They are always perpendicular to the direction of the magnetic force.",
      "They are another name for electric field lines.",
    ],
    correctAnswer: "They form closed loops.",
  },
  {
    question:
      "What is a key difference between the electric force and the magnetic force on a charged particle?",
    options: [
      "The electric force acts on stationary charges, while the magnetic force does not.",
      "The magnetic force is always in the same direction as the magnetic field.",
      "The electric force is always weaker than the magnetic force.",
      "The magnetic force acts on neutral particles, but the electric force does not.",
    ],
    correctAnswer:
      "The electric force acts on stationary charges, while the magnetic force does not.",
  },
  {
    question:
      "Among the common particles electron, proton, and neutron, which has the maximum e/m ratio?",
    options: [
      "Proton",
      "Neutron",
      "Electron",
      "All have the same non-zero e/m ratio.",
    ],
    correctAnswer: "Electron",
  },
  {
    question:
      "Which of the following experiences zero magnetic force in a magnetic field?",
    options: [
      "A neutron moving perpendicular to the field.",
      "A proton moving parallel to the field.",
      "An electron moving at 45° to the field.",
      "Both A and B",
    ],
    correctAnswer: "Both A and B",
  },
  {
    question: "The e/m ratio of a neutron is zero because it has:",
    options: ["Zero mass", "Zero velocity", "No charge", "A very small radius"],
    correctAnswer: "No charge",
  },
  {
    question:
      "The 'pitch' of a helical path is the distance traveled parallel to the magnetic field in one rotation. What is its formula?",
    options: [
      "x = (v sinθ) × T",
      "x = (v tanθ) × T",
      "x = (v cosθ) × T",
      "x = v × T",
    ],
    correctAnswer: "x = (v cosθ) × T",
  },
  {
    question:
      "The North Pole of a bar magnet is attracted to which magnetic pole of the Earth?",
    options: [
      "The geographic North Pole",
      "The magnetic North Pole",
      "The geographic South Pole",
      "The magnetic South Pole",
    ],
    correctAnswer: "The magnetic South Pole",
  },
  {
    question:
      "According to the fundamental concepts, a magnetic field arises due to:",
    options: [
      "Stationary charges",
      "The presence of a conductor",
      "Moving charges",
      "A vacuum",
    ],
    correctAnswer: "Moving charges",
  },
  {
    question: "What is another name for the magnetic field strength (B)?",
    options: [
      "Magnetic Flux",
      "Magnetic Flux Density",
      "Flux Linkages",
      "Magnetic Potential",
    ],
    correctAnswer: "Magnetic Flux Density",
  },
  {
    question:
      "How does the direction of the electric force compare to the electric field, and the magnetic force to the magnetic field?",
    options: [
      "Both are parallel",
      "E-force is collinear, B-force is perpendicular",
      "E-force is perpendicular, B-force is collinear",
      "Both are perpendicular",
    ],
    correctAnswer: "E-force is collinear, B-force is perpendicular",
  },
  {
    question:
      "The formula for the angular frequency (ω) of a charge q with mass m in a uniform magnetic field B is:",
    options: ["ω = qB / m", "ω = m / qB", "ω = qm / B", "ω = B / qm"],
    correctAnswer: "ω = qB / m",
  },
  {
    question:
      "If the momentum of a charged particle moving perpendicular to a magnetic field is doubled, the radius of its circular path will:",
    options: ["Be halved", "Remain the same", "Be doubled", "Be quadrupled"],
    correctAnswer: "Be doubled",
  },
  {
    question:
      "Why does the magnetic force on a charged particle perform no work?",
    options: [
      "Because the magnetic field is a conservative field.",
      "Because the force is always zero.",
      "Because the force is always parallel to the velocity.",
      "Because the force is always perpendicular to the direction of motion.",
    ],
    correctAnswer:
      "Because the force is always perpendicular to the direction of motion.",
  },
  {
    question:
      "The kinetic energy of a particle moving in a circular path of radius r in a B-field can be expressed as:",
    options: [
      "K.E. = r²q²B² / 2m",
      "K.E. = rqB / 2m",
      "K.E. = 2m / r²q²B²",
      "K.E. = mv / r",
    ],
    correctAnswer: "K.E. = r²q²B² / 2m",
  },
  {
    question:
      "A charged particle moves in a straight line through a magnetic field. Which statement must be true?",
    options: [
      "The particle is moving perpendicular to the field.",
      "The magnetic field is zero.",
      "The particle's velocity is parallel or anti-parallel to the field.",
      "The particle has no charge.",
    ],
    correctAnswer:
      "The particle's velocity is parallel or anti-parallel to the field.",
  },
  {
    question:
      "Which of the following is a C.G.S. unit for magnetic field strength?",
    options: ["Tesla", "Weber", "Ampere-meter", "Gauss"],
    correctAnswer: "Gauss",
  },
  {
    question:
      "The force on a straight conductor of length L with current I in a uniform magnetic field B is given by:",
    options: ["F = I(L ⋅ B)", "F = I(B x L)", "F = I(L x B)", "F = ILB cosθ"],
    correctAnswer: "F = I(L x B)",
  },
  {
    question:
      "A charged particle will enter a circular path in a uniform B-field if it enters at an angle of:",
    options: ["0°", "45°", "90°", "180°"],
    correctAnswer: "90°",
  },
  {
    question: "What is the specific charge (e/m) value for an electron?",
    options: [
      "1.602 x 10^-19 C/kg",
      "9.11 x 10^-31 C/kg",
      "1.7588 x 10^11 C/kg",
      "6.022 x 10^23 C/kg",
    ],
    correctAnswer: "1.7588 x 10^11 C/kg",
  },
  {
    question:
      "If an electron and a proton enter a B-field with the same momentum, which will have a smaller radius of curvature?",
    options: [
      "The proton",
      "The electron",
      "Both will have the same radius",
      "Neither will curve",
    ],
    correctAnswer: "Both will have the same radius",
  },
  {
    question: "Magnetic force is velocity-dependent, whereas electric force:",
    options: [
      "Is also velocity-dependent",
      "Acts on a charge whether it is at rest or moving",
      "Only acts on charges at rest",
      "Is always weaker",
    ],
    correctAnswer: "Acts on a charge whether it is at rest or moving",
  },
  {
    question:
      "If a particle with charge 'q' and momentum 'p' moves in a B-field of strength 'B' and charge 'e', the radius 'r' is proportional to:",
    options: ["p / e", "e / p", "p * e", "p * e²"],
    correctAnswer: "p / e",
  },
  {
    question:
      "Besides Tesla (T) and Wb/m², which of the following is also a valid M.K.S. (SI) unit for magnetic field strength (B)?",
    options: [
      "Gauss (G)",
      "Oersted",
      "Newton per ampere-meter (N/(A·m))",
      "Weber (Wb)",
    ],
    correctAnswer: "Newton per ampere-meter (N/(A·m))",
  },
  {
    question:
      "A charged particle moves in a circular path with radius 'r' in a uniform magnetic field 'B'. If the magnetic field strength is doubled (to 2B), what will be the new radius, assuming momentum is constant?",
    options: ["r / 2", "2r", "r / 4", "4r"],
    correctAnswer: "r / 2",
  },
  {
    question:
      "A particle of mass 'm' and charge 'q' moves in a circle in a magnetic field 'B'. If its mass is doubled to '2m', what happens to its time period (T)?",
    options: [
      "It is halved (T/2)",
      "It is doubled (2T)",
      "It remains the same",
      "It becomes four times larger (4T)",
    ],
    correctAnswer: "It is doubled (2T)",
  },
  {
    question:
      "Under what condition will a straight current-carrying conductor experience zero magnetic force in a uniform magnetic field?",
    options: [
      "When the conductor is parallel or anti-parallel to the field",
      "When the conductor is perpendicular to the field",
      "When the current is very low",
      "When the conductor is made of copper",
    ],
    correctAnswer:
      "When the conductor is parallel or anti-parallel to the field",
  },
  {
    question:
      "Which of the following is the C.G.S. unit for magnetic field strength, as mentioned in the text?",
    options: [
      "Tesla (T)",
      "Weber (Wb)",
      "Oersted",
      "Newton per ampere-meter (N/(A·m))",
    ],
    correctAnswer: "Oersted",
  },
];
export default questions;

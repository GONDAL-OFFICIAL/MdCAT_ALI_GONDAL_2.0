import { Question } from "../../../types";

const questions: Question[] = [
  {
    question:
      "If a body changes its position with respect to its surroundings, it is said to be in a state of:",
    options: ["Rest", "Motion", "Equilibrium", "Inertia"],
    correctAnswer: "Motion", // cite: 746
  },
  {
    question: "Motion of a car on a straight road is an example of:",
    options: [
      "One dimensional motion",
      "Two dimensional motion",
      "Three dimensional motion",
      "Rotational motion",
    ],
    correctAnswer: "One dimensional motion", // cite: 748
  },
  {
    question:
      "A body covering equal distances in equal intervals of time along a straight line is said to have:",
    options: [
      "Uniform acceleration",
      "Uniform motion",
      "Variable velocity",
      "Non-uniform motion",
    ],
    correctAnswer: "Uniform motion", // cite: 750
  },
  {
    question: "Which of the following statements about distance is INCORRECT?",
    options: [
      "It is the length of the actual path taken",
      "It is a scalar quantity",
      "It can be negative",
      "Its SI unit is metre",
    ],
    correctAnswer: "It can be negative", // cite: 753, 754
  },
  {
    question:
      "A particle moves from A to B (3m east) and then from B to C (4m north). What is the magnitude of its displacement from A to C?",
    options: ["7 m", "1 m", "5 m", "12 m"],
    correctAnswer: "5 m", // cite: 762
  },
  {
    question:
      "Which of the following statements about displacement is CORRECT?",
    options: [
      "It is always equal to the distance",
      "It is a scalar quantity",
      "It can be positive, negative, or zero",
      "It is the total path length",
    ],
    correctAnswer: "It can be positive, negative, or zero", // cite: 759, 760
  },
  {
    question: "Speed is defined as:",
    options: [
      "Rate of change of displacement",
      "Rate of change of distance",
      "Change in velocity per unit time",
      "Displacement per unit area",
    ],
    correctAnswer: "Rate of change of distance", // cite: 766
  },
  {
    question: "Velocity is defined as the time rate of change of:",
    options: ["Speed", "Distance", "Acceleration", "Displacement"],
    correctAnswer: "Displacement", // cite: 771
  },
  {
    question:
      "A body travels the first half of a distance with speed v₁ and the second half with speed v₂. Its average speed is:",
    options: ["(v₁ + v₂) / 2", "2v₁v₂ / (v₁ + v₂)", "√(v₁v₂)", "(v₂ - v₁) / 2"],
    correctAnswer: "2v₁v₂ / (v₁ + v₂)", // cite: 775
  },
  {
    question:
      "A body travels for half the time with speed v₁ and the other half of the time with speed v₂. Its average speed is:",
    options: ["(v₁ + v₂) / 2", "2v₁v₂ / (v₁ + v₂)", "√(v₁v₂)", "(v₂ - v₁) / 2"],
    correctAnswer: "(v₁ + v₂) / 2", // cite: 775
  },
  {
    question:
      "A car travels the first third of a distance S at 10 m/s, the second third at 20 m/s, and the last third at 60 m/s. What is its average speed?",
    options: ["30 m/s", "18 m/s", "25 m/s", "36 m/s"],
    correctAnswer: "18 m/s", // cite: 778
  },
  {
    question: "Instantaneous velocity is defined as:",
    options: [
      "Total displacement / Total time",
      "The velocity at a specific instant in time",
      "Average velocity over a long interval",
      "Change in speed / time",
    ],
    correctAnswer: "The velocity at a specific instant in time", // cite: 779
  },
  {
    question:
      "Motorcycle A travels at 120 km/h east, passing Car B travelling at 90 km/h east. What is the velocity of Motorcycle A relative to Car B?",
    options: ["210 km/h east", "30 km/h east", "30 km/h west", "210 km/h west"],
    correctAnswer: "30 km/h east", // cite: 782
  },
  {
    question:
      "Aeroplane A flies north at 450 m/s, while Aeroplane B flies south at 500 m/s. What is the velocity of A relative to B?",
    options: ["50 m/s north", "50 m/s south", "950 m/s north", "950 m/s south"],
    correctAnswer: "950 m/s north", // cite: 784
  },
  {
    question: "The slope of a displacement-time graph represents:",
    options: ["Acceleration", "Distance", "Speed", "Velocity"],
    correctAnswer: "Velocity", // cite: 788
  },
  {
    question:
      "If the displacement-time graph is a straight line parallel to the time axis, the body is:",
    options: [
      "At rest",
      "Moving with constant velocity",
      "Moving with constant acceleration",
      "Moving with variable velocity",
    ],
    correctAnswer: "At rest", // cite: 789
  },
  {
    question:
      "A straight line inclined to the time axis on a displacement-time graph indicates:",
    options: [
      "Rest",
      "Uniform velocity",
      "Uniform acceleration",
      "Variable velocity",
    ],
    correctAnswer: "Uniform velocity", // cite: 790
  },
  {
    question:
      "The slope of the tangent to a curved displacement-time graph at a specific point gives the:",
    options: [
      "Average velocity",
      "Instantaneous velocity",
      "Average acceleration",
      "Instantaneous acceleration",
    ],
    correctAnswer: "Instantaneous velocity", // cite: 794
  },
  {
    question: "Acceleration is defined as the rate of change of:",
    options: ["Position", "Displacement", "Velocity", "Speed"],
    correctAnswer: "Velocity", // cite: 798
  },
  {
    question: "Negative acceleration is also known as:",
    options: [
      "Uniform acceleration",
      "Variable acceleration",
      "Retardation",
      "Instantaneous acceleration",
    ],
    correctAnswer: "Retardation", // cite: 799
  },
  {
    question:
      "If the velocity of a body changes by equal amounts in equal intervals of time, the acceleration is:",
    options: ["Zero", "Uniform", "Variable", "Instantaneous"],
    correctAnswer: "Uniform", // cite: 800
  },
  {
    question: "The slope of a velocity-time graph represents:",
    options: ["Displacement", "Distance", "Speed", "Acceleration"],
    correctAnswer: "Acceleration", // cite: 807
  },
  {
    question: "The area under a velocity-time graph represents:",
    options: [
      "Acceleration",
      "Average velocity",
      "Distance covered",
      "Instantaneous velocity",
    ],
    correctAnswer: "Distance covered", // cite: 808
  },
  {
    question:
      "If the velocity-time graph is a horizontal line, the acceleration is:",
    options: ["Constant positive", "Constant negative", "Zero", "Increasing"],
    correctAnswer: "Zero", // cite: 812, 814
  },
  {
    question:
      "A straight line inclined to the time axis on a velocity-time graph represents:",
    options: [
      "Constant velocity",
      "Uniform acceleration",
      "Variable acceleration",
      "Rest",
    ],
    correctAnswer: "Uniform acceleration", // cite: 814
  },
  {
    question:
      "Newton's first law of motion provides a qualitative definition of:",
    options: ["Force", "Inertia", "Momentum", "Both Force and Inertia"],
    correctAnswer: "Both Force and Inertia", // cite: 829, 831
  },
  {
    question:
      "The inability of a body to change its state of rest or uniform motion by itself is called:",
    options: ["Force", "Momentum", "Inertia", "Weight"],
    correctAnswer: "Inertia", // cite: 831
  },
  {
    question:
      "Newton's second law states that the acceleration produced in a body is directly proportional to the _______ and inversely proportional to its _______.",
    options: [
      "Mass, Force",
      "Force, Mass",
      "Velocity, Force",
      "Force, Velocity",
    ],
    correctAnswer: "Force, Mass", // cite: 834
  },
  {
    question:
      "Newton's second law can also be stated as: The time rate of change of _______ equals the applied force.",
    options: ["Velocity", "Acceleration", "Momentum", "Kinetic Energy"],
    correctAnswer: "Momentum", // cite: 861
  },
  {
    question:
      "A player catches a 150g cricket ball moving at 20 m/s. If the catch is completed in 0.1s, what force does the ball exert on the hand?",
    options: ["3 N", "30 N", "150 N", "300 N"],
    correctAnswer: "30 N", // cite: 840
  },
  {
    question: "Newton's third law states that action and reaction forces are:",
    options: [
      "Equal and in the same direction, acting on the same body",
      "Equal and opposite, acting on the same body",
      "Equal and opposite, acting on different bodies",
      "Unequal and opposite, acting on different bodies",
    ],
    correctAnswer: "Equal and opposite, acting on different bodies", // cite: 841, 842
  },
  {
    question: "Which statement about action-reaction forces is INCORRECT?",
    options: [
      "They are always equal in magnitude",
      "They are always opposite in direction",
      "They act on different bodies",
      "They balance each other",
    ],
    correctAnswer: "They balance each other", // cite: 842
  },
  {
    question: "Linear momentum is the product of:",
    options: [
      "Force and time",
      "Mass and acceleration",
      "Mass and velocity",
      "Force and velocity",
    ],
    correctAnswer: "Mass and velocity", // cite: 851
  },
  {
    question: "The SI unit of linear momentum is:",
    options: ["kg m/s²", "N m", "N s", "J/s"],
    correctAnswer: "N s", // cite: 852 (Also kg m/s)
  },
  {
    question:
      "If two bodies have the same momentum, the body with smaller mass will have:",
    options: [
      "Smaller velocity",
      "Greater velocity",
      "Same velocity",
      "Zero velocity",
    ],
    correctAnswer: "Greater velocity", // cite: 855
  },
  {
    question: "Impulse is defined as:",
    options: [
      "The product of force and velocity",
      "The change in kinetic energy",
      "The product of force and the time for which it acts",
      "The rate of change of momentum",
    ],
    correctAnswer: "The product of force and the time for which it acts", // cite: 857
  },
  {
    question: "The area under a force-time graph represents:",
    options: [
      "Work done",
      "Power",
      "Change in velocity",
      "Impulse (Change in momentum)",
    ],
    correctAnswer: "Impulse (Change in momentum)", // cite: 863
  },
  {
    question: "Air bags in cars save lives by:",
    options: [
      "Decreasing the impact time and decreasing the force",
      "Increasing the impact time and decreasing the force",
      "Decreasing the change in momentum",
      "Increasing the final velocity",
    ],
    correctAnswer: "Increasing the impact time and decreasing the force", // cite: 866
  },
  {
    question:
      "The Law of Conservation of Linear Momentum states that the total momentum of an isolated system:",
    options: [
      "Always increases",
      "Always decreases",
      "Remains constant",
      "Is always zero",
    ],
    correctAnswer: "Remains constant", // cite: 872
  },
  {
    question: "In an elastic collision:",
    options: [
      "Only momentum is conserved",
      "Only kinetic energy is conserved",
      "Both momentum and kinetic energy are conserved",
      "Neither momentum nor kinetic energy is conserved",
    ],
    correctAnswer: "Both momentum and kinetic energy are conserved", // cite: 880
  },
  {
    question: "In an inelastic collision:",
    options: [
      "Momentum is conserved, but kinetic energy is not",
      "Kinetic energy is conserved, but momentum is not",
      "Both momentum and kinetic energy are conserved",
      "Neither momentum nor kinetic energy is conserved",
    ],
    correctAnswer: "Momentum is conserved, but kinetic energy is not", // cite: 880
  },
  {
    question:
      "Two objects of equal mass collide elastically in one dimension. If one object was initially at rest, what happens after the collision?",
    options: [
      "They stick together",
      "The first object stops, and the second object moves off with the first object's initial velocity",
      "They both move off together with half the initial velocity",
      "The first object rebounds with its initial velocity",
    ],
    correctAnswer:
      "The first object stops, and the second object moves off with the first object's initial velocity", // cite: 884, 893
  },
  {
    question:
      "A particle of mass m moving with velocity v strikes a stationary particle of mass 2m and sticks to it. What is the speed of the combined system?",
    options: ["v/2", "2v", "v/3", "3v"],
    correctAnswer: "v/3", // cite: 894
  },
  {
    question:
      "For a perfectly inelastic collision, the coefficient of restitution (e) is:",
    options: ["1", "Between 0 and 1", "0", "-1"],
    correctAnswer: "0", // cite: 892
  },
  {
    question:
      "For a perfectly elastic collision, the coefficient of restitution (e) is:",
    options: ["0", "Between 0 and 1", "1", "Greater than 1"],
    correctAnswer: "1", // cite: 890
  },
  {
    question:
      "The motion of a particle thrown obliquely near the Earth's surface (neglecting air resistance) is called:",
    options: [
      "Circular motion",
      "Simple harmonic motion",
      "Projectile motion",
      "Linear motion",
    ],
    correctAnswer: "Projectile motion", // cite: 898
  },
  {
    question:
      "In projectile motion, which component of velocity remains constant throughout the flight (neglecting air resistance)?",
    options: [
      "Vertical component",
      "Horizontal component",
      "Both components",
      "Neither component",
    ],
    correctAnswer: "Horizontal component", // cite: 906
  },
  {
    question:
      "The path traced by a projectile in the absence of air friction is a:",
    options: ["Straight line", "Circle", "Ellipse", "Parabola"],
    correctAnswer: "Parabola", // cite: 898, 924
  },
  {
    question:
      "The total time taken by a projectile to return to the level from which it was projected is called:",
    options: [
      "Time to reach max height",
      "Horizontal range",
      "Maximum height",
      "Time of flight",
    ],
    correctAnswer: "Time of flight", // cite: 911
  },
  {
    question:
      "At what angle of projection is the horizontal range of a projectile maximum?",
    options: ["30°", "45°", "60°", "90°"],
    correctAnswer: "45°", // cite: 918
  },
  {
    question:
      "The horizontal range of a projectile is the same for angles of projection θ and:",
    options: ["θ/2", "2θ", "90° - θ", "180° - θ"],
    correctAnswer: "90° - θ", // cite: 919
  },
  {
    question:
      "At the highest point of its trajectory, the kinetic energy of a projectile launched with initial KE_i at angle θ is:",
    options: ["KE_i", "0", "KE_i cos²θ", "KE_i sin²θ"],
    correctAnswer: "KE_i cos²θ", // cite: 921
  },
  {
    question:
      "For a projectile, the maximum height (H) and time of flight (T) are related by:",
    options: ["H = gT²/2", "H = gT²/4", "H = gT²/8", "H = gT/2"],
    correctAnswer: "H = gT²/8", // cite: 919
  },
  {
    question:
      "An unpowered and unguided missile follows a projectile path and is called a:",
    options: [
      "Cruise missile",
      "Guided missile",
      "Ballistic missile",
      "Rocket",
    ],
    correctAnswer: "Ballistic missile", // cite: 924
  },
];
export default questions;

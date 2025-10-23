
import { Question } from '../../../types';

const questions: Question[] = [
      {
        question:
          "What is the critical speed (v_c) at the highest point (A) required for an object to complete a vertical loop of radius 'r'?",
        options: ["√(gr)", "√(3gr)", "√(5gr)", "0"],
        correctAnswer: "√(gr)",
      },
      {
        question:
          "If an object just completes a vertical loop of radius 'r' (speed at top is √(gr)), what must its speed be at the lowest point (B)?",
        options: ["√(gr)", "√(3gr)", "√(5gr)", "√(2gr)"],
        correctAnswer: "√(5gr)",
      },
      {
        question:
          "At the highest point (A) of a vertical circle, the equation for centripetal force is given by:",
        options: [
          "$T_A - mg = mv_A^2/r$",
          "$T_A + mg = mv_A^2/r$",
          "$mg - T_A = mv_A^2/r$",
          "$T_A = mv_A^2/r$",
        ],
        correctAnswer: "$T_A + mg = mv_A^2/r$",
      },
      {
        question:
          "At the lowest point (B) of a vertical circle, the equation relating tension (T_B), gravity (mg), and centripetal force is:",
        options: [
          "$T_B - mg = mv_B^2/r$",
          "$T_B + mg = mv_B^2/r$",
          "$mg - T_B = mv_B^2/r$",
          "$T_B = mg$",
        ],
        correctAnswer: "$T_B - mg = mv_B^2/r$",
      },
      {
        question:
          "A 2 kg mass moves in a circle of radius 4 m with a constant speed of 10 m/s. What is the magnitude of the centripetal force (F_c)?",
        options: ["20 N", "50 N", "80 N", "100 N"],
        correctAnswer: "50 N",
      },
      {
        question:
          "An object moves in a circle with a constant angular velocity (ω) of 5 rad/s. If the radius of the circle is 2 m, what is its centripetal acceleration (a_c)?",
        options: ["10 m/s²", "25 m/s²", "50 m/s²", "100 m/s²"],
        correctAnswer: "50 m/s²",
      },
      {
        question:
          "A 0.5 kg stone is tied to a string and swung in a horizontal circle of radius 1 m. If the tension in the string is 8 N, what is the centripetal acceleration (a_c) of the stone?",
        options: ["4 m/s²", "8 m/s²", "16 m/s²", "32 m/s²"],
        correctAnswer: "16 m/s²",
      },
      {
        question:
          "An object completes one full revolution in a circle in 0.5 seconds. What is its angular velocity (ω)?",
        options: ["π rad/s", "2π rad/s", "4π rad/s", "0.5π rad/s"],
        correctAnswer: "4π rad/s",
      },
      {
        question:
          "A wheel with a radius of 0.5 m has an angular velocity of 10 rad/s. What is the tangential velocity (v) of a point on its rim?",
        options: ["2.5 m/s", "5 m/s", "10 m/s", "20 m/s"],
        correctAnswer: "5 m/s",
      },
      {
        question:
          "Why is the work done by the centripetal force on an object in circular motion always zero?",
        options: [
          "Because the force is zero",
          "Because the displacement is zero",
          "Because the force is always perpendicular to the velocity",
          "Because the force is constant",
        ],
        correctAnswer:
          "Because the force is always perpendicular to the velocity",
      },
      {
        question:
          "Which statement is true for an object in **uniform** circular motion?",
        options: [
          "Tangential acceleration (a_t) is zero",
          "Centripetal acceleration (a_c) is zero",
          "Both a_t and a_c are zero",
          "Tangential acceleration (a_t) is non-zero",
        ],
        correctAnswer: "Tangential acceleration (a_t) is zero",
      },
      {
        question: "How many degrees are equivalent to π/2 radians?",
        options: ["45°", "90°", "180°", "360°"],
        correctAnswer: "90°",
      },
      {
        question:
          "What is the rotational analogy for linear kinetic energy ($K.E._{linear} = 1/2 mv^2$)?",
        options: [
          "$K.E._{rot} = 1/2 Iω^2$",
          "$K.E._{rot} = 1/2 mω^2$",
          "$K.E._{rot} = 1/2 Iv^2$",
          "$K.E._{rot} = 1/2 Iα^2$",
        ],
        correctAnswer: "$K.E._{rot} = 1/2 Iω^2$",
      },
      {
        question:
          "For the Earth revolving around the Sun, what force provides the necessary centripetal force?",
        options: [
          "Frictional force",
          "Tension",
          "Magnetic force",
          "Gravitational force",
        ],
        correctAnswer: "Gravitational force",
      },
      {
        question:
          "If the string breaks while a stone is being swung in a horizontal circle, what path will the stone follow?",
        options: [
          "It will fall straight down",
          "It will move in a straight line, tangent to the circle",
          "It will continue in the circle",
          "It will move radially outward",
        ],
        correctAnswer: "It will move in a straight line, tangent to the circle",
      },
      {
        question:
          "What is the primary effect of the centripetal force on an object in uniform circular motion?",
        options: [
          "It changes the speed only",
          "It changes the direction of velocity only",
          "It changes both speed and direction",
          "It does no work and has no effect",
        ],
        correctAnswer: "It changes the direction of velocity only",
      },
      {
        question:
          "For an object just completing a vertical loop, what is its speed at the horizontal points (mid-way between top and bottom)?",
        options: ["√(gr)", "√(3gr)", "√(5gr)", "√(2.5gr)"],
        correctAnswer: "√(3gr)",
      },
      {
        question: "What is the angular velocity (ω) of a clock's second hand?",
        options: ["2π rad/s", "π/30 rad/s", "π/60 rad/s", "6 deg/s"],
        correctAnswer: "π/30 rad/s",
      },
      {
        question:
          "If an object's angular velocity (ω) is decreasing, what is the direction of its angular acceleration (α)?",
        options: [
          "In the same direction as ω",
          "In the opposite direction to ω",
          "Perpendicular to ω",
          "It is zero",
        ],
        correctAnswer: "In the opposite direction to ω",
      },
      {
        question:
          "In non-uniform circular motion, the net acceleration 'a' is the vector sum of:",
        options: [
          "$a_c$ and $a_t$",
          "$a_c$ and gravity",
          "$a_t$ and friction",
          "$v$ and $ω$",
        ],
        correctAnswer: "$a_c$ and $a_t$",
      },
];
export default questions;

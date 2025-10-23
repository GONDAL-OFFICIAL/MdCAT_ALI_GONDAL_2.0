import { Question } from "../../../types";

const questions: Question[] = [
  {
    question: "Which of the following is a scalar quantity?",
    options: ["Force", "Velocity", "Mass", "Acceleration"],
    correctAnswer: "Mass",
  },
  {
    question:
      "A force of 20 N makes an angle of 60° with the x-axis. What is the magnitude of its x-component (F_x)?",
    options: ["20 N", "17.32 N", "10 N", "8.66 N"],
    correctAnswer: "10 N",
  },
  {
    question:
      "If a vector has perpendicular components R_x = 6 units and R_y = 8 units, what is the magnitude of the resultant vector R?",
    options: ["14 units", "10 units", "2 units", "48 units"],
    correctAnswer: "10 units",
  },
  {
    question:
      "Vector A = 2i + 5j and Vector B = 3i - 1j. What is the resultant vector R = A + B?",
    options: ["5i + 4j", "1i + 6j", "-1i + 6j", "5i + 6j"],
    correctAnswer: "5i + 4j",
  },
  {
    question:
      "Two forces of magnitude A=3N and B=4N act on a point with an angle of 60° between them. What is the magnitude of the resultant force R? (Use R² = A² + B² + 2ABcosθ)",
    options: ["5 N", "7 N", "√37 N", "√13 N"],
    correctAnswer: "√37 N",
  },
  {
    question:
      "A vector lies in the third quadrant. What are the signs of its x and y components?",
    options: [
      "x is positive, y is positive",
      "x is negative, y is positive",
      "x is negative, y is negative",
      "x is positive, y is negative",
    ],
    correctAnswer: "x is negative, y is negative",
  },
  {
    question: "The scalar (dot) product of two perpendicular vectors is:",
    options: ["Maximum", "Minimum", "Zero", "Equal to their vector product"],
    correctAnswer: "Zero",
  },
  {
    question:
      "Given vectors A = 3i + 2j and B = 2i - 4j, what is their scalar product (A · B)?",
    options: ["14", "-2", "6", "-8"],
    correctAnswer: "-2",
  },
  {
    question: "What does the projection of vector A onto vector B represent?",
    options: [
      "The magnitude of A",
      "The magnitude of B",
      "The component of A in the direction of B",
      "The cross product of A and B",
    ],
    correctAnswer: "The component of A in the direction of B",
  },
  {
    question:
      "The direction of the vector (cross) product A × B is determined by:",
    options: [
      "The Law of Cosines",
      "The Right-Hand Rule",
      "The scalar product",
      "The Pythagorean theorem",
    ],
    correctAnswer: "The Right-Hand Rule",
  },
  {
    question: "What is the result of the cross product of unit vectors î × ĵ?",
    options: ["0", "î", "ĵ", "k̂"],
    correctAnswer: "k̂",
  },
  {
    question: "What is the result of the dot product of unit vectors ĵ · ĵ?",
    options: ["0", "1", "î", "k̂"],
    correctAnswer: "1",
  },
  {
    question:
      "The magnitude of the cross product |A × B| is maximum when the angle θ between the vectors is:",
    options: ["0°", "45°", "90°", "180°"],
    correctAnswer: "90°",
  },
];
export default questions;

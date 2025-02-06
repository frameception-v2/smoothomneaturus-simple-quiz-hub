export const PROJECT_ID = 'simple-quiz-hub';
export const PROJECT_TITLE = "Maschine Capabilities Quiz";
export const PROJECT_DESCRIPTION = "Learn what you can/can't build with Maschine right now";
export const QUIZ_QUESTIONS = [
  {
    question: "Can Maschine create frames with interactive buttons?",
    answers: ["Yes, with actions", "No, static only"],
    correct: 0,
    explanation: "✅ Correct! Maschine supports buttons with actions like post_redirect, mint, and link"
  },
  {
    question: "Can Maschine store user progress between frames?",
    answers: ["Yes, in a database", "No, use URL params"],
    correct: 1,
    explanation: "✅ Right! Maschine can't use databases - store state in URL params or cookies"
  },
  {
    question: "Can Maschine validate onchain transactions?",
    answers: ["Yes, natively", "No, needs external service"],
    correct: 1,
    explanation: "✅ Correct! You'll need an external service to verify onchain data"
  }
];

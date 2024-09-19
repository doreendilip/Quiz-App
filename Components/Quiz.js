// Components/Quiz.js
import { useState } from "react";
import QuestionsSet from "../Data/QuestionsSet";
import ScoreCard from "./ScoreCard";
import 'bootstrap/dist/css/bootstrap.min.css';

const Quiz = ({ name }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScoreCard, setShowScoreCard] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  // Handle answer selection
  const handleAnswerOptionClick = (selectedOption) => {
    const correctAnswer = QuestionsSet[currentQuestion].answer;

    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    } else {
      // Collect wrong answers for later display
      setWrongAnswers(prevWrongAnswers => [
        ...prevWrongAnswers,
        {
          question: QuestionsSet[currentQuestion].question,
          selectedAnswer: selectedOption,
          correctAnswer: correctAnswer,
        }
      ]);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QuestionsSet.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScoreCard(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScoreCard ? (
        <ScoreCard 
          name={name} 
          score={score} 
          totalQuestions={QuestionsSet.length} 
          wrongAnswers={wrongAnswers} // Pass wrong answers to ScoreCard
        />
      ) : (
        <div className="card shadow-lg p-4 border-0 rounded-lg mt-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h3 className="card-title text-center mb-4" style={{ color: "#6c757d" }}>
            Question {currentQuestion + 1} / {QuestionsSet.length}
          </h3>
          <h5 className="card-text mb-4 text-center">
            {QuestionsSet[currentQuestion].question}
          </h5>

          <div className="options-container">
            {QuestionsSet[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="btn btn-outline-primary btn-block mb-3"
                style={{
                  fontSize: "1.1rem",
                  padding: "10px 20px",
                  transition: "background-color 0.3s ease",
                  borderRadius: "5px",
                  width: "100%",
                }}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;

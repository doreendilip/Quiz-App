// Components/ScoreCard.js
import 'bootstrap/dist/css/bootstrap.min.css';

const ScoreCard = ({ name, score, totalQuestions, wrongAnswers }) => {
  return (
    <div className="card shadow-lg p-5 border-0 rounded-lg mt-4 text-center" style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2 className="text-success mb-4">Congratulations, {name}!</h2>
      <h3 className="mb-3">Your Score: <span className="text-primary">{score} / {totalQuestions}</span></h3>
      <p className="lead mb-4">{(score / totalQuestions) * 100}% Correct</p>

      {wrongAnswers.length > 0 && (
        <div className="wrong-answers">
          <h4 className="text-danger">Review of Wrong Answers:</h4>
          <ul className="list-group">
            {wrongAnswers.map((item, index) => (
              <li key={index} className="list-group-item">
                <strong>Question:</strong> {item.question} <br />
                <strong>Your Answer:</strong> {item.selectedAnswer} <br />
                <strong>Correct Answer:</strong> {item.correctAnswer}
              </li>
            ))}
          </ul>
        </div>
      )}

      {wrongAnswers.length === 0 && (
        <p className="text-success">Great job! All your answers were correct.</p>
      )}

      <button className="btn btn-outline-secondary mt-4" onClick={() => window.location.reload()}>
        Play Again
      </button>
    </div>
  );
};

export default ScoreCard;

import React from 'react';

function Result({ score, totalQuestions, totalTime, restartQuiz }) {
  return (
    <div>
      <h1>Quiz Finished</h1>
      <p>Your Score: {score} / {totalQuestions}</p>
      <p>Total Time Taken: {totalTime} seconds</p>
      <button onClick={restartQuiz}>Start Again</button>
    </div>
  );
}

export default Result;




import React from 'react';
import '../App.css';

function Result({ score, totalQuestions, totalTime, restartQuiz }) {
  const percentage = (score / totalQuestions) * 100;

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  let truncatedTime = Math.floor(totalTime * 1000) / 1000;
  return (
    <div className="quiz-container" style={{width:"100%", marginRight:"112px"}}>
      <div className='quiz-modal'>
      <h1 style={{marginBottom:"30px"}}>Quiz Finished</h1>
      <div className="circle-container">
        <svg width="120" height="120">
          <circle
            className="background-circle"
            cx="60"
            cy="60"
            r={radius}
            strokeWidth="10"
            fill="none"
          />
          <circle
            className="progress-circle1"
            cx="60"
            cy="60"
            r={radius}
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <div className="percentage-text">{Math.round(percentage)}%</div>
      </div>
      <div className="score-section">
        <div className="correct">
          <span className="dot green-dot"></span>
          {score} Correct
        </div>
        <br></br>
        <div className="incorrect">
          <span className="dot red-dot"></span>
          {totalQuestions - score} Incorrect
        </div>
      </div>
      <div style={{marginTop:"40px"}}><b>Total Time Taken : {truncatedTime} seconds</b></div>
      <button className = "start-button finish"  onClick={restartQuiz}>Start Again</button>
      </div>
    </div>
  );
}

export default Result;







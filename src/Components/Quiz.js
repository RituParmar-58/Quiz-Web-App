import React, { useState } from 'react';
import '../App.css'; 

function Quiz({ questions, submitAnswer, finishQuiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [startTime, setStartTime] = useState(Date.now());

  const currentQuestion = questions[currentQuestionIndex];
  const isMultiSelect = currentQuestion.correct.length > 1; 

  const handleOptionChange = (optionIndex) => {
    if (isMultiSelect) {
      if (selectedOptions.includes(optionIndex)) {
        setSelectedOptions(selectedOptions.filter((index) => index !== optionIndex));
      } else {
        setSelectedOptions([...selectedOptions, optionIndex]);
      }
    } else {
      setSelectedOptions([optionIndex]);
    }
  };

  const handleSubmit = () => {
    const timeTaken = (Date.now() - startTime) / 1000; 
    submitAnswer(currentQuestion.id, selectedOptions, timeTaken);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptions([]);
      setStartTime(Date.now()); 
    } else {
      finishQuiz();
    }
  };

  return (
    <div className="quiz-container">
      
      <div className="progress-circle">
        <span style={{fontSize : "50px"}}><b>{currentQuestionIndex + 1}</b></span>/<span>{questions.length}</span>
      </div>
      <div className="quiz-modal">
        <h2 className='question-mr'>{currentQuestion.question}</h2>
        {currentQuestion.image && <img src={currentQuestion.image} alt="Question" className="quiz-image" />}
        <div className="options-list">
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="option-item">
              <input
                type={isMultiSelect ? 'checkbox' : 'radio'}
                name="option"
                value={index}
                checked={selectedOptions.includes(index)}
                onChange={() => handleOptionChange(index)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>

        <button onClick={handleSubmit} disabled={selectedOptions.length === 0} className="next-btn">
          {currentQuestionIndex + 1 === questions.length ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default Quiz;

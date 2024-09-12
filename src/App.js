
import React, { useState } from 'react';
import axios from 'axios';
import Home from '../src/Components/Home';
import Quiz from '../src/Components/Quiz';
import Result from '../src/Components/Result';

function App() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [category, setCategory] = useState('javascript');
  const [screen, setScreen] = useState('home');
  const BASE_URL = process.env.BASE_URL

  const startQuiz = async () => {
    const res = await axios.get(`${BASE_URL}/start-quiz?category=${category}`);
    setQuestions(res.data.questions);
    setScreen('quiz');
  };

  const submitAnswer = async (questionId, selectedOptions, timeTaken) => {
    await axios.post(`${BASE_URL}/submit-question`, { questionId, selectedOptions, timeTaken });
  };

  const finishQuiz = async () => {
    const res = await axios.post(`${BASE_URL}/finish-quiz`);
    setScore(res.data.correctAnswers);
    setTotalTime(res.data.totalTime);
    setScreen('result');
  };

  const restartQuiz = () => {
    setScore(0);
    setTotalTime(0);
    setScreen('home');
  };

  return (
    <>
      {screen === 'home' && (
        <Home startQuiz={startQuiz} setCategory={setCategory} />
      )}
      {screen === 'quiz' && (
        <Quiz questions={questions} submitAnswer={submitAnswer} finishQuiz={finishQuiz} />
      )}
      {screen === 'result' && (
        <Result score={score} totalQuestions={questions.length} totalTime={totalTime} restartQuiz={restartQuiz} />
      )}
    </>
  );
}

export default App;

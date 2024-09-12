const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const quizCategories = {
  javascript: {
    questions: [
      {
        id: 1,
        question: "What is 'this' keyword in JavaScript?",
        options: ["Object", "Function", "Method", "Global"],
        correct: [0],
        image: 'https://dummyjson.com/image/100'
      },
      {
        id: 2,
        question: "Which of the following methods can be used to create an object in JavaScript? (Select all that apply)",
        options: ["Using the Object.create() method", "Using a constructor function", "Using an object literal {}", "Using the Array() constructor"],
        correct: [0, 1, 2],
      },
      {
        id: 3,
        question: "Which is not a JavaScript data type?",
        options: ["Undefined", "Boolean", "Float", "Number"],
        correct: [2]
      }
    ]
  },
  react: {
    questions: [
      {
        id: 1,
        question: "Which of the following is NOT a React hook?",
        options: ["useEffect", "useState", "useContext", "useRedux"],
        correct: [3],
      },
      {
        id: 2,
        question: "What is the purpose of useEffect?",
        options: ["State Management", "Side-effects", "Rendering", "Hook"],
        correct: [1],
      },
      {
        id: 3,
        question: "Which hook is used for state management?",
        options: ["useState", "useEffect", "useMemo", "useRef"],
        correct: [0],
        image: 'https://dummyjson.com/image/100'
      }
    ]
  },
  
  css: {
    questions: [
      {
        id: 1,
        question: "Which of the following CSS properties can affect an element's layout in the document flow? (Select all that apply)",
        options: ["display", "position", "visibility", "float"],
        correct: [0, 1, 3]
      },
      {
        id: 2,
        question: "Which property is used to change the background color?",
        options: ["color", "background-color", "bgColor", "background"],
        correct: [1]
      },
      {
        id: 3,
        question: "How do you make text bold in CSS?",
        options: ["font-weight: bold;", "font: bold;", "text-style: bold;", "font-weight: bolder;"],
        correct: [0]
      }
    ]
  },
  html: {
    questions: [
      {
        id: 1,
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ol>", "<ul>", "<li>", "<dl>"],
        correct: [1],
      },
      {
        id: 2,
        question: "Choose the correct HTML element for the largest heading:",
        options: ["<h6>", "<h1>", "<head>", "<header>"],
        correct: [1]
      },
      {
        id: 3,
        question: "Which HTML attribute is used to define inline styles?",
        options: ["class", "style", "styles", "font"],
        correct: [1]
      }
    ]
  }
};

let quizData = {
  score: 0,
  totalTime: 0,
  currentCategoryQuestions: []
};

app.get('/start-quiz', (req, res) => {
  const { category } = req.query;
  const selectedQuiz = quizCategories[category] || quizCategories.javascript;

  quizData.score = 0;
  quizData.totalTime = 0;
  quizData.currentCategoryQuestions = selectedQuiz.questions;

  res.json({ questions: quizData.currentCategoryQuestions });
});

app.post('/submit-question', (req, res) => {
  const { questionId, selectedOptions, timeTaken } = req.body;

  const question = quizData.currentCategoryQuestions.find(q => q.id === questionId);
  
  const isCorrect = JSON.stringify(selectedOptions.sort()) === JSON.stringify(question.correct.sort());

  if (isCorrect) quizData.score += 1;
  quizData.totalTime += timeTaken;

  res.json({ correct: isCorrect });
});

app.post('/finish-quiz', (req, res) => {
  res.json({
    totalQuestions: quizData.currentCategoryQuestions.length,
    correctAnswers: quizData.score,
    totalTime: quizData.totalTime
  });

  quizData.score = 0;
  quizData.totalTime = 0;
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


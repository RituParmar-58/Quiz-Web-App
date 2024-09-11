# Quiz Web App

This is a web-based quiz application built with Express on the backend and React on the frontend. The application allows users to select a quiz category, answer multiple-choice questions, and receive their score along with the total time taken at the end of the quiz.

## Features

Four categories of quizzes: JavaScript, React, CSS, and HTML.\
Each category contains multiple-choice questions.\
Users can select multiple options for questions that allow multiple correct answers.\
Users receive real-time feedback on their answers after completing the quiz.\
At the end of the quiz, users are shown their total score and the time taken to complete the quiz.\

## Backend Overview

The backend is built using Express.js and serves the quiz data and handles the quiz state for the user.\

### Key Components:

**Quiz Categories:** Four quiz categories (JavaScript, React, CSS, and HTML) are predefined with their respective questions and correct answers.\

**API Routes:** \

/start-quiz: Fetches the questions for the selected category.\
/submit-question: Submits the user's answer and returns if it is correct.\
/finish-quiz: Returns the final score and total time taken for the quiz.\

### Backend Setup: 

CORS is enabled to allow requests from the frontend.\
Body Parsing is enabled for handling JSON data in API requests.\

## Frontend Overview

The frontend is built with React and uses Axios for making API calls to the Express backend.\

### Components:
**App Component:** The main application component that manages the flow between different screens (Home, Quiz, Result). \
**Home Component:** The starting screen where users can select a category and start the quiz. \
**Quiz Component:** Displays the current question, allows users to select an answer, and tracks the quiz progress. \
**Result Component:** Shows the final score and time taken, with an option to restart the quiz. \

### State Management:
The app uses useState to manage the current screen, questions, score, and total time taken. \
The quiz progresses through different states: home → quiz → result. \

## How to Run the Project

**Prerequisites:**
Node.js (v12+) \
npm or yarn (for package management) \

### Steps:

**Clone the repository:**

git clone https://github.com/RituParmar-58/Quiz-Web-App.git \

**Install the dependencies for both backend and frontend:** \

**Backend:**
npm install react-router-dom \
npm install react-app-rewired \
npm install cors \
npm install express \
npm install axios \

**Start the backend server:**

node server.js \
The backend will run on [http://localhost:3001](http://localhost:3001).

**Start the frontend server:**

npm start \
The frontend will run on [http://localhost:3000](http://localhost:3000).


## API Endpoints

**1. GET /start-quiz?category={category}**
Starts the quiz and fetches questions based on the selected category.\
Query Parameters: \
category: The quiz category (javascript, react, css, html).

**2. POST /submit-question**
Submits the selected answer for a particular question. 

**3. POST /finish-quiz**
Finishes the quiz and returns the final score and total time.


## Technologies Used
**Backend:**
Express.js: For handling API requests.\
CORS: For allowing cross-origin requests.\
**Frontend:**
React: For building user interfaces.\
Axios: For making API requests to the backend.\





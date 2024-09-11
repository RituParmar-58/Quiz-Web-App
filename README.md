# Quiz Web App

This is a web-based quiz application built with Express on the backend and React on the frontend. The application allows users to select a quiz category, answer multiple-choice questions, and receive their score along with the total time taken at the end of the quiz.

## Features

Four categories of quizzes: JavaScript, React, CSS, and HTML.\
Each category contains multiple-choice questions.\
Users can select multiple options for questions that allow multiple correct answers.\
Users receive real-time feedback on their answers after completing the quiz.\
At the end of the quiz, users are shown their total score and the time taken to complete the quiz.\

## Backend Overview

The backend is built using Express.js and serves the quiz data and handles the quiz state for the user.

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

Steps:

**Clone the repository:**

git clone https://github.com/RituParmar-58/Quiz-Web-App.git
cd quiz-web-app

Install the dependencies for both backend and frontend:

**Backend:**

bash
Copy code
cd backend
npm install

**Frontend:**


cd frontend
npm install

**Start the backend server:**


cd backend
npm start
The backend will run on [http://localhost:3001](http://localhost:3001).

**Start the frontend server:**


cd frontend
npm start
The frontend will run on [http://localhost:3000](http://localhost:3000).







Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

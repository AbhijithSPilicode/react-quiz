import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'Who was the first champion in Indian Premiere League?',
    options: ['Chennai Super Kings', 'Rajasthan Royals', 'Mumbai Indians', 'Royal Challengers Bangalore'],
    answer: 'Rajasthan Royals'
  },
  {
    question: 'Who is the current captain of Rajasthan Royals in IPL?',
    options: ['MS Dhoni', 'Hardik Pandya', 'Sanju Samson', 'Shubhman Gill'],
    answer: 'Sanju Samson'
  },
  {
    question: 'How many times CSK won the IPL?',
    options: ['5', '0', '2', '6'],
    answer: '5'
  },
  {
    question: 'which year IPL got started?',
    options: ['2007', '2008', '2009', '2005'],
    answer: '2008'
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleResetButtonClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-app">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score} out of {questions.length}</h2>
          <button onClick={handleResetButtonClick}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestion + 1}:</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(option)}>{option}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

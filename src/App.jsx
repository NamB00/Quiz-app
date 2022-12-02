import { useState } from 'react';
import './App.scss';
import InGame from './components/inGame/InGame';
import StartGame from './components/startGame/StartGame';

function App() {
	const [submit, SetSubmit] = useState(true); // true
	const [startGame, SetStartGame] = useState(false); //  false
	const [answerStorage, setAnswersTorage] = useState([]); // Data here
	const [totalCorrect, setTotalCorrect] = useState(0);
	const [answerChoices, setAnswerChoices] = useState(false);
	const [review, setReview] = useState(true);
	const [currentQuestion, setCurrentQuestion] = useState(0);

	return (
		<div className='container flex flex-col items-center justify-between pt-12 mx-auto'>
			{startGame ? (
				<InGame
					review={review}
					setReview={setReview}
					totalCorrect={totalCorrect}
					setTotalCorrect={setTotalCorrect}
					answerChoices={answerChoices}
					setAnswerChoices={setAnswerChoices}
					answerStorage={answerStorage}
					setAnswersTorage={setAnswersTorage}
					submit={submit}
					SetSubmit={SetSubmit}
					currentQuestion={currentQuestion}
					setCurrentQuestion={setCurrentQuestion}
				></InGame>
			) : (
				<StartGame SetStartGame={SetStartGame}></StartGame>
			)}
		</div>
	);
}

export default App;

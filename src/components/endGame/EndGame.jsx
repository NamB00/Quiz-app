import React from 'react';
import Answer from '../game/Answer';
import ReviewGame from '../reviewGame/ReviewGame';
import Button from '../utils/Button';

const EndGame = ({
	setTimer,
	SetSubmit,
	totalCorrect,
	setReview,
	review,
	currentQuestion,
	questionList,
	answerStorage,
	setAnswerChoices,
	setTotalCorrect,
	setCurrentQuestion,
	setShowEndTimer,
}) => {
	const handleReview = () => {
		setShowEndTimer(false);
		setTimer(false);
		setReview(false);
		setCurrentQuestion(currentQuestion * 0);
	};
	const handleResetGame = () => {
		setShowEndTimer(true);
		SetSubmit(true);
		setCurrentQuestion(currentQuestion * 0);
		setTotalCorrect((totalCorrect *= 0));
		setTimer(true);
	};

	const handleShowWrong = () => {
		for (let i = 0; i < questionList[currentQuestion].answers.length; i++) {
			if (answerStorage[currentQuestion].answers[i].correct == true) {
				answerStorage[currentQuestion].answers[i].right = true;
			}
			if (answerStorage[currentQuestion].answers[i].hasOwnProperty('active')) {
				if (
					answerStorage[currentQuestion].answers[i].correct ==
					answerStorage[currentQuestion].answers[i].active
				) {
					answerStorage[currentQuestion].answers[i].wrong = false;
				} else {
					answerStorage[currentQuestion].answers[i].wrong = true;
				}
			}
		}
	};
	handleShowWrong();

	return (
		<>
			{review ? (
				<div className='min-h-screen'>
					<div className='pt-2 mb-5 text-center title '>
						<h3 className='text-3xl text-white'>
							Your Score is: <span className='font-bold'>{totalCorrect}</span>
						</h3>
					</div>
					<div className='flex items-center justify-center gap-4'>
						<Button className='max-sm:w-[45%]' onClick={handleResetGame}>
							Try again
						</Button>
						<Button
							className='max-sm:w-[45%]'
							bgColor='Tertiary'
							onClick={handleReview}
						>
							Review
						</Button>
					</div>
				</div>
			) : (
				<>
					<ReviewGame
						handleResetGame={handleResetGame}
						questionList={questionList}
						currentQuestion={currentQuestion}
						setCurrentQuestion={setCurrentQuestion}
					></ReviewGame>
					<Answer
						setAnswerChoices={setAnswerChoices}
						setTotalCorrect={setTotalCorrect}
						answerStorage={answerStorage}
						currentQuestion={currentQuestion}
						setCurrentQuestion={setCurrentQuestion}
					></Answer>
				</>
			)}
		</>
	);
};

export default EndGame;

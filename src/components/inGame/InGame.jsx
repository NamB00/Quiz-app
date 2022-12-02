import React from 'react';
import { useState } from 'react';
import Answer from '../game/Answer';
import Questions from '../game/Questions';
import Data from '../data/questions.json';

import Button from '../utils/Button';
import EndGame from '../endGame/EndGame';

const InGame = ({
	review,
	setReview,
	setAnswerChoices,
	answerStorage,
	setAnswersTorage,
	submit,
	SetSubmit,
	totalCorrect,
	setTotalCorrect,
	currentQuestion,
	setCurrentQuestion,
}) => {
	const questionList = Data;
	// const questionList = [...answerStorage];
	const [showEndTimer, setShowEndTimer] = useState(true);
	const [loading, SetLoading] = useState(1);
	const [timer, setTimer] = useState(true);
	const handleSubtractAnswer = () => {
		if (currentQuestion <= 0) return;
		setCurrentQuestion(currentQuestion - 1);
	};
	const handlePlusAnswer = () => {
		if (currentQuestion > questionList.length - 2) return;
		setCurrentQuestion(currentQuestion + 1);
	};
	const handleSubmit = () => {
		setShowEndTimer(false);
		setTimer(false);
		setReview(true);
		SetSubmit(false);
		for (let i = 0; i < questionList.length; i++) {
			answerStorage[i].answers.map((item) => {
				if (item.hasOwnProperty('active') && item.correct == item.active) {
					setTotalCorrect((totalCorrect += 1));
				}
			});
		}
	};

	return (
		<div className='w-full'>
			{submit ? (
				<>
					<div className='flex items-center justify-center gap-4 transition-all'>
						<Button
							bgColor='secondary'
							full={false}
							onClick={handleSubtractAnswer}
						>
							Previos
						</Button>
						<Button full={false} onClick={handlePlusAnswer}>
							Next
						</Button>
						{currentQuestion > questionList.length - 2 ? (
							<Button onClick={handleSubmit} bgColor='quaternary' full={false}>
								Submit
							</Button>
						) : (
							''
						)}
					</div>
					<Questions
						showEndTimer={showEndTimer}
						timer={timer}
						handleSubmit={handleSubmit}
						questionList={questionList}
						currentQuestion={currentQuestion}
					></Questions>
					<Answer
						SetLoading={SetLoading}
						loading={loading}
						setAnswerChoices={setAnswerChoices}
						answerStorage={answerStorage}
						setAnswersTorage={setAnswersTorage}
						currentQuestion={currentQuestion}
					></Answer>
				</>
			) : (
				<EndGame
					setShowEndTimer={setShowEndTimer}
					setTimer={setTimer}
					answerStorage={answerStorage}
					review={review}
					setReview={setReview}
					totalCorrect={totalCorrect}
					SetSubmit={SetSubmit}
					questionList={questionList}
					currentQuestion={currentQuestion}
					setCurrentQuestion={setCurrentQuestion}
					setTotalCorrect={setTotalCorrect}
				></EndGame>
			)}
		</div>
	);
};

export default InGame;

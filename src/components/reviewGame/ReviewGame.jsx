import React from 'react';
import Questions from '../game/Questions';
import Button from '../utils/Button';

const ReviewGame = ({
	questionList,
	currentQuestion,
	setCurrentQuestion,
	handleResetGame,
}) => {
	const handleNext = () => {
		if (currentQuestion > questionList.length - 2) return;
		setCurrentQuestion(currentQuestion + 1);
	};
	const handlePrev = () => {
		if (currentQuestion <= 0) return;
		setCurrentQuestion(currentQuestion - 1);
	};

	return (
		<>
			<div>
				<div className='flex items-center justify-center gap-4'>
					<Button bgColor='secondary' full={false} onClick={handlePrev}>
						Previos
					</Button>
					<Button full={false} onClick={handleNext}>
						Next
					</Button>
					<Button full={false} bgColor='quaternary' onClick={handleResetGame}>
						Restart
					</Button>
				</div>
				<Questions
					questionList={questionList}
					currentQuestion={currentQuestion}
				></Questions>
			</div>
		</>
	);
};

export default ReviewGame;

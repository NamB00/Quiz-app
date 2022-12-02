import React from 'react';
import Timer from '../utils/Timer';

const Questions = ({
	questionList,
	currentQuestion,
	handleSubmit,
	timer,
	showEndTimer,
}) => {
	return (
		<div className='relative px-4 pt-16 mx-auto mt-16 mb-10 text-indigo-700 bg-white rounded-md shadow-md w-[45rem] h-[14rem] max-md:w-full  max-sm:max-w-[90%] max-sm:h-[300px]'>
			<Timer
				showEndTimer={showEndTimer}
				timer={timer}
				handleSubmit={handleSubmit}
				className='absolute'
			></Timer>
			<div className='flex items-center justify-between mb-8 text-lg font-medium'>
				<p className='w-full text-center'>
					Question
					<span className='font-extrabold'>{currentQuestion + 1}</span>/
					{questionList.length}
				</p>
			</div>
			<div className='text-xl font-bold text-center text-black'>
				{questionList[currentQuestion].question_content}
			</div>
		</div>
	);
};

export default Questions;

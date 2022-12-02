import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Timer = ({ handleSubmit, timer, showEndTimer }) => {
	const children = ({ remainingTime }) => {
		const minutes = Math.floor(remainingTime / 60);
		const seconds = remainingTime % 60;

		return `${minutes}:${seconds}`;
	};
	return (
		<>
			<div
				className='absolute transform -translate-x-1/2 translate-y-1/2 bg-white rounded-full shadow-lg timer -top-1/3 left-1/2'
				style={{ width: '90px', height: '90px' }}
			>
				{showEndTimer ? (
					<CountdownCircleTimer
						strokeWidth={8}
						isPlaying={timer}
						size={90}
						onClick={handleSubmit}
						duration={90}
						colors={['rgb(139 92 246)', '#F7B801', '#A30000', '#A30000']}
						colorsTime={[7, 5, 2, 0]}
						style={{ width: '5rem', height: '5rem' }}
						rotation={'counterclockwise'}
						onComplete={handleSubmit}
					>
						{children}
					</CountdownCircleTimer>
				) : (
					<span className='absolute text-lg font-bold text-red-500 translate-x-1/2 translate-y-1/2 bottom-2/4 right-2/4'>
						End!
					</span>
				)}
			</div>
		</>
	);
};

export default Timer;

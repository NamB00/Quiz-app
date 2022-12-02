import React from 'react';
import Button from '../utils/Button';

const StartGame = ({ SetStartGame }) => {
	return (
		<>
			<h1 className='container flex justify-center pt-16 mb-6 text-5xl font-bold text-white max-md:text-4xl max-sm:text-3xl'>
				Welcome to React Quiz Game!
			</h1>
			<Button className='primary' onClick={() => SetStartGame(true)}>
				Start
			</Button>
		</>
	);
};

export default StartGame;

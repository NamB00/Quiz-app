import React from 'react';
import axios from 'axios';

import { useEffect } from 'react';

const Answer = ({
	currentQuestion,
	answerStorage,
	setAnswersTorage,
	setAnswerChoices,
	SetLoading,
	loading,
}) => {
	let questionList = [...answerStorage];

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(
				'https://api.npoint.io/44eb48997b8f9cbb6894'
			);
			await setAnswersTorage(res.data);
		};
		fetchData();
	}, [SetLoading]);

	const handleAnswerStorage = (e) => {
		// let index = e.target.parentNode;
		let indexClick = e.target.parentNode.getAttribute('index');
		let ValueClick =
			questionList[currentQuestion].answers[indexClick].answer_content;
		for (let i = 0; i < questionList[currentQuestion].answers.length; i++) {
			if (
				questionList[currentQuestion].answers[i].answer_content === ValueClick
			) {
				// active
				questionList[currentQuestion].answers[i].active = true;
				setAnswerChoices(questionList[currentQuestion].answers[i].correct);
				setAnswersTorage(questionList);
			} else {
				// active in storage
				delete questionList[currentQuestion].answers[i]?.active;
				setAnswersTorage(questionList);
			}
			SetLoading(loading + 1);
		}
	};

	return (
		<div className='flex flex-col max-md:items-center mx-auto w-[45rem] max-md:w-full'>
			<div className='grid grid-cols-12 max-md:w-[90%] max-sm:w-[90%] answer'>
				{answerStorage.length > 0 &&
					answerStorage[currentQuestion].answers.map((item, index) => (
						<div className='col-span-12' key={index} index={index}>
							<div
								index={index}
								id={questionList[currentQuestion].id}
								onClick={handleAnswerStorage}
								className={`items-center p-3 px-4 mx-auto my-3 bg-white border-2  rounded-md shadow-md cursor-pointer question fl3x duration-50 hover:bg-indigo-900 hover:text-white ${
									item.active ? 'active-color' : ''
								} ${item.right ? 'active-right' : ''} ${
									item.wrong ? 'active-wrong' : ''
								} `}
							>
								<p className='text-lg font-medium pointer-events-none'>
									{item.answer_content}
								</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Answer;

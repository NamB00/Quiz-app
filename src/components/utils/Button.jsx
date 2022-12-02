import React from 'react';

const Button = ({
	type = 'button',
	text = '',
	className,
	full = false,
	bgColor = 'primary',
	onClick,
	children,
}) => {
	let bgClassName = 'bg-primary';
	let bgHover = 'bg-primary';
	let bgText = 'bg-primary';
	switch (bgColor) {
		case 'primary':
			bgClassName = 'bg-green-300';
			bgHover = 'hover:bg-green-500';
			break;
		case 'secondary':
			bgClassName = 'bg-gray-500';
			bgHover = 'hover:bg-gray-300';
			bgText = 'text-white';
			break;
		case 'Tertiary':
			bgClassName = 'bg-red-500';
			bgHover = 'hover:bg-red-300';
			bgText = 'text-white';
			break;
		case 'quaternary':
			bgClassName = 'bg-yellow-500';
			bgHover = 'hover:bg-yellow-400';
			bgText = 'text-white';
			break;
		default:
			break;
	}
	return (
		<button
			type={type}
			onClick={onClick}
			className={`flex items-center px-16 py-3 ${bgText} text-lg font-bold ${bgClassName} rounded-lg shadow-md ${bgHover} hover:text-white ${
				full ? 'w-full' : 'w-auto'
			} ${className} max-sm:w-[30%] max-sm:justify-center`}
		>
			{children}
		</button>
	);
};

export default Button;

// animations.js

export const slideInFromLeft = {
	hidden: { x: -100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 1 },
	},
};

export const slideInFromRight = {
	hidden: { x: 100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 1 },
	},
};

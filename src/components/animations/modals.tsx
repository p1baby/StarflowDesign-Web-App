export const popupAnimation = {
	initial: {
		x: '100%'
	},
	enter: {
		x: '0%',
		transition: {
			duration: .6,
			easyInOut: [0.63, 0, 0.36, 0.99]
		}
	},
	exit: {
		x: '100%',
		transition: {
			duration: .6,
			easyInOut: [0.63, 0, 0.36, 0.99]
		}
	}
}

export const burgerAnimation = {
	initial: {
		y: '-100%'
	},
	enter: {
		y: '0%',
		transition: {
			duration: .6,
			easyInOut: [0.63, 0, 0.36, 0.99]
		}
	},
	exit: {
		y: '-100%',
		transition: {
			duration: .6,
			easyInOut: [0.63, 0, 0.36, 0.99]
		}
	}
}
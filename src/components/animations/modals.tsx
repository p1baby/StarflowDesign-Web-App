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

// export const principlesAnimation = {
// 	initial: {
// 		x: '100%'
// 	},
// 	enter: {
// 		x: '0%',
// 		transition: {
// 			duration: .5,
// 			easy: [0.76, 0, 0.24, 1]
// 		}
// 	},
// 	exit: {
// 		x: '100%',
// 		transition: {
// 			duration: .15,
// 			easy: [0.76, 0, 0.24, 1]
// 		}
// 	}
// }
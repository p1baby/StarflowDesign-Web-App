export const popupAnimation = {
	initial: {
		x: '100%'
	},
	enter: {
		x: '0%',
		transition: {
			duration: .5,
			easy: [0.83, 0, 0.17, 1]
		}
	},
	exit: {
		x: '100%',
		transition: {
			duration: .5,
			easy: [0.83, 0, 0.17, 1]
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
			duration: .5,
			easy: [0.76, 0, 0.24, 1]
		}
	},
	exit: {
		y: '-100%',
		transition: {
			duration: .5,
			easy: [0.76, 0, 0.24, 1]
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
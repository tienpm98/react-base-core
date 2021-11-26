import { createSlice } from '@reduxjs/toolkit'

const stepReducer = createSlice({
	name: 'step',
	initialState: {
		step: 1,
	},
	reducers: {
		setStep: (state, action) => {
			state.step = action.payload
		},
		goToNextStep: (state) => {
			state.step += 1
		},
		goToPreviousStep: (state) => {
			state.step -= 1
		},
		resetStep: (state) => {
			state.step = 1
		},
	},
})

export const { setStep, resetStep, goToNextStep, goToPreviousStep } =
	stepReducer.actions
export default stepReducer.reducer

import { configureStore } from '@reduxjs/toolkit'
import { stepReducer } from './Step'
export const store = configureStore({
	reducer: {
		stepReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

import { configureStore } from '@reduxjs/toolkit'
import { authenticationReducer } from './Authentication'

export const store = configureStore({
	reducer: {
		authenticationReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

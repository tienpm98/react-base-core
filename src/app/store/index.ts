import { configureStore } from '@reduxjs/toolkit'
import { authenticationReducer } from './Authentication'
import { sidebarReducer } from './Sidebar'

export const store = configureStore({
	reducer: {
		authenticationReducer,
		sidebarReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

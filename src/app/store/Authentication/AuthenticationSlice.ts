import { createSlice } from '@reduxjs/toolkit'

const authenticationReducer = createSlice({
	name: 'authentication',
	initialState: {
		isAuth: !!localStorage.getItem('ACCESS_TOKEN'),
		user: {} as any,
		isLoading: false,
	},
	reducers: {
		setLoggedIn: (state, action) => {
			state.isAuth = action.payload
		},
		setUser: (state, action) => {
			state.user = action.payload
		},
		setIsLoading: (state, action) => {
			state.isLoading = action.payload
		},
	},
})

export const { setLoggedIn, setUser } = authenticationReducer.actions
export default authenticationReducer.reducer

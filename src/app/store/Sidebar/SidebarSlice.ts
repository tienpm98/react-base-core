import { createSlice } from '@reduxjs/toolkit'

const sidebarReducer = createSlice({
	name: 'sidebarReducer',
	initialState: {
		selectedTab: 0,
	},
	reducers: {
		setSelectedTab: (state, action) => {
			state.selectedTab = action.payload
		},
	},
})

export const { setSelectedTab } = sidebarReducer.actions
export default sidebarReducer.reducer

import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
    name: 'drawer',
    initialState: false,
    reducers: {
        drawerToggle(state, action) {
            if(action.payload === null || action.payload === "menu") {
                return state = !state
            } else {
                return action ? state = false : state = true
            }
        }
    },
})  

export default drawerSlice.reducer
export const { drawerToggle } = drawerSlice.actions
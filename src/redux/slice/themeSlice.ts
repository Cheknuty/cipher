import { createSlice} from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: "light",
    reducers: {
        themeToggle(state, action) {
            return state === "light" ? state = "dark" : state = "light"
        }
    },
})  

export default themeSlice.reducer
export const { themeToggle } = themeSlice.actions
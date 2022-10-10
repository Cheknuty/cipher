import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { themeToggle } from "./themeSlice";

const langSlice = createSlice({
    name: 'lang',
    initialState: "eng",
    reducers: {
        langToggle(state, action: PayloadAction<string>) {
            themeToggle("light")
            return state = action.payload
        }
    },
})  

export default langSlice.reducer
export const { langToggle } = langSlice.actions
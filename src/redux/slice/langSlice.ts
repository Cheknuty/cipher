import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: 'lang',
    initialState: "eng",
    reducers: {
        langToggle(state, action: PayloadAction<string>) {
            return state = action.payload
        }
    },
})  

export default langSlice.reducer
export const { langToggle } = langSlice.actions
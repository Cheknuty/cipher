import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./slice/drawerSlice";
import langReducer from "./slice/langSlice";
import themeReducer from "./slice/themeSlice";


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        lang: langReducer,
        drawer: drawerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
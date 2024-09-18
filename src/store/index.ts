import { configureStore } from "@reduxjs/toolkit";
import { newsSliceReducer } from "./slices/NewsSlice";
import { singleSliceReducer } from "./slices/SingleSlice";


export const store = configureStore({
    reducer: {
        news: newsSliceReducer,
        singleNew: singleSliceReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


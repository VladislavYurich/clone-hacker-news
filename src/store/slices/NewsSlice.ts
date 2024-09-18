import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface INewsItem {  
    id: number;
    title: string;
    points?: number | null;
    user?: string | null;
    time: number;
    time_ago: string;
    comments_count: number;
    type: string;
    url?: string;
    domain?: string;
}

interface NewsSliceState {
    loading: boolean
    error: string
    news: INewsItem[],
}

const initialState: NewsSliceState = {
    error: '',
    loading: false,
    news: [],
}


export const NewsSlice = createSlice({
    name: 'NewsSlice',
    initialState,
    reducers: {
        useFettchLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },
        useFetchSucces(state, action: PayloadAction<INewsItem[]>) {
            state.loading = false
            state.error = ''
            state.news = action.payload
        },
        useFetchError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.loading = false
        },
    }
})

export const {useFettchLoading, useFetchSucces, useFetchError } = NewsSlice.actions;
export const newsSliceReducer = NewsSlice.reducer
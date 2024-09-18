import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISingleNew {
    by: string,
    descendants: number,
    id: number,
    kids: number[],
    score: number,
    time: number,
    title: string,
    type: string,
    url: string
}

interface ISingleState {
    loading: boolean,
    error: string,
    newSingle: ISingleNew
}

const initialState: ISingleState = {
    loading: false,
    error: '',
    newSingle: {
        by: '',
        descendants: 0,
        id : 0,
        kids : [],
        score : 0,
        time : 0,
        title : '',
        type : '',
        url : '',
    }
}


const SingleSlice = createSlice({
    name: 'SingleSlice',
    initialState,
    reducers: {
        useFettchSingleLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },
        useFetchSingleSucces(state, action: PayloadAction<ISingleNew>) {
            state.loading = false
            state.error = ''
            state.newSingle = action.payload
        },
        useFetchSingleError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.loading = false
        },
    }
})


export const {useFettchSingleLoading, useFetchSingleSucces, useFetchSingleError } = SingleSlice.actions;
export const singleSliceReducer = SingleSlice.reducer
import axios from "axios";
import { AppDispatch } from "..";
import { INewsItem } from "./NewsSlice";
import { useFetchError, useFetchSucces, useFettchLoading } from "./NewsSlice";


export const fetchNews = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(useFettchLoading(true))
        const response = await axios.get<INewsItem[]>(`https://api.hnpwa.com/v0/newest/3.json`)
        dispatch(useFetchSucces(response.data))
    } catch(error) {
        dispatch(useFetchError((error as Error).message))
    }
}

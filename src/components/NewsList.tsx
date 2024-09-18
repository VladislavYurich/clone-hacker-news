import { fetchNews } from "../store/slices/ActionCreators";
import { useAppDispatch, useAppSelector } from "../store/hook";
import NewsItem from "./NewsItem";
import { FC, useEffect } from "react";
import Error from "./Errors";
import Loading from "./Loadin";

const NewsList:FC = () => {
    const {error, loading, news} = useAppSelector(state => state.news)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchNews())
    }, [])

    return ( 
        <div>
            {loading && <Loading title="Загружаем список новстей..." />}
            {news.map(item => <NewsItem key={item.id} item={item}></NewsItem>)}
            {error && <Error error="error"></Error>}
        </div>

     );
}
 
export default NewsList;
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../main";
import styled from "styled-components";
import Errors from "./Errors";
import Loading from "./Loadin";
import axios from "axios";
import Comments from "./Comments";


const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
`

const ListItemTitle = styled.h1`
    font-size: 28px;
    font-weight: medium;
    margin: 10px 0;
`

const ListItemDesc = styled.p`
    font-size: 20px
`

const ListItemLink = styled.a`
    font-size: 20px;
    text-decoration: underline;
    color: #0645AD;
    cursor: pointer;
`

export interface ISingleNew {
        id: number,
        title: string,
        points: number,
        user: string,
        time: number,
        time_ago: string,
        type: string,
        content: string,
        comments: any[],
        comments_count: number,
        url: string,
        domain: string,
        level?: number
}


const SingleNew:FC = () => {
    const [news, setNews] = useState<ISingleNew>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')
    const {id} = useParams<string>()

    useEffect(() => {
        getNews()
    }, [])


    const getNews = async() => {
        try {
            const response  = await axios.get<ISingleNew>(`https://api.hnpwa.com/v0/item/${id}.json`)
            setNews(response.data)
            setLoading(false)
            setError('')
        } catch (error) {
            setLoading(false)
            setError((error as Error).message)
        }
    }


    return ( 
        <Container>
            {loading && <Loading title="Загружаем новость..." />}
            {news && 
            <ListItem>
                <ListItemDesc>{`Дата публикации: ${new Date(news.time).toLocaleString()} | by ${news.user}`}</ListItemDesc>
                <ListItemTitle>{news.title}</ListItemTitle>
                <ListItemLink target='_blank' href={news.url}>Original link</ListItemLink>
                <Comments news={news} />
            </ListItem>} 
            {error && <Errors error={error}/>}
        </Container>
     );
}
 
export default SingleNew;
import { FC } from "react";
import { INewsItem } from "../store/slices/NewsSlice";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    margin: 15px 0;
    cursor: pointer;
    &:hover {
    background: #F5F5F5;
    }
`

const ItemDescriptionWrapper = styled.div`
    display: flex;
    gap: 5px;

`

const ItemTopWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 26px;
    font-weight: bold;   
`

const ItemTitle = styled.h4`
    font-size: 24px;
    font-weight: medium;    
`

const ItemDescriptionElement = styled.p`
    font-size: 20px;
`


interface NewsItemProps {
    item: INewsItem
}


const NewsItem:FC<NewsItemProps> = ({item}) => {
    const navigate = useNavigate()
    return ( 
        <ItemWrapper onClick={() => navigate('/news/' + item.id)}>
            <ItemTopWrapper>
                {/* <ItemDescriptionElement>{`${index+1}.`}</ItemDescriptionElement> */}
                <ItemTitle>{item.title}</ItemTitle>
            </ItemTopWrapper>
            <ItemDescriptionWrapper>
                <ItemDescriptionElement>{`${item.points} points |`}</ItemDescriptionElement>
                <ItemDescriptionElement>{`by ${item.user} |`}</ItemDescriptionElement>
                <ItemDescriptionElement>{`${item.comments_count} comments`}</ItemDescriptionElement>
            </ItemDescriptionWrapper>
        </ItemWrapper>
     );
}
 
export default NewsItem;
import React, { FC } from "react";
import { ISingleNew } from "./SingleNew";
import SingleCommetn from "./SingleCommetn";
import styled from "styled-components";


interface CommentsProps {
    news: ISingleNew
}

export interface ISingleComments {
    id: number,
    title: string,
    user: string,
    time: number,
    time_ago: string,
    type: string,
    content: string,
    comments: any[],
    comments_count: number,
    url: string,
    level?: number
}

const CommentWrapper = styled.div`
    margin: 25px 0;
`


function getComment(el: ISingleComments):React.ReactNode { 
    if (el.comments.length == 0) {
        return el.content != `[deleted]` ? <SingleCommetn el={el}></SingleCommetn> : <div>*Удаленный комментарий</div>
    }
    if (el.comments.length > 0) {
        el.comments.map(item => getComment(item))
    }
    return el.comments.map(elem => getComment(elem))
}


const Comments:FC<CommentsProps> = ({news}) => {
    return (
        <CommentWrapper>
            <h2>Комментарии новости</h2>
            {getComment(news)}
        </CommentWrapper>
     );
}
 
export default Comments;
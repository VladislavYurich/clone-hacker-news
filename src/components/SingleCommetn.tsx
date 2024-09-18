import { FC } from "react";
import styled from "styled-components";
import { ISingleComments } from "./Comments";

interface ISingleCommetProps {
    el: ISingleComments
}

const Comment = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background: #D7D7D7;
    margin: 15px;
`

const CommetUser = styled.div`
    font-size: 18px;
    margin: 5px 0 10px;
    font-weight: bold;
`

const CommetContent = styled.div`
    font-size: 18px;
`

const SingleCommetn:FC<ISingleCommetProps> = ({el}) => {
    return ( 
        <Comment style={{marginLeft: `${el.level! * 25}px`}}>
            <CommetUser>{`user: ${el.user}`}</CommetUser>
            <CommetContent dangerouslySetInnerHTML={{__html: el.content}}></CommetContent>
        </Comment>

     );
}
 
export default SingleCommetn;
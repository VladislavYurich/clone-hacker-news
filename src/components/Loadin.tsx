import { FC } from "react";

interface iLoading {
    title: string
}

const Loading:FC<iLoading> = ({title}) => {
    return ( 
        <h1>{title}</h1>
     );
}
 
export default Loading;
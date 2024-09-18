import { FC } from "react";
import { Container } from "../main";

interface ErrorProps {
    error: string
}


const Errors:FC<ErrorProps> = ({error}) => {
    return ( 
        <Container>
            <h1>{error}</h1>
        </Container>
     );
}
 
export default Errors;
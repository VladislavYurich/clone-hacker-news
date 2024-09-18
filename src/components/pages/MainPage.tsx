import { FC } from "react";
import NewsList from "../NewsList";
import { Container } from "../../main";

const MainPage:FC = () => {
    return (
        <div>
            <Container>
                <NewsList />
            </Container>

        </div>
    );
}
 
export default MainPage;
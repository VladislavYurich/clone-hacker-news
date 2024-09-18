import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../main";

const HeaderWrapper = styled.header`
    max-width: 100%;
    padding: 10px 0;
`

const HeaderNav = styled.nav`
    display: flex;
    background: rgb(255, 102, 0);
    
`

const NavList = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
    list-style: none;
`

const NavItem = styled.li`
    font-size: 22px;
    color: black;
`

const Header = () => {
    return ( 
            <HeaderWrapper>
                <Container>
                    <HeaderNav>
                        <NavList>
                            <NavItem>
                                <Link to="/">На главную</Link>
                            </NavItem>
                        </NavList>
                    </HeaderNav>
                </Container>
            </HeaderWrapper>

        

     );
}
export default Header;
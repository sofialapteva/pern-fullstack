import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {Context} from "../index";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
const NavBar = observer(() => {
    const navigate = useNavigate();
    const {user} = useContext(Context);
    const logout = () => {
        user.setIsAuth(false);
        user.setUser({});
        localStorage.removeItem("token");
        navigate(LOGIN_ROUTE);
    };
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} style={{textDecoration: "none", color: "white"}}>
                    BuyDevice
                </NavLink>
                {user.isAuth ? (
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>
                            Admin
                        </Button>
                        {/* <Button variant={"outline-light"} onClick={() => navigate(BASKET_ROUTE)}>
                            Basket
                        </Button> */}
                        <Button variant={"outline-light"} onClick={logout}>
                            Logout
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>
                            Login
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});

export default NavBar;

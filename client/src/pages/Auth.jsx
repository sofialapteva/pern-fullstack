import {observer} from "mobx-react-lite";
import {useContext, useState} from "react";
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {login, registration} from "../http/userAPI";
import {Context} from "../index";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const signIn = async () => {
        try {
            const data = isLogin
                ? await login(email, password)
                : await registration(email, password);
            user.setUser(data);
            user.setIsAuth(true);
            console.log(data);
            navigate(SHOP_ROUTE);
        } catch (error) {
            alert(error.response.data.message);
        }
    };
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2>{isLogin ? "Login" : "Authorize"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <div>
                            {isLogin ? (
                                <>
                                    Have no account?{" "}
                                    <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
                                </>
                            ) : (
                                <>
                                    Already have an account?{" "}
                                    <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                                </>
                            )}
                        </div>
                        <Button className="mt-3" variant={"outline-primary"} onClick={signIn}>
                            {isLogin ? "Login" : "Register"}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;

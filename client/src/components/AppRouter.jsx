import {useContext} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {Context} from "../index";
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
function AppRouter() {
    const {user} = useContext(Context);
    console.log(user.isAuth);
    return (
        <Routes>
            {publicRoutes.map(el => (
                <Route path={el.path} element={<el.element />} key={el.path} />
            ))}
            {user.isAuth &&
                authRoutes.map(el => (
                    <Route path={el.path} element={<el.element />} key={el.path} />
                ))}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />
        </Routes>
    );
}

export default AppRouter;

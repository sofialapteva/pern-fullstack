import {Admin, Auth, Basket, DevicePage, Shop} from "./pages";
import {
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    BASKET_ROUTE,
    SHOP_ROUTE,
    DEVICE_ROUTE,
} from "./utils/consts";
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: Admin,
    },
    {
        path: BASKET_ROUTE,
        element: Basket,
    },
];
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        element: Auth,
    },
    {
        path: SHOP_ROUTE,
        element: Shop,
    },
    {
        path: DEVICE_ROUTE + "/:id",
        element: DevicePage,
    },
];

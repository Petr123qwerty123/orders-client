import OrderPage from "../pages/OrderPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

export const routes = [
    {path: '/', element: <HomePage />},
    {path: '/orders/:id', element: <OrderPage />},
    {path: '*', element: <NotFoundPage />}
];
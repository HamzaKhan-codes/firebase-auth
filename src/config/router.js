import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../views/dashboard";
import Detail from "../Detail/detail";
import Register from "../views/dashboard/register";
import Login from "../views/dashboard/login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
    },
    {
        path: "/detail/:adId",
        element: <Detail />,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
]);

export default function Router() {
    return <RouterProvider router = {router}/>
}
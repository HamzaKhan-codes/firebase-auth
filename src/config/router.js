import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../views/dashboard";
import Detail from "../Detail/detail";
import Register from "../views/dashboard/register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
    },
    {
        path: "/detail/:adId",
        element: <Detail />,
    },
]);

export default function Router() {
    return <RouterProvider router = {router}/>
}
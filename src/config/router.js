// router.js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from '../views/dashboard';
import Detail from '../Detail/detail'; // Ensure the correct path
import Register from '../views/dashboard/register';
import Login from '../views/dashboard/login';
import AddProduct from '../views/dashboard/product';

// Create the router with routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/detail/:adId",
    element: <Detail />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/product",
    element: <AddProduct />,
  },
]);

// Create a Router component to use RouterProvider
const Router = () => <RouterProvider router={router} />;

export default Router;

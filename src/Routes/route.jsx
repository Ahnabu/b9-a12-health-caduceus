import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../Components/HomePage/HomePage";
import Details from "../Components/Details/Details";
import Error from "../Pages/Error/Error";
import AvailableCamp from "../Components/AvailableCamp/AvailableCamp";
import LogIn from "../UserManagment/Login";
import Register from "../UserManagment/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Components/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element:<HomePage></HomePage>
                
            },
            {
                path: '/available-camps',
                element:<AvailableCamp></AvailableCamp>
                
            },
            {
                path: '/login',
                element:<LogIn></LogIn>
                
            },
            {
                path: '/register',
                element:<Register></Register>
                
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
             
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard> </PrivateRoute>

    },
]);

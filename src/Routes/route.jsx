import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../Components/HomePage/HomePage";
import Details from "../Components/Details/Details";
import Error from "../Pages/Error/Error";
import AvailableCamp from "../Components/AvailableCamp/AvailableCamp";

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
                path: '/details/:id',
                element: <Details></Details>,
             
            }
        ]
    },
]);

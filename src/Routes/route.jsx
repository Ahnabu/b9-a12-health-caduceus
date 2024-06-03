import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../Components/HomePage/HomePage";
import Details from "../Components/Details/Details";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element:<HomePage></HomePage>
                
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
             
            }
        ]
    },
]);

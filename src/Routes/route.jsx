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
import Profile from "../Components/Dashboard/Profile/Profile";
import UpdateUserModal from "../Components/Dashboard/Profile/UpdateProfile/UpdateProfile";
import OrganizerRoute from "./OrganizerRoute";
import AddCamp from "../Components/Dashboard/AddCamp/AddCamp";
import ManageCamps from "../Components/Dashboard/ManageCamp/ManageCamps";
import UpdateCamp from "../Components/Dashboard/UpdateCamp/UpdateCamp";

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
             
            },
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard> </PrivateRoute>,
        errorElement: <Error></Error>,
        
        children: [
            {
                index:true ,
                
                element:<PrivateRoute><Profile></Profile> </PrivateRoute>
            },
            {
                path: 'update-profile',
                element:<PrivateRoute><UpdateUserModal></UpdateUserModal></PrivateRoute>
            },
            {
                path: 'add-camp',
                element:<OrganizerRoute><AddCamp></AddCamp></OrganizerRoute>
            },
            {
                path: 'manage-camps',
                element:<OrganizerRoute><ManageCamps></ManageCamps></OrganizerRoute>
            },
            {
                path: 'manage-camps/update/:id',
                element: <OrganizerRoute><UpdateCamp></UpdateCamp></OrganizerRoute>
            },
            
        ]

    },
]);

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
import AddCamp from "../Components/Dashboard/Admin/AddCamp/AddCamp";
import ManageCamps from "../Components/Dashboard/Admin/ManageCamp/ManageCamps";
import UpdateCamp from "../Components/Dashboard/Admin/UpdateCamp/UpdateCamp";
import ManageRegisteredCamp from "../Components/Dashboard/Admin/ManageRegisteredCamp/ManageRegisteredCamp";
import Analytics from "../Components/Dashboard/Participant/Analytics/Analytics";
import RegisteredCamp from "../Components/Dashboard/Participant/RegisteredCamp/RegisteredCamp";
import { DialogDefault } from "../Components/Dashboard/Participant/RegisteredCamp/FeedbackModal";

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
                path: 'feedback',
                element:<PrivateRoute><DialogDefault></DialogDefault></PrivateRoute>
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
                path: 'manage-registered-camps',
                element:<OrganizerRoute><ManageRegisteredCamp></ManageRegisteredCamp></OrganizerRoute>
            },
            {
                path: 'manage-camps/update/:id',
                element: <OrganizerRoute><UpdateCamp></UpdateCamp></OrganizerRoute>
            },
            {
                path: 'analytics',
                element: <PrivateRoute><Analytics></Analytics></PrivateRoute>
            },
            
            {
                path: 'registered-camps',
                element: <PrivateRoute><RegisteredCamp></RegisteredCamp></PrivateRoute>
            },
            
        ]

    },
]);

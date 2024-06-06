/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import useAuth from "../Utils/useAuth";
import LoadingSpinner from "../Components/Shared/LoadingSpinner";
import useRole from "../Utils/useRole";


const OrganizerRoute = ({ children }) => {
    const { loading } = useAuth();
    const [role,isLoading]= useRole()
    const location = useLocation();

    if (loading || isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (role === "Organizer") {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default OrganizerRoute;
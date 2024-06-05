import { Outlet } from "react-router-dom";
// import useAuth from "../../Utils/useAuth";
import Sidebar from "./Sidebar"

const Dashboard = () => {
    // const { user } = useAuth()
    return (
        <div className="">
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;
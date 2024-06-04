import useAuth from "../../Utils/useAuth";
import Sidebar from "./Sidebar"

const Dashboard = () => {
    const { user } = useAuth()
    return (
        <div>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Dashboard;
import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../Components/Navbar/Navbar";


const Layout = () => {
    return (
        <div className="w-full">
            <StickyNavbar></StickyNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;
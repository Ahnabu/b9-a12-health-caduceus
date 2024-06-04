import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../Components/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";


const Layout = () => {
    return (
        <div className="w-full">
            <StickyNavbar></StickyNavbar>
            <div className="">
               <Outlet></Outlet> 
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;

import React from "react";
import {
    Navbar,

    Typography,
    Button,
    IconButton,
    Collapse,

} from "@material-tailwind/react";

import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Utils/useAuth";
import NavbarProfile from "./NavbarProfile";

export function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);
    const { user } = useAuth()
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);


    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 font-semibold z-10 bg-opacity-10 ">
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-normal"
            >
                <NavLink to={'/'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " p-2 underline font-bold text-white" : "text-black"
                } >
                    Home
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-normal"
            >

                <NavLink to={'/dashboard'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " p-2 underline font-bold text-white" : "text-black"
                } >
                    Dashboard
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-normal"
            >

                <NavLink to={'/available-camps'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " p-2 underline font-bold text-white" : "text-black"
                } >
                    Available Camps
                </NavLink>
            </Typography>
        

        </ul>
    );

    return (
        <div className=" min-w-80 w-full max-w-[1280px] mx-auto">
            <Navbar className="fixed bg-transparent z-10 h-max max-w-[1280px] mx-auto rounded-none px-2 md:px-4 py-2 lg:px-8 lg:py-4 bg-opacity-40 bg-primary">
                <div className="flex items-center justify-between text-primary">
                    <Typography

                        className="mr-2 md:mr-4 cursor-pointer py-1.5 md:text-3xl text-base font-bold text-white "
                    >
                        Health Caduceus

                    </Typography>

                    <div>
                        <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block text-black">{navList}</div>
                        {user ? <NavbarProfile></NavbarProfile> : <div className="flex items-center gap-x-1">



                            <Link to={'/login'}>
                                <Button
                                    className={`flex items-center text-primary bg-white justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 border border-primary`}
                                >Join Us</Button>
                            </Link>


                        </div>}

                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 relative text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6 relative "
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 relative"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                      
                    </div>
                    
                    </div>

                    
                </div>
                <Collapse open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">

                        <Link to={'/login'}>
                            <Button fullWidth  size="sm" className="  text-white bg-primary">
                                Log In
                            </Button>
                        </Link>


                        <Link to={'/register'}>
                            <Button fullWidth variant="gradient"  size="sm" className=" bg-white text-primary">
                                Register
                            </Button>
                        </Link>

                    </div>
                </Collapse>

            </Navbar>

        </div>
    );
}


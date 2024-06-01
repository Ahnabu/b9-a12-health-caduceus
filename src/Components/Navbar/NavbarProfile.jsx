import { useState } from "react";

import {

    Button,
    Tooltip,


} from "@material-tailwind/react";

import { FaCircleUser } from "react-icons/fa6";

import { Link } from "react-router-dom";
import useAuth from "../../Utils/useAuth";


const NavbarProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { LogOut, user } = useAuth();
    const handleLogOut = () => {
        LogOut();
      
    };
    return (
        <div className=" relative items-center ">
            <div className="flex justify-end items-center">
                <Tooltip content={`${user.displayName}`}>
                    <Button onClick={() => setIsOpen(!isOpen)} className={`w-12 h-12 rounded-full bg-secondary border border-secondary dark:bg-gray-500 p-1 `}>

                        {user?.photoURL ? <div className="w-12 h-12 rounded-full bg-cover -mt-[5px] -ml-[5px] " style={{ backgroundImage: `url(${user.photoURL})` }} ></div> : <FaCircleUser className="text-5xl -mt-[5.5px] -ml-[5px]" />}

                    </Button>
                </Tooltip>


                <Button onClick={handleLogOut} className="ml-4 hidden md:block bg-primary text-secondary">Log Out</Button>
            </div>
          

            {isOpen && <div


                className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 drop"
            >
                <a href="#" className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    {user?.photoURL ? <div className="w-12 h-12 rounded-full bg-cover -mt-[5px] -ml-[5px] " style={{ backgroundImage: `url(${user.photoURL})` }} ></div> : <FaCircleUser className="text-5xl -mt-[5.5px] -ml-[5px]" />}
                    <div className="mx-1">
                        <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{user.displayName} </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{user.email} </p>
                    </div>
                </a>

                <hr className="border-gray-200 dark:border-gray-700 " />
                <Link to={'/my-food'} className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">My added food items</Link>
                <Link to={'/add'} className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Add food items</Link>
                <Link to={'/my-ordered'} className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">My purchased food items</Link>
                <hr className="border-gray-200 dark:border-gray-700 " />

                <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    Help
                </a>
                <button onClick={handleLogOut} className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    Sign Out
                </button>
            </div>}
        </div>
    );
};

export default NavbarProfile;
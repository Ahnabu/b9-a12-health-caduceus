/* eslint-disable react/prop-types */
import { FaUserDoctor } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

import { IoLocationOutline } from "react-icons/io5";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from "@material-tailwind/react";
AOS.init();
const AvailableCampCard = ({ card }) => {
    const { participantCount, healthcareProfessional, location, dateTime, campFees, image, campName, _id, } = card
  
    return (
        <div>
            <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
                <Helmet>
                    <title>Health-Caduceus || Available Camps</title>
                </Helmet>
                <div>
                    <div className="max-w-xs rounded-md shadow-md bg-primary dark:bg-gray-50 dark:text-gray-800 mx-auto">
                        <img src={`${image}`} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">{campName} </h2>
                                <p className="dark:text-gray-800 flex gap-2"><FaUserDoctor /> Professional: {healthcareProfessional} </p>
                                <div className="text-start">
                                    <p className="dark:text-gray-800 flex gap-2"><IoLocationOutline className="text-black " /> {location} </p>
                                    <p className="dark:text-gray-800"> Time: {dateTime} </p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="dark:text-gray-800"> Join only for ${campFees} </p>
                                    <p className="dark:text-gray-800 flex gap-2"><FaUsers className="mt-1" />  Total Participant: <span className="font-bold">{participantCount} </span></p>
                                </div>

                            </div>
                            <NavLink to={`/details/${_id}`}>
                                <Button size="lg" className=" bg-primary border border-primary test-white">View Details
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AvailableCampCard;
/* eslint-disable react/prop-types */
import { FaUserDoctor } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import {
    Button,
    Typography
} from "@material-tailwind/react";

import { IoLocationOutline } from "react-icons/io5";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const PopularCard = ({ card, id }) => {
    const { participantCount, healthcareProfessional, location, dateTime, campFees, image, campName, _id,  } = card
    const isEven = (id) => {

        return id % 2 == 0


    }
    return (
        <div>
            <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
                <Helmet>
                    <title>Health-Caduceus || Home</title>
                </Helmet>
                <div className="container mx-auto space-y-12">
                    <div className={`flex flex-col overflow-hidden rounded-md shadow-sm  ${isEven(id) ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                        data-aos="fade-up"
                        data-aos-anchor-placement={`${isEven(id) ? 'top-bottom' : 'center-bottom'}`}
                        data-aos-easing="ease-in-back"
                    >
                        <img src={image} alt="" className="h-80 md:h-full dark:bg-gray-500 aspect-video group relative overflow-hidden hover:transition duration-300 ease-in-out hover:scale-105 lg:w-1/2" />

                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <div className="md:flex justify-between">
                                <div>
                                    <div className="md:flex justify-between">
                                        <h3 className="text-3xl font-bold flex animate__animated animate__bounce animate__delay-2s"> {campName}</h3>
                                    </div>
                                    <div className="md:flex justify-between">
                                        <h3 className="text-xl font-bold flex animate__animated animate__bounce animate__delay-3s mt-1"><FaUserDoctor className="mr-1 mt-[2px]"></FaUserDoctor> {healthcareProfessional}</h3>
                                    </div>
                                </div>
                                <div className="relative top-1/4">
                                    <h3 className="text-3xl font-bold flex animate__animated animate__bounce animate__delay-3s mt-1"><FaUsers className="mr-1 mt-[2px]"></FaUsers> {participantCount}</h3>
                                </div>

                            </div>


                            <div className="mt-4 md:mt-6 flex  flex-wrap "


                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-offset="300"
                            >
                                <span className="uppercase font-semibold mb-2 p-2 border border-primary  flex-wrap rounded-lg mr-4 lg:mr-6" > Join For Only ${campFees} </span>
                                <span className="uppercase font-semibold mb-2 p-2  border border-primary first-line:rounded-lg mr-4 lg:mr-6"> Date : {dateTime} </span>


                            </div>

                            <Typography variant="h5" className="font-medium flex text-white mb-2"
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back">
                                <IoLocationOutline className="mr-1 " />  {location}.
                            </Typography>
                            <p className="mb-4 dark:text-gray-600" data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"

                                data-aos-delay="300"
                            >
                                {/* {description} */}
                            </p>
                            <NavLink to={`/card-details/${_id}`}>
                                <Button size="lg" className="md:w-1/3 bg-primary border border-primary test-white">View Details
                                </Button>
                            </NavLink>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default PopularCard;
/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
const PopularCard = ({ card }) => {
    const { ParticipantCount, HealthcareProfessional, Location, DateTime, CampFees, Image, CampName } = card
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto">
                <img src={`${Image}`} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{CampName} </h2>
                        <p className="dark:text-gray-800 flex gap-2"><FaUserDoctor /> Professional: {HealthcareProfessional} </p>
                        <div>
                            <p className="dark:text-gray-800 flex gap-2"><CiLocationOn className="text-black " /> {Location} </p>
                            <p className="dark:text-gray-800"> Time: {DateTime} </p>
                        </div>
                        <div className="flex justify-between">
                            <p className="dark:text-gray-800"> Join only for ${CampFees} </p>
                            <p className="dark:text-gray-800 flex gap-2"><FaUsers className="mt-1"/>  Total Participant: <span className="font-bold">{ParticipantCount} </span></p>
                        </div>

                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;
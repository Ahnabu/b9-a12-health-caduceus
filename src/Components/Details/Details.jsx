
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Utils/useAxiosPublic";

import { CiLocationOn } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { DialogDefault } from "./Join";
import { useQuery } from "@tanstack/react-query";

const Details = () => {
    const {id} = useParams()
 
    const axiosPublic = useAxiosPublic()
    
    
    const { data: card = [] } = useQuery({
        queryKey: ['card'],
        queryFn: async() => {
            const res = await axiosPublic.get(`/details/${id}`)
    return res.data;
}
    })
        
     
   
    console.log(card);
    const { participantCount, healthcareProfessional, location, dateTime, campFees, image, campName,  description } = card
    return (
        <div>
            <section >
                <img src={`${image}`} alt="" className="w-5/6 mx-auto mb-8 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
                <div className="dark:bg-violet-600 items-start">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">{campName} </h1>
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2 md:text-xl">
                               
                                <p className="dark:text-gray-800 flex gap-2 font-bold"><FaUserDoctor /> Professional: {healthcareProfessional} </p>
                                <div className="text-start ">
                                    <p className="dark:text-gray-800 my-2 flex gap-2">
                                        <CiLocationOn className="text-black " /> {location} </p>
                                    <p className="dark:text-gray-800"> Time: {dateTime} </p>
                                </div>
                                <div className="text-start">
                                    <p className="dark:text-gray-800 my-2"> Join  for only <span className="font-bold"> ${campFees} </span> </p>
                                    <p className="dark:text-gray-800 flex gap-2"><FaUsers className="mt-1" />  Total Participant: <span className="font-bold">{participantCount} </span></p>
                                </div>

                            </div>
                            
                        </div>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50"><span className="font-bold">Details: </span>{description}  </p>
                      
                            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 bg-primary text-white dark:text-gray-50"><DialogDefault card={card}> </DialogDefault> </button>
                    
                      
                    </div>
                </div>
                
            </section>
        </div>
    );
};

export default Details;
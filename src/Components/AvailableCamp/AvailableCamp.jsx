import { useState } from "react";
import useAxiosPublic from "../../Utils/useAxiosPublic";
import AvailableCampCard from "./AvailableCampCard";
import { useQuery } from "@tanstack/react-query";
import { Button} from "@material-tailwind/react";

const AvailableCamp = () => {
    const [filter, setFilter] = useState('')
    const axiosPublic = useAxiosPublic()
    const { data: cards = [] } = useQuery({
        queryKey: ['cards'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/available-camps?filter=${filter}`)
            return res.data;
        }
    })

    const [isTwo, setIsTwo] = useState(false)
   
    const handleFilter = (e) => {
        e.preventDefault();
        const filter = e.target.search.value;
        setFilter(filter)
        console.log(filter)
    }
   
    return (
        <div className="mx-auto text-center text-white pt-20 bg-primary bg-opacity-40">
            <h1 className="text-white">Available Camps</h1>
            <p>
                Find Your Wellness! Browse our upcoming medical camps for free checkups, specialist consultations, and more.
            </p>
            <div className="my-4 md:flex justify-center ">
                <Button className="text-white font-bold bg-primary hidden lg:block mr-6" onClick={() => { setIsTwo(!isTwo) }}>{isTwo ? 'Switch to three column' : 'Switch to two column'}</Button>
                <div className="text-center ">
                    <form className="w-32 space-y-1 dark:text-gray-800 mx-auto" onSubmit={handleFilter}>
                    <label htmlFor="Search" className="hidden">Search</label>
                        <div className="relative mx-auto">
                            <input type="search" name="search" placeholder="Search camp names..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none text-black dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600" />
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                
                            <button type="submit" title="search"  className="p-1  focus:outline-none focus:ring">
                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800 text-primary">
                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                </svg>
                            </button>
                        </span>
                      
                    </div>
                </form>
                </div>
            </div>
           
            <div className={`grid grid-cols-1 md:grid-cols-2 ${isTwo ? 'lg:grid-cols-2' :'lg:grid-cols-3'}  mt-4 mx-auto`}>
                {
                    cards.map((card, index) => <AvailableCampCard key={card._id} card={card} id={index} ></AvailableCampCard>)
                }
            </div>
        </div>

    );
};

export default AvailableCamp;
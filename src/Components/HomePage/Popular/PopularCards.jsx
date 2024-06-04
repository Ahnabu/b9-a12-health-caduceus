
import useAxiosPublic from "../../../Utils/useAxiosPublic";
import PopularCard from "./PopularCard";
import { useQuery } from "@tanstack/react-query";


const PopularCards = () => {
    const axiosPublic = useAxiosPublic()
    const { data: cards = [] } = useQuery({
        queryKey: ['cards'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/popular`)
            return res.data;
        }
    })

    return (
        <div className="mx-auto text-center text-white">
            <h1 className="text-white">Popular Camps</h1>
            <p>
                See real results! Browse our most successful health camps, making a difference one checkup at a time.
            </p>

               <div className="  mt-4 mx-auto">
            {
                cards.map((card, index)=><PopularCard key={card._id} card={card} id={index} ></PopularCard>)
            }
        </div>
        </div>
     
    );
};

export default PopularCards;
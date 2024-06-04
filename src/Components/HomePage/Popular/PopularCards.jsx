import { useState } from "react";
import useAxiosPublic from "../../../Utils/useAxiosPublic";
import PopularCard from "./PopularCard";
import { useQuery, useQueryClient } from "@tanstack/react-query";


const PopularCards = () => {
    const axiosPublic = useAxiosPublic()
    const [cards, setCards] = useState([])
    const queryClient = useQueryClient()
   
        const query = useQuery({
            queryKey: ['cards'],
            queryFn: axiosPublic.get('/popular')
                .then(res => {
                    setCards(res.data)
                    console.log(res.data);
                })
})
         
        
    
    console.log(cards);
    
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
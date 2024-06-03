import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Utils/useAxiosPublic";
import PopularCard from "./PopularCard";


const PopularCards = () => {
    const axiosPublic = useAxiosPublic()
    const [cards, setCards] = useState([])
    useEffect( () => {
       
         axiosPublic.get('/popular')
            .then(res => {
                setCards(res.data)
                console.log(res.data);
            })
        
    }, [axiosPublic])
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
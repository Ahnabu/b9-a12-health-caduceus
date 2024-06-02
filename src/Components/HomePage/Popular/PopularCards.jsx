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
        <div className="mx-auto">

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mx-auto">
            {
                cards.map(card=><PopularCard key={card._id} card={card}></PopularCard>)
            }
        </div>
        </div>
     
    );
};

export default PopularCards;
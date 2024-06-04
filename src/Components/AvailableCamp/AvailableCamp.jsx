import useAxiosPublic from "../../Utils/useAxiosPublic";
import AvailableCampCard from "./AvailableCampCard";
import { useQuery } from "@tanstack/react-query";

const AvailableCamp = () => {
    const axiosPublic = useAxiosPublic()
    const { data: cards = [] } = useQuery({
        queryKey: ['cards'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/available-camps`)
            return res.data;
        }
    })



    console.log(cards);

    return (
        <div className="mx-auto text-center text-white bg-primary bg-opacity-40">
            <h1 className="text-white">Popular Camps</h1>
            <p>
                See real results! Browse our most successful health camps, making a difference one checkup at a time.
            </p>

            <div className="  mt-4 mx-auto">
                {
                    cards.map((card, index) => <AvailableCampCard key={card._id} card={card} id={index} ></AvailableCampCard>)
                }
            </div>
        </div>

    );
};

export default AvailableCamp;
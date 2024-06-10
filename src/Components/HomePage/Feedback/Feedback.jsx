import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Utils/useAxiosPublic";
import { Rating } from "@smastrom/react-rating";
import { FaRegCircleUser } from "react-icons/fa6";
import useAuth from "../../../Utils/useAuth";

const Feedback = () => {
    const axiosPublic = useAxiosPublic()

    const {user} = useAuth()
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/feedback`)
            return res.data;
        }
    })

    return (
       
        <div>
            <div className="text-center text-white mx-auto mt-4">
                <h1>Reviews</h1>
                <p className="mt-3">Let us see what our participants want to say about us.</p>
            </div>
    {
                reviews.map(review => <div key={review._id} className="flex flex-col gap-6 bg-primary mt-6">
                  

                    <div className="container flex flex-col w-full p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 text-secondary border-primary">
                        <div className="md:flex justify-between p-4">
                            <div className="flex space-x-4 mx-auto">
                                <div>
                                    {
                                        review.photoUrl ? <img src={review.photoUrl} alt="" className="object-cover w-12 h-12 rounded-full mx-auto dark:bg-gray-500" /> : <FaRegCircleUser className="w-12 h-12 bg-primary"/>
                                    }
                                  
                                </div>
                                <div>
                                    <h4 className="font-bold">{review.participant_name ? `${review.participant_name}`:'Unknown'} </h4>
                                    <span className="text-xs dark:text-gray-600">{user?.email} </span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-700 mt-4">
                             
                                <Rating style={{ maxWidth: 200 }} value={review.rating} />
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                            <p>{review.feedback} </p>
                        </div>
                    </div>
                </div>)
        }
        </div>
    );
};

export default Feedback;
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import {
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import useAuth from "../../../../Utils/useAuth";
import { ImBlocked } from "react-icons/im";
import { MdFeedback } from "react-icons/md";
import useAxiosSecure from "../../../../Utils/useAxiosSecure";
export function DialogDefault({ participant }) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const handleOpen = () => setOpen(!open);
    const { state, setState, user } = useAuth()
    const [rating, setRating] = useState(0)

    const { register, handleSubmit } = useForm();
    const participant_name = user?.displayName;
    const email = user?.email
    const photoUrl = user?.photoUrl
    const handleFeedback = async (data) => {
    
        const info = { ...data, participant_name, email,rating,photoUrl}
        try {
            await axiosSecure.post(`${import.meta.env.VITE_API_URL}/feedback`, info)
                .then(data => {

                    if (data.data.insertedId) {

                        Swal.fire({
                            title: 'Success',
                            text: 'Successfully added to database, please confirm your payment',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        navigate('/dashboard/registered-camps')
                        setState(!state)
                    }

                })
        }
        catch {
            Swal.fire({
                title: 'Error',
                text: 'Something went wrong',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }

    }
    return (
        <>
            <button onClick={handleOpen} className="bg-primary text-white w-full font-semibold tracking-wide border border-white rounded-md dark:bg-violet-600 ">
                {participant.confirmation_status != 'Pending' ? <MdFeedback></MdFeedback> : <ImBlocked></ImBlocked>}
            </button>
           
            <Dialog open={open} handler={handleOpen}>
              
                <DialogBody>
                    <form className="flex flex-col mt-8 text-white bg-primary bg-opacity-55 border-white" onSubmit={handleSubmit(handleFeedback)}>
                        <div className="mx-auto mt-3">
                            <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
                        </div>

                        <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex flex-col items-center w-full">
                                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                                
                                <div className="flex flex-col w-full">
                                    <textarea rows="3" {...register('feedback')} placeholder="Message..." className="p-4 rounded-md text-black resize-none dark:text-gray-800 dark:bg-gray-50"></textarea>
                                    <button type="submit" className="bg-primary text-white w-full font-semibold tracking-wide border border-white rounded-md dark:bg-violet-600 mt-4 " onClick={handleOpen}>Leave feedback</button>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <a rel="noopener noreferrer" href="/dashboard/registered-camps" className="text-sm dark:text-gray-600">Maybe later</a>
                            </div>
                        </div>


                    </form>
                </DialogBody>

            </Dialog>
        </>
    );
}
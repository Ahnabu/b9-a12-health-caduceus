/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,

} from "@material-tailwind/react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import useAuth from "../../../../Utils/useAuth";
import { ImBlocked } from "react-icons/im";
import { MdFeedback } from "react-icons/md";
import useAxiosSecure from "../../../../Utils/useAxiosSecure";
export function DialogDefault({ participant }) {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const handleOpen = () => setOpen(!open);
    const { state, setState, user } = useAuth()
    const [rating, setRating] = useState(0)

    const { register, handleSubmit } = useForm();
    const participant_name = user?.displayName;
    const email = user?.email
    const handleFeedback = async (data) => {
    
        const info = { ...data, participant_name, email,}
        // try {
        //     await axiosSecure.post(`${import.meta.env.VITE_API_URL}/participants`, info)
        //         .then(data => {
        //             console.log(data.data);
        //             if (data.data.insertedId) {

        //                 Swal.fire({
        //                     title: 'Success',
        //                     text: 'Successfully added to database, please confirm your payment',
        //                     icon: 'success',
        //                     confirmButtonText: 'Cool'
        //                 })
        //                 navigate('/dashboard/registered-camps')
        //                 setState(!state)
                       
        //                 setState(!state)
        //             }

        //         })
        // }
        // catch {
        //     Swal.fire({
        //         title: 'Error',
        //         text: 'Something went wrong',
        //         icon: 'error',
        //         confirmButtonText: 'Cool'
        //     })
        // }
        console.log(info);

    }
    return (
        <>
            {participant.confirmation_status != 'Pending' ? <MdFeedback></MdFeedback> : <ImBlocked></ImBlocked>}
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Its a simple dialog.</DialogHeader>
                <DialogBody>
                    <form className="flex flex-col mt-8" onSubmit={handleSubmit(handleFeedback)}>
                        <div>
                            <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
                        </div>

                        <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex flex-col items-center w-full">
                                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                                
                                <div className="flex flex-col w-full">
                                    <textarea rows="3" {...register('feedback')} placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50"></textarea>
                                    <button type="button" className="py-4 my-8 font-semibold rounded-md dark:text-gray-50 dark:bg-violet-600">Leave feedback</button>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <a rel="noopener noreferrer" href="/dashboard/registered-camps" className="text-sm dark:text-gray-600">Maybe later</a>
                            </div>
                        </div>


                        <DialogFooter>
                            <Button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-1"
                            >
                                <span>Cancel</span>
                            </Button>
                            <Button className="bg-primary" type="submit" onClick={handleOpen}>
                                <span>Confirm</span>
                            </Button>
                        </DialogFooter>

                    </form>
                </DialogBody>

            </Dialog>
        </>
    );
}
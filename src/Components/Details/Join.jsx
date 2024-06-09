/* eslint-disable react/prop-types */
import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
    Input,
    
} from "@material-tailwind/react";
import { useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Utils/useAxiosSecure";
import useAuth from "../../Utils/useAuth";
export function DialogDefault({card}) {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const handleOpen = () => setOpen(!open);
    const {state,setState,user}= useAuth()
    let { participantCount, campFees, campName, _id } = card


    const { register, handleSubmit } = useForm();
    const participant_name = user?.displayName;
    const email = user?.email
    const handleJoin = async( data) => {
       const updatedParticipantCount = parseFloat(participantCount) + 1
        const info = { ...data, campFees, campName, participant_name, email, payment_status: "Unpaid", confirmation_status: "Pending" }
        try {
            await axiosSecure.post(`${import.meta.env.VITE_API_URL}/participants`,info )
                .then(data => {

                    if (data.data.insertedId) {

                       
                        try {
                            axiosSecure.put(`/update-camp/${_id}`, { ...card,participantCount:updatedParticipantCount})
                                .then(data => {

                                    if (data.data.modifiedCount > 0) {

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
                        } catch {
                            Swal.fire({
                                title: 'Error',
                                text: 'Something went wrong',
                                icon: 'error',
                                confirmButtonText: 'Cool'
                            })
                        }
                        
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
                Join Now
            </button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Its a simple dialog.</DialogHeader>
                <DialogBody>
                    <form className="flex flex-col mt-8" onSubmit={handleSubmit(handleJoin)}>
                  
                    
                        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                            <div className="w-full">
                                <Typography
                                    variant="small"
                                    className="mb-2 font-medium text-[#5f431c]"
                                >
                                   Age
                                </Typography>
                                <Input
                                    size="lg" {...register("age")}
                                    placeholder="20"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                    type="number"
                                    step={0.01}
                                    className="w-full placeholder:opacity-100 focus:border-primary border-t-blue-gray-200"
                                    
                                />
                            </div>
                            <div className="w-full">
                                <Typography
                                    variant="small"
                                    className="mb-2 font-medium text-[#5f431c]"
                                >
                                    Phone Number
                                </Typography>
                                <Input
                                    size="lg" {...register("number")}
                                    placeholder="01254487875"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                    type="number"
                                    className="w-full placeholder:opacity-100 focus:border-primary border-t-blue-gray-200"
                                    
                                />
                            </div>
                        </div>
                        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                            <div className="w-full">
                                <Typography
                                    variant="small"
                                    className="mb-2 font-medium text-[#5f431c]"
                                >
                                    Gender

                                </Typography>
                                
                                
                                
                                <Input
                                    size="lg" {...register("gender")}
                                    placeholder="Male"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                    className="w-full placeholder:opacity-100 focus:border-primary border-t-blue-gray-200"
                                    name="gender"
                                />
                            </div>

                            <div className="w-full">
                                <Typography
                                    variant="small"
                                    className="mb-2 font-medium text-[#5f431c]"
                                >
                                    Emergency Contract
                                </Typography>
                                <Input
                                    size="lg" {...register("emergency")}
                                    placeholder="Emergency Contract"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                    className="w-full placeholder:opacity-100 focus:border-primary border-t-blue-gray-200"
                                    type="number"
                                />
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
                            <Button  className="bg-primary" type="submit" onClick={handleOpen}>
                                <span>Confirm</span>
                            </Button>
                        </DialogFooter>

                    </form>
                </DialogBody>
               
            </Dialog>
        </>
    );
}
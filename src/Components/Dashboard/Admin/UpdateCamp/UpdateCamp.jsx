/* eslint-disable react/prop-types */



import {
    Button,
    Input,
    Typography,
    // Select,
    // Option,

} from "@material-tailwind/react";


// import { useState } from "react";

// day picker

import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";
import useAuth from "../../../../Utils/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Utils/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";



const UpdateCamp = () => {
    const { setState, state } = useAuth()
    const axiosSecure = useAxiosSecure();
    const {id}= useParams()
    const {
        data:camp=[],
        
    } = useQuery({
        queryKey: ['camp', id],
        queryFn: async () => {
            const { data } = await axiosSecure(`/details/${id}`);     
            
            return data
        },
    })
    const {healthcareProfessional, location, dateTime, campFees, image, campName, description } = camp
    const { register, handleSubmit } = useForm({
        defaultValues: {
            healthcareProfessional: healthcareProfessional
            , location: location
            , dateTime: dateTime
            , campFees: campFees
            , image: image
            , campName: campName
            , description: description
        }
    });
   
    const navigate = useNavigate()
    const handleUpdate = async data => {


        try {
            await axiosSecure.put(`${import.meta.env.VITE_API_URL}/update-camp/${id}`, data)
                .then(data => {
                    if (data.data.modifiedCount >0) {

                        Swal.fire({
                            title: 'Success',
                            text: 'Successfully Updated to database',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        navigate('/dashboard')
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
        <div>
            <section className="px-8 py-20 container mx-auto text-white bg-primary bg-opacity-45">
                <Helmet>
                    <title>Health Caduceus || Update Camp</title>
                </Helmet>
                <div className="text-center">
                    <Typography variant="h5" className="text-secondary">
                        Update Camp
                    </Typography>
                    <Typography
                        variant="small"
                        className="text-secondary font-normal mt-1"
                    >
                        Update A Camp bellow.
                    </Typography>
                </div>

                <form className="flex flex-col mt-8" onSubmit={handleSubmit(handleUpdate)}>
                    <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                className="mb-2 font-bold text-secondary"
                            >
                                Camp Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Camp Name"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-primary border-t-blue-gray-200 bg-white text-black"  required
                                name="Camp_name"
                                {...register('campName' || campName) }

                            />
                        </div>
                        <div className="w-full">
                            <Typography
                                variant="small"
                                className="mb-2 font-bold text-secondary"
                            >
                                Healthcare Professional Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Healthcare Professional Name"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-primary border-t-blue-gray-200 bg-white text-black"  required
                                {...register('healthcareProfessional')}
                                

                            />
                        </div>
                    </div>
                    <div className="mb-6 flex flex-col gap-4 md:flex-row">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                className="mb-2 font-bold text-secondary"
                            >
                                Short Description
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="description"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-primary border-t-blue-gray-200 bg-white text-black" required
                                {...register('description')}

                            />

                        </div>



                    </div>
                    <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                className="mb-2 font-bold text-secondary"
                            >
                                Camp Fee
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="$20 (currency dollar)"
                                labelProps={{
                                    className: "hidden",
                                }}
                                type="number"
                                step={0.01}
                                className="w-full placeholder:opacity-100 focus:border-primary border-t-blue-gray-200 bg-white text-black" required
                                {...register('campFees')}

                            />
                        </div>
                        <div className="w-full">
                            <Typography
                                variant="small"
                                className="mb-2 font-bold text-secondary"
                            >
                                Date & Time
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="10-6-2025 at 09:00am"
                                labelProps={{
                                    className: "hidden",
                                }}
                                type="text"
                                className="w-full placeholder:opacity-100 focus:border-primary border-t-blue-gray-200 bg-white text-black" required
                                {...register('dateTime')}

                            />
                        </div>
                    </div>
                    <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                className="mb-2 font-bold text-secondary"
                            >
                                Camp Location
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="location"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-primary border-t-blue-gray-200 bg-white text-black"  required
                                {...register('location')}


                            />
                        </div>

                        <div className="w-full">
                            <Typography
                                variant="small"
                                className="mb-2 font-bold text-secondary"
                            >
                                Photo Url
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Photo Url"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-primary border-t-blue-gray-200 bg-white text-black" required {...register('image')}

                            />
                        </div>

                    </div>

                    <div className="w-full text-center mt-5">
                        <Button type="submit" className="text-center w-1/3 md:w-1/4 bg-primary text-secondary font-bold
                ">Update</Button>
                    </div>


                </form>
            </section>
        </div>
    );
};

export default UpdateCamp;
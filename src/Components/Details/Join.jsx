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
    Select,
} from "@material-tailwind/react";
import { useForm} from "react-hook-form"
export function DialogDefault({card}) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
    console.log(card);
    const { participantCount, healthcareProfessional, location, dateTime, campFees, image, campName, description } = card

    const { register, handleSubmit } = useForm();
    const handleJoin = ( data) => {
       
        console.log(data);

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
                                    placeholder="$20 (currency dollar)"
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
                                    placeholder="10"
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
                                    placeholder="Yes"
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
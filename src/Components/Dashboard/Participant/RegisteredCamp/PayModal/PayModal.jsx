import PropTypes from 'prop-types'
import {
    Button,
    Dialog,
    DialogBody,
    DialogHeader,
} from "@material-tailwind/react";
import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { useNavigate } from 'react-router-dom'
import useAxiosSecure from '../../../../../Utils/useAxiosSecure'
import useAuth from '../../../../../Utils/useAuth'
import { MdOutlinePayment } from 'react-icons/md';
import Swal from 'sweetalert2';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const PayModal = ({  participant, refetch }) => {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const handleOpen = () => setOpen(!open);
    const { state, setState, user } = useAuth();

    const handlePay = async id => {

        console.log(id);

        // try {
        //     await axiosSecure.put(`/update-participant/${id}`, {
        //         confirmation_status: 'Confirmed', payment_status: 'Paid'
        //     })
        //         .then(data => {
        //             console.log(data.data);
        //             if (data.data.modifiedCount > 0) {

        //                 Swal.fire({
        //                     title: 'Success',
        //                     text: 'Successfully Updated to database',
        //                     icon: 'success',
        //                     confirmButtonText: 'Cool'
        //                 })
        //                 navigate('/dashboard')
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


    }
    return (
        <>
            <button onClick={handleOpen} className="bg-primary text-white font-semibold tracking-wide border border-white rounded-md dark:bg-violet-600 p-0">
                <Button variant='outlined' className={`bg-primary text-secondary flex gap-2 border-secondary`} onClick={() => { handlePay(participant._id) }}>
                <MdOutlinePayment className='text-xl -m-1'></MdOutlinePayment> Pay </Button>
            </button>

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader
                    as='h3'
                    className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                    Review Info Before Pay
                </DialogHeader>
                <DialogBody>
                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                           
                                <div className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                   
                                    <div className='mt-2'>
                                        <p className='text-sm text-gray-500'>
                                            Camp: {participant.campName}
                                        </p>
                                    </div>
                                    <div className='mt-2'>
                                        <p className='text-sm text-gray-500'>
                                            Location: {participant.location}
                                        </p>
                                    </div>
                                    <div className='mt-2'>
                                        <p className='text-sm text-gray-500'>
                                            Name: {participant.participant_name}
                                        </p>
                                    </div>
                                    <div className='mt-2'>
                                        <p className='text-sm text-gray-500'>
                                           Date & Time
                                            {participant.dateTime}
                                        </p>
                                    </div>


                                    <div className='mt-2'>
                                        <p className='text-sm text-gray-500'>
                                            Price: $ {participant.campFees}
                                        </p>
                                    </div>
                                    <hr className='mt-8 ' />


                                    <Elements stripe={stripePromise}>
                                        {/* checkout form */}
                                        <CheckoutForm
                                            participant={participant}
                                            closeModal={handleOpen}
                                            refetch={refetch}
                                        />
                                    </Elements>
                                </div>
                            
                        </div>
                    </div>
                </DialogBody>

            </Dialog>
        </>
    )
}

PayModal.propTypes = {
    participant: PropTypes.object,
    closeModal: PropTypes.func,
    isOpen: PropTypes.bool,
    refetch: PropTypes.func,
}

export default PayModal
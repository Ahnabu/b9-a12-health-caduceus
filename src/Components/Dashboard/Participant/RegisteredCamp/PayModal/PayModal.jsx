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
import { MdOutlinePayment } from 'react-icons/md';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const PayModal = ({  participant, refetch }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <>
                <Button variant='outlined' className={`bg-primary text-secondary flex gap-2 border-secondary`} onClick={handleOpen}>
                <MdOutlinePayment className='text-xl -m-1'></MdOutlinePayment> Pay </Button>

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
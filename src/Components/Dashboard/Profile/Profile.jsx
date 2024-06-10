
import { Helmet } from 'react-helmet'

import LoadingSpinner from '../../../Components/Shared/LoadingSpinner'
import useRole from '../../../Utils/useRole'
import useAuth from '../../../Utils/useAuth'

import {
    Dialog,
    DialogBody,
} from "@material-tailwind/react";

import UpdateProfile from './UpdateProfile/UpdateProfile';
import { useState } from 'react';

const Profile = () => {
    const { user, loading } = useAuth() || {}
    const [role, isLoading] = useRole()
    const [open, setOpen] = useState(false);
    console.log(role,isLoading);

    if (isLoading || loading) return <LoadingSpinner />
    

    const handleOpen = () => setOpen(!open);
    return (
        <div className='md:flex justify-center items-center h-screen'>
            <Helmet>
                <title>Health Caduceus Profile</title>
            </Helmet>
            <div className='bg-white shadow-lg rounded-2xl md:w-3/5'>
                <img
                    alt='profile'
                    src='/bg.jpeg'
                    className='w-full mb-4 rounded-t-lg h-36'
                />
                <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                    <a href='#' className='relative block'>
                        <img
                            alt='profile'
                            src={user?.photoURL}
                            referrerPolicy='no-referrer'
                            className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                        />
                    </a>

                    
                    <p className='mt-2 text-xl font-medium text-wrap text-gray-800 '>
                        User Id: {user?.uid}
                    </p>
                    <div className='w-full p-2 mt-4 rounded-lg'>
                        <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                            <p className='flex flex-col'>
                                Name
                                <span className='font-bold text-black '>
                                    {user?.displayName}
                                </span>
                            </p>
                            <p className='flex flex-col'>
                                Role
                                <span className='font-bold text-black '>{role}</span>
                            </p>
                            <p className='flex flex-col'>
                                Email
                                <span className='font-bold text-black '>{user?.email}</span>
                            </p>

                        </div>
                            <div className='mx-auto mt-4'>
                                
                            <button className='bg-primary px-10 py-1 rounded-lg text-white cursor-pointer  block mb-1 mx-auto' onClick={handleOpen} >
                                    Update Profile
                                    </button>
                        </div>
                        <Dialog open={open} handler={handleOpen} className='rounded-lg'>
                            
                            <DialogBody className='bg-primary rounded-lg'>
                               <UpdateProfile></UpdateProfile>
                            </DialogBody>
                           
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
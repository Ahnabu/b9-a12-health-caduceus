


import { useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios';
import useAuth from '../Utils/useAuth';
import Swal from 'sweetalert2';


const Methods = () => {
    const { googleSingIn, setUser, user } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const handleGoogle = async () => {


        try {
            const result = await googleSingIn()
            console.log(result.user);
            // await axios.post(`${import.meta.env.VITE_API_URL}/user`,
            //     { email: result?.user?.email },
            //     { withCredentials: true })
            // await axios.post(
            //     `${import.meta.env.VITE_API_URL}/jwt`,
            //     { email: result?.user?.email },
            //     { withCredentials: true })
            // await axios.get(`${import.meta.env.VITE_API_URL}/user/${user?.email}`, {
            //     withCredentials: true,
            //     params: {
            //         email: user?.email
            //     }
            // })
            

            setUser(result.user)
            Swal.fire({
                title: 'Success',
                text: 'Successfully logged in',
                icon: 'success',
                timer: 1500
            })
            navigate(location?.state || '/', { replace: true })
        }
        catch (error) {
            Swal.fire({
                title: 'Error!',
                timer: 1500,
                text: `${error.message}`,
                icon: 'error',

            })
            console.log(error)
        }
    }


    return (
        <div>
            <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-600" />
                <p className="px-3 dark:text-gray-600">OR</p>
                <hr className="w-full dark:text-gray-600" />
            </div>
            <div className=" space-y-4 text-primary">
                <button aria-label="Log in with Google" className="flex items-center justify-center w-full p-2 space-x-4 border border-primary rounded-md dark:border-gray-600 focus:dark:ring-default-600 " onClick={handleGoogle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p>Login with Google</p>
                </button>


                
            </div>
        </div>
    );
};

export default Methods;
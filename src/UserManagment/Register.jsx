

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";


import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';



import Methods from "./Methods";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../Utils/useAuth";
import Swal from "sweetalert2";
function Register() {
    const { EmailSingIn, setUser } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('')
    const [see, setSee] = useState(false);


    const { register, handleSubmit } = useForm();

    const handleRegistration = async data => {
        console.log(data);
       const password = data.password
        const MIN_LENGTH = 6;

        // Error messages
        const ERR_LENGTH = "Password must be at least 6 characters long.";
        const ERR_LOWERCASE = "Password must contain at least one lowercase letter.";
        const ERR_UPPERCASE = "Password must contain at least one uppercase letter.";

        // Check password length
        if (password.length < MIN_LENGTH) {
            setError(ERR_LENGTH);
            return false;
        }

        // Check for lowercase letter
        if (!/[a-z]/.test(password)) {
            setError(ERR_LOWERCASE);
            return false;
        }

        // Check for uppercase letter
        if (!/[A-Z]/.test(password)) {
            setError(ERR_UPPERCASE);
            return false;
        }
        setError('')

console.log(password);
        try {
            console.log(data);
            const email = data?.email

            const result = await EmailSingIn(data?.email,data?.password)
            console.log(result.user);
            await axios.post(`${import.meta.env.VITE_API_URL}/users`,
                {  email,role:"User" },
                { withCredentials: true })
            await axios.post(
                `${import.meta.env.VITE_API_URL}/jwt`,
                { email: result?.user?.email },
                { withCredentials: true })
            
            setUser(result.user)
            Swal.fire({
                title: 'Success',
                text: 'Successfully singed in',
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
        <div className="w-full mx-auto pt-16  bg-primary bg-opacity-40 text-white ">
            <Helmet>
                <title>Health Caduceus || Register</title>
            </Helmet>
            <Card color="transparent" className="mx-auto w-80 md:w-[440px] sm:p-6  md:p-8  text-white" >
                <Typography variant="h4" color="white">
                    Sign Up
                </Typography>
                <Typography color="white" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(handleRegistration)}>
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="white" className="-mb-3">
                            Your Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name"
                            className=" !border-t-white-200  bg-white focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}

                            {...register("name")}
                        />
                        <Typography variant="h6" color="white" className="-mb-3">
                            Your PhotoURL
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="your image url"
                            className=" !border-t-white-200 bg-white  focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}

                            {...register("photoURL")}
                        />
                        <Typography variant="h6" color="white" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-white-200 bg-white  focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            {...register("email")}
                            required
                        />
                        <Typography variant="h6" color="white" className="-mb-3">
                            Password
                        </Typography>
                        <div className="flex md:flex-col">
                            <Input
                                type={`${see ? 'text' : 'password'}`}
                                size="lg"
                                placeholder="********"
                                name="password"
                                className=" !border-t-white-200 bg-white  focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("password")}
                                required
                                
                            >

                            </Input>
                            <span onClick={() => { setSee(!see) }} className={' relative top-3 md:-top-7 right-6 md:-right-[350px]'}>
                                {see ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                  
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button className="mt-6 bg-primary" fullWidth type="submit">
                        Sign Up
                    </Button>

                    <Typography color="gray" className="mt-4 text-center text-white font-normal">
                        Already have an account?{" "}
                        <Link to={'/login'}>Log In</Link>
                    </Typography>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 text-white dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <Methods></Methods>
            </Card>
        </div>

    );
}
export default Register;
import { Helmet } from 'react-helmet'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../../Utils/useAxiosSecure'
import LoadingSpinner from '../../../Shared/LoadingSpinner'
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import useAuth from '../../../../Utils/useAuth';

import { useEffect, useState } from 'react';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import '../../../Shared/style.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
const ManageCamps = () => {
    const { state, setState } = useAuth()
    const [count, setCount] = useState(8);
    const [filter, setFilter] = useState('');
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [camps, setCamps] = useState([])
    const [sort, setSort] = useState('')
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/camp-count`)
            .then(data => {
                setCount(data.data.count)
            }).catch(error => console.log(error))
    }, [currentPage])
    const numbersOfPage = Math.ceil(count / 8)
    //   Fetch camps Data
    const {
        isLoading,
        refetch,
    } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const { data } = await axiosSecure(`/camps`)
            setCamps(data)
            return data
        },
    })
    useEffect(() => {
        try {
            axiosSecure.get(`camps?currentPage=${currentPage - 1}&filter=${filter}&sort=${sort}`)
                .then(data => {
                    console.log(data.data);
                    setCamps(data.data)
                    setState(!state)
                    console.log(currentPage);
                })
        } catch (error) {
            setError(error.message);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ axiosSecure, currentPage,filter,refetch])

    const pages = []
    for (let i = 0; i < numbersOfPage; i++) {
        pages.push(i)
    }
    // const pages = [...Array(numbersOfPage).keys()]



    const handleDelete = (id) => {
        
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(70 195 235 / var(--tw-bg-opacity))',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                axiosSecure.delete(`/delete/${id}`)
                   
                    .then(data => {
                        console.log(data.data);
                        if (data.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Camp has been deleted.',
                                'success'
                            )
                            
                            setState(!state);
                        }
                    })

            }
        })
        
    }


    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            refetch()
        }
    }
    const handleNext = () => {
        if (currentPage < numbersOfPage) {
            setCurrentPage(currentPage + 1)
            refetch()
        }
    }
    const handleFilter = (e) => {
        e.preventDefault();
        const filter = e.target.search.value;
        if (!filter) {
            setError('Please enter a search term');
            return;
        }
        setFilter(filter)
        refetch()
    }

    
    if (isLoading) return <LoadingSpinner />
    return (
        <>
            <div className='container mx-auto px-4 sm:px-8'>
                <Helmet>
                    <title>Health Caduceus ||Manage camps</title>
                </Helmet>
                <div className='py-8'>
                    <div className='text-center'>
                        <h1 className='text-2xl font-bold text-primary'>
                             Manage Camps
                        </h1>
                        <p className='text-primary'>Manage all Registered Camps here</p>
                        <div className='md:flex gap-4 mx-auto w-full justify-center  text-center'>
                            <div className="text-center md:mr-20  ">
                                <form className="w-32 space-y-1 dark:text-gray-800 mx-auto" onSubmit={handleFilter}>
                                    <label htmlFor="Search" className="hidden">Search</label>
                                    <div className="relative mx-auto">
                                        <input type="search" name="search" placeholder="Search camp names..." className="w-32 py-2 pl-10 text-sm  border border-primary rounded-md sm:w-auto focus:outline-none text-black bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600" />
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">

                                            <button type="submit" title="search" className="p-1  focus:outline-none focus:ring">
                                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800 text-primary">
                                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                                </svg>
                                            </button>
                                        </span>

                                    </div>
                                    {error && <p className='text-red-700 w-full'>Error: {error}</p>}
                                </form>
                            </div>
                            <div>
                                
                                <Menu>
                                    <MenuHandler>
                                        <Button className="bg-primary  text-white w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200">{sort ? `${sort}` : 'Sort'}</Button>
                                    </MenuHandler>
                                    <MenuList className="bg-primary bg-opacity-45">
                                        <MenuItem value={'healthcareProfessional'}
                                            onClick={() => { setSort('healthcareProfessional'), refetch() }} className="bg-primary bg-opacity-55 text-white" >Healthcare Professional Name</MenuItem>
                                        <MenuItem value={'dateTime'}
                                            className="bg-primary bg-opacity-55 text-white" onClick={() => { setSort('dateTime'), refetch() }}
                                        > Date</MenuItem>
                                        <MenuItem value={'campName'}
                                            className="bg-primary bg-opacity-55 text-white"
                                            onClick={() => { setSort('campName'), refetch() }}>Camp Name</MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                        </div>
                        
                    </div>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-auto'>
                            <table className='min-w-full leading-normal bg-primary text-white overflow-auto'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-primary border-b border-gray-200 text-white  text-left text-sm uppercase font-normal'
                                        >
                                            Camp Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-primary border-b border-gray-200 text-white  text-left text-sm uppercase font-normal'
                                        >
                                            Date & Time
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-primary border-b border-gray-200 text-white  text-left text-sm uppercase font-normal'
                                        >
                                            Healthcare Professional
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-primary border-b border-gray-200 text-white  text-left text-sm uppercase font-normal'
                                        >
                                            Location
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-primary border-b border-gray-200 text-white  text-left text-sm uppercase font-normal'
                                        >
                                           Update
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-primary border-b border-gray-200 text-white  text-left text-sm uppercase font-normal'
                                        >
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {camps.map(camp => {
                                        return <tr key={camp._id} className='border border-secondary'>
                                            <td className='px-5 py-3'>{camp.campName}</td>
                                            <td className='px-5 py-3'>{camp.dateTime}</td>
                                            <td className='px-5 py-3'>{camp.healthcareProfessional}</td>
                                            <td className='px-5 py-3'>{camp.location}</td>
                                            <td className='px-5 py-3'>
                                               
                                                <Link to={`update/${camp._id}`}>
                                                    <Button variant='outlined' className='bg-primary text-secondary text-xl border-secondary'>
                                                    <GrDocumentUpdate></GrDocumentUpdate>
                                                </Button>
                                                </Link>
                                               
                                                </td>
                                            <td className='px-5 py-3 '>
                                                <Button variant='outlined' className='bg-primary text-xl text-secondary border-secondary'
                                                    onClick={() => {handleDelete(camp._id) }}
                                                >
                                                    <MdDelete></MdDelete>
                                                </Button>
                                                 </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center space-x-1 px-2 dark:text-gray-800 pagination">
                        <button title="previous" type="button" className="w-8 h-8 py-0 px-2 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100 bg-primary" onClick={handlePrev}>
                            <GrFormPrevious className='text-2xl text-white'></GrFormPrevious>
                        </button>
                        {
                            pages.map(page => <button key={page} onClick={() => { setCurrentPage(page + 1),refetch() }} type="button" title={`Page ${page + 1}`}
                                className={currentPage === page + 1 && 'selected'}
                            // className='selected'
                            >{page + 1} </button>)
                        }

                        <button title="next" type="button" onClick={handleNext} className="px-2 text-center mx-auto w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100 bg-primary">
                            <GrFormNext className='text-2xl text-white'></GrFormNext>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ManageCamps
import { Helmet } from 'react-helmet'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../Utils/useAxiosSecure'
import LoadingSpinner from '../../Shared/LoadingSpinner'
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Button } from '@material-tailwind/react';
import Swal from 'sweetalert2';
import useAuth from '../../../Utils/useAuth';

import { useEffect, useState } from 'react';

import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import '../../Shared/style.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
const ManageCamps = () => {
    const { state, setState } = useAuth()
    const [count, setCount] = useState(8)
    const [currentPage, setCurrentPage] = useState(1);
    const[camps,setCamps]=useState([])
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/camp-count`)
            .then(data => {
                setCount(data.data.count)
            }).catch(error => console.log(error))
    }, [currentPage])
    const numbersOfPage = Math.ceil(count / 8)

    useEffect(() => {
        axiosSecure.get(`camps?currentPage=${currentPage - 1}`)
            .then(data => {
                
                setCamps(data.data)
                setState(!state)

            })
    }, [ axiosSecure, currentPage])

    const pages = []
    for (let i = 0; i < numbersOfPage; i++) {
        pages.push(i)
    }
    // const pages = [...Array(numbersOfPage).keys()]

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

    
    if (isLoading) return <LoadingSpinner />
    return (
        <>
            <div className='container mx-auto px-4 sm:px-8'>
                <Helmet>
                    <title>Health Caduceus ||Manage camps</title>
                </Helmet>
                <div className='py-8'>
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
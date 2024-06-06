import { Helmet } from 'react-helmet'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../Utils/useAxiosSecure'
import LoadingSpinner from '../../Shared/LoadingSpinner'
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Button } from '@material-tailwind/react';
import Swal from 'sweetalert2';
import useAuth from '../../../Utils/useAuth';
const ManageCamps = () => {
    const axiosSecure = useAxiosSecure()
    const {state, setState}= useAuth()
    //   Fetch camps Data
    const {
        data: camps = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['camps'],
        queryFn: async () => {
            const { data } = await axiosSecure(`/camps`)
            return data
        },
    })

    console.log(camps)
    const handleDelete = (id) => {
        
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
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
                            refetch()
                            setState(!state);
                        }
                    })

            }
        })
        
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
                                                <Button variant='outlined' className='bg-primary text-secondary text-xl border-secondary'>
                                                    <GrDocumentUpdate></GrDocumentUpdate>
                                                </Button>
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
            </div>
        </>
    )
}

export default ManageCamps
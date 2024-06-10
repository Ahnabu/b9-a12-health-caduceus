/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import LoadingSpinner from '../../../Shared/LoadingSpinner'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../../Utils/useAxiosSecure'
import useAuth from '../../../../Utils/useAuth'

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Analytics = () => {
    const{user}=useAuth()
    const [loading, setLoading] = useState(true)
    const axiosSecure = useAxiosSecure()
    const {
        data: data=[],
        isLoading,
        
    } = useQuery({
        queryKey: [loading],
        queryFn: async () => {
            const { data } = await axiosSecure(`/payment/${user.email}`)
            return data
        },
    })
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])

    let stats = []
    data.map(item => {
        const { campName, campFees } = item
        const singleData =
        {
            name: campName,
            uv: campFees

        }
        const exist = stats.find(camp => camp.campName == campName);

        if (!exist) {
            stats.push(singleData)
        }

    },
    )
    return (
        <>
            <div className='text-center text-primary'>
                <h1>Analytics</h1>
                <p>Here is your camps vs  camp fees chart </p>
            </div>
            {loading || isLoading ? (
               
                <LoadingSpinner smallHeight />
            ) : data.length >= 1 ? (
                    <BarChart
                        width={700}
                        height={500}
                        data={stats}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        className='mt-10 mx-auto  bg-primary bg-opacity-40'
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {stats.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                ) : (
                    <>
                        <LoadingSpinner smallHeight />
                        <p className='text-center text-red-700'>
                            Not enough data available for this section!
                        </p>

                    </>
                ) }
        </>
    )
}

Analytics.propTypes = {
    data: PropTypes.array,
}

export default Analytics
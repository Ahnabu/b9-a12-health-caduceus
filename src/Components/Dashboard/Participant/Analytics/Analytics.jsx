import { Chart } from 'react-google-charts'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import LoadingSpinner from '../../../Shared/LoadingSpinner'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../../Utils/useAxiosSecure'
import useAuth from '../../../../Utils/useAuth'


const options = {
    title: 'Registered Camps',
    curveType: 'function',
    legend: { position: 'bottom' },
    series: [{ color: '#F43F5E' }],
}
const Analytics = () => {
    const{user}=useAuth()
    const [loading, setLoading] = useState(true)
    const axiosSecure = useAxiosSecure()
    const {
        data: data=[],
        isLoading,
        
    } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const { data } = await axiosSecure(`/participants/${user.email}`)
            return data
        },
    })
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])

    return (
        <>
            {loading || isLoading ? (
                <LoadingSpinner smallHeight />
            ) : data.length > 1 ? (
                <Chart
                    chartType='LineChart'
                    width='100%'
                    data={data}
                    options={options}
                />
            ) : (
                <>
                    <LoadingSpinner smallHeight />
                    <p className='text-center text-red-700'>
                                Not enough data available for this section!
                            </p>
                          
                </>
            )}
        </>
    )
}

Analytics.propTypes = {
    data: PropTypes.array,
}

export default Analytics
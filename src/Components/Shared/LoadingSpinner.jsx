import PropTypes from 'prop-types'
import { ScaleLoader } from 'react-spinners'

const LoadingSpinner = ({ smallHeight }) => {
    return (
        <div
            className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center
      text-primary
     
      `}
        >
            <ScaleLoader size={100} className="text-primary" color='rgb(70 195 235 / var(--tw-text-opacity))' />
        </div>
    )
}

LoadingSpinner.propTypes = {
    smallHeight: PropTypes.bool,
}

export default LoadingSpinner
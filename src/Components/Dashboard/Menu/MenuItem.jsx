import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const MenuItem = ({ label, address, icon: Icon }) => {
    return (
        <NavLink
            to={address}
            end
            className={({ isActive }) =>
                `flex my-5 w-full items-center px-4 py-2 mt-5 bg-primary hover:bg-white  hover:text-primary transition-colors duration-300 transform' ${isActive ? 'bg-white  text-primary ' : 'text-white'
                }`
            }
        >
            <Icon className='w-5 h-5' />

            <span className='mx-4 font-medium rounded-lg'>{label}</span>
        </NavLink>
    )
}
MenuItem.propTypes = {
    label: PropTypes.string,
    address: PropTypes.string,
    icon: PropTypes.elementType,
}

export default MenuItem
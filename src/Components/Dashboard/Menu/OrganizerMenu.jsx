import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'

const OrganizerMenu = () => {
    return (
        <>
            <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
        </>
    )
}

export default OrganizerMenu
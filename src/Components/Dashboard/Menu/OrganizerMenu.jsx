import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'
import { LiaCampgroundSolid } from "react-icons/lia";
import { MdSettingsInputComposite } from "react-icons/md";
import { MdOutlineAddBusiness } from "react-icons/md";
const OrganizerMenu = () => {
    return (
        <>
            <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
            <MenuItem icon={MdOutlineAddBusiness} label='Add A Camp' address='add-camp' />
            <MenuItem icon={LiaCampgroundSolid} label='Manage A Camp' address='manage-camps' />
            <MenuItem icon={MdSettingsInputComposite} label='Manage Registered Camp' address='manage-registered-camps' />
        </>
    )
}

export default OrganizerMenu
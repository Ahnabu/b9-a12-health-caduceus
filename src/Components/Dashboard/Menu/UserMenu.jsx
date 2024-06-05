import MenuItem from "./MenuItem";
import { BsGraphUp } from 'react-icons/bs'

const UserMenu = () => {
    return (
        <div>
            <MenuItem
                label='Statistics'
                address='/dashboard'
                className="rounded"
                icon={BsGraphUp}
            />
        </div>
    );
};

export default UserMenu;
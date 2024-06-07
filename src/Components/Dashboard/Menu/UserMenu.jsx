import MenuItem from "./MenuItem";
import { MdAnalytics } from "react-icons/md";
import { LiaCampgroundSolid } from "react-icons/lia";
import { FaHistory } from "react-icons/fa";
const UserMenu = () => {
    return (
        <div>
            <MenuItem
                label='Analytics'
                address='analytics'
                className="rounded"
                icon={MdAnalytics}
            />
            <MenuItem
                icon={LiaCampgroundSolid}
                label='Registered Camps'
                address='registered-camps'
            />
            <MenuItem
                icon={FaHistory}
                label='Payment History'
                address='payment-history'
            />
        </div>
    );
};

export default UserMenu;
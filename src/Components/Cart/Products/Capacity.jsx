import {useSelector} from "react-redux";
import {selectCartShopById} from "../../../Redux/reducer/CartShopSlice";

const Capacity = ({ids}) => {
    const {activeCapacity} = useSelector(state => selectCartShopById(state, ids))
    return (
        <p className='w-8 xs:text-xs'>{activeCapacity.capacity}GB</p>
    );
};

export default Capacity;
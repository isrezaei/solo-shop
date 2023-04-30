import {useSelector} from "react-redux";
import {selectCartShopById} from "../../../Redux/reducer/CartShopSlice";
import {selectMasterDataById} from "../../../Redux/reducer/MasterDataSlice";

const Total = ({ids}) => {

    const {discount} = useSelector(state => selectCartShopById(state, ids))
    const {quantity} = useSelector(state => selectMasterDataById(state, ids))

    const totalPrice = parseInt(quantity * discount)



    return (
        <p className='w-8 xs:text-xs text-lime-600 '>
            ${totalPrice}
        </p>
    );
};

export default Total;
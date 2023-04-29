import {RiDeleteBinLine} from "react-icons/ri";
import {RemoveQuantity, selectMasterDataById} from "../../../Redux/reducer/MasterDataSlice";
import {DeleteFromCarts, selectCartShopById} from "../../../Redux/reducer/CartShopSlice";
import {useDispatch, useSelector} from "react-redux";

const Remove = ({ids}) => {

    const {product, id , discount} = useSelector(state => selectCartShopById(state, ids))
    const {quantity} = useSelector(state => selectMasterDataById(state, ids))
    const dispatch = useDispatch()

    const handelRemove = () => {
        dispatch(RemoveQuantity({
                    id,
                    quantity,
                    totalPrice : parseInt(quantity * discount)
                }
            )
        )
        dispatch(DeleteFromCarts(id))
    }


    return (
            <p className='text-center text-red-500 flex justify-center items-center cursor-pointer' onClick={handelRemove}>
                <RiDeleteBinLine/>
            </p>
    );
};

export default Remove;
import {TiMinus, TiPlus} from "react-icons/ti";
import {RiDeleteBinLine} from "react-icons/ri";
import {
    DecreaseQuantity,
    IncreaseQuantity,
    RemoveQuantity,
    selectMasterDataById
} from "../../../Redux/reducer/MasterDataSlice";
import {DeleteFromCarts} from "../../../Redux/reducer/CartShopSlice";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {Discount} from "../../../Helper/Discount";

const Handel = () => {

    const {productId} = useParams()
    const {id, quantity} = useSelector(state => selectMasterDataById(state, productId))

    const discount = Discount()
    const dispatch = useDispatch()

    const handelIncrease = () => {
        dispatch(IncreaseQuantity({
                    id,
                    quantity: quantity + 1,
                    discount
                }
            )
        )
    }
    const handelDecrease = () => {
        dispatch(DecreaseQuantity({
                    id,
                    quantity: quantity - 1,
                    discount
                }
            )
        )
    }
    const handelRemove = () => {
        dispatch(RemoveQuantity({
                    id,
                    quantity,
                    discount
                }
            )
        )
        dispatch(DeleteFromCarts(id))
    }

    return (
        <div className={"flex"}>
            {quantity &&
                <TiPlus onClick={handelIncrease} className='text-xl w-5 text-lime-600 cursor-pointer'/>}
            <p className='w-full text-center xs:text-xs'> {quantity}</p>
            {
                quantity > 1 ?
                    <TiMinus onClick={handelDecrease} className='text-xl w-5 text-red-500 cursor-pointer'/> :
                    quantity && <RiDeleteBinLine onClick={handelRemove}
                                                 className='text-xl w-5 text-red-500 flex justify-center items-center cursor-pointer'/>
            }
        </div>
    );
};

export default Handel;
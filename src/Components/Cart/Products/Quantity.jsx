import {TiMinus, TiPlus} from "react-icons/ti";
import {DecreaseQuantity, IncreaseQuantity, selectMasterDataById} from "../../../Redux/reducer/MasterDataSlice";
import {useDispatch, useSelector} from "react-redux";
import {selectCartShopById} from "../../../Redux/reducer/CartShopSlice";

const Quantity = ({ids}) => {

    const {discount, id} = useSelector(state => selectCartShopById(state, ids))
    const {quantity} = useSelector(state => selectMasterDataById(state, ids))
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


    return (
        <div className=' flex justify-evenly items-center '>

            <button className='
                flex justify-center items-center text-red-500 disabled:opacity-50
                xs:w-6 xs:h-6
                lg:w-4 lg:h-8' disabled={quantity <= 1}
                    onClick={handelDecrease}>
                <TiMinus/>
            </button>

            <p className='
                flex justify-center items-center text-neutral-500
                xs:w-6 xs:p-0 xs:text-sm xs:font-bold'> {quantity}</p>

            <button className='
                flex justify-center items-center rounded-full bg-lime-500 text-white
                xs:w-4 xs:h-4
                lg:w-4 lg:h-4' onClick={handelIncrease}>
                <TiPlus/>
            </button>
        </div>
    );
};

export default Quantity;
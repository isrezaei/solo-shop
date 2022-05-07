import {AddToCard , DeleteToCard, selectCartShopById} from "../../Redux/CartShopSlice";
import {useSelector} from "react-redux";
import {CheckQuantity, HaveQuantity} from "../../HelperFuncs/HelperFuncs";
import {AddQuantity, DecreaseQuantity, IncreaseQuantity, RemoveQuantity} from "../../Redux/MasterDataSlice";
import {selectMasterDataById} from "../../Redux/MasterDataSlice";
import {useDispatch} from "react-redux";


export const CartPageEachCart = ({ids}) =>
{
    const {image , product , price , id} = useSelector(state => selectCartShopById(state , ids))
    const {quantity} = useSelector(state => selectMasterDataById(state , ids))


    const dispatch = useDispatch()


    const IncQuan = () =>
    {
        dispatch(IncreaseQuantity({
            id,
            quantity : quantity + 1,
            price
        }))

    }

    const DecQuan = () =>
    {
        dispatch(DecreaseQuantity({
            id,
            quantity : quantity - 1,
            price

        }))
    }

    const RemQuan = () =>
    {
        dispatch(RemoveQuantity({
            id,
            price
        }))

        dispatch(DeleteToCard(id))
    }

    return (
        <div className='flex justify-evenly items-center p-8'>

            <img className='w-36' src={image.mainImg}  alt={product}/>
            <p>{product}</p>
            <p>{price}</p>

            <div className='w-6/12 flex justify-evenly items-center'>

               <button onClick={IncQuan}>+</button>

                <h4> {quantity}</h4>

                {CheckQuantity(id) === 1 && <button onClick={RemQuan}>Remove from Cart</button> }

                {CheckQuantity(id) > 1 && <button onClick={DecQuan}>-</button>}

            </div>

            <button onClick={()=> dispatch(DeleteToCard(id))}>Delete</button>

            <h4>total price :  {CheckQuantity(id) * price} </h4>

        </div>
    )
}
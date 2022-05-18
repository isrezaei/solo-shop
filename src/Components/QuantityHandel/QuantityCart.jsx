import {useDispatch} from "react-redux";
import {DecreaseQuantity, IncreaseQuantity, RemoveQuantity} from "../../Redux/MasterDataSlice";
import {DeleteToCard} from "../../Redux/CartShopSlice";
import {CheckQuantity} from "../../HelperFuncs/HelperFuncs";

export const QuantityCart = ({CartSlice , MasterSlice}) =>
{

    const {quantity} = MasterSlice
    const {image , product , price , id} = CartSlice

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
import {CheckQuantity, HaveQuantity} from "../../HelperFuncs/HelperFuncs";
import {AddQuantity, DecreaseQuantity, IncreaseQuantity, RemoveQuantity} from "../../Redux/MasterDataSlice";
import {useDispatch} from "react-redux";

export const DetailsEachProduct = ({singleProduct}) =>
{

    const dispatch = useDispatch()
    const {introduction , image , product , brand , price , id , quantity} = singleProduct

    const AddQuan  = () =>
    {
        dispatch(AddQuantity(
            {
                id,
                quantity : 1 ,
                price
            }
        ))
    }

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
    }



    return (
        <div style={{marginTop : '3vw'}}>
            <div>
                <img src={image.mainImg} alt={product} style={{width : '20vw'}}/>
                <h3>{price} $</h3>
                <h3>{product}</h3>
                <h4>{brand}</h4>
                <h3>{introduction}</h3>

                <div style={{  width : '20%' ,display : 'flex' ,  justifyContent : 'space-evenly', alignItems : 'center'}}>

                    {HaveQuantity(id) ? <button onClick={IncQuan}>+</button> :  <button onClick={AddQuan}>add to cart</button>}

                    {quantity}

                    {CheckQuantity(id) === 1 && <button onClick={RemQuan}>Remove from Cart</button> }

                    {CheckQuantity(id) > 1 && <button onClick={DecQuan}>-</button>}

                </div>
            </div>
        </div>

    )

}
import {useSelector , useDispatch} from "react-redux";
import {selectMasterDataById} from "../../Redux/MasterDataSlice";
import {AddQuantity , IncreaseQuantity , DecreaseQuantity , RemoveQuantity} from "../../Redux/MasterDataSlice";
import {Link} from "react-router-dom";
import {HaveQuantity , CheckQuantity} from "../../HelperFuncs/HelperFuncs";


export const HomeEachProduct = ({ids}) =>
{

    const dispatch = useDispatch()
    const EachProduct = useSelector(state => selectMasterDataById(state , ids))


    const {product , image , id , quantity , price} = EachProduct


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


            <div className='h-85 flex flex-col justify-start items-center'>

                <img className='w-auto h-3/4' src={image.mainImg} alt={product}/>
                <h4>{product}</h4>

                <div className='w-6/12 flex justify-evenly items-center'>

                    {HaveQuantity(id) ? <button onClick={IncQuan}>+</button> :  <button onClick={AddQuan}>add to cart</button>}

                    <h4> {quantity}</h4>

                    {CheckQuantity(id) === 1 && <button onClick={RemQuan}>Remove from Cart</button> }

                    {CheckQuantity(id) > 1 && <button onClick={DecQuan}>-</button>}

                </div>

                <Link to={`/details/${id}`}>See Details</Link>

                <h2>{price === 'out' ? 'out of stock ': price}</h2>

            </div>



    )
}
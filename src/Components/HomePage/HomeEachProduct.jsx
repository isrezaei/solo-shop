import {useSelector , useDispatch} from "react-redux";
import {selectMasterDataById} from "../../Redux/MasterDataSlice";
import {AddQuantity , IncreaseQuantity , DecreaseQuantity , RemoveQuantity} from "../../Redux/MasterDataSlice";
import {Link} from "react-router-dom";
import {HaveQuantity , CheckQuantity} from "../../HelperFuncs/HelperFuncs";
import {AddToCard} from "../../Redux/CartShopSlice";


export const HomeEachProduct = ({ids}) =>
{

    const dispatch = useDispatch()
    const EachProduct = useSelector(state => selectMasterDataById(state , ids))


    const {product , image , id , quantity , price , offer} = EachProduct

    const Price = new Intl.NumberFormat('en-IN').format(price)

    console.log(EachProduct)

    const AddQuan  = () =>
    {
        dispatch(AddQuantity(
            {
                id,
                quantity : 1 ,
                price
            }
        ))

        dispatch(AddToCard(EachProduct))
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


            <div className='h-full  flex flex-col justify-start items-center bg-gray-300 '>


                <Link className='w-auto h-4/6 bg-blue-700 ' to={`/details/${id}`}>

                    <img className='w-auto h-5/6' src={image.mainImg} alt={product}/>

                </Link>

                {
                    offer > 0 ?
                    <div className='w-full bg-blue-300 h-14 flex justify-evenly items-center'>
                        <p>${Price}</p>
                        <p>${(price - (price * offer / 100)).toFixed(2)}</p>
                    </div>
                        :
                        <div className='w-full bg-fuchsia-400 h-8 flex justify-evenly items-center'>
                            <h2>{price === 'out' ? 'out of stock ':`$${price}` }</h2>
                        </div>
                }

                <h4 className='bg-amber-100'>{product}</h4>


                <div className='w-6/12 bg-red-500 flex justify-evenly items-center'>

                    {HaveQuantity(id) ? <button className='bg-blue-300' onClick={IncQuan}>+</button> :  <button className='bg-amber-500' onClick={AddQuan}>add to cart</button>}

                    <h4> {quantity}</h4>

                    {CheckQuantity(id) === 1 && <button className='bg-blue-700' onClick={RemQuan}>Remove from Cart</button> }

                    {CheckQuantity(id) > 1 && <button onClick={DecQuan}>-</button>}

                </div>




            </div>



    )
}
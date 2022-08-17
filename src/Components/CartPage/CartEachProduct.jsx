import {DeleteFromCarts, selectCartShopById} from "../../Redux/CartShopSlice";
import {useSelector} from "react-redux";
import {DecreaseQuantity , IncreaseQuantity, RemoveQuantity, selectMasterDataById} from "../../Redux/MasterDataSlice";
import {RiDeleteBinLine} from "react-icons/ri";
import {CheckQuantity} from "../../HelperFuncs/HelperFuncs";
import {TiMinus, TiPlus} from "react-icons/ti";
import {useDispatch} from "react-redux";
import {DiscountedCalculation} from "../DetailsPage/DiscountedCalculation";


export const CartEachProduct = ({ids}) =>
{
    const CartSlice = useSelector(state => selectCartShopById(state , ids))
    const MasterSlice = useSelector(state => selectMasterDataById(state , ids))
    const dispatch = useDispatch()

    //get main Quantity from master slice
    const {detailsImage , quantity} = MasterSlice

    //get data information in cart slice
    const
        {
            activeImage,
            activeColor,
            activeCapacity,
            product,
            price,
            discountedPrice,
            id,
        } = CartSlice


    const EachTotalPrice = parseInt(CheckQuantity(id) * discountedPrice)



    const handelIncrease = () =>
    {
        dispatch(IncreaseQuantity({
                    id,
                    quantity : quantity + 1,
                    discountedPrice
                }
            )
        )
    }
    const handelDecrease = () =>
    {
        dispatch(DecreaseQuantity({
                    id,
                    quantity : quantity - 1,
                    discountedPrice
                }
            )
        )
    }
    const handelRemove = () =>
    {
        dispatch(RemoveQuantity({
                    id,
                    quantity,
                    EachTotalPrice
                }
            )
        )
        dispatch(DeleteFromCarts(id))
    }



    return (
        <div className='
        flex bg-neutral-100 my-3
        xs:h-40 xs:flex-col xs:justify-between xs:items-center xs:rounded-3xl
        lg:h-40 lg:flex-row lg:justify-between lg:items-center lg:rounded-none
        '>


            <div className='xs:w-full lg:w-80 h-full flex justify-start items-center'>

                <img id='product-image' className='xs:w-24 lg:w-36' src={detailsImage[activeImage[product]]}  alt={product}/>

                <div className='
                flex flex-col items-start
                xs:h-24 lg:h-28 xs:justify-center xs:gap-1
                lg:justify-evenly lg:gap-0'>

                    <p className='xs:text-sm  lg:text-[1rem] font-bold text-gray-500'>{product}</p>
                    <p className='text-sm'>See Product</p>

                    <p className='
                    bg-red-500 text-center text-white rounded-2xl flex justify-center items-center cursor-pointer
                    xs:w-6 xs:h-6 xs:text-sm
                    lg:w-8 lg:h-8 lg:text-xl'
                       onClick={handelRemove}>
                        <RiDeleteBinLine/>
                    </p>
                </div>
            </div>


            <section className='
             flex
             xs:w-full xs:flex-row xs:justify-between xs:items-center xs:p-2
             lg:w-7/12 lg:flex-row lg:justify-evenly lg:items-center  lg:p-0
             '>

            <div className='
            flex justify-evenly items-center
            xs:w-20
            lg:w-36
            '>

                <button className='
                flex justify-center items-center text-red-500 disabled:opacity-50
                xs:w-6 xs:h-6 lg:w-8
                lg:h-8' disabled={CheckQuantity(id) <= 1}
                        onClick={handelDecrease}>
                    <TiMinus/>
                </button>


                <p className='
                text-center text-neutral-600
                xs:w-6 xs:p-0 xs:text-sm xs:font-bold lg:w-10
                lg:p-2 lg:text-[.9rem] lg:border lg:border-gray-300'> {quantity}</p>


                <button className='
                flex justify-center items-center rounded-full bg-blue-700 text-white
                xs:w-4 xs:h-4
                lg:w-8 lg:h-8' onClick={handelIncrease}>
                    <TiPlus/>
                </button>

            </div>


            <p className='
            rounded-full
            xs:w-5 xs:h-5
            lg:w-14
            ' style={{background : activeColor[product]}}> </p>

            <p className='
            text-center text-neutral-500 font-bold
            xs:text-sm
            lg:text-[1rem] lg:w-10'>{activeCapacity[product]}GB</p>

            <p className='xs:hidden lg:block text-center text-gray-500'>${price}</p>
            <p className='xs:w-14 xs:text-sm lg:w-24 lg:text-[1rem] text-center text-blue-700 text-xl font-bold'>${EachTotalPrice}</p>

            </section>

        </div>
    )
}
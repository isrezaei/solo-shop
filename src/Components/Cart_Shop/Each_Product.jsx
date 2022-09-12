import {DeleteFromCarts, selectCartShopById} from "../../Redux/CartShopSlice";
import {useSelector} from "react-redux";
import {DecreaseQuantity , IncreaseQuantity, RemoveQuantity, selectMasterDataById} from "../../Redux/MasterDataSlice";
import {RiDeleteBinLine} from "react-icons/ri";
import {CheckQuantity} from "../Helper/HelperFuncs";
import {TiMinus, TiPlus} from "react-icons/ti";
import {useDispatch} from "react-redux";
import {DiscountedCalculation} from "../Products_Page/Utility_Fils/DiscountedCalculation";


export const Each_Product = ({ids}) =>
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
        flex my-3 relative
        xs:w-[21rem] xs:mx-auto xs:h-40 xs:flex-col xs:justify-center xs:items-center xs:rounded-3xl xs:bg-neutral-100
        lg:w-[36rem] lg:h-40 lg:flex-row lg:justify-start lg:items-center lg:bg-white
        2xl:w-[40rem]'>

            <div className='xs:w-full lg:w-[16rem]  h-full flex justify-start items-center'>

                <img id='product-image' className='xs:w-24 lg:w-28' src={detailsImage[activeImage[product]]}  alt={product}/>

                <div className='
                flex flex-col items-start
                xs:h-24 lg:h-28 xs:justify-center xs:gap-1
                lg:justify-evenly lg:gap-0'>

                    <p className='xs:text-sm lg:text-[.9rem] font-bold text-gray-500'>{product}</p>
                    <p className='text-sm'>See Product</p>

                    <p className='
                    bg-red-500 text-center text-white rounded-2xl flex justify-center items-center cursor-pointer
                    xs:w-6 xs:h-6 xs:text-sm
                    lg:w-6 lg:h-6 lg:text-lg'
                       onClick={handelRemove}>
                        <RiDeleteBinLine/>
                    </p>

                </div>

            </div>


            <section className='
             flex
             xs:w-full xs:flex-row xs:justify-evenly xs:items-center xs:py-3
             lg:w-7/12 lg:flex-row lg:justify-start lg:items-center lg:gap-6  lg:p-0'>


                <div className='
            flex justify-evenly items-center
            xs:w-20 xs:bg-white xs:rounded-full xs:absolute xs:top-[4rem] xs:right-9
            lg:w-28 lg:bg-transparent lg:relative lg:top-0 xs:right-0'>

                    <button className='
                flex justify-center items-center text-red-500 disabled:opacity-50
                xs:w-6 xs:h-6
                lg:w-4 lg:h-8' disabled={CheckQuantity(id) <= 1}
                            onClick={handelDecrease}>
                        <TiMinus/>
                    </button>


                    <p className='
                flex justify-center items-center text-neutral-500
                xs:w-6 xs:p-0 xs:text-sm xs:font-bold
                lg:w-8 lg:h-8 lg:text-[.9rem] lg:border lg:border-gray-300 rounded-full'> {quantity}</p>


                    <button className='
                flex justify-center items-center rounded-full bg-lime-500 text-white
                xs:w-4 xs:h-4
                lg:w-4 lg:h-4' onClick={handelIncrease}>
                        <TiPlus/>
                    </button>

                </div>


                <p className='
            shadow-md
            xs:w-12 xs:h-5 xs:rounded-full
            lg:w-8 lg:h-5 lg:rounded-full' style={{background : activeColor[product]}}>
                </p>

                <p className='
            text-center text-neutral-500 font-bold bg-white
            xs:text-sm xs:w-20 xs:rounded-full
            lg:text-sm lg:w-10'>{activeCapacity[product]}GB</p>

                <p className='bg-white xs:w-14 xs:text-sm xs:rounded-full lg:w-10 lg:text-sm lg:rounded-full text-center text-blue-700 text-xl font-bold'>
                    ${EachTotalPrice}
                </p>

            </section>

        </div>
    )
}
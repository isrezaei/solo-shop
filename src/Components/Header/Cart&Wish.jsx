import {FaRegHeart} from "react-icons/fa";
import {Link} from "react-router-dom";
import {CgShoppingBag} from "react-icons/cg";
import {useSelector} from "react-redux";

export const CartWish = () =>
{


    const {totalQuantity , totalPrice} = useSelector(state => state.MasterDataSlice)

    const NumberFormat = new Intl.NumberFormat('en-IN').format(totalPrice)

    return (
        <div className='w-80 flex justify-center'>



            <section className='flex w-28 justify-center items-center'>

                <FaRegHeart className='text-3xl'/>

                <div className='flex flex-col justify-center items-start ml-2'>
                    <span className='text-lg'>wishlist</span>
                    <span>0</span>
                </div>

            </section>


            <section className='flex relative w-28 justify-center items-center'>

                <Link to='/cart-shop'>
                    <CgShoppingBag className='text-4xl'/>
                    <div className='absolute w-6 h-6 flex justify-center bottom-9 left-3 rounded-2xl bg-pink-500'>{totalQuantity}</div>
                </Link>


                <div className='flex flex-col justify-center items-start ml-2'>
                    <span className='text-lg'>cart</span>
                    <span>{NumberFormat} $</span>
                </div>

            </section>
        </div>
    )
}
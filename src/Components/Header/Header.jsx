import {useSelector} from "react-redux";
import {FiSearch} from 'react-icons/fi'
import {CgShoppingBag} from 'react-icons/cg'
import {FaRegHeart} from 'react-icons/fa'
import {IoPhonePortraitOutline} from 'react-icons/io5'
import {HiOutlineMail} from 'react-icons/hi'
import {BiUserPlus} from 'react-icons/bi'
import {Link} from "react-router-dom";

export const Header = () =>
{

    const {totalQuantity , totalPrice} = useSelector(state => state.MasterDataSlice)

    const NumberFormat = new Intl.NumberFormat('en-IN').format(totalPrice)


    return (
     <>

         <div className='bg-emerald-200 w-full'>

             <div className='w-10/12 m-auto h-14 bg-gray-300 flex justify-between items-center'>

                 <section className='flex justify-around items-center bg-emerald-200 w-1/4'>

                     <div className='flex justify-start items-center w-6/12 '>
                         <IoPhonePortraitOutline className='mr-2 text-2xl'/>
                         <p>+38 068 005 3570</p>
                     </div>

                     <div className='flex justify-start items-center w-6/12  '>
                         <HiOutlineMail className='mr-2 text-2xl'/>
                         <p>PhoneFlu @ yahoo.com</p>
                     </div>
                 </section>

                 <section className='flex justify-between items-center bg-emerald-200 w-48'>

                     <div className='flex justify-between items-center w-24'>
                         <BiUserPlus className='text-3xl'/>
                         <p>Register</p>
                     </div>
                     <p>Sign in</p>
                 </section>


             </div>

         </div>


         <div className='w-full bg-blue-200'>
             <div className='w-10/12 m-auto bg-amber-400 h-32 flex justify-between'>


                 <div className='w-3/6 bg-emerald-600 flex justify-between items-center '>

                     <div className=' bg-amber-200 text-3xl flex items-center'>
                         <p className='font-black'>PhoneFlu</p>
                     </div>


                     <div className=' bg-emerald-200 flex justify-center items-center rounded-tr-xl rounded-br-xl'>
                         <input className='h-10 w-80 p-3' placeholder='Search for product' />
                         <span className='w-44 h-10 bg-blue-200 flex items-center justify-center'>All Categories</span>
                         <FiSearch className='w-12'/>
                     </div>

                 </div>




                 <div className='w-80 flex justify-evenly'>



                     <section className='flex w-36 justify-between items-center'>

                         <FaRegHeart className='text-5xl'/>

                         <div className='flex flex-col justify-center items-start'>
                             <span className='text-2xl'>wishlist</span>
                             <span>0</span>
                         </div>

                     </section>


                     <section className='flex relative w-36  justify-between items-center'>

                         <Link to='/cart-shop'>
                             <CgShoppingBag className='text-5xl'/>
                             <div className='absolute w-6 h-6 flex justify-center bottom-9 left-7 rounded-2xl bg-pink-500'>{totalQuantity}</div>
                         </Link>


                         <div className='flex flex-col justify-center items-start'>
                             <span className='text-2xl'>cart</span>
                             <span>{totalPrice} $</span>
                         </div>

                     </section>
                 </div>
             </div>
         </div>


     </>
    )
}


import {IoPhonePortraitOutline} from "react-icons/io5";
import {HiOutlineMail} from "react-icons/hi";
import {BiUserPlus} from "react-icons/bi";
import {useEffect, useState} from "react";
import {FaRegHeart} from "react-icons/fa";
import {CgShoppingBag} from "react-icons/cg";

export const HeaderUp = () =>
{

    const [ScrollPosition , setScrollPosition] = useState(0)

    useEffect(()=>{

        function updatePosition()
        {
            setScrollPosition(window.pageYOffset)
        }

        window.addEventListener('scroll' , updatePosition)
        return ()=> window.removeEventListener("scroll", updatePosition)

    } , [])


    return (
        <div className='bg-gray-50 border-b-2 border-gray-100 z-10 fixed top-0 w-full'>

            <div className='w-10/12 m-auto h-14 flex justify-between items-center'>

                <section className='flex justify-around items-center w-2/6'>

                    <div className='flex justify-start items-center w-6/12 '>
                        {ScrollPosition < 200 ? <IoPhonePortraitOutline className='mr-2 text-2xl'/> : <FaRegHeart className='mr-2 text-2xl'/>}
                        {ScrollPosition < 200 ?  <p>+38 068 005 3570</p> : <p>Wishlist</p>}
                    </div>

                    <div className='flex justify-start items-center w-6/12  '>
                        {ScrollPosition < 200 ? <HiOutlineMail className='mr-2 text-2xl'/> : <CgShoppingBag className='mr-2 text-2xl'/>}
                        {ScrollPosition < 200 ?   <p>PhoneFlu @ yahoo.com</p> : <p>Price</p>}
                    </div>
                </section>

                <section className='flex justify-between items-center w-48'>
                    <div className='flex justify-between items-center w-24'>
                        <BiUserPlus className='text-3xl'/>
                        <p>Register</p>
                    </div>
                    <p>Sign in</p>
                </section>

            </div>
        </div>
    )
}
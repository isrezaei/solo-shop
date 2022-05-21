import {RiHeartAddLine , RiUserAddLine} from "react-icons/ri";
import {AiOutlineShopping} from "react-icons/ai";
import {BiUserPlus} from "react-icons/bi";
import {useEffect, useState} from "react";
import {TiUserAddOutline} from "react-icons/ti";

import {useSelector} from "react-redux";

export const HeaderUp = () =>
{

    const {totalPrice , totalQuantity} = useSelector(state => state.MasterDataSlice)

    const NumberFormat = new Intl.NumberFormat('en-IN').format(totalPrice)

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

            <div className='w-10/12 m-auto h-20 flex justify-between items-center'>

                <section className='flex justify-evenly items-center w-1/4 h-full bg-blue-300'>

                    <div className='relative flex justify-start items-center w-4/12 h-full'>
                        {ScrollPosition > 200 && <AiOutlineShopping className='w-1/3 text-5xl text-gray-500'/>}
                        {ScrollPosition > 200 && <p className='text-xl  w-2/4 ml-1'>${NumberFormat}</p>}
                        {ScrollPosition > 200 &&  <p className='absolute w-5 h-5 p-3 text-sm bg-red-300 rounded-full flex justify-center items-center bottom-2 left-6'>{totalQuantity}</p>}
                    </div>


                    <div className='flex justify-evenly items-center w-4/12'>
                        {ScrollPosition > 200 && <RiHeartAddLine className='w-1/4 text-5xl text-gray-500'/>}
                        {ScrollPosition > 200 && <div className='w-20 text-lg text-red-500'> 55 </div>}
                    </div>

                </section>

                <section className='flex justify-between items-center w-48'>

                    <div className='flex justify-center items-center w-28 p-2 bg-blue-700 cursor-pointer '>
                        <RiUserAddLine className='text-3xl text-white'/>
                        <p className='text-white'>Register</p>
                    </div>

                    <p className='text-blue-700 font-bold cursor-pointer'>Sign in</p>

                </section>

            </div>
        </div>
    )
}
import {RiUserAddLine} from "react-icons/ri";

import {useEffect, useState} from "react";


import {useSelector} from "react-redux";
import {CartWish} from "./Cart&Wish";

export const HeaderUp = ({headerPosition}) =>
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
        <div className={`bg-gray-50 border-b-2 border-gray-100 z-10 ${headerPosition} top-0 w-full`}>

            <div className='w-10/12 m-auto h-20 flex justify-between items-center'>

                <div className='w-80 flex justify-evenly items-center'>

                    {ScrollPosition > 200 ? <CartWish/> : <p className='text-xl text-gray-500'>Welcome</p>}

                </div>

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
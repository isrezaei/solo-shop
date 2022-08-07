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
        <div className={` 
         flex
         bg-gray-50
          xs:w-full xs:h-16 xs:justify-center xs:items-center xs:relative
          2xl:w-full 2xl:h-20 2xl:border-b-2 2xl:border-gray-100 2xl:z-10 2xl:top-0 ${headerPosition}`
        }>
            <div className='
            xs:w-96 xs:justify-start xs:m-0
            2xl:w-10/12 2xl:m-auto 2xl:h-20 2xl:flex 2xl:justify-between 2xl:items-center
            '>
                <div className='
                xs:hidden
                2xl:w-80 2xl:block 2xl:flex 2xl:justify-evenly 2xl:items-center 2xl:block
                '>
                    {ScrollPosition > 200 ? <CartWish/> : <p className='2xl:text-xl 2xl:block 2xl:text-gray-500'>Welcome</p>}
                </div>

                <section className='
                flex
                items-center
                justify-between
                xs:w-full
                2xl:w-48'>

                    <div className='flex justify-center items-center w-28 p-2 bg-blue-700 cursor-pointer '>
                        <RiUserAddLine className='text-white
                        xs:text-sm
                        2xl:text-3xl'/>
                        <p className='
                        text-white
                        xs:text-sm
                        2xl:text-lg'>Register</p>
                    </div>
                    <p className='
                    text-blue-700 font-bold cursor-pointer
                    xs:text-sm
                    2xl:text-lg'>Sign in</p>
                </section>
            </div>
        </div>
    )
}
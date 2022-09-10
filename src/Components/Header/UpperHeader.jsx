import {RiUserAddLine} from "react-icons/ri";
import {useEffect, useState} from "react";
import {CartWish} from "./Cart&Wish";

export const UpperHeader = () =>
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
        <div className={` 
          flex ${ScrollPosition > 200 ? 'bg-neutral-800' : 'bg-gray-50'} z-50 transition
          xs:w-full xs:h-16 xs:justify-center xs:items-center xs:relative
          lg:fixed lg:h-[5rem]
          2xl:w-full 2xl:h-20 2xl:top-0`
        }>
            <div className='
            xs:w-96 xs:justify-start xs:item-center xs:m-0
            lg:w-11/12 lg:flex lg:justify-between lg:items-center
            2xl:h-20
            '>
                <div className='
                xs:hidden
                lg:block lg:flex lg:justify-evenly lg:items-center
                '>
                    {ScrollPosition > 200 ? <CartWish/> : <p className='2xl:text-xl 2xl:block 2xl:text-gray-500'>Welcome</p>}
                </div>

                <section className='
                flex
                items-center
                justify-around
                xs:w-full
                lg:w-52'>

                    <div className='flex justify-center items-center gap-2 w-28 p-2 bg-blue-700 cursor-pointer rounded-3xl'>

                        <RiUserAddLine className='text-white
                        xs:text-sm
                        2xl:text-xl'/>
                        <p className='
                        text-white
                        xs:text-sm
                        2xl:text-[.9rem]'>Register</p>
                    </div>

                    <p className='
                    text-blue-700 font-bold cursor-pointer
                    xs:text-sm
                    2xl:text-[.9rem]'>Sign in</p>

                </section>

            </div>
        </div>
    )
}
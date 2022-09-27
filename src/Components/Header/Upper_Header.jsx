import {RiUserAddLine} from "react-icons/ri";
import {useEffect, useState} from "react";
import {Info_Bar} from "./Info_Bar";

export const Upper_Header = () =>
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
        <div

            className={` 
          flex ${ScrollPosition > 200 ? 'bg-glass-black backdrop-blur-sm' : 'bg-gray-50'} z-50 transition
          xs:w-full xs:h-16 xs:justify-center xs:items-center xs:relative
          md:sticky md:z-50 md:h-[5rem] md:left-0 md:top-0`}>

            <div className='
            xs:w-[90%] xs:flex xs:justify-between xs:item-center xs:m-0
            md:w-[1600px] md:flex md:mx-5 md:justify-between md:items-center
            lg:w-[1400px] lg:flex lg:mx-5 lg:justify-between lg:items-center
            2xl:w-[1800px] 2xl:h-20 2xl:mx-0'>
                <div className='

                 xs:flex xs:justify-evenly xs:items-center'>
                    {ScrollPosition > 200 ? <Info_Bar/> : <p className='2xl:text-xl 2xl:block 2xl:text-gray-500'>Welcome</p>}
                </div>
                <section className='flex items-center justify-evenly xs:w-52 md:w-52'>

                    <div className='xs:h-8 md:h-12  flex justify-center items-center gap-2 p-2 bg-blue-700 cursor-pointer rounded-3xl xs:w-28 md:w-28'>
                        <RiUserAddLine className='text-white
                        xs:text-sm'/>
                        <p className='
                        text-white
                        xs:text-[.8rem]
                        md:text-[.9rem]'>Register</p>
                    </div>

                    <p className='
                    text-blue-700 font-bold cursor-pointer
                    xs:text-[.8rem]
                    md:text-[.9rem]'>Sign in</p>

                </section>

            </div>
        </div>
    )
}
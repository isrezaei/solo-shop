import {AiOutlineSend} from 'react-icons/ai'
import {BsInstagram , BsTwitter } from  'react-icons/bs'
import {RiFacebookFill} from 'react-icons/ri'

export const Footer = () =>
{

    return (
        <div className='
        w-full
        flex
        flex-col
        justify-between
        items-center
        '>
            <div className='
            w-full
            flex
            py-6
            xs:flex-col xs:justify-between xs:items-start xs:h-full xs:px-5
            lg:flex-row lg:justify-evenly lg:items-center lg:h-64 lg:px-10
            '>

                <div className='h-full flex flex-col justify-start gap-1 items-start cursor-pointer w-56 '>
                    <p className='
                    font-bold  text-gray-600
                    xs:my-2 xs:text-[1rem]
                    lg:mb-4 lg:text-lg
                    2xl:mb-4 2xl:text-2xl
                    '>about Us</p>

                    <p className='text-gray-500 xs:text-sm lg:text-[1rem] 2xl:text-lg'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly </p>
                </div>

                <div className='w-56 h-full flex flex-col justify-start gap-1 items-start cursor-pointer'>
                    <p className='
                    font-bold  text-gray-600
                    xs:my-2 xs:text-[1rem]
                    lg:mb-4 lg:text-lg
                    2xl:mb-4 2xl:text-2xl
                    '>Hot links</p>

                    <a className='text-gray-500 xs:text-sm lg:text-[1rem] 2xl:text-lg' href=' '>Home</a>
                    <a className='text-gray-500 xs:text-sm lg:text-[1rem] 2xl:text-lg' href=' '>Shop</a>
                    <a className='text-gray-500 xs:text-sm lg:text-[1rem] 2xl:text-lg' href=' '>Blog</a>
                    <a className='text-gray-500 xs:text-sm lg:text-[1rem] 2xl:text-lg' href=' '>Contact</a>
                </div>

                <div className='w-56 h-full flex flex-col justify-start gap-1 items-start cursor-pointer'>
                    <p className='
                    font-bold  text-gray-600
                    xs:my-2 xs:text-[1rem]
                       lg:mb-4 lg:text-lg
                    2xl:mb-4 2xl:text-2xl
                    '>More info</p>

                    <p className='text-gray-500 xs:text-sm lg:text-[1rem] 2xl:text-lg'>How it works</p>
                    <p className='text-gray-500 xs:text-sm lg:text-[1rem] 2xl:text-lg'>about us</p>
                    <p className='text-gray-500 xs:text-sm lg:text-[1rem] 2xl:text-lg'>Decline rules</p>
                    <p className='text-gray-500 xs:text-sm lg:text-[1rem] 2xl:text-lg'>Terms & Conditions</p>
                </div>

                <div className='w-56 h-full flex flex-col justify-start gap-1 items-start cursor-pointer'>
                    <p className='
                    font-bold  text-gray-600
                    xs:my-2 xs:text-[1rem]
                    lg:mb-4 lg:text-lg
                    2xl:mb-4 2xl:text-2xl
                    '>Customer care</p>

                    <p className='text-gray-500 xs:text-sm lg:text-[1rem] 2xl:text-lg'>FAQ</p>
                    <p className='text-gray-500 xs:text-sm lg:text-[1rem] 2xl:text-lg'>Terms of use</p>
                    <p className='text-gray-500 xs:text-sm lg:text-[1rem] 2xl:text-lg'>Privacy Policy</p>
                    <p className='text-gray-500 xs:text-sm lg:text-[1rem] 2xl:text-lg'>Discount system</p>
                </div>

                <div className='w-56 h-full flex flex-col justify-start gap-1 items-start cursor-pointer'>
                    <p className='
                    font-bold  text-gray-600
                    xs:my-2 xs:text-[1rem]
                    lg:mb-4 lg:text-lg
                    2xl:mb-4 2xl:text-2xl
                    '>Get newsletter</p>

                    <p className='text-gray-500 xs:text-sm lg:text-[1rem] 2xl:text-lg'>Get updates about style</p>
                    <div className='w-56 h-full mt-5 flex justify-start items-start cursor-pointer'>
                        <input className='w-44 xs:h-8 lg:h-10 border-gray-400 xs:text-sm lg:text-[1rem]' type='text' placeholder='Type your email...'/>
                        <div className='w-44 xs:h-8 lg:h-10 bg-blue-500 flex justify-center items-center xs:text-lg lg:text-2xl text-white'><AiOutlineSend/></div>
                    </div>
                </div>

            </div>



            <div className='
            w-full bg-blue-600 flex
            xs:h-24 xs:px-0 xs:flex-col xs:justify-evenly xs:items-center
            lg:h-20 lg:px-40 lg:flex-row  lg:justify-between lg:items-center
            '>
                <p className='
                text-white
                xs:text-sm
                lg:text-[.9rem]
                2xl:text-[1rem]
                '>Developed by <a className='cursor-pointer' href=''>IsRezaei</a> ; it's a sample project</p>

                <div className=' w-28 flex justify-between items-center text-white text-xl cursor-pointer'>
                    <BsInstagram/>
                    <BsTwitter/>
                    <RiFacebookFill/>
                </div>
            </div>


        </div>
    )
}
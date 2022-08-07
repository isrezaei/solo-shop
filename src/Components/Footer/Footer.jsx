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
                    text-2xl font-bold  text-gray-600
                    xs:my-2
                    lg:mb-4
                    '>about Us</p>

                    <p className='text-gray-500'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly </p>
                </div>

                <div className='w-56 h-full flex flex-col justify-start gap-1 items-start cursor-pointer'>
                    <p className='
                    text-2xl font-bold  text-gray-600
                    xs:my-2
                    lg:mb-4
                    '>Hot links</p>

                    <a className='text-gray-500' href=' '>Home</a>
                    <a className='text-gray-500' href=' '>Shop</a>
                    <a className='text-gray-500' href=' '>Blog</a>
                    <a className='text-gray-500' href=' '>Contact</a>
                </div>

                <div className='w-56 h-full flex flex-col justify-start gap-1 items-start cursor-pointer'>
                    <p className='
                    text-2xl font-bold  text-gray-600
                    xs:my-2
                    lg:mb-4
                    '>More info</p>

                    <p className='text-gray-500'>How it works</p>
                    <p className='text-gray-500'>about us</p>
                    <p className='text-gray-500'>Decline rules</p>
                    <p className='text-gray-500'>Terms & Conditions</p>
                </div>

                <div className='w-56 h-full flex flex-col justify-start gap-1 items-start cursor-pointer'>
                    <p className='
                    text-2xl font-bold  text-gray-600
                    xs:my-2
                    lg:mb-4
                    '>Customer care</p>

                    <p className='text-gray-500'>FAQ</p>
                    <p className='text-gray-500'>Terms of use</p>
                    <p className='text-gray-500'>Privacy Policy</p>
                    <p className='text-gray-500'>Discount system</p>
                </div>

                <div className='w-56 h-full flex flex-col justify-start gap-1 items-start cursor-pointer'>
                    <p className='
                    text-2xl font-bold  text-gray-600
                    xs:my-2
                    lg:mb-4
                    '>Get newsletter</p>

                    <p className='text-gray-500'>Get updates about style</p>
                    <div className='w-56 h-full mt-5 flex justify-start items-start cursor-pointer'>
                        <input className='w-44 h-10 border-gray-400' type='text' placeholder='Type your email...'/>
                        <div className='w-44 h-10 bg-blue-500 flex justify-center items-center text-2xl text-white'><AiOutlineSend/></div>
                    </div>
                </div>

            </div>



            <div className='
            w-full h-20 bg-blue-600 flex
            xs:px-0 xs:flex-col xs:justify-center xs:items-center xs:gap-2
            lg:px-40 lg:flex-row  lg:justify-between lg:items-center
            '>
                <p className='
                text-white
                xs:w-auto
                '>Developed by <a className='cursor-pointer' href=''>IsRezaei</a> ; it's a sample project</p>
                <div className='
                w-28 flex justify-between items-center text-white text-xl cursor-pointer'>
                    <BsInstagram/>
                    <BsTwitter/>
                    <RiFacebookFill/>
                </div>
            </div>


        </div>
    )
}
import {AiOutlineSend} from 'react-icons/ai'
import {BsInstagram , BsTwitter } from  'react-icons/bs'
import {RiFacebookFill} from 'react-icons/ri'

export const Footer = () =>
{

    return (
        <div className='mt-auto w-full flex flex-col justify-between items-center'>
            <div className='
            w-full flex py-6 max-w-[1900px]
            xs:grid xs:grid-cols-2 xs:place-items-center xs:gap-6 xs:h-full xs:px-5 xs:mt-10
            md:flex md:flex-row md:justify-between md:items-center md:h-56 md:px-8 md:border-t md:mt-0
            lg:flex-row lg:justify-evenly lg:items-center lg:h-60 lg:px-10 lg:border-t lg:mt-[8rem]
            '>
                <div className='w-[10rem] h-full flex flex-col justify-start gap-1 items-start cursor-pointer'>
                    <p className='
                    font-bold  text-gray-600
                    xs:my-2 xs:text-[1rem]
                    lg:text-lg
                    '>Hot links</p>
                    <a className='text-gray-500 xs:text-sm lg:text-[1rem]' href=' '>Home</a>
                    <a className='text-gray-500 xs:text-sm lg:text-[1rem]' href=' '>Shop</a>
                    <a className='text-gray-500 xs:text-sm lg:text-[1rem]' href=' '>Blog</a>
                    <a className='text-gray-500 xs:text-sm lg:text-[1rem]' href=' '>Contact</a>
                </div>

                <div className='w-[10rem] h-full flex flex-col justify-start gap-1 items-start cursor-pointer'>
                    <p className='
                    font-bold text-gray-600
                    xs:my-2 xs:text-[1rem]
                    lg:text-lg'>More info</p>
                    <p className='text-gray-500 xs:text-sm lg:text-[1rem]'>How it works</p>
                    <p className='text-gray-500 xs:text-sm lg:text-[1rem]'>about us</p>
                    <p className='text-gray-500 xs:text-sm lg:text-[1rem]'>Decline rules</p>
                    <p className='text-gray-500 xs:text-sm lg:text-[1rem]'>Terms & Conditions</p>
                </div>
                <div className='w-[10rem] h-full flex flex-col justify-start gap-1 items-start cursor-pointer'>
                    <p className='
                    font-bold  text-gray-600
                    xs:my-2 xs:text-[1rem]
                    lg:text-lg'>Customer care</p>
                    <p className='text-gray-500 xs:text-sm lg:text-[1rem]'>FAQ</p>
                    <p className='text-gray-500 xs:text-sm lg:text-[1rem]'>Terms of use</p>
                    <p className='text-gray-500 xs:text-sm lg:text-[1rem]'>Privacy Policy</p>
                    <p className='text-gray-500 xs:text-sm lg:text-[1rem]'>Discount system</p>
                </div>

                <div className='w-[10rem] h-full flex flex-col justify-start gap-1 items-start cursor-pointer'>
                    <p className='
                    font-bold  text-gray-600
                    xs:my-2 xs:text-[1rem]
                    lg:text-lg'>Get newsletter</p>
                    <p className='text-gray-500 xs:text-sm lg:text-[1rem]'>Get news update</p>
                    <div className='w-full h-full mt-2 flex flex-col justify-start items-start cursor-pointer'>
                        <input className='w-full border-none xs:h-8 lg:h-10 xs:text-sm lg:text-[.9rem] bg-neutral-100' type='text' placeholder='Type your email...'/>
                        <div className='w-full rounded-b-md xs:h-8 lg:h-10 bg-blue-500 flex justify-center items-center xs:text-lg lg:text-2xl text-white'><AiOutlineSend/></div>
                    </div>
                </div>

            </div>


            <div className='w-full bg-blue-600'>

                <div className='
                 flex max-w-[1900px] m-auto
                 xs:h-24 xs:px-0 xs:flex-col xs:justify-evenly xs:items-center
                 md:h-14 md:px-28 md:flex-row  md:justify-between md:items-center
                 lg:h-14 lg:px-40 lg:flex-row  lg:justify-between lg:items-center'>
                    <p className='
                text-white
                xs:text-sm
                lg:text-[.9rem]
                2xl:text-[1rem]'>Developed by <a className='cursor-pointer' href=''>IsRezaei</a> ; it's a sample project</p>
                    <div className=' w-28 flex justify-between items-center text-white text-xl cursor-pointer'>
                        <BsInstagram/>
                        <BsTwitter/>
                        <RiFacebookFill/>
                    </div>
                </div>
            </div>
        </div>
    )
}
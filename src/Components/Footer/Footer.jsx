import {AiOutlineSend} from 'react-icons/ai'
import {BsInstagram, BsTwitter} from 'react-icons/bs'
import {RiFacebookFill} from 'react-icons/ri'
import {VscGithub} from 'react-icons/vsc'

export const Footer = () => {
    return (
        <div className='w-full flex flex-col justify-end items-center'>
            <div className='
            w-full flex p-6 max-w-[950px] border-t
            xs:grid xs:grid-cols-2 xs:gap-5
            md:flex md:flex-row md:justify-evenly md:items-center md:px-8 md:border-t
            lg:flex-row lg:justify-evenly lg:items-center lg:px-10'>
                <div className='flex flex-col justify-start space-y-1 items-start cursor-pointer'>
                    <p className='font-bold text-gray-600 xs:text-sm
                    '>Hot links</p>
                    <a className='text-gray-500 xs:text-sm' href=' '>Home</a>
                    <a className='text-gray-500 xs:text-sm' href=' '>Shop</a>
                    <a className='text-gray-500 xs:text-sm' href=' '>Blog</a>
                    <a className='text-gray-500 xs:text-sm' href=' '>Contact</a>
                </div>
                <div className='flex flex-col justify-start space-y-1 items-start cursor-pointer'>
                    <p className='
                    font-bold text-gray-600 xs:text-sm'>More info</p>
                    <p className='text-gray-500 xs:text-sm'>How it works</p>
                    <p className='text-gray-500 xs:text-sm'>about us</p>
                    <p className='text-gray-500 xs:text-sm'>Decline rules</p>
                    <p className='text-gray-500 xs:text-sm'>Terms & Conditions</p>
                </div>
                <div className='flex flex-col justify-start space-y-1 items-start cursor-pointer'>
                    <p className='
                    font-bold  text-gray-600 xs:text-sm'>Customer care</p>
                    <p className='text-gray-500 xs:text-sm'>FAQ</p>
                    <p className='text-gray-500 xs:text-sm'>Terms of use</p>
                    <p className='text-gray-500 xs:text-sm'>Privacy Policy</p>
                    <p className='text-gray-500 xs:text-sm'>Discount system</p>
                </div>

                <div className='flex flex-col justify-start space-y-1 items-start cursor-pointer'>
                    <p className='
                    font-bold  text-gray-600 xs:text-sm'>Get newsletter</p>
                    <p className='text-gray-500 xs:text-sm '>Get news update</p>
                    <div className='w-full flex flex-col justify-start items-start cursor-pointer'>
                        <input className='w-full border-none xs:text-xs bg-neutral-100' type='text'
                               placeholder='Type your email...'/>
                        <div
                            className='w-full rounded-b-md p-2  bg-neutral-100 flex justify-center items-center xs:text-lg text-gray-600'>
                            <AiOutlineSend/></div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-neutral-100'>
                <div className='
                 flex max-w-[1900px] m-auto
                 xs:h-24 xs:px-0 xs:flex-col xs:justify-evenly xs:items-center
                 md:h-14 md:px-28 md:flex-row  md:justify-between md:items-center
                 lg:h-14 lg:px-40 lg:flex-row  lg:justify-between lg:items-center'>
                    <a className=' text-gray-600 xs:text-sm cursor-pointer flex items-center space-x-2'
                       href='https://github.com/isrezaei'>
                        <p>Developed by</p>
                        <VscGithub size={18}/>
                        <p>IsRezaei</p>
                    </a>
                    <div className=' w-28 flex justify-between items-center text-gray-600 text-xl cursor-pointer'>
                        <BsInstagram/>
                        <BsTwitter/>
                        <RiFacebookFill/>
                    </div>
                </div>
            </div>
        </div>
    )
}
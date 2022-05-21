import {IoMdArrowDropdown} from 'react-icons/io'

export const SearchLogo = () =>
{
    return (

            <div className='w-8/12 flex justify-start items-center'>

                <div className='text-3xl flex items-center'>
                    <p>FlyShop</p>
                </div>

                <div className='flex justify-center items-center ml-10 border border-1 border-gray-200'>
                    <span className='w-44 h-10 flex items-center justify-evenly hover:bg-blue-700 hover:text-white cursor-pointer transition'>All Categories <IoMdArrowDropdown/></span>
                    <input className='h-10 w-96 p-3' placeholder='Search for product' />
                    <div className='bg-gray-300 w-px h-6'> </div>
                    <div className='h-10 w-28 bg-blue-700 text-white flex justify-center items-center'>Search</div>
                </div>

            </div>
    )
}
import {FiSearch} from "react-icons/fi";

export const SearchLogo = () =>
{
    return (


            <div className='w-7/12 flex justify-between items-center '>

                <div className='text-3xl flex items-center'>
                    <p>PhoneFlu</p>
                </div>


                <div className='flex justify-center items-center'>
                    <input className='h-10 w-80 p-3 border border-1 border-gray-300' placeholder='Search for product' />
                    <span className='w-44 h-10 flex border border-1 border-gray-300 items-center justify-center'>All Categories</span>
                    <div className='h-10 bg-blue-300 flex justify-center items-center rounded-tr-lg rounded-br-lg'>
                        <FiSearch className='w-12 text-2xl text-teal-50'/>
                    </div>
                </div>

            </div>
    )
}
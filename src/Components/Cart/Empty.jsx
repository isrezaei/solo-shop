import {MdAddShoppingCart} from 'react-icons/md'
import {useNavigate} from "react-router-dom";

export const Empty = () =>
{
    const Navigation = useNavigate()

    return (
        <div className='mx-auto xs:my-5  flex justify-center items-center md:h-screen'>
            <div className='flex flex-col justify-center items-center gap-4 p-24 md:bg-neutral-100 md:rounded-2xl'>
                <MdAddShoppingCart className='xs:text-[10rem] text-gray-600'/>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='xs:text-sm md:text-lg font-bold text-gray-600'>Your cart shop is empty !</p>
                    <p className='xs:text-xs text-center font-bold text-neutral-600'>You can refer to the following pages to see more products</p>
                    <div className='flex justify-center items-center mt-4'>
                        <p className='w-36 p-1 text-center text-sm bg-gray-600 text-white rounded-2xl cursor-pointer' onClick={()=> Navigation('/')}>Home Page</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
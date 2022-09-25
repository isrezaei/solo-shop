import {MdAddShoppingCart} from 'react-icons/md'
import {useNavigate} from "react-router-dom";

export const Empty_Alert = () =>
{

    const Navigation = useNavigate()

    return (
        <div className='mx-auto xs:my-5  h-screen flex justify-center items-center '>

            <div className='flex flex-col justify-center items-center gap-4 md:w-[60rem] md:h-[40rem] md:bg-neutral-100 md:rounded-2xl'>

                <MdAddShoppingCart className='xs:text-[10rem] text-gray-50 text-blue-800'/>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='xs:text-sm md:text-lg font-bold text-blue-700'>Your cart shop is empty !</p>
                    <p className='xs:text-sm text-center font-bold text-neutral-700'>You can refer to the following pages to see more products</p>
                    <div className='flex justify-center items-center mt-4'>
                        <p className='w-36 p-1 text-center text-sm bg-blue-700 text-white rounded-2xl cursor-pointer' onClick={()=> Navigation('/')}>Home Page</p>
                        <p className='w-36 p-1 text-center text-sm text-blue-700 font-bold text-white  cursor-pointer'>Wish List</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
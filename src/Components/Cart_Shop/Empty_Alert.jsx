import {MdAddShoppingCart} from 'react-icons/md'
import {useNavigate} from "react-router-dom";

export const Empty_Alert = () =>
{

    const Navigation = useNavigate()

    return (
        <div className='container max-w-max-w-8xl flex justify-center items-center mx-auto mt-10'>

            <div className='w-6/12 h-100 flex flex-col justify-center items-center gap-4'>

                <MdAddShoppingCart className='text-20xl text-gray-50 text-blue-800'/>


                <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-2xl font-bold text-blue-700'>Your cart shop is empty !</p>
                    <p>You can refer to the following pages to see more products</p>

                    <div className='flex justify-center items-center gap-10 mt-4'>
                        <p className='w-36 text-center bg-blue-700 text-white p-3 cursor-pointer' onClick={()=> Navigation('/')}>Home Page</p>
                        <p className='text-blue-700 font-bold cursor-pointer'>Wish List</p>
                    </div>

                </div>

            </div>

        </div>
    )
}
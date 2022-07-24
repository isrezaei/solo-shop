import {useNavigate} from "react-router-dom";
import {ModalGallerySlider} from "./ModalGallerySlider";
import {IoClose} from 'react-icons/io5'
import {RiFileCopy2Fill} from 'react-icons/ri'


export const ModalGalleryProduct = ({EachProduct}) =>
{
    const navigate = useNavigate()

    const {brand , id , image , introduction , price , offer , product , type , quantity} = EachProduct



    return (
         <div className='flex justify-center items-center z-10 m-auto h-screen w-full fixed top-0 overflow-hidden bg-glass-black'>
            <div className='relative w-3/6 h-32 bg-white flex justify-between items-center'>

                <section className='w-6/12 h-full'>
                    <ModalGallerySlider image={image}/>
                </section>

                <section className='w-6/12 h-full  flex flex-col justify-start items-start p-3'>

                    <p className='text-3xl my-3'>{product}</p>
                    <section className='my-3 w-40 text-xl flex justify-between items-center '>
                        <div className='font-bold text-gray-600'>{price === 'out' ? <p className='text-red-500 text-2xl'>out of stock</p> : <p>${(price - (price * offer / 100)).toFixed(2)}</p>}</div>
                        <div className='text-lg line-through text-rose-500'>{price !== 'out' && <p>${price}</p>} </div>
                    </section>
                    <p className='my-3'>see all features</p>


                    <p className='h-44 border-y-2 flex justify-center items-center text-gray-500 py-3'>{introduction}</p>

                    <div className='h-16 flex flex-col justify-between items-center my-3'>
                        <p className='text-xl font-bold text-gray-600'>SHARE THIS PRODUCT</p>
                        <div className='w-full flex justify-start items-center cursor-pointer'>
                            <p className='mr-2 text-gray-400 hover:text-cyan-700'>Copy Link Product</p>
                            <RiFileCopy2Fill className='text-3xl text-cyan-700'/>
                        </div>
                    </div>
                </section>

                <div className='absolute top-0 right-0 bg-gray-200 p-2 hover:bg-red-500 transition cursor-pointer group' onClick={()=> navigate(-1)}>
                    <IoClose className='text-gray-400 text-2xl font-bold group-hover:text-white transition'/>
                </div>
            </div>

        </div>
    )
}
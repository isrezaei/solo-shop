import {Link, useNavigate} from "react-router-dom";
import {ModalGallerySlider} from "./ModalGallerySlider";
import {IoClose} from 'react-icons/io5'
import {RiFileCopy2Fill} from 'react-icons/ri'


export const ModalGalleryProduct = ({EachProduct}) =>
{
    const navigate = useNavigate()

    const {brand , id , image , introduction , price , offer , product , type , quantity} = EachProduct



    return (
         <div className='flex justify-center items-center z-10 m-auto h-screen w-full fixed top-0 overflow-hidden bg-glass-black'>

            <div className='
            relative bg-white rounded-3xl
            xs:w-11/12 xs:flex xs:flex-col xs:justify-center xs:items-center
            lg:w-4/6 lg:h-[25rem] lg:flex lg:flex-row lg:justify-between lg:items-center
            2xl:w-3/6 2xl:h-[32rem] 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:items-center'>

                <section className='xs:w-full lg:w-5/12 2xl:w-6/12 h-full mt-[7.5rem]'>
                    <ModalGallerySlider image={image}/>
                </section>

                <section className='xs:w-11/12 lg:w-7/12 lg:p-8 2xl:w-6/12 2xl:p-3 h-full  flex flex-col justify-start items-start'>

                    <p className='xs:text-[1rem] lg:text-xl 2xl:text-3xl 2xl:my-3'>{product}</p>

                    <section className='xs:my-1 xs:justify-between lg:justify-start lg:gap-6  2xl:my-3 2xl:justify-between  text-xl flex items-center xs:w-full 2xl:w-40 '>
                        <div className='font-bold text-gray-600'>
                            {
                                price === 'out' ? <p className='text-red-500 xs:text-sm lg:text-lg 2xl:text-2xl'>out of stock</p>
                                : <p className='xs:text-sm lg:text-lg 2xl:text-2xl'>${(price - (price * offer / 100)).toFixed(2)}</p>
                            }
                        </div>
                        <div className='text-lg line-through text-rose-500'>{price !== 'out' && <p className='xs:text-sm lg:text-lg 2xl:text-2xl'>${price}</p>} </div>
                    </section>


                    <Link to={`/details/${id}`}>
                        <p className='text-sm text-blue-500 my-3'>see all features</p>
                    </Link>


                    <p className='xs:text-[.9rem] 2xl:text-lg h-auto border-y-2 flex justify-center items-center text-gray-500 py-3'>{introduction}</p>

                    <div className='h-16 flex flex-col justify-around items-center my-3'>
                        <p className='xs:text-sm 2xl:text-xl font-bold text-gray-600'>SHARE THIS PRODUCT</p>
                        <div className='w-full flex justify-start items-center cursor-pointer'>
                            <p className='xs:text-sm 2xl:text-lg mr-2 text-gray-400 hover:text-cyan-700'>Copy Link Product</p>
                            <RiFileCopy2Fill className='xs:text-xl 2xl:text-3xl text-cyan-700'/>
                        </div>
                    </div>

                </section>

                <div className='absolute top-2 right-2 bg-gray-200 p-2 hover:bg-red-500 transition cursor-pointer group z-10 rounded-full' onClick={()=> navigate(-1)}>
                    <IoClose className='text-gray-400 text-2xl font-bold group-hover:text-white transition'/>
                </div>
            </div>

        </div>
    )
}
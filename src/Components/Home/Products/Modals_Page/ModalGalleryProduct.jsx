import {Link, useNavigate} from "react-router-dom";
import {ModalGallerySlider} from "./ModalGallerySlider";
import {IoClose} from 'react-icons/io5'
import {RiFileCopy2Fill} from 'react-icons/ri'
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../../../Redux/reducer/MasterDataSlice";


export const ModalGalleryProduct = ({ids}) =>
{
    const navigate = useNavigate()

    const EachProduct = useSelector(state => selectMasterDataById(state , ids))

    const {brand , id , image , introduction , price , offer , product , type , quantity} = EachProduct



    return (
         <div  className='flex justify-center items-center w-full  overflow-hidden'>

            <div className='
            relative bg-white rounded-3xl
            xs:w-full xs:flex xs:flex-col xs:justify-center xs:items-center'>

                <section className='xs:w-full flex flex-col justify-center items-start'>

                    <p className='xs:text-sm text-neutral-500'>{product}</p>

                    <section className='xs:my-1 xs:justify-between lg:justify-start lg:gap-6  2xl:my-2 2xl:justify-between  text-xl flex items-center xs:w-full 2xl:w-40 '>
                        <div className='font-bold text-gray-600'>
                            {
                                price === 'out' ? <p className='text-red-500 xs:text-sm lg:text-lg 2xl:text-xl'>out of stock</p>
                                : <p className='xs:text-sm lg:text-lg 2xl:text-xl text-neutral-500'>${(price - (price * offer / 100)).toFixed(2)}</p>
                            }
                        </div>
                        <div className='text-lg line-through text-rose-500'>{price !== 'out' && <p className='xs:text-sm lg:text-lg 2xl:text-xl'>${price}</p>} </div>
                    </section>




                    <p className='xs:text-sm border-y-2 flex justify-center items-center text-gray-500 py-3'>{introduction}</p>

                    <div className='flex flex-col justify-center items-center space-y-1 my-3'>
                        <p className='xs:text-sm font-bold text-neutral-500'>SHARE THIS PRODUCT</p>
                        <div className='w-full flex justify-start items-center cursor-pointer'>
                            <p className='xs:text-sm mr-2 text-gray-400 hover:text-cyan-700'>Copy Link Product</p>
                            <RiFileCopy2Fill className='xs:text-xl text-lime-500'/>
                        </div>
                    </div>

                </section>



            </div>

        </div>
    )
}
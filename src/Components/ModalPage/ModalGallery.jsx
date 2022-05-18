import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../Redux/MasterDataSlice";
import {ModalGallerySlider} from "./ModalGallerySlider";
import {QuantityGlobal} from "../QuantityHandel/QuantityGlobal";
import {TiPlus , TiMinus} from "react-icons/ti";
import {IoClose} from 'react-icons/io5'

import {RiFileCopy2Fill} from 'react-icons/ri'


export const ModalGallery = () =>
{
    const {productId} = useParams()
    const navigate = useNavigate()

    const EachProduct = useSelector(state => selectMasterDataById(state , productId))

    const {brand , id , image , introduction , price , offer , product , type , quantity} = EachProduct

    const { HaveQuantity, CheckQuantity, AddQuan, IncQuan, DecQuan, RemQuan} = QuantityGlobal(EachProduct)


    return (
        <div className='flex justify-center items-center z-10 bg-transparent m-auto h-screen w-full fixed top-0 overflow-hidden bg-glass-black'>
            <div className='relative w-3/6 h-3/6 bg-white flex justify-between items-center'>

                <section className='w-6/12 h-full'>
                  <ModalGallerySlider image={image}/>
                </section>

                <section className='w-6/12 h-full  flex flex-col justify-start items-start p-3'>

                        <p className='text-3xl my-3'>{product}</p>
                        <section className='my-3 w-40 text-xl flex justify-between items-center '>
                            <p className='font-bold text-gray-600'>${(price - (price * offer / 100)).toFixed(2)}</p>
                            <p className='text-lg line-through text-rose-500'>${price}</p>
                        </section>
                        <p className='my-3'>see all features</p>

                    <div className='w-full h-24 flex justify-start items-center '>
                        <div className='w-6/12 flex justify-start items-center'>
                            {
                                HaveQuantity(id) ?

                                    <TiPlus onClick={IncQuan} className='text-xl text-indigo-400 mx-4 cursor-pointer'/>
                                    :
                                    <p onClick={AddQuan} className='flex justify-center items-center border-2 border-lime-500 text-lime-600 font-medium w-48 h-12 cursor-pointer hover:bg-lime-500 hover:text-white transition'>Add to cart</p>
                            }
                            <p className='text-3xl mx-4 text-gray-500'> {quantity}</p>

                            {CheckQuantity(id) === 1 && <div className='text-base border-2 border-red-500 text-rose-500 p-2 mx-4 hover:bg-red-500 hover:text-white transition cursor-pointer' onClick={RemQuan}>Remove Cart</div>}
                            {CheckQuantity(id) > 1 && <TiMinus className='text-xl text-indigo-400 mx-4 cursor-pointer' onClick={DecQuan}/>}

                        </div>
                    </div>

                        <p className='h-40 border-y-2 flex justify-center items-center text-gray-500 py-3'>{introduction}</p>

                    <div className='h-16 flex flex-col justify-between items-center my-3'>
                        <p className='text-xl font-bold text-gray-600'>SHARE THIS PRODUCT</p>
                        <div className='w-full flex justify-start items-center cursor-pointer'>

                            <RiFileCopy2Fill className='text-3xl text-cyan-700'/>
                            <p className='ml-2 text-gray-400 hover:text-cyan-700'>Copy Link Product</p>

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
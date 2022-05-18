import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../Redux/MasterDataSlice";
import {ModalGallerySlider} from "./ModalGallerySlider";
import {QuantityGlobal} from "../QuantityHandel/QuantityGlobal";
import {TiPlus} from "react-icons/ti";
import {RiDeleteBinLine} from "react-icons/ri";

export const ModalGallery = () =>
{
    const {productId} = useParams()
    const navigate = useNavigate()

    const EachProduct = useSelector(state => selectMasterDataById(state , productId))

    const {brand , id , image , introduction , price , offer , product , type , quantity} = EachProduct

    const { HaveQuantity, CheckQuantity, AddQuan, IncQuan, DecQuan, RemQuan} = QuantityGlobal(EachProduct)


    return (
        <div className='flex justify-center items-center z-10 bg-transparent m-auto h-screen w-full fixed top-0 overflow-hidden bg-glass-black'>

            <div className='w-3/6 h-3/6 bg-white flex justify-between items-center'>

                <section className='w-6/12 h-full'>
                  <ModalGallerySlider image={image}/>
                </section>

                <section className='w-6/12 h-full  flex flex-col justify-between items-start p-3'>

                    <div>
                        <p className='text-3xl my-3'>{product}</p>
                        <p className='my-3 text-xl'>{price} => ${(price - (price * offer / 100)).toFixed(2)} 30%</p>
                        <p>see all features</p>
                    </div>

                    <div className='w-full'>
                        <div className='w-6/12 flex justify-evenly items-center h-10'>

                            {
                                HaveQuantity(id) ?

                                    <TiPlus onClick={IncQuan} className='text-base text-indigo-400'/>
                                    :

                                    <div className='flex w-full ' onClick={AddQuan}>
                                        <p className='font-medium'>Add to cart</p>
                                    </div>
                            }

                            <p className='text-xl'> {quantity}</p>

                            {CheckQuantity(id) === 1 && <RiDeleteBinLine onClick={RemQuan} className='text-base text-rose-500'/>}
                            {CheckQuantity(id) > 1 && <button onClick={DecQuan}>-</button>}

                        </div>
                    </div>

                    <div>
                        <p>{introduction}</p>
                    </div>

                    <div>
                        <span>F</span>
                        <span>T</span>
                        <span>in</span>
                    </div>

                </section>
            </div>


            <div onClick={()=> navigate(-1)}>close</div>

        </div>
    )
}
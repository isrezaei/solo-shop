import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../Redux/MasterDataSlice";
import {ModalGallerySlider} from "./ModalGallerySlider";

export const ModalGallery = () =>
{
    const {productId} = useParams()
    const navigate = useNavigate()

    const {brand , id , image , introduction , price , offfer , product , type} = useSelector(state => selectMasterDataById(state , productId))

    console.log(product)




    return (
        <div className='flex justify-center items-center z-10 bg-transparent m-auto h-screen w-full fixed top-0 overflow-hidden'>

            <div className='w-3/6 h-3/6 bg-white flex justify-between items-center'>

                <section className='w-6/12 h-full'>
                  <ModalGallerySlider image={image}/>
                </section>

                <section className='w-6/12 h-full bg-gray-200 flex flex-col justify-between items-start p-3'>

                    <div>
                        <p className='text-xl'>{product}</p>
                        <p>{price}</p>
                        <p>see all features</p>
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
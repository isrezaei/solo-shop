import {useContext} from "react";
import {BsBoxSeam} from 'react-icons/bs'
import {RiShareForwardBoxFill} from 'react-icons/ri'
import {EachProductFromContext} from "../Products_Rendering/DetailsEachProduct";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../../Redux/MasterDataSlice";
export const ActiveImage = () =>
{

    const {productId} = useParams()
    const {product} = useSelector(state => selectMasterDataById(state , productId))
    const {detailsImage , activeOptions} = useContext(EachProductFromContext)
    const eachImage = Object.keys(JSON.parse(localStorage.getItem('detailsPageInfo'))?.activeOptions?.activeImage || {})?.filter(items => items === product)[0]

    return (
        <div className='
        xs:relative xs:h-85
        lg:sticky lg:top-32 lg:z-10 lg:h-auto
        '>
            <img className='
            m-auto
            xs:w-72
            lg:w-96 2xl:w-[30rem]' src={detailsImage[activeOptions.activeImage[eachImage] || 'main']} alt={product}/>

            <div className='
            w-full h-36 flex justify-center items-start
            xs:hidden
            lg:flex
            '>
                <div className='w-60 p-1 text-sm h-full flex flex-col justify-center items-center gap-2'>
                    <BsBoxSeam className='lg:text-xl 2xl:text-3xl text-gray-500'/>
                    <p className='lg:text-[.8rem] 2xl:text-[.9rem] text-center font-bold text-gray-500'>Get free delivery, or pick up available items at an Apple Store</p>
                </div>

                <div className='w-60 p-1 text-sm h-full flex flex-col justify-center items-center gap-2'>
                    <RiShareForwardBoxFill className='xs:text-xl lg:text-xl 2xl:text-3xl text-gray-500'/>
                    <p className='lg:text-[.8rem] 2xl:text-[.9rem] text-center font-bold text-gray-500'>Free and easy returns</p>
                </div>
            </div>
        </div>
    )
}
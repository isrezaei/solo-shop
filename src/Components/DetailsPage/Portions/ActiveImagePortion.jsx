import {useContext} from "react";
import {BsBoxSeam} from 'react-icons/bs'
import {RiShareForwardBoxFill} from 'react-icons/ri'
import {EachProductFromContext} from "../DetailsEachProduct";
export const ActiveImagePortion = () =>
{
    const {detailsImage , activeOptions , product} = useContext(EachProductFromContext)
    return (
        <div className='sticky top-48 z-10 '>

            <img className='w-full m-auto' src={detailsImage[activeOptions.activeImage]} alt={product}/>

            <div className='w-full h-36 flex justify-center items-start'>
                <div className='w-60 p-1 text-sm h-full flex flex-col justify-center items-center gap-2  border-b border-gray-400'>
                    <BsBoxSeam className='text-3xl'/>
                    <p className='text-center'>Get free delivery, or pick up available items at an Apple Store</p>
                </div>
                <div className='w-60 p-1 text-sm h-full flex flex-col justify-center items-center gap-2  border-b border-gray-400'>
                    <RiShareForwardBoxFill className='text-3xl'/>
                    <p>Free and easy returns</p>
                </div>
            </div>
        </div>
    )
}
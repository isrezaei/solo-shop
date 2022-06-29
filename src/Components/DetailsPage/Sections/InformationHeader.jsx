import {RatingStar} from "rating-star";
import {useContext} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";


export const InformationHeader = () =>
{
    const {EachProductFromRedux} = useContext(EachProductFromContext)
    const {product , id , rate , type , brand , price , offer} = EachProductFromRedux
    const priceWithOffer = parseInt((price - ((price * offer) / 100)))

    return (
        <>
            <p className='text-3xl text-gray-500 font-bold'>Buy {product}</p>
            <div className='h-24 text-gray-500 font-bold flex flex-col justify-center items-start gap-2'>
                <p className='text-lg'>Get $110–$700 off when you trade in an {product} or newer</p>
                <p className='text-sm text-blue-600'>See how trade-in works</p>
            </div>
            <div className='w-48 h-11 flex justify-start items-center'>
                <div className='flex justify-start items-center gap-1 text-gray-500 font-bold'> <p className='text-2xl font-bold text-blue-600'>{rate}</p>/ 5</div>
                <RatingStar colors={{ mask: "rgba(52,96,243,0.87)" }} noBorder id={id.toString()} rating={rate} size={20}/>
            </div>
            <div className='h-52 flex flex-col justify-center items-start '>
                <span className='flex justify-start items-center gap-2 w-full'> <p className='text-gray-500 h-10 flex justify-start items-center font-bold text-lg'>Category :</p> <p className='text-lg text-gray-600'>{type}</p></span>
                <span className='flex justify-start items-center gap-2 w-full'> <p className='text-gray-500 h-10 flex justify-start items-center font-bold text-lg'>Brand :</p> <p className='text-lg text-gray-600'>{brand}</p></span>
                <span className='flex justify-start items-center gap-2 w-full'> <p className='text-gray-500 h-10 flex justify-start items-center font-bold text-lg'>price :</p> <p className='text-lg text-gray-600'>${price}</p></span>
                <span className='flex justify-start items-center gap-2 w-full'> <p className='text-gray-500 h-10 flex justify-start items-center font-bold text-lg'>Offer :</p> <p className='text-lg text-gray-600'>{offer}%</p></span>
                <span className='flex justify-start items-center gap-2 w-full'> <p className='text-gray-500 h-10 flex justify-start items-center font-bold text-lg'>Price with offer :</p><p className='text-3xl text-blue-600 font-bold'>${priceWithOffer}</p></span>
            </div>
        </>
    )
}
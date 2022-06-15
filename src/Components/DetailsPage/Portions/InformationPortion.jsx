import {RatingStar} from "rating-star";


export const InformationPortion = ({EachProductFromRedux}) =>
{
    const {product , id , rate , type , brand} = EachProductFromRedux

    return (
        <>
            <p className='text-3xl font-bold'>Buy {product}</p>

            <div className='h-24 flex flex-col justify-between items-start'>
                <p className='text-lg font-medium'>Get $110–$700 off when you trade in an {product} or newer</p>
                <p className='text-lg text-blue-700'>See how trade-in works</p>
            </div>

            <div className='w-48 h-11 flex justify-start items-center'>
                <div className='flex justify-start items-center gap-1'> <p className='text-2xl font-bold'>{rate}</p>/ 5</div>
                <RatingStar id={id.toString()} rating={rate} size={20}/>
            </div>

            <div className='h-16 flex flex-col justify-center items-start'>
                <span className='flex justify-start items-center gap-2 w-48'> <p className='font-bold text-lg'>Category :</p> <p className='text-lg'>{type}</p></span>
                <span className='flex justify-start items-center gap-2 w-48'> <p className='font-bold text-lg'>Brand :</p> <p className='text-lg'>{brand}</p></span>
            </div>
        </>
    )
}
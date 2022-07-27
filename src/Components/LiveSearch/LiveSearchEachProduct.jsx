import {useSelector} from "react-redux";
import {DiscountedCalculation} from "../DetailsPage/DiscountedCalculation";

export const LiveSearchEachProduct = ({products}) =>
{


    const {id , product , price , color , image , detailsImage , capacity , offer} = products


    console.log(offer)

    const showColors = color?.map(colors => {
        return (
            <div key={colors} style={{background : colors}} className='w-5 h-5 rounded-full shadow-inner border border-gray-300'></div>
        )
    })

    return (
        <div className='bg-white h-36 p-5 m-3 flex justify-start items-center gap-3 cursor-pointer'>

            <div>
                <img className='w-20' src={image.mainImg}/>
            </div>

            <div className='h-full flex flex-col gap-1'>

                <p className='text-lg font-bold text-gray-600'>{product}</p>

                <div className='text-rose-600 '>
                    <div>{price === 'out' ? <p>out of stock</p> : <p className={`${offer !== 0 && 'line-through'}`}>{price}</p>}</div>
                </div>

                <div className='flex justify-start items-center gap-2'>
                    {showColors}
                </div>

            </div>

        </div>
    )
}
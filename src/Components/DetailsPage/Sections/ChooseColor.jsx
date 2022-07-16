import {useContext, useEffect} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";
import {selectCartShopIds, UpdateDataCart} from "../../../Redux/CartShopSlice";
import {useDispatch , useSelector} from "react-redux";
import {DiscountedCalculation} from "../DiscountedCalculation";
import {useParams} from "react-router-dom";
import {selectMasterDataById} from "../../../Redux/MasterDataSlice";

export const ChooseColor = () =>
{
    const dispatch = useDispatch()
    const {productId} = useParams()
    const {id, product , price  , offer , color} = useSelector(state => selectMasterDataById(state , productId))
    const {activeOptions : {activeImage , activeColor , activeCapacity} , stepColorAndImage  } = useContext(EachProductFromContext)
    const {discountedPrice} = DiscountedCalculation()
    const {length} = useSelector(selectCartShopIds)

    //When changing data by users , Cart is updated
    useEffect(() => {
        if (length)
            dispatch(UpdateDataCart(
                    {
                        id,
                        activeColor,
                        activeCapacity,
                        activeImage,
                        product,
                        price,
                        discountedPrice,
                        offer
                    }
                )
            )
    } , [activeColor , dispatch])


    const setColor = color.map(colors => {

        return (
            <div
                key={colors}
                onClick={()=> stepColorAndImage(colors)}
                className={`w-48 h-28 flex flex-col justify-center items-center gap-2 rounded-3xl border border-gray-400 cursor-pointer
                ${activeColor[product]  === colors && 'border border-transparent outline outline-4 outline-blue-300'}`}>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <div
                        style={{
                            background: colors
                        }}
                        className='w-9 h-9 rounded-full shadow-inner'> </div>
                    <div className='text-center'>{colors}</div>
                </div>
            </div>
        )
    })


    return (
        <>
            <label htmlFor='select-color' className='text-xl text-gray-600 font-bold mt-4'>Choose your color</label>
            <div id='select-color' className='grid pb-7 grid-cols-2 grid-rows-2 gap-4 border-b border-gray-400'>
                {setColor}
            </div>
        </>
    )
}
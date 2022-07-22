import {useContext} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCartShopIds, UpdateDataCart} from "../../../Redux/CartShopSlice";
import {useParams} from "react-router-dom";
import {selectMasterDataById} from "../../../Redux/MasterDataSlice";
import {DiscountedCalculation} from "../DiscountedCalculation";
import {stepCapacity} from "../ContextHandeling/DispatchingFunc";

export const ChooseCapacity = () =>
{
    const dispatch = useDispatch()
    const {productId} = useParams()
    const {id, product , price  , offer , capacity} = useSelector(state => selectMasterDataById(state , productId))
    const {activeOptions : {activeImage , activeColor , activeCapacity}, contextDispatch} = useContext(EachProductFromContext)
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
    } , [activeCapacity , dispatch])



    const existCapacityInLocal = Object.keys(JSON.parse(localStorage.getItem('detailsPageInfo'))?.activeOptions.activeColor || {})
        .filter(items => items === product).includes(product)


    const setCapacity = capacity.map(capacity => {
        return (
            <div
                key={capacity}
                onClick={() => stepCapacity(capacity , contextDispatch)}
                className={`w-48 h-28 flex flex-col justify-center items-center gap-2 rounded-3xl border border-gray-400 cursor-pointer
                 ${activeCapacity[product] === capacity && 'border border-transparent outline outline-4 outline-blue-300'}`}>
                <div>
                    <div className='flex justify-center items-center gap-1'>
                        <p className='text-3xl'>{capacity}</p>
                        <p className='text-lg'>GB</p>
                    </div>
                    <div className='text-center'>from ${price}</div>
                </div>
            </div>
        )
    })



    return (
        <>
            <div className={`w-full pb-7 flex flex-col justify-center items-start gap-1 mt-3 border-b border-gray-400 ${!existCapacityInLocal && 'pointer-events-none opacity-30' }`}>
                <label htmlFor='select-Capacity' className='text-lg font-bold text-gray-600'>Choose your capacity</label>
                <p className='my-2 text-blue-700'>How much capacity is right for you?</p>
                <div id='select-Capacity' className='grid grid-cols-2 grid-rows-2 gap-4'>
                    {setCapacity}
                </div>
            </div>

        </>
    )
}
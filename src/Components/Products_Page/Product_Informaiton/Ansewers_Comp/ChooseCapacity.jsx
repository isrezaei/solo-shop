import {useContext} from "react";
import {EachProductFromContext} from "../../Products_Rendering/DetailsEachProduct";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCartShopIds, UpdateDataCart} from "../../../../Redux/CartShopSlice";
import {useParams} from "react-router-dom";
import {selectMasterDataById} from "../../../../Redux/MasterDataSlice";
import {DiscountedCalculation} from "../../Utility_Fils/DiscountedCalculation";
import {stepCapacity} from "../../Context_Handeling/DispatchingFunc";

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
                className={`
                flex flex-col justify-center items-center cursor-pointer opacity-30
                xs:w-4  xs:h-4 xs:rounded-full
                lg:w-16 lg:h-8 lg:gap-2 lg:rounded-full
                 ${activeCapacity[product] === capacity && 'opacity-100'}`}>
                <div>
                    <div className='flex justify-center items-center xs:gap-0 lg:gap-1'>
                        <p className='xs:text-[.8rem] md:text-[.9rem] lg:text-lg text-neutral-500'>{capacity}</p>
                        <p className='xs:text-[.8rem] md:text-[.9rem] lg:text-lg text-neutral-500'>GB</p>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div className='xs:w-48 xs:my-2 md:p-2 md:w-52 md:bg-gray-50 md:rounded-2xl lg:w-full lg:h-20 lg:p-0 lg:flex lg:flex-col lg:justify-between lg:items-center'>

            <div className={`flex flex-col justify-evenly xs:items-end lg:items-center ${!existCapacityInLocal && 'pointer-events-none opacity-30' }`}>

                <div className='
                       text-neutral-500 font-bold
                       xs:text-[.8rem] xs:my-2
                       md:text-[.8rem] md:my-2
                       lg:text-[.9rem] lg:text-center lg:my-1'>Choose your capacity</div>
                <div
                     className='xs:flex xs:w-full xs:justify-center xs:items-center xs:gap-9 md:justify-evenly lg:w-full lg:flex lg:justify-center lg:items-center '>
                    {setCapacity}
                </div>
            </div>
        </div>
    )
}
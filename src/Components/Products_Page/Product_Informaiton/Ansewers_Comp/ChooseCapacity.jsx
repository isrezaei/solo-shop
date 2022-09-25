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
                flex flex-col justify-center items-center  cursor-pointer opacity-30
                xs:w-14 xs:h-auto xs:rounded-full xs:border-2 xs:border-gray-200
                md:w-16 md:h-8 md:rounded-full md:border-2 md:border-gray-200
                lg:w-full lg:h-10 lg:rounded-full lg:border-none lg:bg-neutral-200 
                
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
        <div className='xs:w-44 xs:my-2 md:bg-neutral-100 md:rounded-2xl md:p-2 md:w-full md:w-full md:gap-4 md:p-3 md:mx-1'>

            <div className={`w-full flex flex-col justify-center border-gray-400
                 xs:items-end
                 lg:items-center
                 ${!existCapacityInLocal && 'pointer-events-none opacity-30' }`}>

                <div className='
                       text-neutral-500 font-bold
                       xs:text-[.8rem] xs:mb-2
                       md:text-[.9rem]
                       lg:text-[1rem] lg:text-center'>Choose your capacity</div>
                <div
                     className='
                     xs:w-full xs:flex xs:justify-end xs:items-center xs:gap-1
                     lg:w-full lg:grid lg:pb-7 lg:grid-cols-2 lg:grid-rows-2 lg:gap-4'>
                    {setCapacity}
                </div>
            </div>
        </div>
    )
}
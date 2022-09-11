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
                flex flex-col justify-center items-center  cursor-pointer
                xs:w-14 xs:h-auto xs:rounded-lg xs:border-2 xs:border-gray-400
                lg:w-48 lg:h-20 lg:gap-2 lg:rounded-full lg:border lg:border-gray-400
                 ${activeCapacity[product] === capacity && 'border border-transparent outline outline-blue-300 xs:outline lg:outline-4'}`}>
                <div>
                    <div className='flex justify-center items-center xs:gap-0 lg:gap-1'>
                        <p className='xs:text-[.8rem] lg:text-2xl text-neutral-500'>{capacity}</p>
                        <p className='xs:text-[.8rem] lg:text-lg text-neutral-400'>GB</p>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div className='xs:w-56 lg:w-full'>

            <div className={
                `w-full flex flex-col justify-center border-gray-400
                 xs:items-end
                 lg:items-start
                 ${!existCapacityInLocal && 'pointer-events-none opacity-30' }`}>

                <div
                       className='
                       text-neutral-500 font-bold
                       xs:text-[.8rem] xs:mb-2
                       lg:text-lg lg:my-5
                       '>Choose your capacity</div>


                <div
                     className='
                     xs:w-full xs:flex xs:justify-end xs:items-center xs:gap-1
                     lg:w-[25rem] lg:grid lg:pb-7 lg:grid-cols-2 lg:grid-rows-2 lg:gap-4 lg:border-b lg:border-gray-400
                     '>
                    {setCapacity}
                </div>
            </div>

        </div>
    )
}
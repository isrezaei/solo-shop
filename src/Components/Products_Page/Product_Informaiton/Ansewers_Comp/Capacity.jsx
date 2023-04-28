import {useContext} from "react";
import {EachProductFromContext} from "../../Products_Rendering/DetailsEachProduct";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCartShopIds, UpdateDataCart} from "../../../../Redux/CartShopSlice";
import {useParams} from "react-router-dom";
import {selectMasterDataById} from "../../../../Redux/MasterDataSlice";
import {DiscountedCalculation} from "../../Utility_Fils/DiscountedCalculation";
import {stepCapacity} from "../../Context_Handeling/DispatchingFunc";

export const Capacity = () =>
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



    const setCapacity = capacity.map(capacity => {
        return (
            <div
                key={capacity}
                onClick={() => stepCapacity(capacity , contextDispatch)}
                className={`
                flex flex-col justify-center items-center cursor-pointer
          
                 ${activeCapacity[product] === capacity ? 'opacity-100' : "opacity-50"}`}>
                <div>
                    <div className='flex justify-center items-center'>
                        <p className='xs:text-sm  text-neutral-500'>{capacity}</p>
                        <p className='xs:text-sm  text-neutral-500'>GB</p>
                    </div>
                </div>
            </div>
        )
    })


    return (



                <div className='xs:flex  xs:justify-center xs:items-center xs:space-x-5 '>
                    {setCapacity}
                </div>


    )
}
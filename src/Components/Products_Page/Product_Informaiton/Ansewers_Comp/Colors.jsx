import {useContext, useEffect} from "react";
import {EachProductFromContext} from "../../Products_Rendering/DetailsEachProduct";
import {selectCartShopIds, UpdateDataCart} from "../../../../Redux/CartShopSlice";
import {useDispatch, useSelector} from "react-redux";
import {DiscountedCalculation} from "../../Utility_Fils/DiscountedCalculation";
import {useParams} from "react-router-dom";
import {selectMasterDataById} from "../../../../Redux/MasterDataSlice";
import {stepColorAndImage} from "../../Context_Handeling/DispatchingFunc";

export const Colors = () => {
    const reduxDispatch = useDispatch()
    const {productId} = useParams()
    const {id, product, price, offer, color} = useSelector(state => selectMasterDataById(state, productId))
    const {
        activeOptions: {activeImage, activeColor, activeCapacity},
        contextDispatch
    } = useContext(EachProductFromContext)
    const {discountedPrice} = DiscountedCalculation()
    const {length} = useSelector(selectCartShopIds)


    //When changing data by users , Cart is updated
    useEffect(() => {
        if (length)
            reduxDispatch(UpdateDataCart(
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
    }, [activeColor, reduxDispatch])


    const setColor = color.map(colors => {

        const active = activeColor[product] === colors ? 'opacity-100' : "opacity-[15%]"

        return (
            <span
                key={colors}
                style={{background: colors}}
                className={`${active} rounded-full px-3 py-3 ring-1 ring-inset ring-gray-500/10 cursor-pointer`}
                onClick={() => stepColorAndImage(colors, contextDispatch)}/>
        )
    })


    return (
        <div className='xs:flex xs:justify-start xs:gap-2 xs:items-center'>
            {setColor}
        </div>
    )
}
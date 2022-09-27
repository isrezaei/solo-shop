import {useContext, useEffect} from "react";
import {EachProductFromContext} from "../../Products_Rendering/DetailsEachProduct";
import {selectCartShopIds, UpdateDataCart} from "../../../../Redux/CartShopSlice";
import {useDispatch , useSelector} from "react-redux";
import {DiscountedCalculation} from "../../Utility_Fils/DiscountedCalculation";
import {useParams} from "react-router-dom";
import {selectMasterDataById} from "../../../../Redux/MasterDataSlice";
import {stepColorAndImage} from "../../Context_Handeling/DispatchingFunc";

export const ChooseColor = () =>
{
    const reduxDispatch = useDispatch()
    const {productId} = useParams()
    const {id, product , price  , offer , color} = useSelector(state => selectMasterDataById(state , productId))
    const {activeOptions : {activeImage , activeColor , activeCapacity} , contextDispatch} = useContext(EachProductFromContext)
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
    } , [activeColor , reduxDispatch])


    const setColor = color.map(colors => {

        return (
            <div
                key={colors}
                onClick={()=> stepColorAndImage(colors , contextDispatch)}
                style={{background : colors}}
                className={`
                flex flex-col justify-center items-center cursor-pointer opacity-30
                xs:w-4 xs:h-4 xs:rounded-full
                lg:w-16 lg:h-8 lg:gap-2 lg:rounded-full
                ${activeColor[product] === colors && 'opacity-100'}`}>
            </div>
        )
    })


    return (
        <div className='xs:w-48 xs:my-2 md:p-2 md:w-52 md:bg-gray-50 md:rounded-2xl lg:w-full lg:h-20  lg:p-0 lg:flex lg:flex-col lg:justify-between lg:items-center'>

            <div className='
                   text-neutral-500 font-bold
                   xs:text-[.8rem] xs:my-2
                   md:text-[.8rem] md:my-2
                   lg:text-[.9rem] lg:text-center lg:my-1'>Choose your color</div>

            <div className='
             xs:flex xs:justify-start xs:gap-2 xs:items-center
             lg:w-full lg:flex lg:justify-center lg:items-center lg:pb-3'>
                {setColor}
            </div>
        </div>
    )
}
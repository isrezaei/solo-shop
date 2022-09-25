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
                xs:w-6 xs:h-6 xs:rounded-full
                lg:w-full lg:h-8 lg:gap-2 lg:rounded-full
                
                ${activeColor[product] === colors && 'opacity-100'}`}>
            </div>
        )
    })


    return (
        <div className='xs:w-48 xs:bg-neutral-100 xs:rounded-2xl xs:p-2 xs:my-1 md:w-full md:w-full md:gap-4 md:p-3 md:mx-1'>

            <div className='
                   text-neutral-500 font-bold my-1
                   xs:text-[.8rem]
                   md:text-[.9rem]
                   lg:text-[1rem] lg:text-center'>Choose your color</div>

            <div className='
             xs:flex xs:justify-start xs:gap-2 xs:items-center
             lg:w-full lg:grid lg:pb-3 lg:grid-cols-2 lg:place-items-center'>
                {setColor}
            </div>
        </div>
    )
}
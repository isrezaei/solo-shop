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
                className={`
                flex flex-col justify-center items-center  cursor-pointer
                xs:w-auto xs:h-auto xs:rounded-full
                lg:w-48 lg:h-24 lg:gap-2 lg:rounded-full lg:border-2 lg:border-neutral-300
                
                ${activeColor[product] === colors && 'border border-transparent outline outline-blue-300 xs:outline lg:outline-4'}`}>

                <div className='flex flex-col justify-center items-center gap-1'>
                    <div
                        style={{
                            background: colors
                        }}
                        className='
                        shadow-inner rounded-full
                        xs:w-5 xs:h-5
                        lg:w-9 lg:h-9
                        '> </div>
                    <div className='lg:text-sm text-center text-neutral-500 font-bold xs:hidden lg:block'>{colors}</div>
                </div>
            </div>
        )
    })


    return (
        <div className='xs:w-32 lg:w-full'>

            <div
                className='
                   text-neutral-500 font-bold
                   xs:text-[.8rem] xs:mb-2
                   lg:text-lg lg:mb-0 lg:mb-5
                   '>Choose your color</div>

            <div className='
             xs:flex xs:justify-start xs:gap-2 xs:items-center
             lg:w-[25rem] lg:grid lg:pb-7 lg:grid-cols-2 lg:gap-4 lg:border-b lg:border-gray-400
            '>
                {setColor}
            </div>
        </div>
    )
}
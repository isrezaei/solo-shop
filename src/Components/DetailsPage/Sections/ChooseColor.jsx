import {useContext, useEffect} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";
import {selectCartShopIds, UpdateDataCart} from "../../../Redux/CartShopSlice";
import {useDispatch , useSelector} from "react-redux";
import {DiscountedCalculation} from "../DiscountedCalculation";
import {useParams} from "react-router-dom";
import {selectMasterDataById} from "../../../Redux/MasterDataSlice";
import {stepColorAndImage} from "../ContextHandeling/DispatchingFunc";

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
                xs:w-10 xs:h-auto
                lg:w-48 lg:h-28 lg:gap-2 lg:rounded-3xl lg:border lg:border-gray-400
                ${activeColor[product] === colors && 'lg:border lg:border-transparent lg:outline lg:outline-4 lg:outline-blue-300'}`}>

                <div className='flex flex-col justify-center items-center gap-1'>
                    <div
                        style={{
                            background: colors
                        }}
                        className='
                        shadow-inner
                        xs:rounded-none xs:w-5 xs:h-5
                        lg:rounded-full lg:w-9 lg:h-9
                        '> </div>
                    <div className='text-center xs:hidden lg:block'>{colors}</div>
                </div>
            </div>
        )
    })


    return (
        <div className='xs:w-32 lg:w-full'>

            <div
                   className='
                   text-gray-600 font-bold
                   xs:text-sm
                   lg:text-lg
                   '>Choose your color</div>

            <div className='
            xs:w-full xs:flex xs:flex-wrap xs:justify-start xs:gap-1 xs:items-center

            lg:grid lg:pb-7 lg:grid-cols-2 lg:grid-rows-2 lg:gap-4 lg:border-b lg:border-gray-400
            '>
                {setColor}
            </div>
        </div>
    )
}
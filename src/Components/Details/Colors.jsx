import {useContext, useEffect} from "react";
import {EachProductFromContext} from "./Main";
import {selectCartShopIds, UpdateDataCart} from "../../Redux/reducer/CartShopSlice";
import {useDispatch, useSelector} from "react-redux";
import {Discount} from "../../Helper/Discount";
import {useParams} from "react-router-dom";
import {selectMasterDataById} from "../../Redux/reducer/MasterDataSlice";
import {stepColorAndImage} from "./Context/dispatch";

export const Colors = () => {
    const reduxDispatch = useDispatch()
    const {productId} = useParams()
    const {id, product, price, offer, color} = useSelector(state => selectMasterDataById(state, productId))


    const {activeOptions: {activeImage, activeColor, activeCapacity}, contextDispatch} = useContext(EachProductFromContext)

    const discount = Discount()
    const {length} = useSelector(selectCartShopIds)

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
                        discount,
                        offer
                    }
                )
            )
    }, [activeColor, reduxDispatch])




    const setColor = color.map(colors => {

        const active = activeColor.color === colors ? 'opacity-100' : "opacity-[30%]"

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
import {TiPlus, TiMinus} from "react-icons/ti";
import {useContext} from "react";
import {EachProductFromContext} from "../../Products_Rendering/DetailsEachProduct";
import {RiDeleteBinLine} from "react-icons/ri";

import {
    AddQuantity,
    DecreaseQuantity,
    IncreaseQuantity,
    RemoveQuantity,
    selectMasterDataById
} from "../../../../Redux/MasterDataSlice";
import {AddToCarts, DeleteFromCarts} from "../../../../Redux/CartShopSlice";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {DiscountedCalculation} from "../../Utility_Fils/DiscountedCalculation";
import Quantity from "./Quantity";

export const ChooseQuantity = () => {
    const dispatch = useDispatch()
    const {productId} = useParams()
    const {price, offer, id, quantity, product} = useSelector(state => selectMasterDataById(state, productId))
    const {choicesAnswer, editAnswer, activeOptions} = useContext(EachProductFromContext)
    const {discountedPrice} = DiscountedCalculation()
    const {activeImage, activeColor, activeCapacity} = activeOptions

    const accessQuantity = () => {
        if (choicesAnswer.haveOldPhone === 'No') {
            return 'pointer-events-auto opacity-100'
        }
        if ((
            choicesAnswer.haveGoodCondition === 'Yes' ||
            choicesAnswer.haveButtonWork === 'Yes' ||
            choicesAnswer.haveGoodShape === 'Yes' ||
            choicesAnswer.haveTouchScreenWork === 'Yes' ||
            choicesAnswer.haveTouchScreenWork === 'No'
        ) && (editAnswer === 'Yes')
        ) {
            return 'pointer-events-auto opacity-100'
        }
        return 'pointer-events-none opacity-50'
    }


    const handelAdd = () => {
        //add quantity and discounted Price for (total price) to master slice
        dispatch(AddQuantity(
            {
                id,
                quantity: 1,
                discountedPrice
            }
        ))

        //Add the selected product to the shopping cart
        dispatch(AddToCarts(
                {
                    activeImage,
                    activeColor,
                    activeCapacity,
                    product,
                    price,
                    discountedPrice,
                    id,
                    offer,
                }
            )
        )
    }


    return (


        <div className={`w-full flex flex-col items-center justify-center`}>

            <span
                className="flex w-full h-5 items-center justify-center rounded-md bg-purple-50 px-2 py-5 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                {!quantity ? <p onClick={handelAdd}>Add</p> : <Quantity/>}
            </span>


        </div>

    )
}
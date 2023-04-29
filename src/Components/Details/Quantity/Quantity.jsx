import {useContext} from "react";
import {EachProductFromContext} from "../Main";
import {AddQuantity, selectMasterDataById} from "../../../Redux/reducer/MasterDataSlice";
import {AddToCarts} from "../../../Redux/reducer/CartShopSlice";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {Discount} from "../../../Helper/Discount";
import Handel from "./Handel";

export const Quantity = () => {
    const dispatch = useDispatch()
    const {productId} = useParams()

    const {price, offer, id, quantity, product} = useSelector(state => selectMasterDataById(state, productId))
    const {activeOptions : {activeImage, activeColor, activeCapacity}} = useContext(EachProductFromContext)

    const discount = Discount()

    const handelAdd = () => {
        //add quantity and discounted Price for (total price) to master slice
        dispatch(AddQuantity(
            {
                id,
                quantity: 1,
                discount
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
                    discount,
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
                {!quantity ? <p onClick={handelAdd}>Add</p> : <Handel/>}
            </span>
        </div>

    )
}
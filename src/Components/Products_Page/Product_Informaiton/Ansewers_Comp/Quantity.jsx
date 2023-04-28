import React from 'react';
import {TiMinus, TiPlus} from "react-icons/ti";
import {CheckQuantity} from "../../../../Helper/HelperFuncs";
import {RiDeleteBinLine} from "react-icons/ri";
import {
    DecreaseQuantity,
    IncreaseQuantity,
    RemoveQuantity,
    selectMasterDataById
} from "../../../../Redux/MasterDataSlice";
import {DeleteFromCarts} from "../../../../Redux/CartShopSlice";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {DiscountedCalculation} from "../../Utility_Fils/DiscountedCalculation";

const Quantity = () => {

    const {productId} = useParams()
    const {price, offer, id, quantity, product} = useSelector(state => selectMasterDataById(state, productId))

    const {discountedPrice} = DiscountedCalculation()

    const dispatch= useDispatch()

    const handelIncrease = () => {
        dispatch(IncreaseQuantity({
                    id,
                    quantity: quantity + 1,
                    discountedPrice
                }
            )
        )
    }
    const handelDecrease = () => {
        dispatch(DecreaseQuantity({
                    id,
                    quantity: quantity - 1,
                    discountedPrice
                }
            )
        )
    }
    const handelRemove = () => {
        dispatch(RemoveQuantity({
                    id,
                    quantity,
                    discountedPrice
                }
            )
        )
        dispatch(DeleteFromCarts(id))
    }


    return (
        <div className={"flex"}>
            {quantity &&
                <TiPlus onClick={handelIncrease} className='text-xl w-5 text-lime-600 cursor-pointer'/>}
            <p className='w-full text-center xs:text-xs'> {quantity}</p>
            {
                CheckQuantity(id) > 1 ?
                    <TiMinus onClick={handelDecrease} className='text-xl w-5 text-red-500 cursor-pointer'/> :
                    quantity && <RiDeleteBinLine onClick={handelRemove}
                                                 className='text-xl w-5 text-red-500 flex justify-center items-center cursor-pointer'/>
            }
        </div>
    );
};

export default Quantity;
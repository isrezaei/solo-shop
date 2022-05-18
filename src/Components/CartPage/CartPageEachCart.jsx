import {selectCartShopById} from "../../Redux/CartShopSlice";
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../Redux/MasterDataSlice";
import {QuantityCart} from "../QuantityHandel/QuantityCart";

export const CartPageEachCart = ({ids}) =>
{
    const CartSlice = useSelector(state => selectCartShopById(state , ids))
    const MasterSlice = useSelector(state => selectMasterDataById(state , ids))

    return <QuantityCart CartSlice={CartSlice} MasterSlice={MasterSlice}/>
}
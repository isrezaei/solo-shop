import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../Redux/reducer/MasterDataSlice";

export const Discount = () => {
    const {productId} = useParams()
    const {price, offer} = useSelector(state => selectMasterDataById(state, productId))
    return parseInt((price - ((price * offer) / 100)))
}
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../Redux/MasterDataSlice";

export const DiscountedCalculation = () =>
{
    const {productId} = useParams()
    const EachProduct = useSelector(state => selectMasterDataById(state , productId))
    const {price , offer} = EachProduct

    const discountedPrice = parseInt((price - ((price * offer) / 100)))

    return {discountedPrice}
}
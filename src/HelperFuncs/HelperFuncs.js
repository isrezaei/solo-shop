import {useSelector} from "react-redux";
import {selectMasterDataById} from "../Redux/MasterDataSlice";

export const HaveQuantity = (id) =>
{
    console.log(id)
    const EachData = useSelector(state => selectMasterDataById(state , id))

    return !!EachData.quantity
}

export const CheckQuantity = (id) =>
{
    const EachData = useSelector(state => selectMasterDataById(state , id))

    if (!EachData)
    {
        return false
    }

    return EachData.quantity
}
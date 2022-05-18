import {AddQuantity, DecreaseQuantity, IncreaseQuantity, RemoveQuantity} from "../../Redux/MasterDataSlice";
import {AddToCard} from "../../Redux/CartShopSlice";
import {CheckQuantity, HaveQuantity} from "../../HelperFuncs/HelperFuncs";
import {useDispatch} from "react-redux";

export const QuantityGlobal = (EachProduct) =>
{
    const {id , quantity , price} = EachProduct
    const dispatch = useDispatch()

    const AddQuan  = () =>
    {
        dispatch(AddQuantity(
            {
                id,
                quantity : 1 ,
                price
            }
        ))
        dispatch(AddToCard(EachProduct))
    }

    const IncQuan = () =>
    {
        dispatch(IncreaseQuantity({
            id,
            quantity : quantity + 1,
            price
        }))

    }

    const DecQuan = () =>
    {
        dispatch(DecreaseQuantity({
            id,
            quantity : quantity - 1,
            price

        }))
    }

    const RemQuan = () =>
    {
        dispatch(RemoveQuantity({
            id,
            price
        }))
    }

    return {
        HaveQuantity,
        CheckQuantity,
        AddQuan,
        IncQuan,
        DecQuan,
        RemQuan
    }
}


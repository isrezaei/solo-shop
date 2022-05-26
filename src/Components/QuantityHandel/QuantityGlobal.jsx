import {AddQuantity, DecreaseQuantity, IncreaseQuantity, RemoveQuantityHomePage} from "../../Redux/MasterDataSlice";
import {AddToCarts, DeleteFromCarts} from "../../Redux/CartShopSlice";
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
        dispatch(AddToCarts(EachProduct))
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
        dispatch(RemoveQuantityHomePage({
            id,
            price
        }))

        dispatch(DeleteFromCarts(id))
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


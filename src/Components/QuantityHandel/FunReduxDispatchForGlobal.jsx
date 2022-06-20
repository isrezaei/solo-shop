import {AddQuantity , DecreaseQuantity, IncreaseQuantity , RemoveQuantityHomePage} from "../../Redux/MasterDataSlice";
import {AddToCarts, DeleteFromCarts} from "../../Redux/CartShopSlice";
import {CheckQuantity, HaveQuantity} from "../../HelperFuncs/HelperFuncs";
import {useDispatch} from "react-redux";

export const FunReduxDispatchForGlobal = (EachProduct) =>
{
    const dispatch = useDispatch()

    const AddQuan  = (id , PriceWithOffer) =>
    {
        dispatch(AddQuantity(
            {
                id,
                quantity : 1 ,
                PriceWithOffer
            }
        ))
        dispatch(AddToCarts(EachProduct))
    }

    const IncQuan = (id , PriceWithOffer , quantity) =>
    {
        dispatch(IncreaseQuantity({
            id,
            quantity : quantity + 1,
            PriceWithOffer
        }))

    }

    const DecQuan = (id , PriceWithOffer , quantity) =>
    {
        dispatch(DecreaseQuantity({
            id,
            quantity : quantity - 1,
            PriceWithOffer

        }))
    }

    const RemQuan = (id , PriceWithOffer ) =>
    {
        dispatch(RemoveQuantityHomePage({
            id,
            PriceWithOffer
        }))

        dispatch(DeleteFromCarts(id))
    }



    return {
        HaveQuantity,
        CheckQuantity,
        AddQuan,
        IncQuan,
        DecQuan,
        RemQuan,
    }
}


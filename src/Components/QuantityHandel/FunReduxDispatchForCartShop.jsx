import {useDispatch} from "react-redux";
import {DecreaseQuantity, IncreaseQuantity , RemoveQuantityCartPage} from "../../Redux/MasterDataSlice";
import {DeleteFromCarts, UpdateDataCart} from "../../Redux/CartShopSlice";


export const FunReduxDispatchForCartShop = () =>
{
    const dispatch = useDispatch()

    const IncQuan = (id , PriceWithOffer , quantity) =>
    {
        dispatch(IncreaseQuantity({
            id,
            quantity : quantity + 1,
            PriceWithOffer
        }))
    }

    const updateQuan = ({id , color , capacity , activeImage}) =>
    {
        dispatch(UpdateDataCart({id , color , capacity , activeImage}))
    }

    const DecQuan = (id , PriceWithOffer , quantity) =>
    {
        dispatch(DecreaseQuantity({
            id,
            quantity : quantity - 1,
            PriceWithOffer,

        }))
    }

    const RemQuan = (id , EachTotalPrice , quantity ) =>
    {

        dispatch(RemoveQuantityCartPage({
            id,
            PriceWithOffer : EachTotalPrice,
            quantity
        }))

        dispatch(DeleteFromCarts(id))
    }


    return {
        IncQuan,
        DecQuan,
        RemQuan,
        updateQuan
    }

}
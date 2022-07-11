import {useDispatch} from "react-redux";
import {DecreaseQuantity, IncreaseQuantity , RemoveQuantityCartPage} from "../../Redux/MasterDataSlice";
import {DeleteFromCarts, UpdateDataCart , SetTradeOldDevice} from "../../Redux/CartShopSlice";


export const FunReduxDispatchForCartShop = () =>
{
    const dispatch = useDispatch()

    const increase = (id , PriceWithOffer , quantity) =>
    {
        dispatch(IncreaseQuantity({
            id,
            quantity : quantity + 1,
            PriceWithOffer
        }))
    }

    const decrease = (id , PriceWithOffer , quantity) =>
    {
        dispatch(DecreaseQuantity({
            id,
            quantity : quantity - 1,
            PriceWithOffer,
        }))
    }

    const remove = (id , EachTotalPrice , quantity ) =>
    {

        dispatch(RemoveQuantityCartPage({
            id,
            PriceWithOffer : EachTotalPrice,
            quantity
        }))

        dispatch(DeleteFromCarts(id))
    }

    const update = ({id , color , capacity , image , product , price , priceWithOffer ,offer}) =>
    {
        dispatch(UpdateDataCart({id , color , capacity , image , product , price , priceWithOffer , offer}))
    }

    const tradeDevice = (oldDevice) =>
    {
        dispatch(SetTradeOldDevice(oldDevice))
    }


    return {
        increase,
        decrease,
        remove,
        update,
        tradeDevice
    }

}
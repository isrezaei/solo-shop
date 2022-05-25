import {useDispatch} from "react-redux";
import {DecreaseQuantity, IncreaseQuantity, RemoveQuantity , RemoveQuantityCart} from "../../Redux/MasterDataSlice";
import {DeleteFromCarts} from "../../Redux/CartShopSlice";


export const QuantityCart = () =>
{

    const dispatch = useDispatch()


    const IncQuan = (id , price , quantity) =>
    {
        dispatch(IncreaseQuantity({
            id,
            quantity : quantity + 1,
            price
        }))
    }

    const DecQuan = (id , price , quantity) =>
    {
        dispatch(DecreaseQuantity({
            id,
            quantity : quantity - 1,
            price,

        }))
    }

    const RemQuan = (id , price , quantity ) =>
    {

        dispatch(RemoveQuantityCart({
            id,
            price,
            staticQuantity : quantity
        }))

        dispatch(DeleteFromCarts(id))
    }


    return {
        IncQuan,
        DecQuan,
        RemQuan
    }

}
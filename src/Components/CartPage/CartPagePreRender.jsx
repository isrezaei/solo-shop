import {useSelector} from "react-redux";
import {selectCartShopIds} from "../../Redux/CartShopSlice";
import {CartPageEachCart} from "./CartPageEachCart";

export const CartPagePreRender = () =>
{
    const CartProduct = useSelector(state => selectCartShopIds(state))

    const Render = CartProduct.map(ids => <CartPageEachCart key={ids} ids={ids}/>)

    return (
        <div className=' bg-amber-100 w-4/6 mx-auto flex flex-col justify-center item-center'>
            {Render}
        </div>
    )
}
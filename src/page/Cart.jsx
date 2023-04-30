import {useSelector} from "react-redux";
import {selectCartShopIds} from "../Redux/reducer/CartShopSlice";
import {Items} from "../Components/Cart/Products/Items";
import {Empty} from "../Components/Cart/Empty";
import {Products} from "../Components/Cart/Products/Products";


export const Cart = () =>
{
    const CartProduct = useSelector(state => selectCartShopIds(state))
    const Render = CartProduct.map(ids => <Items key={ids} ids={ids}/>)

    return (
            <div className='max-w-[1300px] mx-auto '>
                {Render.length === 0 ? <Empty/> : <Products/>}
            </div>
    )
}
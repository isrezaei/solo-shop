import {useSelector} from "react-redux";
import {selectCartShopIds} from "../../Redux/CartShopSlice";
import {CartEachProduct} from "./CartEachProduct";
import {CartEmptyAlert} from "./CartEmptyAlert";
import {Footer} from "../Footer/Footer";
import {Products_Panel} from "./Products_Panel";
import {Upper_Header} from "../Header/Upper_Header";

export const CartPreRender = () =>
{
    const CartProduct = useSelector(state => selectCartShopIds(state))
    const Render = CartProduct.map(ids => <CartEachProduct key={ids} ids={ids}/>)

    return (
        <>
            <Upper_Header/>
            <div className='max-w-[1200px] lg:mx-auto lg:mt-[6.5vw] 2xl:mt-[5vw]'>

                {Render.length === 0 ? <CartEmptyAlert/> : <Products_Panel/>}
            </div>
            <Footer/>
        </>
    )
}
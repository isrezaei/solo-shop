import {useSelector} from "react-redux";
import {selectCartShopIds} from "../../Redux/CartShopSlice";
import {Each_Product} from "./Each_Product";
import {Empty_Alert} from "./Empty_Alert";
import {Footer} from "../Footer/Footer";
import {Parent_Each_Product} from "./Parent_Each_Product";
import {Upper_Header} from "../Header/Upper_Header";
import {Open_Close_Counter} from "./Open_Close_Counter";
import {useState} from "react";

export const Pre_Render = () =>
{
    const CartProduct = useSelector(state => selectCartShopIds(state))
    const Render = CartProduct.map(ids => <Each_Product key={ids} ids={ids}/>)

    const [Open_Close , setOpen_Close] = useState(true)

    return (
        <>
            <Upper_Header/>
            <div className='max-w-[1300px] lg:mx-auto lg:mt-[6.5vw] 2xl:mt-[5vw]'>
                {Render.length === 0 ? <Empty_Alert/> : <Parent_Each_Product/>}
            </div>
            <Footer/>
        </>
    )
}
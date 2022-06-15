import {TiPlus , TiMinus} from "react-icons/ti";
import {QuantityGlobal} from "../../QuantityHandel/QuantityGlobal";

export const ChooseQuantity = ({EachProductFromRedux}) =>
{
    const {price , offer , id , quantity} = EachProductFromRedux
    const {HaveQuantity, CheckQuantity, AddQuan, IncQuan, DecQuan, RemQuan} = QuantityGlobal(EachProductFromRedux)

    const PriceWithOffer = parseInt((price - ((price * offer) / 100)))


    return (
        <div className='w-full h-20  flex justify-center items-center gap-10 pointer-events-none opacity-50 '>
            {
                HaveQuantity(id) ?
                    <TiPlus onClick={()=> IncQuan(id , PriceWithOffer , quantity)} className='text-4xl text-lime-600 cursor-pointer'/>
                    :
                    <div className='w-60 h-12 flex justify-center items-center bg-lime-600 text-white  cursor-pointer ' onClick={()=> AddQuan(id , PriceWithOffer , quantity)}> Add to cart</div>
            }
            <p className='text-3xl'> {quantity}</p>

            {CheckQuantity(id) === 1 && <div onClick={()=> RemQuan(id , PriceWithOffer , quantity)} className='text-xl text-white w-28 h-12 bg-red-500 flex justify-center items-center cursor-pointer'>Remove</div>}

            {CheckQuantity(id) > 1 && <TiMinus onClick={()=> DecQuan(id , PriceWithOffer , quantity)} className='text-4xl text-red-500 cursor-pointer'/>}
        </div>
    )
}
import {TiPlus , TiMinus} from "react-icons/ti";
import {QuantityGlobal} from "../../QuantityHandel/QuantityGlobal";
import {useContext} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";
import {RiDeleteBinLine} from "react-icons/ri";

export const ChooseQuantity = ({EachProductFromRedux}) =>
{
    const {price , offer , id , quantity} = EachProductFromRedux
    const {choicesAnswer , editAnswer} = useContext(EachProductFromContext)
    const {HaveQuantity, CheckQuantity, AddQuan, IncQuan, DecQuan, RemQuan} = QuantityGlobal(EachProductFromRedux)





    const PriceWithOffer = parseInt((price - ((price * offer) / 100)))

    return (
        <div className= {`w-full h-20 flex justify-between items-center 
         ${
            (
                choicesAnswer.haveGoodCondition === 'Yes'||
                choicesAnswer.haveButtonWork === 'Yes'||
                choicesAnswer.haveGoodShape === 'Yes'||
                choicesAnswer.haveTouchScreenWork === 'Yes'||
                choicesAnswer.haveTouchScreenWork === 'No'
            ) && (editAnswer === 'Yes') ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-50'}`
        }>

            <div className={`w-4/6 h-12 bg-lime-600  flex justify-center items-center text-white rounded ${HaveQuantity(id) ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}`} onClick={()=> AddQuan(id , PriceWithOffer , quantity)}>
                {!quantity ? 'Add to cart' : 'Choose your quantity'}
            </div>


                <div className='w-28 h-12 p-2 border border-gray-400 flex justify-between items-center'>

                    {quantity && <TiPlus onClick={()=> IncQuan(id , PriceWithOffer , quantity)} className='text-xl w-5 text-lime-600 cursor-pointer'/>}

                    <p className='w-full text-center'> {!quantity ? 'Wait for add' : quantity}</p>
                    {
                        CheckQuantity(id) > 1 ? <TiMinus onClick={()=> DecQuan(id , PriceWithOffer , quantity)} className='text-xl w-5 text-red-500 cursor-pointer'/> :
                            quantity && <RiDeleteBinLine onClick={()=> RemQuan(id , PriceWithOffer , quantity)} className='text-xl w-5 text-red-500 flex justify-center items-center cursor-pointer'/>
                    }
                </div>



        </div>
    )
}
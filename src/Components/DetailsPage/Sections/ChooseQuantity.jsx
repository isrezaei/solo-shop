import {TiPlus , TiMinus} from "react-icons/ti";
import {FunReduxDispatchForGlobal} from "../../QuantityHandel/FunReduxDispatchForGlobal";
import {useContext} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";
import {RiDeleteBinLine} from "react-icons/ri";
import {AddQuantity, selectMasterDataById} from "../../../Redux/MasterDataSlice";
import {AddToCarts} from "../../../Redux/CartShopSlice";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {DiscountedCalculation} from "../DiscountedCalculation";

export const ChooseQuantity = () =>
{
    const dispatch = useDispatch()
    const {choicesAnswer , editAnswer , activeOptions , EachProductFromRedux} = useContext(EachProductFromContext)

    const {productId} = useParams()
    const EachProduct = useSelector(state => selectMasterDataById(state , productId))

    const {price , offer , id , quantity , product} = EachProduct

    const {discountedPrice} = DiscountedCalculation()





    const {activeImage , activeColor , activeCapacity} = activeOptions

    const {HaveQuantity, CheckQuantity, AddQuan, IncQuan, DecQuan, RemQuan} = FunReduxDispatchForGlobal(
        {
            image : activeImage ,
            color : activeColor,
            capacity : activeCapacity,
            product ,
            price,
            discountedPrice ,
            id ,
            offer ,
        }
    )

    let accessQuantity = 'pointer-events-none opacity-50'
    if (choicesAnswer.haveOldPhone === 'No')
    {
        accessQuantity = 'pointer-events-auto opacity-100'
    }
    if (
        (
            choicesAnswer.haveGoodCondition === 'Yes'||
            choicesAnswer.haveButtonWork === 'Yes'||
            choicesAnswer.haveGoodShape === 'Yes'||
            choicesAnswer.haveTouchScreenWork === 'Yes'||
            choicesAnswer.haveTouchScreenWork === 'No'
        ) && (editAnswer === 'Yes')
    )
    {
        accessQuantity = 'pointer-events-auto opacity-100'
    }

    const HandelAdd = () =>
    {
        dispatch(AddQuantity(
            {
                id,
                quantity : 1 ,
                discountedPrice
            }
        ))
        dispatch(AddToCarts(        {
            image : activeImage ,
            color : activeColor,
            capacity : activeCapacity,
            product ,
            price,
            discountedPrice ,
            id ,
            offer ,
        }))
    }


    return (
        <div className='w-full flex flex-col justify-between items-start'>
            <div className= {`w-full h-20 flex justify-between items-center ${accessQuantity}`}>

                <div className={`w-4/6 h-12 bg-blue-600 cursor-pointer flex justify-center items-center text-white rounded 
                ${HaveQuantity(id) ?  'opacity-50 pointer-events-none' : 'cursor-pointer'}`} onClick={HandelAdd}>
                    {!quantity ? 'Add to cart' : 'Choose your quantity'}
                </div>

                <div className='w-28 h-12 p-2 border border-gray-400 flex justify-between items-center cursor-pointer'>

                    {quantity && <TiPlus onClick={()=> IncQuan(id , discountedPrice , quantity)} className='text-xl w-5 text-lime-600 cursor-pointer'/>}

                    <p className='w-full text-center'> {!quantity ? 'Wait for add' : quantity}</p>
                    {
                        CheckQuantity(id) > 1 ? <TiMinus onClick={()=> DecQuan(id , discountedPrice , quantity)} className='text-xl w-5 text-red-500 cursor-pointer'/> :
                            quantity && <RiDeleteBinLine onClick={()=> RemQuan(id , discountedPrice , quantity)} className='text-xl w-5 text-red-500 flex justify-center items-center cursor-pointer'/>
                    }
                </div>
            </div>
        </div>
    )
}
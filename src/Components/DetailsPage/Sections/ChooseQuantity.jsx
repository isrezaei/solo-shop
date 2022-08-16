import {TiPlus , TiMinus} from "react-icons/ti";
import {useContext} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";
import {RiDeleteBinLine} from "react-icons/ri";
import {HaveQuantity , CheckQuantity} from "../../../HelperFuncs/HelperFuncs";
import {AddQuantity,DecreaseQuantity,IncreaseQuantity,RemoveQuantity,selectMasterDataById} from "../../../Redux/MasterDataSlice";
import {AddToCarts, DeleteFromCarts} from "../../../Redux/CartShopSlice";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {DiscountedCalculation} from "../DiscountedCalculation";

export const ChooseQuantity = () =>
{
    const dispatch = useDispatch()
    const {productId} = useParams()
    const {price , offer , id , quantity , product} = useSelector(state => selectMasterDataById(state , productId))
    const {choicesAnswer , editAnswer , activeOptions} = useContext(EachProductFromContext)
    const {discountedPrice} = DiscountedCalculation()
    const {activeImage , activeColor , activeCapacity} = activeOptions

    const accessQuantity = () =>
    {
        if (choicesAnswer.haveOldPhone === 'No')
        {
            return 'pointer-events-auto opacity-100'
        }
        if ((
            choicesAnswer.haveGoodCondition === 'Yes'||
            choicesAnswer.haveButtonWork === 'Yes'||
            choicesAnswer.haveGoodShape === 'Yes'||
            choicesAnswer.haveTouchScreenWork === 'Yes'||
            choicesAnswer.haveTouchScreenWork === 'No'
        ) && (editAnswer === 'Yes')
        ){
            return 'pointer-events-auto opacity-100'
        }
        return 'pointer-events-none opacity-50'
    }


    const handelAdd = () =>
    {
        //add quantity and discounted Price for (total price) to master slice
        dispatch(AddQuantity(
            {
                id,
                quantity : 1 ,
                discountedPrice
            }
        ))

        //Add the selected product to the shopping cart
        dispatch(AddToCarts(
                {
                    activeImage ,
                    activeColor,
                    activeCapacity,
                    product ,
                    price,
                    discountedPrice ,
                    id ,
                    offer,
                }
            )
        )
    }
    const handelIncrease = () =>
    {
        dispatch(IncreaseQuantity({
                    id,
                    quantity : quantity + 1,
                    discountedPrice
                }
            )
        )
    }
    const handelDecrease = () =>
    {
        dispatch(DecreaseQuantity({
                    id,
                    quantity : quantity - 1,
                    discountedPrice
                }
            )
        )
    }
    const handelRemove = () =>
    {
        dispatch(RemoveQuantity({
                    id,
                    quantity,
                    discountedPrice
                }
            )
        )
        dispatch(DeleteFromCarts(id))
    }


    return (
        <div className='w-full flex flex-col justify-between items-start'>
            <div className= {`
            w-full flex items-center
            xs:h-8 xs:justify-evenly
            lg:h-20 lg:justify-between ${accessQuantity()}`}>
                <div className={`
                 bg-blue-600 cursor-pointer flex justify-center items-center text-white 
                 xs:w-56  xs:h-10 xs:rounded-full xs:text-sm 
                 lg:w-4/6 lg:h-12 lg:rounded-none lg:text-[1rem]
                ${HaveQuantity(id) ?  'opacity-50 pointer-events-none' : 'cursor-pointer'}`} onClick={handelAdd}>
                    {!quantity ? 'Add to cart' : 'Choose your quantity'}
                </div>
                <div className='
                border border-gray-400 flex justify-between items-center cursor-pointer p-2
                xs:w-24 xs:h-10 xs:rounded-full
                lg:w-28  lg:h-12 lg:rounded-none
                '>
                    {quantity && <TiPlus onClick={handelIncrease} className='text-xl w-5 text-lime-600 cursor-pointer'/>}
                    <p className='w-full text-center xs:text-[.8rem] lg:text-[1rem]'> {!quantity ? 'Wait for add' : quantity}</p>
                    {
                        CheckQuantity(id) > 1 ? <TiMinus onClick={handelDecrease} className='text-xl w-5 text-red-500 cursor-pointer'/> :
                            quantity && <RiDeleteBinLine onClick={handelRemove} className='text-xl w-5 text-red-500 flex justify-center items-center cursor-pointer'/>
                    }
                </div>
            </div>
        </div>
    )
}
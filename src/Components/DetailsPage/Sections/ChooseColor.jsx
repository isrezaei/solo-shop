import {useContext} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";
import {OldModelPhoneArray} from "../OldModelPhoneArray";
import {FunReduxDispatchForCartShop} from "../../QuantityHandel/FunReduxDispatchForCartShop";
import {useSelector} from "react-redux";
import {selectCartShopIds} from "../../../Redux/CartShopSlice";

export const ChooseColor = ({EachProductFromRedux}) =>
{
    const {updateQuan} = FunReduxDispatchForCartShop()
    const cartShopLengths = useSelector(selectCartShopIds)
    const {activeOptions , stepColorAndImage} = useContext(EachProductFromContext)

    const {introduction, product, brand, price, id, quantity, rate, type, color, capacity, detailsImage , offer} = EachProductFromRedux

    const setColor = color.map(colors => {

        const handelClick = () => {

            stepColorAndImage(colors)

            if (cartShopLengths.length)
            {
                updateQuan({
                    id ,
                    color : activeOptions.activeColor ,
                    capacity : activeOptions.activeCapacity ,
                    activeImage : activeOptions.activeImage})
            }
        }


        return (
            <div
                key={colors}
                onClick={handelClick}
                className={`w-48 h-28 flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400 ${activeOptions.activeColor === colors && 'border-2 border-blue-600'}`}>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <div
                        style={{
                            background: colors
                        }}
                        className='w-9 h-9 rounded-full shadow-inner'> </div>
                    <div className='text-center'>{colors}</div>
                </div>
            </div>
        )
    })



    // const {setColor} = useContext(EachProductFromContext)

    return (
        <>
            <label htmlFor='select-color' className='text-xl font-bold mt-4'>Choose your color</label>
            <div id='select-color' className='grid pb-7 grid-cols-2 grid-rows-2 gap-4 border-b border-gray-400'>
                {setColor}
            </div>
        </>
    )
}
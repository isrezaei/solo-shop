import {useContext, useEffect} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";
import {OldModelPhoneArray} from "../OldModelPhoneArray";
import {FunReduxDispatchForCartShop} from "../../QuantityHandel/FunReduxDispatchForCartShop";
import {useSelector} from "react-redux";
import {selectCartShopIds} from "../../../Redux/CartShopSlice";
import {useState} from "react";

export const ChooseColor = ({EachProductFromRedux}) =>
{

    const {updateQuan} = FunReduxDispatchForCartShop()

    const cartShopLengths = useSelector(selectCartShopIds)

    const {activeOptions , stepColorAndImage} = useContext(EachProductFromContext)

    const {introduction, product, brand, price, id, quantity, rate, type, color, capacity, detailsImage , offer} = EachProductFromRedux


    const activeColor = JSON.parse(localStorage.getItem('detailsPageInfo'))?.activeOptions.activeColor

    const [Active , setActive] = useState( activeColor || '')

    const [Hover , setHover] = useState('')


    useEffect(() => {
        if (cartShopLengths.length)
        {
            updateQuan({
                    id ,
                    activeImage : activeOptions.activeImage,
                    color : activeOptions.activeColor ,
                    capacity : activeOptions.activeCapacity ,
                }
            )
        }
    } , [activeOptions.activeColor])


    const setColor = color.map(colors => {

        const handelClick = () => {
            setActive(colors)
            stepColorAndImage(colors)
        }
        const handelMouseOver = () =>
        {
            setHover(colors)
        }

        return (
            <div
                key={colors}
                onClick={handelClick}
                onMouseOver={handelMouseOver}
                onMouseLeave={()=>setHover('')}
                className={`w-48 h-28 flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400 
                ${Active=== colors && 'border-2 border-blue-600'}
                ${Hover === colors && 'border-2 border-gray-400-600'}`}>

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


    return (
        <>
            <label htmlFor='select-color' className='text-xl font-bold mt-4'>Choose your color</label>
            <div id='select-color' className='grid pb-7 grid-cols-2 grid-rows-2 gap-4 border-b border-gray-400'>
                {setColor}
            </div>
        </>
    )
}
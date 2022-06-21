import {useContext, useEffect} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";
import {FunReduxDispatchForCartShop} from "../../QuantityHandel/FunReduxDispatchForCartShop";
import {useSelector} from "react-redux";
import {selectCartShopIds} from "../../../Redux/CartShopSlice";

export const ChooseColor = () =>
{
    const cartShopLengths = useSelector(selectCartShopIds)

    const {updateQuan} = FunReduxDispatchForCartShop()
    const {activeOptions , stepColorAndImage , EachProductFromRedux} = useContext(EachProductFromContext)
    const {id, color} = EachProductFromRedux

    //When changing data by users , Cart is updated
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
    } , [activeOptions.activeColor , activeOptions.activeCapacity , activeOptions.activeImage ,cartShopLengths.length , id , updateQuan])


    const setColor = color.map(colors => {
        return (
            <div
                key={colors}
                onClick={()=> stepColorAndImage(colors)}
                className={`w-48 h-28 flex flex-col justify-center items-center gap-2 rounded-3xl border border-gray-400 cursor-pointer
                ${activeOptions.activeColor  === colors && 'border-2 border-blue-600'}`}>

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
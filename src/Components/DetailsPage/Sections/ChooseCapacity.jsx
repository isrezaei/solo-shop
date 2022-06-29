import {useContext} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectCartShopIds} from "../../../Redux/CartShopSlice";
import {FunReduxDispatchForCartShop} from "../../QuantityHandel/FunReduxDispatchForCartShop";

export const ChooseCapacity = () =>
{
    const cartShopLengths = useSelector(selectCartShopIds)

    const {update} = FunReduxDispatchForCartShop()
    const {activeOptions , enableSection , stepCapacity , EachProductFromRedux} = useContext(EachProductFromContext)
    const {id, capacity , price} = EachProductFromRedux

    //When changing data by users , Cart is updated
    useEffect(() => {
        if (cartShopLengths.length)
        {
            update({
                    id ,
                    activeImage : activeOptions.activeImage,
                    color : activeOptions.activeColor ,
                    capacity : activeOptions.activeCapacity ,
                }
            )
        }
    } , [activeOptions.activeColor , activeOptions.activeCapacity , activeOptions.activeImage ,cartShopLengths.length , id , update])


    const setCapacity = capacity.map(capacity => {
        return (
            <div
                key={capacity}
                onClick={() => stepCapacity(capacity)}
                className={`w-48 h-28 flex flex-col justify-center items-center gap-2 rounded-3xl border border-gray-400 cursor-pointer
                 ${activeOptions.activeCapacity === capacity && 'border border-transparent outline outline-4 outline-blue-300'}`}>
                <div>
                    <div className='flex justify-center items-center gap-1'>
                        <p className='text-3xl'>{capacity}</p>
                        <p className='text-lg'>GB</p>
                    </div>
                    <div className='text-center'>from ${price}</div>
                </div>
            </div>
        )
    })

    return (
        <>
            <div className={`w-full pb-7 flex flex-col justify-center items-start gap-1 mt-3 border-b border-gray-400 ${!enableSection.enableSectionCapacity && 'pointer-events-none opacity-30' }`}>
                <label htmlFor='select-Capacity' className='text-lg font-bold text-gray-600'>Choose your capacity</label>
                <p className='my-2 text-blue-700'>How much capacity is right for you?</p>
                <div id='select-Capacity' className='grid grid-cols-2 grid-rows-2 gap-4'>
                    {setCapacity}
                </div>
            </div>

        </>
    )
}
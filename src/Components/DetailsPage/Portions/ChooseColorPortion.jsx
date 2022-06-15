import {useContext} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";

export const ChooseColorPortion = () =>
{
    const {setColor} = useContext(EachProductFromContext)
    return (
        <>
            <label htmlFor='select-color' className='text-xl font-bold mt-4'>Choose your color</label>
            <div id='select-color' className='grid pb-7 grid-cols-2 grid-rows-2 gap-4 border-b border-gray-400'>
                {setColor}
            </div>
        </>
    )
}
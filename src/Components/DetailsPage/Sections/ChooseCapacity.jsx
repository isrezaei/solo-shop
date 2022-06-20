import {useContext} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";

export const ChooseCapacity = () =>
{
    const {setCapacity , enableSection} = useContext(EachProductFromContext)
    return (
        <>
            <div className={`w-full pb-7 flex flex-col justify-center items-start gap-1 mt-3 border-b border-gray-400 ${!enableSection.enableSectionCapacity && 'pointer-events-none opacity-30' }`}>
                <label htmlFor='select-Capacity' className='text-lg font-bold'>Choose your capacity</label>
                <p className='text-blue-700'>How much capacity is right for you?</p>
                <div id='select-Capacity' className='grid grid-cols-2 grid-rows-2 gap-4'>
                    {setCapacity}
                </div>
            </div>

        </>
    )
}
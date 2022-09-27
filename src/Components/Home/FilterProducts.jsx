import {FilterResult} from "../Filters_Logic/FilterResult";
import {FilterLogic} from "../Filters_Logic/FilterLogic";
import {useState} from "react";

export const FilterProducts = () =>
{

    const [applyAndBack , setApplyAndBack] = useState(false)

    return (
        <>
            {applyAndBack ? <FilterResult/> : <FilterLogic/>}
            <button onClick={()=> setApplyAndBack((state) => !state)}
                    className='w-28 h-8 my-3 bg-white text-neutral-500 rounded-full font-bold'>{applyAndBack ? 'Back' : 'Apply'}</button>
        </>
    )
}
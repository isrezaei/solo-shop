import {FilterResult} from "../Filters_Logic/FilterResult";
import {FilterLogic} from "../Filters_Logic/FilterLogic";
import {useState} from "react";

export const FilterProducts = () =>
{

    const [applyAndBack , setApplyAndBack] = useState(false)

    return (
        <div className='w-full h-[45rem] bg-white mx-auto flex flex-col justify-between items-center xs:my-7 lg:mt-16'>
            {applyAndBack ? <FilterResult/> : <FilterLogic/>}
            <button onClick={()=> setApplyAndBack((state) => !state)}
                    className='w-6/12 h-8 my-5 bg-neutral-100 text-neutral-500 rounded-full font-bold'>
                {applyAndBack ? 'Back' : 'Apply'}
            </button>
        </div>
    )
}
import {FilterResult} from "../FilterLogic/FilterResult";
import {FilterLogic} from "../FilterLogic/FilterLogic";
import {useState} from "react";

export const HomeMobileFilter = () =>
{

    const [smallScreenFilterResult , setSmallScreenFilterResult] = useState(false)



    return (
        <div className='w-10/12 h-3/6 bg-white mx-auto flex flex-col justify-center items-center
        xs:my-7
        lg:mt-16
        '>

            {smallScreenFilterResult ? <FilterResult/> : <FilterLogic/>}

            <button onClick={()=> setSmallScreenFilterResult((state) => !state)} className='w-6/12 h-8 my-5 bg-neutral-100 text-neutral-500 rounded-full font-bold'>Apply</button>

        </div>
    )
}
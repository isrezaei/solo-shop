import {FilterResult} from "../FilterLogic/FilterResult";
import {FilterLogic} from "../FilterLogic/FilterLogic";
import {useState} from "react";

export const HomeMobileFilter = () =>
{

    const [smallScreenFilterResult , setSmallScreenFilterResult] = useState(false)



    return (
        <div className='w-10/12 h-auto  bg-lime-500 mx-auto mt-16 flex flex-col justify-center items-center'>

            {smallScreenFilterResult ? <FilterResult/> : <FilterLogic/>}

            <button onClick={()=> setSmallScreenFilterResult((state) => !state)} className='w-8/12 h-16 bg-lime-500 '>Apply</button>

        </div>
    )
}
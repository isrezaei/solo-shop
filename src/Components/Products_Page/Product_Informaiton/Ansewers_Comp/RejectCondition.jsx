import { useContext } from "react"
import { EachProductFromContext } from "../../Products_Rendering/DetailsEachProduct"
import {setEditAnswer} from "../../Context_Handeling/DispatchingFunc";

export const RejectCondition = () =>
{
    const {contextDispatch} = useContext(EachProductFromContext)
    return (
        <div className={"w-full flex justify-between items-start p-1 xs:my-2 lg:my-3"}>
            <div className={"w-80"}>
                <p className={"xs:text-[1rem] lg:text-[1rem] font-bold text-gray-600"}>Your smartphone is ready to recycle</p>
                <p className='xs:text-sm lg:text-sm lg:my-2 text-gray-600'>Complete your purchase and we’ll accept it for free.</p>
                <a href="" className={"text-blue-600 xs:text-sm lg:text-sm"}>Learn more</a>
            </div>
            <p onClick={()=> setEditAnswer('No' , contextDispatch)} className={"xs:text-sm lg:text-lg text-blue-600 cursor-pointer"}>Edit</p>
        </div>
    )
}
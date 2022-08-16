import { useContext } from "react"
import { EachProductFromContext } from "../DetailsEachProduct"
import {setEditAnswer} from "../ContextHandeling/DispatchingFunc";

export const RejectCondition = () =>
{
    const {contextDispatch} = useContext(EachProductFromContext)
    return (
        <div className={"w-full flex justify-between items-start p-1 xs:my-2 lg:my-0"}>
            <div className={"w-80"}>
                <p className={"xs:text-[1rem] lg:text-lg font-bold text-gray-600"}>Your smartphone is ready to recycle</p>
                <p className='xs:text-sm lg:text-lg text-gray-600'>Complete your purchase and we’ll accept it for free.</p>
                <a href="" className={"text-blue-600 xs:text-sm lg:text-lg"}>Learn more</a>
            </div>
            <p onClick={()=> setEditAnswer('No' , contextDispatch)} className={"xs:text-sm lg:text-xl text-blue-600 cursor-pointer"}>Edit</p>
        </div>
    )
}
import { useContext } from "react"
import { EachProductFromContext } from "../DetailsEachProduct"
export const RejectCondition = () =>
{

    const {setEditAnswer} = useContext(EachProductFromContext)

    return (
        <div className={"w-full flex justify-between items-start p-1"}>

            <div className={"w-80"}>
                <p className={"text-lg font-bold"}>Your smartphone is ready to recycle.</p>
                <p>Complete your purchase and we’ll accept it for free.</p>
                <a href="" className={"text-blue-600"}>Learn more</a>
            </div>

            <p onClick={()=> setEditAnswer('No')} className={"text-xl text-blue-600 cursor-pointer"}>Edit</p>

        </div>
    )
}
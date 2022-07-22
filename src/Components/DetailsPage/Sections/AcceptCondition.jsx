import {useContext} from "react"
import {EachProductFromContext} from "../DetailsEachProduct"
import {setEditAnswer} from "../ContextHandeling/DispatchingFunctions";


export const AcceptCondition = () =>
{
    const {choiceOldModel , contextDispatch} = useContext(EachProductFromContext)
    return (
        <div className={"w-full p-2 flex justify-between items-start"}>

            <div className={"w-96"}>
                <p className={"text-lg font-bold"}>You’ve got <b className='text-blue-600'>${choiceOldModel.offPrice} </b> in trade-in value.</p>
                <p>If you pay monthly, we’ll apply the value as an instant credit. If you pay in full, we’ll credit your payment method after we receive your trade-in.</p>
                <a href="" className={"text-blue-600"}>See how trade-in works</a>
            </div>

            <p onClick={() => setEditAnswer('No' , contextDispatch)} className={"text-xl text-blue-600 cursor-pointer"}>Edit</p>

        </div>
    )
}
import {useContext} from "react"
import {EachProductFromContext} from "../DetailsEachProduct"
import {setEditAnswer} from "../ContextHandeling/DispatchingFunc";


export const AcceptCondition = () =>
{
    const {choiceOldModel , contextDispatch} = useContext(EachProductFromContext)
    return (
        <div className={"w-full p-2 flex justify-between items-start xs:my-2 lg:my-0"}>
            <div className={"w-96"}>
                <p className={"xs:text-[1rem] lg:text-lg font-bold text-gray-600"}>You’ve got <b className='text-blue-600'>${choiceOldModel.offPrice} </b> in trade-in value</p>
                <p className='xs:text-sm lg:text-lg text-gray-600'>If you pay monthly, we’ll apply the value as an instant credit. If you pay in full, we’ll credit your payment method after we receive your trade-in.</p>
                <a href="" className={"text-blue-600 xs:text-sm lg:text-lg"}>See how trade-in works</a>
            </div>
            <p onClick={() => setEditAnswer('No' , contextDispatch)} className={"xs:text-sm lg:text-xl text-blue-600 cursor-pointer"}>Edit</p>
        </div>
    )
}
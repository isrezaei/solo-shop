import {useContext} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";
import {stepHaveOldPhone , stepCondition , setEditAnswer , stepHaveButtonWork , stepHaveGoodShape ,stepHaveTouchScreenWork} from "../ContextHandeling/DispatchingFunc";

export const AnswerOfHaveSmartPhone = () =>
{
    const {choicesAnswer , contextDispatch} = useContext(EachProductFromContext)

    return (
        <>
            <p className='font-bold text-lg mt-3 text-gray-600'>Do you have a smartphone to trade in with Apple?</p>
            <div className='flex justify-center items-center gap-3'>
                {
                    ['Yes' , 'No'].map(answer => {
                            return (
                                <div key={answer}
                                     onClick={()=>stepHaveOldPhone(answer , contextDispatch)}
                                     className={`w-48 h-14 text-xl flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400 cursor-pointer ${choicesAnswer.haveOldPhone === answer && 'border border-transparent outline outline-4 outline-blue-300'}`}> {answer}</div>
                            )
                        }
                    )
                }
            </div>
        </>
    )
}
export const AnswerOfHaveGoodCondition = () =>
{
    const {choicesAnswer , contextDispatch} = useContext(EachProductFromContext)

    return (
        <div className='flex justify-start items-center gap-4 mt-3'>
            {
                ['Yes' , 'No'].map(answer => {
                        return (
                            <div key={answer}
                                 onClick={()=> {
                                     setEditAnswer(answer , contextDispatch)
                                     stepCondition(answer , contextDispatch)
                                 }}
                                 className={`w-48 h-14 text-xl flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400 cursor-pointer ${choicesAnswer.haveGoodCondition === answer && 'border border-transparent outline outline-4 outline-blue-300'}`}> {answer}</div>
                        )
                    }
                )
            }
        </div>
    )
}
export const AnswerOfButtonWork = () =>
{
    const {choicesAnswer , contextDispatch} = useContext(EachProductFromContext)

    return (
        <div className='flex justify-start items-center gap-4 mt-3'>
            {
                ['Yes' , 'No'].map(answer => {
                        return (
                            <div key={answer}
                                 onClick={()=> {
                                     setEditAnswer(answer , contextDispatch)
                                     stepHaveButtonWork(answer , contextDispatch)
                                 }}
                                 className={`w-48 h-14 text-xl flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400 cursor-pointer ${choicesAnswer.haveButtonWork === answer && 'border border-transparent outline outline-4 outline-blue-300'}`}> {answer}</div>
                        )
                    }
                )
            }
        </div>
    )
}
export const AnswerOfGoodShape = () =>
{
    const {choicesAnswer , contextDispatch} = useContext(EachProductFromContext)

    return (
        <div className='flex justify-start items-center gap-4 mt-3'>
            {
                ['Yes' , 'No'].map(answer => {
                        return (
                            <div key={answer}
                                 onClick={()=> {
                                     setEditAnswer(answer , contextDispatch)
                                     stepHaveGoodShape(answer , contextDispatch)
                                 }}
                                 className={`w-48 h-14 text-xl flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400 cursor-pointer ${choicesAnswer.haveGoodShape === answer && 'border border-transparent outline outline-4 outline-blue-300'}`}> {answer}</div>
                        )
                    }
                )
            }
        </div>
    )
}
export const AnswerOfTouchScreenWork = () =>
{
    const {choicesAnswer , contextDispatch} = useContext(EachProductFromContext)
    return (
        <div className='flex justify-start items-center gap-4 mt-3'>
            {
                ['Yes' , 'No'].map(answer => {
                        return (
                            <div key={answer}
                                 onClick={()=> {
                                     setEditAnswer('Yes' , contextDispatch)
                                     stepHaveTouchScreenWork(answer , contextDispatch)
                                 }}
                                 className={`w-48 h-14 text-xl flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400 cursor-pointer ${choicesAnswer.haveTouchScreenWork === answer && 'border border-transparent outline outline-4 outline-blue-300'}`}> {answer}</div>
                        )
                    }
                )
            }
        </div>
    )
}


import {useContext} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";
import {stepHaveOldPhone , stepCondition , setEditAnswer , stepHaveButtonWork , stepHaveGoodShape ,stepHaveTouchScreenWork} from "../ContextHandeling/DispatchingFunc";

export const AnswerOfHaveSmartPhone = () =>
{
    const {choicesAnswer , contextDispatch} = useContext(EachProductFromContext)

    return (
        <>

            <p className='
            font-bold mt-3 text-gray-600
            xs:text-[.9rem]
            lg:text-lg
            '>Do you have a smartphone to trade in with Apple?</p>

            <div className='flex justify-center items-center gap-3'>
                {
                    ['Yes' , 'No'].map(answer => {
                            return (
                                <div key={answer}
                                     onClick={()=>stepHaveOldPhone(answer , contextDispatch)}
                                     className={`
                                     ${choicesAnswer.haveOldPhone === answer && 'border border-transparent outline outline-4 outline-blue-300'}
                                     flex flex-col justify-center items-center gap-2 border border-gray-400 cursor-pointer
                                     xs:w-28 xs:h-10 xs:text-sm xs:rounded-full
                                     lg:w-48 lg:h-14 lg:text-xl lg:rounded-xl
                                     
                                     `}> {answer}</div>
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
                                 className={`
                                 ${choicesAnswer.haveGoodCondition === answer && 'border border-transparent outline outline-4 outline-blue-300'}
                                     flex flex-col justify-center items-center gap-2 border border-gray-400 cursor-pointer
                                     xs:w-28 xs:h-10 xs:text-sm xs:rounded-full
                                     lg:w-48 lg:h-14 lg:text-xl lg:rounded-xl
                                  
                                  `}> {answer}</div>
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
                                 className={`${choicesAnswer.haveButtonWork === answer && 'border border-transparent outline outline-4 outline-blue-300'}
                                     flex flex-col justify-center items-center gap-2 border border-gray-400 cursor-pointer
                                     xs:w-28 xs:h-10 xs:text-sm xs:rounded-full
                                     lg:w-48 lg:h-14 lg:text-xl lg:rounded-xl
                                  
                                  `}> {answer}</div>
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
                                 className={`${choicesAnswer.haveGoodShape === answer && 'border border-transparent outline outline-4 outline-blue-300'}
                                     flex flex-col justify-center items-center gap-2 border border-gray-400 cursor-pointer
                                     xs:w-28 xs:h-10 xs:text-sm xs:rounded-full
                                     lg:w-48 lg:h-14 lg:text-xl lg:rounded-xl
                                  `}> {answer}</div>
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
                                 className={`${choicesAnswer.haveTouchScreenWork === answer && 'border border-transparent outline outline-4 outline-blue-300'}
                                     flex flex-col justify-center items-center gap-2 border border-gray-400 cursor-pointer
                                     xs:w-28 xs:h-10 xs:text-sm xs:rounded-full
                                     lg:w-48 lg:h-14 lg:text-xl lg:rounded-xl
                                  `}> {answer}</div>
                        )
                    }
                )
            }
        </div>
    )
}


import {useContext} from "react";
import {EachProductFromContext} from "../../Products_Rendering/DetailsEachProduct";
import {stepHaveOldPhone , stepCondition , setEditAnswer , stepHaveButtonWork , stepHaveGoodShape ,stepHaveTouchScreenWork} from "../../Context_Handeling/DispatchingFunc";

export const AnswerOfHaveSmartPhone = () =>
{
    const {choicesAnswer , contextDispatch} = useContext(EachProductFromContext)

    return (
        <>

            <p className='
            font-bold mt-3 text-neutral-500
            xs:text-[1rem]
            lg:w-full

            '>Do you have a smartphone to trade in with Apple?</p>

            <div className='flex justify-center lg:w-full lg:justify-start items-center gap-3'>
                {
                    ['Yes' , 'No'].map(answer => {
                            return (
                                <div key={answer}
                                     onClick={()=>stepHaveOldPhone(answer , contextDispatch)}
                                     className={`
                                     ${choicesAnswer.haveOldPhone === answer && '!border-4 !border-blue-300'}
                                     flex flex-col justify-center items-center gap-2 border border-gray-400 cursor-pointer text-neutral-500
                                     xs:w-28 xs:h-10 xs:text-sm xs:rounded-full
                                     md:w-[10rem] md:h-12 md:text-lg md:my-2
                                     lg:w-[13rem] lg:h-12 lg:text-lg lg:my-2
                                     
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
                                 ${choicesAnswer.haveGoodCondition === answer && '!border-4 !border-blue-300'}
                                     flex flex-col justify-center items-center gap-2 border border-gray-400 cursor-pointer text-neutral-500
                                     xs:w-28 xs:h-10 xs:text-sm xs:rounded-full
                                     md:w-[10rem] md:h-12 md:text-lg md:my-2
                                     lg:w-48 lg:h-14 lg:text-lg lg:rounded-full
                                  
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
                                 className={`${choicesAnswer.haveButtonWork === answer && '!border-4 !border-blue-300'}
                                     flex flex-col justify-center items-center gap-2 border border-gray-400 cursor-pointer text-neutral-500
                                     xs:w-28 xs:h-10 xs:text-sm xs:rounded-full
                                     md:w-[10rem] md:h-12 md:text-lg md:my-2
                                     lg:w-48 lg:h-14 lg:text-lg lg:rounded-full
                                  
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
                                 className={`${choicesAnswer.haveGoodShape === answer && '!border-4 !border-blue-300'}
                                     flex flex-col justify-center items-center gap-2 border border-gray-400 cursor-pointer text-neutral-500
                                     xs:w-28 xs:h-10 xs:text-sm xs:rounded-full
                                     md:w-[10rem] md:h-12 md:text-lg md:my-2
                                     lg:w-48 lg:h-14 lg:text-lg lg:rounded-full
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
                                 className={`${choicesAnswer.haveTouchScreenWork === answer && '!border-4 !border-blue-300'}
                                     flex flex-col justify-center items-center gap-2 border border-gray-400 cursor-pointer text-neutral-500
                                     xs:w-28 xs:h-10 xs:text-sm xs:rounded-full
                                     md:w-[10rem] md:h-12 md:text-lg md:my-2
                                     lg:w-48 lg:h-14 lg:text-lg lg:rounded-full
                                  `}> {answer}</div>
                        )
                    }
                )
            }
        </div>
    )
}


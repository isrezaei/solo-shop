export const AnswerOfHaveSmartPhone = ({props}) =>
{
    const {stepHaveOldPhone , choicesAnswer} = props

    return (
        <>
            <p className='font-bold text-lg mt-3'>Do you have a smartphone to trade in with Apple?</p>
            <div className='flex justify-center items-center gap-3'>
                {
                    ['Yes' , 'No'].map(answer => {
                            return (
                                <div key={answer}
                                     onClick={()=> stepHaveOldPhone(answer)}
                                     className={`w-48 h-14 text-xl flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400 ${choicesAnswer.haveOldPhone === answer && 'border-2 border-blue-600'}`}> {answer}</div>
                            )
                        }
                    )
                }
            </div>
        </>
    )
}

export const AnswerOfHaveGoodCondition = ({props}) =>
{
    const {stepCondition , choicesAnswer} = props

    return (
        <div className='flex justify-start items-center gap-4 mt-3'>
            {
                ['Yes' , 'No'].map(answer => {
                        return (
                            <div key={answer}
                                 onClick={()=> stepCondition(answer)}
                                 className={`w-48 h-14 text-xl flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400 ${choicesAnswer.haveGoodCondition === answer && 'border-2 border-blue-600'}`}> {answer}</div>
                        )
                    }
                )
            }
        </div>
    )
}
import {
    AnswerOfButtonWork, AnswerOfChooseOldModel,
    AnswerOfGoodShape,
    AnswerOfHaveGoodCondition,
    AnswerOfHaveSmartPhone,
    AnswerOfTouchScreenWork,
} from "./YesNoAnswers";

export const OldPhoneQuestion = () =>
{
    return (
        <div className='w-full flex flex-col justify-center items-center  animate__animated  animate__bounceIn'>

            <AnswerOfHaveSmartPhone/>

            <AnswerOfChooseOldModel/>

            <AnswerOfHaveGoodCondition/>

            <AnswerOfButtonWork/>

            <AnswerOfGoodShape/>

            <AnswerOfTouchScreenWork/>


        </div>
    )
}
import {useContext} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";
import {AnswerOfHaveGoodCondition , AnswerOfButtonWork , AnswerOfTouchScreenWork , AnswerOfGoodShape} from "./YesNoAnswers";

export const ChooseOldPhoneCondition = () =>
{
    // const {choicesAnswer} = useContext(EachProductFromContext)



    const localData = JSON.parse(localStorage.getItem('detailsPageInfo')) || {choicesAnswer : {}}

    const {choicesAnswer} = localData

    return (
        <div className='w-full mt-3 '>
            <div className='w-full flex flex-col justify-center items-center'>
                <div>
                    <p className='font-bold text-gray-600'>Is the iPhone in good condition?</p>
                    <p className='text-sm mt-1'>Answer yes if all of the following apply :</p>
                    <ul className='list-disc text-sm px-5 mt-1'>
                        <li>It turns on and functions normally</li>
                        <li>All the buttons work</li>
                        <li>The cameras work and all lenses are free of damage</li>
                        <li>The body is free of dents and scratches</li>
                        <li>The touchscreen and back glass are undamaged</li>
                        <li>The display is free from distortion, lines, and black or white spots.</li>
                    </ul>
                </div>
                <AnswerOfHaveGoodCondition/>
            </div>
            <div className={`w-full flex flex-col justify-center items-center ${choicesAnswer.haveGoodCondition === 'No' ?  'h-auto overflow-visible p-2' : 'h-0 overflow-hidden'}`}>
                <p className={'w-full my-2 font-bold text-gray-600'}>Does it turn on and do all the buttons work?</p>
                <AnswerOfButtonWork/>
            </div>
            <div className={`w-full flex flex-col justify-start items-center  ${choicesAnswer.haveButtonWork === 'No' ?  'h-auto overflow-visible p-2' : 'h-0 overflow-hidden'}`}>
                <div className={"w-full"}>
                    <p className={"font-bold my-2 text-gray-600"}>Is the body of the iPhone in good shape?</p>
                    <p className='my-1'>Answer yes if all of the following apply:</p>
                </div>
                <ul className={"list-disc w-full px-3 my-2 text-sm"}>
                    <li>It’s free of major cracks, chips, and scratches</li>
                    <li>If there’s glass on the back, it’s not shattered</li>
                </ul>
                <AnswerOfGoodShape/>
            </div>
            <div className={`w-full flex flex-col justify-center items-center  ${choicesAnswer.haveGoodShape === 'No' ?  'h-auto overflow-visible p-2' : 'h-0 overflow-hidden'}`}>
                <div className={"w-full"}>
                    <p className={"font-bold my-2 text-gray-600"}>Are the touchscreen and cameras in good shape?</p>
                    <p className='my-1'>Answer yes if all of the following apply:</p>
                </div>
                <ul className={"list-disc w-full px-3 my-2 text-sm"}>
                    <li>The touchscreen is free of cracks, chips, and scratches</li>
                    <li>The cameras work and all lenses are free of damage</li>
                    <li>The display is free from distortion, lines, and black or white spots.</li>
                </ul>
                <AnswerOfTouchScreenWork/>
            </div>
        </div>
    )
}
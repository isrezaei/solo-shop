import {AnswerOfHaveGoodCondition} from "../YesNoAnswers";

export const ChooseOldPhoneCondition = ({props}) =>
{
    const {stepCondition , choicesAnswer} = props
    return (
        <div className='w-full mt-3 bg-amber-500 '>
            <p className='font-bold text-lg'>Is the iPhone in good condition?</p>
            <p className='text-sm mt-1'>Answer yes if all of the following apply :</p>
            <ul className='list-disc text-sm px-5 mt-1'>
                <li>It turns on and functions normally</li>
                <li>All the buttons work</li>
                <li>The cameras work and all lenses are free of damage</li>
                <li>The body is free of dents and scratches</li>
                <li>The touchscreen and back glass are undamaged</li>
                <li>The display is free from distortion, lines, and black or white spots.</li>
            </ul>

            <AnswerOfHaveGoodCondition props={{stepCondition , choicesAnswer}}/>
        </div>
    )
}
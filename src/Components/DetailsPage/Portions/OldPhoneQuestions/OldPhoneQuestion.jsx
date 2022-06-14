import {useContext} from "react";
import {AnswerOfHaveSmartPhone} from "../YesNoAnswers";
import {ChooseOldPhone} from "./ChooseOldPhone";
import {ChooseOldPhoneCondition} from "./ChooseOldPhoneCondition";
import {EachProductDetailsData} from "../../DetailsEachProduct";

export const OldPhoneQuestion = ({props}) =>
{
    const {choicesAnswer, stepHaveOldPhone, stepChoiceModel, stepCondition , choiceOldModel ,setOldModelPhone , enableSection} = useContext(EachProductDetailsData)

    return (

        <div className={`w-full bg-gray-300  flex flex-col justify-start items-center gap-4 transition-all ${choicesAnswer.haveOldPhone === 'Yes' ? 'h-auto overflow-visible' : 'h-36 overflow-hidden'} ${!enableSection.enableSectionTrade && 'pointer-events-none opacity-30' }`}>

            <AnswerOfHaveSmartPhone/>

            <div className='w-full  bg-lime-500 mt-3 '>
                <p className='font-bold'>Which model do you have?</p>
                <p className='mt-1 text-sm'>On your iPhone, go to Settings Your Name. Scroll down to see the model. On other smartphones, go to Settings > About phone.</p>
                <p className='mt-3 text-sm'>If your model is part of the iPhone Upgrade Program <a className='text-blue-700' href='https://secure5.store.apple.com/shop/eligibility/upgradeEligibilitySignInOptions'>check your upgrade eligibility and trade inOpens in new window.</a></p>
                <div className={`w-full flex flex-col justify-start items-start mt-5 transition-all ${choiceOldModel.offPrice ? 'overflow-visible' : 'h-20 overflow-hidden'}`}>
                    <ChooseOldPhone/>
                    <ChooseOldPhoneCondition/>
                </div>
            </div>
        </div>
    )
}
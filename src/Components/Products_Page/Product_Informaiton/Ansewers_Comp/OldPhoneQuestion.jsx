import {useContext} from "react";
import {
    AnswerOfButtonWork,
    AnswerOfGoodShape,
    AnswerOfHaveGoodCondition,
    AnswerOfHaveSmartPhone,
    AnswerOfTouchScreenWork
} from "./YesNoAnswers";
import {EachProductFromContext} from "../../Products_Rendering/DetailsEachProduct";
import {OldModelPhoneArray} from "../../Utility_Fils/OldModelPhoneArray";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectMasterDataById} from "../../../../Redux/MasterDataSlice";
import {useState} from "react";
import {SetTradeOldDevice} from "../../../../Redux/CartShopSlice";
import {stepChoiceModel} from "../../Context_Handeling/DispatchingFunc";

export const OldPhoneQuestion = () =>
{
    const {choicesAnswer , choiceOldModel , enableSection} = useContext(EachProductFromContext)


    const {productId} = useParams()
    const {price , type} = useSelector(state => selectMasterDataById(state , productId))

    const [selectedModel , setSelectedModel] = useState(JSON.parse(localStorage.getItem('detailsPageInfo'))?.choiceOldModel?.offPrice)
    const {contextDispatch} = useContext(EachProductFromContext)
    const dispatch = useDispatch()

    const handelChange = (e) =>
    {
        const targetCostOldPhone = e.target.value
        const targetNameOldPhone = e.target.options[e.target.selectedIndex].dataset.nameDevice

        dispatch(SetTradeOldDevice(
            {
                [type] : {
                    deviceName : targetNameOldPhone,
                    cost : parseInt(targetCostOldPhone)
                }
            }
        ))
        stepChoiceModel({targetCostOldPhone , targetNameOldPhone} , contextDispatch)
        setSelectedModel(targetCostOldPhone)
    }


    return (
        <div
            className={`w-full flex flex-col justify-start items-center gap-4 transition-all 
            ${choicesAnswer.haveOldPhone === 'Yes' ? 'h-auto overflow-visible' : 'h-36 overflow-hidden'}
            ${!enableSection.enableSectionTrade && 'pointer-events-none opacity-30' }`}>

            <AnswerOfHaveSmartPhone/>

            <div className='w-full mt-3 '>
                <p className='font-bold text-gray-600'>Which model do you have?</p>
                <p className='mt-1 text-sm'>On your iPhone, go to Settings Your Name. Scroll down to see the model. On other smartphones, go to Settings > About phone.</p>
                <p className='mt-3 text-sm'>If your model is part of the iPhone Upgrade Program
                    <a className='text-blue-700' href='https://secure5.store.apple.com/shop/eligibility/upgradeEligibilitySignInOptions'>
                        check your upgrade eligibility and trade inOpens in new window
                    </a>
                </p>
                <div className={`w-full flex flex-col justify-start items-start mt-5 transition-all ${choiceOldModel.offPrice ? 'overflow-visible' : 'h-20 overflow-hidden'}`}>

                    <label htmlFor='select-model' className='font-bold text-gray-600'>Choose your model</label>
                    <select
                        defaultValue={selectedModel}
                        onChange={(e)=> handelChange(e)}
                        id='select-model'
                        className='w-full mt-1 border rounded-xl flex justify-start items-start xs:text-sm lg:text-[1rem]'>
                        {OldModelPhoneArray.map(models => {
                            return (
                                <option
                                    key={models.oldPhone}
                                    className='rounded-xl xs:text-sm lg:text-lg'
                                    value={models.offPrice}
                                    data-name-device={models.oldPhone}
                                    disabled={models.offPrice >= price}>
                                    {models.oldPhone}
                                </option>
                            )
                        })}
                    </select>


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
                        <div className={`w-full flex flex-col justify-center items-center
                         ${choicesAnswer.haveGoodCondition === 'No' ?  'h-auto overflow-visible p-2' : 'h-0 overflow-hidden'}`}>
                            <p className={'w-full my-2 font-bold text-gray-600'}>Does it turn on and do all the buttons work?</p>
                            <AnswerOfButtonWork/>
                        </div>
                        <div className={`w-full flex flex-col justify-start items-center
                          ${choicesAnswer.haveButtonWork === 'No' ?  'h-auto overflow-visible p-2' : 'h-0 overflow-hidden'}`}>
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
                        <div className={`w-full flex flex-col justify-center items-center
                          ${choicesAnswer.haveGoodShape === 'No' ?  'h-auto overflow-visible p-2' : 'h-0 overflow-hidden'}`}>
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

                </div>
            </div>
        </div>
    )
}
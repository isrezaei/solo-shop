import {useContext} from "react";
import {EachProductFromContext} from "../../Products_Rendering/DetailsEachProduct";
import {
    stepHaveOldPhone,
    stepCondition,
    setEditAnswer,
    stepHaveButtonWork,
    stepHaveGoodShape,
    stepHaveTouchScreenWork,
    stepChoiceModel
} from "../../Context_Handeling/DispatchingFunc";
import {OldModelPhoneArray} from "../../Utility_Fils/OldModelPhoneArray";
import {useState} from "react";
import {SetTradeOldDevice} from "../../../../Redux/CartShopSlice";
import {useDispatch, useSelector} from "react-redux";
import {selectMasterDataById} from "../../../../Redux/MasterDataSlice";
import {useParams} from "react-router-dom";



//HAVE_SMARTPHONE_QUESTION
export const AnswerOfHaveSmartPhone = () =>
{
    const {choicesAnswer , contextDispatch} = useContext(EachProductFromContext)


    return (
        <div className='w-full flex flex-col justify-center items-center my-2 bg-neutral-50 rounded-2xl p-2'>

            <p className='font-bold text-neutral-500 my-3 text-sm'>Do you have a smartphone to trade in with Apple?</p>

            <div className='flex justify-center w-full justify-start items-center gap-3'>
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
                                     lg:w-48 lg:h-14 lg:text-lg lg:rounded-full`}> {answer}</div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

//CHOOSE_MODEL_QUESTION
export const AnswerOfChooseOldModel = () =>
{
    const {productId} = useParams()
    const [selectedModel , setSelectedModel] = useState(JSON.parse(localStorage.getItem('detailsPageInfo'))?.choiceOldModel?.offPrice)
    const {price , type} = useSelector(state => selectMasterDataById(state , productId))
    const dispatch = useDispatch()
    const {contextDispatch , choicesAnswer} = useContext(EachProductFromContext)


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


    let showing = 'hidden'

    if (choicesAnswer.haveOldPhone === 'Yes')
    {
        showing = 'animate__animated animate__bounceInRight flex'
    }
    if (choicesAnswer.haveOldPhone === 'No')
    {
        showing = 'hidden'
    }

    return(
        <div className={`w-full ${showing} flex-col justify-center items-center my-2 bg-neutral-50 rounded-2xl p-2`}>
            <p className='font-bold text-gray-600 text-sm my-3'>Which model do you have?</p>
            <p className='text-sm text-center'>On your iPhone, go to Settings Your Name. Scroll down to see the model. On other smartphones, go to Settings About phone</p>
            <p className='text-sm text-center'>If your model is part of the iPhone Upgrade Program
                <a className='text-blue-700' href='https://secure5.store.apple.com/shop/eligibility/upgradeEligibilitySignInOptions'>
                    check your upgrade eligibility and trade inOpens in new window
                </a>
            </p>

            <label htmlFor='select-model' className='font-bold text-gray-600 my-3 text-sm'>Choose your model</label>
            <select
                defaultValue={selectedModel}
                onChange={(e)=> handelChange(e)}
                id='select-model'
                className='w-80 border border-neutral-300 rounded-xl flex justify-start items-start xs:text-[.8rem]'>
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
        </div>
    )
}

//GOOD_CONDITION_QUESTION
export const AnswerOfHaveGoodCondition = () =>
{
    const {choicesAnswer , contextDispatch} = useContext(EachProductFromContext)

    let showing = 'hidden'

    if (choicesAnswer.haveOldPhone === 'Yes')
    {
        showing = 'animate__animated animate__bounceInRight flex'
    }
    if (choicesAnswer.haveOldPhone === 'No')
    {
        showing = 'hidden'
    }

    return (
        <div className={`w-full ${showing} flex-col justify-center items-center my-2 bg-neutral-50 rounded-2xl p-2`}>

            <p className="font-bold my-2 text-gray-600 text-sm">Is the iPhone in good condition?</p>
            <p className='text-sm'>Answer yes if all of the following apply</p>

            <ul className="list-disc text-sm my-2 px-5">
                <li>It turns on and functions normally</li>
                <li>All the buttons work</li>
                <li>The cameras work and all lenses are free of damage</li>
                <li>The body is free of dents and scratches</li>
                <li>The touchscreen and back glass are undamaged</li>
                <li>The display is free from distortion, lines, and black or white spots.</li>
            </ul>

            <div className='flex justify-center justify-start items-center gap-3'>
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
        </div>
    )
}




//GOOD_BUTTON_WORK_QUESTION
export const AnswerOfButtonWork = () =>
{

    const {choicesAnswer , contextDispatch} = useContext(EachProductFromContext)

    let showing = 'hidden'

    if (choicesAnswer.haveGoodCondition === 'No')
    {
        showing = 'animate__animated animate__bounceInRight flex'
    }
    if (choicesAnswer.haveGoodCondition === 'Yes' || choicesAnswer.haveOldPhone === 'No')
    {
        showing = 'hidden'
    }


    console.log(choicesAnswer.haveOldPhone)

    return (
        <div className={`w-full ${showing} flex-col justify-center items-center my-2 bg-neutral-50 rounded-2xl p-2`}>
            <p className='font-bold text-gray-600 text-sm my-2'>Does it turn on and do all the buttons work?</p>
            <div className='flex justify-center w-full justify-start items-center gap-3'>
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
        </div>
    )
}


//GOOD_SHAPE_QUESTION
export const AnswerOfGoodShape = () =>
{
    const {choicesAnswer , contextDispatch} = useContext(EachProductFromContext)

    let showing = 'hidden'

    if (choicesAnswer.haveButtonWork === 'No')
    {
        showing = 'animate__animated animate__bounceInRight flex'
    }
    if (choicesAnswer.haveButtonWork === 'Yes' || choicesAnswer.haveOldPhone === 'No')
    {
        showing = 'hidden'
    }
    return (
        <div className={`w-full ${showing} flex-col justify-center items-center my-2 bg-neutral-50 rounded-2xl p-2`}>


            <p className={"font-bold my-2 text-sm text-gray-600"}>Is the body of the iPhone in good shape?</p>
            <p className='my-1'>Answer yes if all of the following apply</p>

            <ul className="list-disc my-2 text-sm">
                <li>It’s free of major cracks, chips, and scratches</li>
                <li>If there’s glass on the back, it’s not shattered</li>
            </ul>

            <div className='flex justify-center justify-start items-center gap-3'>
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
        </div>
    )
}




//GOOD_TOUCH_AND_CAMERA_QUESTION

export const AnswerOfTouchScreenWork = () =>
{
    const {choicesAnswer , contextDispatch} = useContext(EachProductFromContext)
    let showing = 'hidden'

    if (choicesAnswer.haveGoodShape === 'No')
    {
        showing = 'animate__animated animate__bounceInRight flex'
    }
    if (choicesAnswer.haveGoodShape === 'Yes' || choicesAnswer.haveOldPhone === 'No')
    {
        showing = 'hidden'
    }

    return (
        <div className={`w-full ${showing} flex-col justify-center items-center my-2 bg-neutral-50 rounded-2xl p-2`}>

                <p className="font-bold my-2 text-gray-600">Are the touchscreen and cameras in good shape?</p>
                <p className='my-1'>Answer yes if all of the following apply</p>

            <ul className="list-disc text-sm my-3 px-5">
                <li>The touchscreen is free of cracks, chips, and scratches</li>
                <li>The cameras work and all lenses are free of damage</li>
                <li>The display is free from distortion, lines, and black or white spots.</li>
            </ul>


            <div className='flex justify-center justify-start items-center gap-3'>
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
        </div>
    )
}


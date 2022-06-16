
import {createContext, useReducer, useState, useRef, useEffect, useLayoutEffect} from "react";
import {QuantityGlobal} from "../QuantityHandel/QuantityGlobal";
import {OldModelPhoneArray} from "./OldModelPhoneArray";
import {InformationPortion} from "./Portions/InformationPortion";
import {ChooseColorPortion} from "./Portions/ChooseColorPortion";
import {ChooseCapacityPortion} from "./Portions/ChooseCapacityPortion";
import {SubmitAndAddToWish} from "./Portions/SubmitAndAddToWish";
import {OldPhoneQuestion} from "./Portions/OldPhoneQuestions/OldPhoneQuestion";
import {ActiveImagePortion} from "./Portions/ActiveImagePortion";
import {AcceptCondition} from "./Portions/AcceptCondition";
import {RejectCondition} from "./Portions/RejectCondition";
import {TiPlus} from "react-icons/ti";
import {RiDeleteBinLine} from "react-icons/ri";
import {ChooseQuantity} from "./Portions/ChooseQuantity";

const initialState = {
    enableSection: {
        enableSectionCapacity: false,
        enableSectionTrade: false,
        enableSectionCondition: false
    },
    activeOptions: {
        activeColor: '',
        activeCapacity: '',
        activeImage: 'main'
    },

    choicesAnswer: {
        haveOldPhone: '',
        haveGoodCondition: '',
        haveButtonWork: '',
        haveGoodShape: '',
        haveTouchScreenWork: ''
    },

    editAnswer : '',

    choiceOldModel: {
        offPrice: ''
    }
}
function reducer(state, {type, payload}) {
    switch (type) {
        case 'enableSection / enableSectionCapacity':
            return {
                ...state,
                enableSection: {
                    ...state.enableSection,
                    enableSectionCapacity: true
                }
            }
        case 'enableSection / enableSectionTrade':
            return {
                ...state,
                enableSection: {
                    ...state.enableSection,
                    enableSectionTrade: true
                }
            }
        case 'activeOptions / activeColor':
            return {
                ...state,
                activeOptions: {
                    ...state.activeOptions,
                    activeColor: payload
                }
            }
        case 'activeOptions / activeCapacity':
            return {
                ...state,
                activeOptions: {
                    ...state.activeOptions,
                    activeCapacity: payload
                }
            }
        case 'activeOptions / activeImage':

            return {
                ...state,
                activeOptions: {
                    ...state.activeOptions,
                    activeImage: payload
                }
            }

        case 'choicesAnswer / haveGoodCondition':
            return {
                ...state,
                choicesAnswer: {
                    ...state.choicesAnswer,
                    haveGoodCondition: payload
                }
            }

        case 'choicesAnswer / haveOldPhone':
            return {
                ...state,
                choicesAnswer: {
                    ...state.choicesAnswer,
                    haveOldPhone: payload
                }
            }

        case 'choicesAnswer / haveButtonWork':
            return {
                ...state,
                choicesAnswer: {
                    ...state.choicesAnswer,
                    haveButtonWork: payload
                }
            }

        case 'choicesAnswer / haveGoodShape':
            return {
                ...state,
                choicesAnswer: {
                    ...state.choicesAnswer,
                    haveGoodShape: payload
                }
            }

        case 'choicesAnswer / haveTouchScreenWork':
            return {
                ...state,
                choicesAnswer: {
                    ...state.choicesAnswer,
                    haveTouchScreenWork: payload
                }
            }

        case 'editAnswer / checkEditAnswer' :
            return {
                ...state,
                editAnswer : payload
            }

        case 'choiceOldModel / offerPrice':

            return {
                ...state,
                choiceOldModel: {
                    ...state.choiceOldModel,
                    offPrice: payload
                }
            }

        default:
            return state
    }
}

export const EachProductFromContext = createContext()

export const DetailsEachProduct = ({EachProduct}) => {

    const {introduction, product, brand, price, id, quantity, rate, type, color, capacity, detailsImage , offer} = EachProduct


    const [{enableSection, activeOptions, choicesAnswer, choiceOldModel, editAnswer}, dispatch] = useReducer(reducer, initialState)


    //dynamic height for image section
    const [divHeight, setDivHeight] = useState();
    const dynamicHeight= useRef()
    useLayoutEffect(()=> {
        setDivHeight(dynamicHeight.current.clientHeight)
    }) // we don't need to dependency because we need update any seconds

    const stepColor = (colors) => {
        dispatch({type: 'enableSection / enableSectionCapacity'})
        dispatch({type: 'activeOptions / activeColor', payload: colors})
        dispatch({type: 'activeOptions / activeImage', payload: colors})
    }
    const stepCapacity = (Capacity) => {
        dispatch({type: 'enableSection / enableSectionTrade'})
        dispatch({type: 'activeOptions / activeCapacity', payload: Capacity})
    }
    const stepHaveOldPhone = (answer) => {
        dispatch({type: 'choicesAnswer / haveOldPhone', payload: answer})
        //When the user selects yes again in (do u have a smartphone to trade) all payload are reset
        dispatch({type: 'choiceOldModel / offerPrice', payload: ''})
        dispatch({type: 'choicesAnswer / haveGoodCondition', payload: ''})
        dispatch({type: 'choicesAnswer / haveButtonWork', payload: ''})
        dispatch({type: 'choicesAnswer / haveGoodShape', payload: ''})
        dispatch({type: 'choicesAnswer / haveTouchScreenWork', payload: ''})
    }
    const stepChoiceModel = (offerPrice) => {
        dispatch({type: 'choiceOldModel / offerPrice', payload: offerPrice})
    }
    const stepCondition = (answer) => {
        dispatch({type: 'choicesAnswer / haveGoodCondition', payload: answer})
        //When the user selects yes again in (Is the iPhone in good condition) haveButtonWork and haveGoodShape payload are reset
        dispatch({type: 'choicesAnswer / haveButtonWork', payload: ''})
        dispatch({type: 'choicesAnswer / haveGoodShape', payload: ''})
    }
    const stepHaveButtonWork = (answer) => {
        dispatch({type: 'choicesAnswer / haveButtonWork', payload: answer})
        //When the user selects yes again in (Does it turn on and do all the buttons work) haveGoodShape payload is reset
        dispatch({type: 'choicesAnswer / haveGoodShape', payload: ''})
    }
    const stepHaveGoodShape = (answer) => {
        dispatch({type: 'choicesAnswer / haveGoodShape', payload: answer})
        //When the user selects yes again in (Is the body of the iPhone in good shape) haveTouchScreenWork payload is reset
        dispatch({type: 'choicesAnswer / haveTouchScreenWork', payload: ''})
    }
    const stepHaveTouchScreenWork = (answer) => {
        dispatch({type: 'choicesAnswer / haveTouchScreenWork', payload: answer})
    }
    const setEditAnswer = (answer) => {
        dispatch({type: 'editAnswer / checkEditAnswer', payload: answer})
    }
    const setColor = color.map(colors => {
        return (
            <div
                key={colors}
                onClick={() => stepColor(colors)}
                className={`w-48 h-28 flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400 ${activeOptions.activeColor === colors && 'border-2 border-blue-600'}`}>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <div
                        style={{
                            background: colors
                        }}
                        className='w-9 h-9 rounded-full shadow-inner'> </div>
                    <div className='text-center'>{colors}</div>
                </div>
            </div>
        )
    })

    const setCapacity = capacity.map(capacity => {
        return (
            <div
                key={capacity}
                onClick={() => stepCapacity(capacity)}
                className={`w-48 h-28 flex flex-col justify-center items-center gap-2 rounded-2xl border border-gray-400 ${activeOptions.activeCapacity === capacity && 'border-2 border-blue-600'}`}>
                <div>
                    <div className='flex justify-center items-center gap-1'>
                        <p className='text-3xl'>{capacity}</p>
                        <p className='text-lg'>GB</p>
                    </div>
                    <div className='text-center'>from ${price}</div>
                </div>
            </div>
        )
    })

    const setOldModelPhone = OldModelPhoneArray.map(models => {
        return (
            <option
                key={models.oldPhone}
                className='text-lg rounded-xl'
                value={models.offPrice}>
                {models.oldPhone}</option>
        )
    })
    return (
        <EachProductFromContext.Provider
            value={{
                detailsImage,
                activeOptions,
                setColor,
                setCapacity,
                enableSection,
                choicesAnswer,
                editAnswer,
                stepHaveOldPhone,
                stepChoiceModel,
                stepCondition,
                stepHaveButtonWork,
                stepHaveTouchScreenWork,
                stepHaveGoodShape,
                setEditAnswer,
                choiceOldModel,
                setOldModelPhone,
            }}>

            <div className='container relative max-w-5xl bg-blue-500 mx-auto '>
                <section style={{height : divHeight}} className='w-3/6 absolute left-0'>
                    <ActiveImagePortion/>
                </section>
                <section ref={dynamicHeight} className='w-3/6 h-auto absolute right-0 flex flex-col justify-start items-start gap-2 p-6'>
                    <InformationPortion EachProductFromRedux={EachProduct}/>
                    <ChooseColorPortion/>
                    <ChooseCapacityPortion/>
                    {
                        (
                            choicesAnswer.haveGoodCondition === 'Yes'||
                            choicesAnswer.haveButtonWork === 'Yes'||
                            choicesAnswer.haveGoodShape === 'Yes'||
                            choicesAnswer.haveTouchScreenWork === 'Yes'
                        )
                        && (editAnswer === 'Yes')
                            ? <AcceptCondition/>
                            : choicesAnswer.haveTouchScreenWork === 'No' && editAnswer === 'Yes'
                                ? <RejectCondition/>
                                : <OldPhoneQuestion/>
                    }
                    <ChooseQuantity EachProductFromRedux={EachProduct}/>
                    <SubmitAndAddToWish/>
                </section>
            </div>
        </EachProductFromContext.Provider>
    )
}
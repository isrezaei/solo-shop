import {createContext, useReducer, useState, useRef, useEffect, useLayoutEffect} from "react";
import {OldModelPhoneArray} from "./OldModelPhoneArray";
import {InformationHeader} from "./Sections/InformationHeader";
import {ChooseColor} from "./Sections/ChooseColor";
import {ChooseCapacity} from "./Sections/ChooseCapacity";
import {SubmitAndAddToWish} from "./Sections/SubmitAndAddToWish";
import {OldPhoneQuestion} from "./Sections/OldPhoneQuestion";
import {ActiveImage} from "./Sections/ActiveImage";
import {AcceptCondition} from "./Sections/AcceptCondition";
import {RejectCondition} from "./Sections/RejectCondition";
import {ChooseQuantity} from "./Sections/ChooseQuantity";
import {FunReduxDispatchForCartShop} from "../QuantityHandel/FunReduxDispatchForCartShop";
import {useSelector} from "react-redux";
import {selectCartShopIds} from "../../Redux/CartShopSlice";

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
        selectedModel : '',
        offPrice: ''
    }
}
function reducer(state, {type, payload}) {
     switch (type) {
        case 'enableSection / enableSectionCapacity':
            localStorage.setItem('detailsPageInfo' , JSON.stringify(state))
            return {
                ...state,
                enableSection: {
                    ...state.enableSection,
                    enableSectionCapacity: true
                }
            }
        case 'enableSection / enableSectionTrade':
            localStorage.setItem('detailsPageInfo' , JSON.stringify(state))
            return {
                ...state,
                enableSection: {
                    ...state.enableSection,
                    enableSectionTrade: true
                }
            }
        case 'activeOptions / activeColor & activeImage':
            localStorage.setItem('detailsPageInfo' , JSON.stringify(state))
            return {
                ...state,
                activeOptions: {
                    ...state.activeOptions,
                    activeColor: payload,
                    activeImage: payload
                }
            }

        case 'activeOptions / activeCapacity':
            localStorage.setItem('detailsPageInfo' , JSON.stringify(state))
            return {
                ...state,
                activeOptions: {
                    ...state.activeOptions,
                    activeCapacity: payload
                }
            }
        case 'choicesAnswer / haveOldPhone':
            localStorage.setItem('detailsPageInfo' , JSON.stringify(state))
            return {
                ...state,
                choicesAnswer: {
                    ...state.choicesAnswer,
                    haveOldPhone: payload
                }
            }

        case 'choicesAnswer / haveGoodCondition':
            localStorage.setItem('detailsPageInfo' , JSON.stringify(state))
            return {
                ...state,
                choicesAnswer: {
                    ...state.choicesAnswer,
                    haveGoodCondition: payload
                }
            }

        case 'choicesAnswer / haveButtonWork':
            localStorage.setItem('detailsPageInfo' , JSON.stringify(state))
            return {
                ...state,
                choicesAnswer: {
                    ...state.choicesAnswer,
                    haveButtonWork: payload
                }
            }

        case 'choicesAnswer / haveGoodShape':
            localStorage.setItem('detailsPageInfo' , JSON.stringify(state))
            return {
                ...state,
                choicesAnswer: {
                    ...state.choicesAnswer,
                    haveGoodShape: payload
                }
            }

        case 'choicesAnswer / haveTouchScreenWork':
            localStorage.setItem('detailsPageInfo' , JSON.stringify(state))
            return {
                ...state,
                choicesAnswer: {
                    ...state.choicesAnswer,
                    haveTouchScreenWork: payload
                }
            }

        case 'editAnswer / checkEditAnswer' :
            localStorage.setItem('detailsPageInfo' , JSON.stringify(state))
            return {
                ...state,
                editAnswer : payload
            }

        case 'choiceOldModel / offerPrice':
            localStorage.setItem('detailsPageInfo' , JSON.stringify(state))
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



    const {updateQuan} = FunReduxDispatchForCartShop()
    const cartShopLengths = useSelector(selectCartShopIds)

    const {introduction, product, brand, price, id, quantity, rate, type, color, capacity, detailsImage , offer} = EachProduct
    const [{enableSection, activeOptions, choicesAnswer, choiceOldModel, editAnswer}, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('detailsPageInfo')) || initialState)


    //dynamic height for image section
    const [divHeight, setDivHeight] = useState();
    const dynamicHeight= useRef()
    useLayoutEffect(()=> {
        setDivHeight(dynamicHeight.current.clientHeight)
    }) // we don't need to dependency because we need update any seconds

    const stepColorAndImage = (colors) => {
        dispatch({type: 'activeOptions / activeColor & activeImage', payload: colors})
        dispatch({type: 'enableSection / enableSectionCapacity'})
    }

    const stepCapacity = (Capacity) => {
        dispatch({type: 'activeOptions / activeCapacity', payload: Capacity})
        dispatch({type: 'enableSection / enableSectionTrade'})
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
        console.log(answer)
        dispatch({type: 'editAnswer / checkEditAnswer', payload: answer})
    }



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
                value={models.offPrice}
                disabled={models.offPrice >= price}
            >
                {models.oldPhone}
            </option>
        )
    })


    return (
        <EachProductFromContext.Provider
            value={{
                detailsImage,
                activeOptions,
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
                stepColorAndImage,
            }}>
            <div className='container relative max-w-5xl bg-blue-500 mx-auto '>
                <section style={{height : divHeight}} className='w-3/6 absolute left-0'>
                    <ActiveImage/>
                </section>
                <section ref={dynamicHeight} className='w-3/6 h-auto absolute right-0 flex flex-col justify-start items-start gap-2 p-6'>
                    <InformationHeader EachProductFromRedux={EachProduct}/>
                    <ChooseColor EachProductFromRedux={EachProduct}/>
                    <ChooseCapacity/>
                    {
                        (
                            choicesAnswer.haveGoodCondition === 'Yes'||
                            choicesAnswer.haveButtonWork === 'Yes'||
                            choicesAnswer.haveGoodShape === 'Yes'||
                            choicesAnswer.haveTouchScreenWork === 'Yes'
                        )
                        && (editAnswer === 'Yes')
                            ? <AcceptCondition EachProductFromRedux={EachProduct}/>
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
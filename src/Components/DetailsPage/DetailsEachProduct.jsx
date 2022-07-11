import {createContext, useReducer, useState, useRef, useLayoutEffect} from "react";
import {InformationHeader} from "./Sections/InformationHeader";
import {ChooseColor} from "./Sections/ChooseColor";
import {ChooseCapacity} from "./Sections/ChooseCapacity";
import {AddToWishList} from "./Sections/AddToWishList";
import {OldPhoneQuestion} from "./Sections/OldPhoneQuestion";
import {ActiveImage} from "./Sections/ActiveImage";
import {AcceptCondition} from "./Sections/AcceptCondition";
import {RejectCondition} from "./Sections/RejectCondition";
import {ChooseQuantity} from "./Sections/ChooseQuantity";
import {useEffect} from "react";
import {FunReduxDispatchForCartShop} from "../QuantityHandel/FunReduxDispatchForCartShop";


export const EachProductFromContext = createContext()

export const DetailsEachProduct = ({EachProduct}) => {

    const {detailsImage , type , product} = EachProduct

    const initialState = {
        enableSection: {
            enableSectionCapacity: false,
            enableSectionTrade: false,
            enableSectionCondition: false
        },
        activeOptions: {
            activeColor: {
                [product] : ''
            },
            activeCapacity: '',
            activeImage: {
                [product] : 'main'
            }
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
            offPrice: '',
            nameOldPhone :''
        },
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
                console.log(state)
                return {
                    ...state,
                    activeOptions: {
                        ...state.activeOptions,
                        activeColor: {
                            ...state.activeOptions.activeColor,
                            [product] : payload
                        },
                        activeImage: {
                            ...state.activeOptions.activeImage,
                            [product] : payload
                        }
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
                        offPrice: payload.targetCostOldPhone,
                        nameOldPhone : payload.targetNameOldPhone
                    }
                }


            default:
                return state
        }
    }

    const [{enableSection, activeOptions, choicesAnswer, choiceOldModel, editAnswer}, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('detailsPageInfo')) || initialState)
    const {tradeDevice} = FunReduxDispatchForCartShop()

    //dynamic height for image section
    const [divHeight, setDivHeight] = useState();
    const dynamicHeight= useRef()
    useLayoutEffect(()=> {
        setDivHeight(dynamicHeight.current.clientHeight)
    }) // we don't need to dependency because we need update any seconds

    // set yor last choice old phone in state
    useEffect(()=>{
        tradeDevice({
            [type] : {
                deviceName : JSON.parse(localStorage.getItem('detailsPageInfo'))?.choiceOldModel?.nameOldPhone,
                cost : JSON.parse(localStorage.getItem('detailsPageInfo'))?.choiceOldModel?.offPrice
            }
        })
    } , [choicesAnswer.haveOldPhone])

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
        dispatch({type: 'choiceOldModel / offerPrice', payload: {}})
        dispatch({type: 'choicesAnswer / haveGoodCondition', payload: ''})
        dispatch({type: 'choicesAnswer / haveButtonWork', payload: ''})
        dispatch({type: 'choicesAnswer / haveGoodShape', payload: ''})
        dispatch({type: 'choicesAnswer / haveTouchScreenWork', payload: ''})
    }
    const stepChoiceModel = (dataOldPhone) => {
        dispatch({type: 'choiceOldModel / offerPrice', payload: dataOldPhone})
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

    return (
        <EachProductFromContext.Provider
            value={{
                activeOptions,
                detailsImage,
                enableSection,
                choicesAnswer,
                editAnswer,
                choiceOldModel,
                stepColorAndImage,
                stepCapacity,
                stepHaveOldPhone,
                stepChoiceModel,
                stepCondition,
                stepHaveButtonWork,
                stepHaveTouchScreenWork,
                stepHaveGoodShape,
                setEditAnswer,
                EachProductFromRedux : EachProduct,
            }}>

            <div className='container relative max-w-5xl bg-blue-500 mx-auto '>
                <section style={{height : divHeight}} className='w-3/6 absolute left-0'>
                    <ActiveImage/>
                </section>
                <section ref={dynamicHeight} className='w-3/6 h-auto absolute right-0 flex flex-col justify-start items-start gap-2 p-6'>
                    <InformationHeader/>
                    <ChooseColor/>
                    <ChooseCapacity/>
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
                    <ChooseQuantity/>
                    <AddToWishList/>
                </section>
            </div>
        </EachProductFromContext.Provider>
    )
}
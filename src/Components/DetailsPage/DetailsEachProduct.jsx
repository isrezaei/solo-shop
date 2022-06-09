import {createContext} from "react";
import {QuantityGlobal} from "../QuantityHandel/QuantityGlobal";
import {RiBookmarkLine} from "react-icons/ri";
import {RatingStar} from "rating-star";
import {useReducer, useState} from "react";
import {OldModelPhoneArray} from "./OldModelPhoneArray";
import {InformationPortion} from "./Portions/InformationPortion";
import {ChooseColorPortion} from "./Portions/ChooseColorPortion";
import {ChooseCapacityPortion} from "./Portions/ChooseCapacityPortion";
import {AnswerOfHaveSmartPhone} from "./Portions/YesNoAnswers";
import {ChooseOldPhone} from "./Portions/OldPhoneQuestions/ChooseOldPhone";
import {ChooseOldPhoneCondition} from "./Portions/OldPhoneQuestions/ChooseOldPhoneCondition";
import {SubmitAndAddToWish} from "./Portions/SubmitAndAddToWish";
import {OldPhoneQuestion} from "./Portions/OldPhoneQuestions/OldPhoneQuestion";
import {ActiveImagePortion} from "./Portions/ActiveImagePortion";


const initialState = {

    enableSection : {
        enableSectionCapacity : false,
        enableSectionTrade : false,
        enableSectionCondition : false,
    },
    activeOptions : {
        activeColor : '',
        activeCapacity : '',
        activeImage : 'main'
    },

    choicesAnswer : {
        haveOldPhone : '',
        haveGoodCondition : ''
    },

    choiceOldModel : {
        offPrice : ''
    }
}

function  reducer(state, {type , payload}) {
    switch (type) {
        case 'enableSection / enableSectionCapacity':
            return {
                ...state,
                enableSection : {
                    ...state.enableSection,
                    enableSectionCapacity: true
                }
            }
        case 'enableSection / enableSectionTrade':
            return {
                ...state,
                enableSection : {
                    ...state.enableSection,
                    enableSectionTrade: true
                }
            }
        case 'activeOptions / activeColor' :
            return {
                ...state,
                activeOptions : {
                    ...state.activeOptions,
                    activeColor : payload
                }
            }
        case 'activeOptions / activeCapacity' :
            return {
                ...state,
                activeOptions : {
                    ...state.activeOptions,
                    activeCapacity : payload
                }
            }
        case 'activeOptions / activeImage' :

            return {
                ...state ,
                activeOptions: {
                    ...state.activeOptions,
                    activeImage: payload
                }
            }

        case 'choicesAnswer / haveGoodCondition' :
            return {
                ...state ,
                choicesAnswer : {
                    ...state.choicesAnswer,
                    haveGoodCondition : payload
                }
            }

        case 'choicesAnswer / haveOldPhone' :
            return {
                ...state ,
                choicesAnswer : {
                    ...state.choicesAnswer,
                    haveOldPhone : payload
                }
            }

        case 'choiceOldModel / offerPrice' :

            return {
                ...state ,
                choiceOldModel : {
                    ...state.choiceOldModel,
                    offPrice : payload
                }
            }

        default:
            return state
    }
}

export const EachProductData = createContext()

export const DetailsEachProduct = ({EachProduct}) =>
{
    const {introduction , product , brand , price , id ,quantity , rate , type , color , capacity , detailsImage} = EachProduct

    const { HaveQuantity, CheckQuantity, AddQuan, IncQuan, DecQuan, RemQuan} = QuantityGlobal(EachProduct)

    const [{enableSection , activeOptions , choicesAnswer , choiceOldModel} , dispatch] = useReducer(reducer , initialState)


    const stepColor = (colors) =>
    {
        dispatch({type : 'enableSection / enableSectionCapacity'})
        dispatch({type : 'activeOptions / activeColor' , payload : colors})
        dispatch({type : 'activeOptions / activeImage' , payload : colors })
    }
    const stepCapacity = (Capacity) =>
    {
        dispatch({type : 'enableSection / enableSectionTrade'})
        dispatch({type : 'activeOptions / activeCapacity' , payload : Capacity})
    }
    const stepHaveOldPhone = (answer) =>
    {
        dispatch({type : 'choicesAnswer / haveOldPhone' , payload : answer})
    }
    const stepCondition = (answer) =>
    {
        dispatch({type : 'choicesAnswer / haveGoodCondition' , payload : answer})
    }
    const stepChoiceModel = (offerPrice) =>
    {
        dispatch({type : 'choiceOldModel / offerPrice' , payload : offerPrice })
    }

    const setColor = color.map(colors => {
        return (
            <div key={colors} onClick={()=>stepColor(colors)} className={`w-48 h-28 flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400 ${activeOptions.activeColor === colors && 'border-2 border-blue-600'}`}>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <div style={{background : colors}} className='w-9 h-9 rounded-full shadow-inner'> </div>
                    <div className='text-center'>{colors}</div>
                </div>
            </div>
        )
    })

    const setCapacity = capacity.map(capacity => {
        return (
            <div key={capacity} onClick={()=> stepCapacity(capacity)} className={`w-48 h-28 flex flex-col justify-center items-center gap-2 rounded-2xl border border-gray-400 ${activeOptions.activeCapacity === capacity && 'border-2 border-blue-600'}`}>
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
            <option key={models.oldPhone} className='text-lg rounded-xl' value={models.offPrice}> {models.oldPhone}</option>
        )
    })

    return (
        <EachProductData.Provider value={
            {
                product
                , id
                , rate
                , type
                , brand
                , detailsImage
                , activeOptions
                , setColor
                , setCapacity
                , enableSection
                , choicesAnswer
                , stepHaveOldPhone
                , stepChoiceModel
                , stepCondition
                , choiceOldModel
                ,setOldModelPhone}
        }>

            <div className='container relative max-w-5xl  mx-auto h-225 '>
                <section className='w-2/5 h-full absolute left-0'>
                    <ActiveImagePortion props={{detailsImage , activeOptions , product}}/>
                </section>

                <section className='w-3/6 h-full  absolute right-0  bg-red-300 flex flex-col justify-start items-start gap-2 p-6'>
                    <InformationPortion/>
                    <ChooseColorPortion/>
                    <ChooseCapacityPortion/>
                    <OldPhoneQuestion/>
                    <SubmitAndAddToWish/>
                </section>
            </div>
        </EachProductData.Provider>
    )
}
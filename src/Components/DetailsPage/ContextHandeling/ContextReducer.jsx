import {dispatchType} from "./DispatchType";
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../../Redux/MasterDataSlice";
import {useParams} from "react-router-dom";

const {
    activeOptions :
        {
            activeSectionTrade,
            activeLayout ,
            activeCapacity,
            activeOldModel
        },
    chooseAnswer :
        {
            doYouHaveOldPhone,
            yourPhoneHaveGoodCondition,
            yourPhoneButtonStillWorking,
            yourPhoneHaveGoodShape,
            yourPhoneTouchScreenStillWorking,
        },
    reAnswerToQuestions,
    updateLocalStorage
} = dispatchType


export const ContextReducer = () =>
{
    const {productId} = useParams()
    const {product} = useSelector(state => selectMasterDataById(state , productId))

    const reducer = (state, {type, payload}) =>
    {
        switch (type) {
            case activeSectionTrade:
                return {
                    ...state,
                    enableSection: {
                        ...state.enableSection,
                        enableSectionTrade: true
                    }
                }
            case activeLayout:
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
                        },
                    }
                }
            case activeCapacity:
                return {
                    ...state,
                    activeOptions: {
                        ...state.activeOptions,
                        activeCapacity: {
                            ...state.activeOptions.activeCapacity,
                            [product] : payload
                        }
                    }
                }
            case doYouHaveOldPhone:
                return {
                    ...state,
                    choicesAnswer: {
                        ...state.choicesAnswer,
                        haveOldPhone: payload
                    }
                }
            case yourPhoneHaveGoodCondition:
                return {
                    ...state,
                    choicesAnswer: {
                        ...state.choicesAnswer,
                        haveGoodCondition: payload
                    }
                }
            case yourPhoneButtonStillWorking:
                return {
                    ...state,
                    choicesAnswer: {
                        ...state.choicesAnswer,
                        haveButtonWork: payload
                    }
                }
            case yourPhoneHaveGoodShape:
                return {
                    ...state,
                    choicesAnswer: {
                        ...state.choicesAnswer,
                        haveGoodShape: payload
                    }
                }
            case yourPhoneTouchScreenStillWorking:
                return {
                    ...state,
                    choicesAnswer: {
                        ...state.choicesAnswer,
                        haveTouchScreenWork: payload
                    }
                }
            case reAnswerToQuestions :
                return {
                    ...state,
                    editAnswer : payload
                }
            case activeOldModel:
                return {
                    ...state,
                    choiceOldModel: {
                        ...state.choiceOldModel,
                        offPrice: payload.targetCostOldPhone,
                        nameOldPhone : payload.targetNameOldPhone
                    }
                }
            case updateLocalStorage :
                localStorage.setItem('detailsPageInfo' , JSON.stringify(state))
                return state

            default:
                return state
        }
    }

    return {reducer}
}


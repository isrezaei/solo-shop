import {ResetQuestion} from "./ResetQuestion";

export const stepColorAndImage = (colors , dispatch) => {
    dispatch({type: 'activeColor-activeImage', payload: colors})
    dispatch({type: 'updateLocalStorage'})
}

export const stepCapacity = (Capacity , dispatch) => {
    dispatch({type: 'activeCapacity', payload: Capacity})
    dispatch({type: 'activeSectionTrade'})
    dispatch({type: 'updateLocalStorage'})
}

export const stepHaveOldPhone = (answer , dispatch) => {
    dispatch({type: 'doYouHaveOldPhone', payload: answer})
    ResetQuestion(dispatch , {key : 'oldPhone'} , answer)
    dispatch({type: 'updateLocalStorage'})
}

export const stepChoiceModel = (dataOldPhone , dispatch) => {
    dispatch({type: 'activeOldModel', payload: dataOldPhone})
    dispatch({type: 'updateLocalStorage'})
}

export const stepCondition = (answer , dispatch) => {
    dispatch({type: 'yourPhoneHaveGoodCondition', payload: answer})
    ResetQuestion(dispatch , {key : 'goodCondition'} , answer)
    dispatch({type: 'updateLocalStorage'})
}
export const stepHaveButtonWork = (answer , dispatch) => {
    dispatch({type: 'yourPhoneButtonStillWorking', payload: answer})
    ResetQuestion(dispatch , {key : 'buttonWork'} , answer)
    dispatch({type: 'updateLocalStorage'})
}
export const stepHaveGoodShape = (answer , dispatch) => {
    dispatch({type: 'yourPhoneHaveGoodShape', payload: answer})
    ResetQuestion(dispatch , {key : 'goodShape'} , answer)
    dispatch({type: 'updateLocalStorage'})
}
export const stepHaveTouchScreenWork = (answer , dispatch) => {
    dispatch({type: 'yourPhoneTouchScreenStillWorking', payload: answer})
    dispatch({type: 'updateLocalStorage'})
}
export const setEditAnswer = (answer , dispatch) => {
    dispatch({type: 'reAnswerToQuestions', payload: answer})
    dispatch({type: 'updateLocalStorage'})
}

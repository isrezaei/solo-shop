import {dispatchType} from "./DispatchType";
const {
    activeOptions :
        {
            activeSectionTrade,
        },
    chooseAnswer :
        {
            yourPhoneHaveGoodCondition,
            yourPhoneButtonStillWorking,
            yourPhoneHaveGoodShape,
            yourPhoneTouchScreenStillWorking,
        }
} = dispatchType

export const ResetQuestion = (dispatch , {key} , answer) =>
{
    //When the user selects yes again in each option , other questions is reset
    if (key === 'oldPhone' && answer === 'Yes')
    {
        dispatch({type: activeSectionTrade, payload: ''})
        dispatch({type: yourPhoneHaveGoodCondition, payload: ''})
        dispatch({type: yourPhoneButtonStillWorking, payload: ''})
        dispatch({type: yourPhoneHaveGoodShape, payload: ''})
        dispatch({type: yourPhoneTouchScreenStillWorking, payload: ''})
    }
    if (key === 'goodCondition' && answer === 'Yes')
    {
        dispatch({type: yourPhoneButtonStillWorking, payload: ''})
        dispatch({type: yourPhoneHaveGoodShape, payload: ''})
    }
    if (key === 'buttonWork' && answer === 'Yes')
    {
        dispatch({type: yourPhoneHaveGoodShape, payload: ''})
    }
    if (key === 'goodShape' && answer === 'Yes')
    {
        dispatch({type: yourPhoneTouchScreenStillWorking, payload: ''})
    }
}
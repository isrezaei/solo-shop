import {useContext, useState} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";
import {OldModelPhoneArray} from "../OldModelPhoneArray";
import {SetTradeOldDevice} from "../../../Redux/CartShopSlice";
import {useDispatch} from "react-redux";

export const ChooseOldModel = () =>
{

    const [selectedModel , setSelectedModel] = useState(JSON.parse(localStorage.getItem('detailsPageInfo'))?.choiceOldModel?.offPrice)
    const {stepChoiceModel , EachProductFromRedux} = useContext(EachProductFromContext)
    const {price , type} = EachProductFromRedux
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
        stepChoiceModel({targetCostOldPhone , targetNameOldPhone})
        setSelectedModel(targetCostOldPhone)
    }

    return (
        <>
            <label htmlFor='select-model' className='font-bold text-lg text-gray-600'>Choose your model</label>
            <select
                defaultValue={selectedModel}
                onChange={(e)=> handelChange(e)}
                id='select-model'
                className='w-full mt-1 border rounded-xl flex justify-start items-start'>
                <option value='select' className='text-lg rounded-xl'>select your model</option>
                {OldModelPhoneArray.map(models => {
                    return (
                        <option
                            key={models.oldPhone}
                            className='text-lg rounded-xl'
                            value={models.offPrice}
                            data-name-device={models.oldPhone}
                            disabled={models.offPrice >= price}>
                            {models.oldPhone}
                        </option>
                    )
                })}
            </select>
        </>
    )
}
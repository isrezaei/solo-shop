import {useContext, useState} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";
import {OldModelPhoneArray} from "../OldModelPhoneArray";
import {SetTradeOldDevice} from "../../../Redux/CartShopSlice";
import {useDispatch, useSelector} from "react-redux";
import {stepChoiceModel} from "../ContextHandeling/DispatchingFunc";
import {useParams} from "react-router-dom";
import {selectMasterDataById} from "../../../Redux/MasterDataSlice";

export const ChooseOldModel = () =>
{
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
        <>
            <label htmlFor='select-model' className='font-bold text-gray-600'>Choose your model</label>
            <select
                defaultValue={selectedModel}
                onChange={(e)=> handelChange(e)}
                id='select-model'
                className='w-full mt-1 border rounded-xl flex justify-start items-start'>
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
        </>
    )
}
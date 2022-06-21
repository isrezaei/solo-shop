import {useContext , useState} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";
import {OldModelPhoneArray} from "../OldModelPhoneArray";
import {FunReduxDispatchForCartShop} from "../../QuantityHandel/FunReduxDispatchForCartShop";
import {useSelector} from "react-redux";



export const ChooseOldModel = () =>
{

    const [selectedModel , setSelectedModel] = useState(JSON.parse(localStorage.getItem('detailsPageInfo')).choiceOldModel?.offPrice)
    const {stepChoiceModel , EachProductFromRedux} = useContext(EachProductFromContext)
    const {price , type} = EachProductFromRedux
    const {tradeDevice} = FunReduxDispatchForCartShop()

    const {tradeOldDevice :{device : {iphone : {deviceName , cost}} = {iphone : {deviceName : 'Not match' , cost : 'Not match'}}}} = useSelector(state => state.CartShopSlice)

    const handelChange = (e) =>
    {
        const targetValue = e.target.value
        const targetOption = e.target.options[e.target.selectedIndex].dataset.nameDevice

        stepChoiceModel(targetValue)
        setSelectedModel(targetValue)

        tradeDevice({
            [type] : {
                deviceName : targetOption,
                cost : targetValue
            }
        })
    }

    return (
        <>
            <label htmlFor='select-model' className='font-bold text-lg'>Choose your model</label>
            <select
                defaultValue={selectedModel}
                onChange={(e)=> handelChange(e)}
                id='select-model'
                className='w-full mt-1 border rounded-xl flex justify-start items-start'>
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
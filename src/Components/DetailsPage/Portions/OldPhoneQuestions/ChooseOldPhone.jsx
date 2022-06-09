import {useContext} from "react";
import {EachProductData} from "../../DetailsEachProduct";

export const ChooseOldPhone = () =>
{
    const {stepChoiceModel , setOldModelPhone} = useContext(EachProductData)

    return (
        <>
            <label htmlFor='select-model' className='font-bold text-lg'>Choose your model</label>

            <select onChange={(e)=> stepChoiceModel(e.target.value)} id='select-model' className='w-full mt-1  border rounded-xl flex justify-start items-start'>
                <option className='text-lg' value=''>Select</option>
                {setOldModelPhone}
            </select>

        </>
    )
}
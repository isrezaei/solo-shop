import {useState} from "react";
import {useDispatch} from "react-redux";
import {SortEntities} from "../../Redux/reducer/MasterDataSlice";

export const OptionSort = () => {

    const [Active, SetActive] = useState('Newer')

    const dispatch = useDispatch()

    const FilterItems = (items) => {
        SetActive(items)
        dispatch(SortEntities(items.toLowerCase()))
    }

    const Option = ['Newer', 'Popular', 'Best Selling', 'Cheapest', 'Expensive', 'In stock'].map(items => {

        const textColor = Active === items ? "text-gray-800 " : "text-gray-400"

        return (
            <p key={items}
               onClick={() => FilterItems(items)}
               className={`${textColor} cursor-pointer  xs:text-sm`}>{items}</p>
        )
    })
    return (
        <section className='
            xs:w-full xs:grid xs:grid-cols-3 xs:place-items-center  xs:justify-center  xs:items-center
            md:w-full md:flex md:space-x-5'>
            {Option}
        </section>

    )
}
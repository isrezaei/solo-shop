import {useState} from "react";
import {useDispatch} from "react-redux";
import {SortEntities} from "../../../Redux/MasterDataSlice";

export const SortEachProduct = () =>{

    const [Active , SetActive] = useState('Newer')

    const dispatch = useDispatch()
    const FilterItems = (items) =>
    {
        SetActive(items)
        dispatch(SortEntities(items.toLowerCase()))
    }

    const Option = ['Newer' ,'Popular','Best Selling','cheapest','expensive','In stock'].map(items => {
        return (
            <p key={items} onClick={()=> FilterItems(items)}
               className={`${Active === items && 'bg-gray-200 rounded-full '}
                px-3 box-border cursor-pointer text-gray-500 
                xs:m-0 xs:py-1 xs:text-sm
                lg:m-0 lg:text-[.8rem] lg:animate-bounce lg:transition
                2xl:text-sm`
            }>{items}</p>
        )
    })

    return (
        <div className='
        flex
        xs:w-full xs:mt-0 xs:p-2 xs:h-24 xs:justify-center xs:items-center
        lg:w-full lg:mt-3 lg:h-16 lg:justify-start lg:items-center'>
            <section className='
            xs:w-11/12 xs:grid xs:grid-cols-3 xs:justify-center xs:items-center xs:gap-1
            md:w-full md:flex md:flex-nowrap md:justify-center md:items-center md:gap-16
            lg:w-10/12 lg:flex lg:flex-nowrap lg:justify-start lg:items-center lg:gap-3 lg:ml-8 2xl:ml-0'>
                {Option}
            </section>
        </div>
    )
}
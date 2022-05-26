import {useState} from "react";
import {useDispatch} from "react-redux";
import {SelectProduct} from "../../Redux/SelectProductSlice";

export const HomeSelectProduct = () =>
{
    const [Active , setActive] = useState('iphone')
    const [Hover , setHover] = useState('')

    const dispatch = useDispatch()

    const TitleProduct = ['iphone' , 'ipad' , 'ipod' , 'Watch' , 'Mac' , 'AirPod' ].map(items => {

        const setActiveProduct = () =>
        {
            dispatch(SelectProduct(items))
            setActive(items)
        }

        return (
            <div
                key={items}
                onMouseOver={()=> setHover(items)}
                onMouseLeave={()=>setHover('')}
                onClick={setActiveProduct}
                className={`text-xl text-gray-500 cursor-pointer w-2/12 h-16 flex justify-center items-center  transition
                  ${Hover === items && Hover !== Active &&'bg-gray-100'}
                  ${Active === items && 'text-white bg-blue-700'}`}>
                {items}
            </div>
        )
    })

    return (
        <div className='w-9/12 mx-auto flex justify-between items-end'>
            {TitleProduct}
        </div>
    )
}
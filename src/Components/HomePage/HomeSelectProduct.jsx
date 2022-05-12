import {useState} from "react";
import {useDispatch} from "react-redux";
import {SelectProduct} from "../../Redux/SelectProductSlice";

export const HomeSelectProduct = () =>
{
    const [Active , setActive] = useState('iphone')

    const dispatch = useDispatch()

    const TitleProduct = ['iphone' , 'ipad' , 'ipod' , 'Watch' , 'Mac' , 'AirPod' ].map(items => {


        return (
            <div
                key={items}
                onMouseOver={()=> setActive(items)}
                onClick={()=> dispatch(SelectProduct(items))}
                 className={`text-xl text-gray-700 cursor-pointer w-2/12 h-16 flex justify-center items-center rounded-t-2xl ${Active === items && 'transition bg-gray-100 '}`} >
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
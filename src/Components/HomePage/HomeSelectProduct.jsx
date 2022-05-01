import {useState} from "react";

export const HomeSelectProduct = () =>
{
    const [Active , setActive] = useState('iphone')

    const TitleProduct = ['iphone' , 'ipad' , 'ipod' , 'Watch' , 'Mac' , 'AirPod' ].map(items => {
        return (
            <div
                key={items}
                onMouseOver={()=> setActive(items)}
                 className={`text-xl text-gray-700 w-2/12 h-16 flex justify-center items-center rounded-t-2xl ${Active === items && 'transition bg-gray-100 border-b border-b-gray-800'}`} >
                {items}
            </div>
        )
    })

    return (
        <div className='w-9/12 mx-auto my-32 h-20 border-b border-b-gray-300 flex justify-between items-end'>
            {TitleProduct}
        </div>
    )
}
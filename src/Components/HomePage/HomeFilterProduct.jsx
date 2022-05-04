import {useState} from "react";

export const HomeFilterProduct = () =>{

    const [Active , SetActive] = useState('Newer')

    const Option = ['Newer' ,'Popular','Bestselling','cheapest','expensive','In stock'].map(items => {

        return (
            <p onClick={()=> SetActive(items)} className={`px-3  box-border cursor-pointer ${Active === items && 'bg-gray-200  rounded-xl animate-bounce transition '}`}>{items}</p>
        )
    })




    return (
        <div className='w-11/12 h-16 flex justify-between items-start'>

            <section className='flex justify-between items-center w-10/12'>
                {Option}
            </section>

            <section className='w-9/12 flex justify-end items-center'>
                <button>See more</button>
            </section>

        </div>
    )
}
import {useSelector} from "react-redux";
import {Products} from "./Products/Products";
import {BarLoader} from 'react-spinners';


export const Response = () =>
{

    const {resultOfLiveSearch , status} = useSelector(state => state.LiveSearchSlice)

    let Render ;

    // if (status === 'idle')
    // {
    //     Render =(
    //         <div className='
    //                 flex flex-col justify-center items-center gap-1 rounded-b-3xl col-span-full
    //                 xs:w-44 xs:h-10
    //                 lg:w-72 lg:h-12
    //                 2xl:w-80 2xl:h-14'>
    //             <p className='xs:text-[.8rem] lg:text-[.9rem] 2xl:text-lg text-neutral-500 font-bold'>waiting for your search</p>
    //             <BarLoader color={'#a4a4a4'}/>
    //         </div>
    //     )
    // }

    if (status === 'pending')
    {
        Render = (
            <div className='
                    flex flex-col justify-center items-center gap-1 rounded-b-3xl col-span-full
                    xs:w-44 xs:h-10
                    lg:w-72 lg:h-12
                    2xl:w-80 2xl:h-14'>
                <p className='xs:text-[.8rem] lg:text-[.9rem] 2xl:text-lg text-neutral-500 font-bold'>Loading ...</p>
                <BarLoader color={'#a4a4a4'}/>
            </div>
        )
    }

    if (status === 'success')
    {
        Render = resultOfLiveSearch?.map(products => <Products products={products} key={products.product}/>)
    }


    return (
        <div className='xs:top-32 md:top-[9.5rem] lg:top-20 2xl:top-44 m-auto w-full    overflow-scroll scrollbar-hide flex justify-center items-start '>

            <div className='
                    min-w-[10%] grid place-items-center gap-4 rounded-b-3xl overflow-y-scroll scrollbar-hide px-3
                    xs:max-h-[30rem] xs:grid-cols-1
                    lg:max-h-96 lg:grid-cols-2'>
                {Render}
            </div>
        </div>
    )
}
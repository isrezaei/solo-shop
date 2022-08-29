import {useSelector} from "react-redux";
import {RenderResultSearch} from "./RenderResultSearch";
import {BarLoader} from 'react-spinners';




export const _RootPreRenderSearch = () =>
{

    const {resultOfLiveSearch , status} = useSelector(state => state.LiveSearchSlice)


    let Render ;

    if (status === 'idle')
    {
        Render =(
            <div className='
                    flex flex-col justify-center items-center gap-1 rounded-b-3xl col-span-full
                    xs:w-44 xs:h-10
                    lg:w-72 lg:h-12
                    2xl:w-80 2xl:h-14'>
                <p className='xs:text-[.8rem] lg:text-[.9rem] 2xl:text-lg text-neutral-500 font-bold'>waiting for your search</p>
                <BarLoader color={'#a4a4a4'}/>
            </div>
        )
    }

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
        Render = resultOfLiveSearch?.map(products => <RenderResultSearch products={products} key={products.product}/>)
    }


    return (
        <div className='xs:top-32 lg:top-40 2xl:top-48 m-auto w-full h-screen fixed bg-glass-black overflow-scroll scrollbar-hide flex justify-center items-start z-50'>

            <div className='
                    min-w-[10%] bg-gray-200 grid place-items-center gap-x-4 rounded-b-3xl overflow-y-scroll scrollbar-hide px-3
                    xs:max-h-[30rem] xs:grid-cols-1
                    lg:max-h-96 lg:grid-cols-2
                    2xl:max-h-[33rem] 2xl:grid-cols-3'>
                {Render}
            </div>
        </div>
    )
}
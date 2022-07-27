import {useSelector , useDispatch} from "react-redux";
import {useEffect} from "react";
import {FetchLiveSearchData} from "../../Redux/LiveSearchSlice";
import {LiveSearchSlice} from "../../Redux/LiveSearchSlice";
import {LiveSearchEachProduct} from "./LiveSearchEachProduct";





export const LiveSearchPreRender = () =>
{

    const {resultOfLiveSearch , status} = useSelector(state => state.LiveSearchSlice)


    let Render ;

    if (status === 'pending')
    {
        Render = <h1>Loading</h1>
    }
    if (status === 'success')
    {
        Render = resultOfLiveSearch?.map(products => <LiveSearchEachProduct products={products} key={products.product}/>)
    }



    return (
        <div className='z-10 m-auto w-full  h-screen fixed top-48  bg-glass-black overflow-scroll scrollbar-hide flex justify-center items-start'>

            <div>

            </div>

            <div className='w-8/12 max-h-128 overflow-y-scroll scrollbar-hide bg-gray-300 grid grid-cols-3 justify-center items-start'>

                <div className='h-64'>
                    please search some apple product



                </div>

                {Render}
            </div>

        </div>
    )
}
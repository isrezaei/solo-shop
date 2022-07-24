import {useSelector , useDispatch} from "react-redux";
import {useEffect} from "react";
import {FetchLiveSearchData} from "../../Redux/LiveSearchSlice";
import {LiveSearchSlice} from "../../Redux/LiveSearchSlice";
import {LiveSearchEachProduct} from "./LiveSearchEachProduct";
export const LiveSearchPreRender = () =>
{

    const {resultOfLiveSearch , status} = useSelector(state => state.LiveSearchSlice)

    console.log(resultOfLiveSearch)

    let Render ;

    if (status === 'pending')
    {
        Render = <h1>Loading</h1>
    }
    if (status === 'success')
    {
        Render = resultOfLiveSearch.map(products => <LiveSearchEachProduct products={products}/>)
    }

    return (
        <div className='z-10 m-auto h-screen w-full fixed top-0 overflow-hidden bg-glass-black grid grid-cols-3 overflow-y-scroll overflow-x-hidden scrollbar-hide'>
            {Render}
        </div>
    )
}
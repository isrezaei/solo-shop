import {BiSearchAlt} from "react-icons/bi";
import {CgClose} from "react-icons/cg";

import {emptyResultOfLiveSearch} from "../../../Redux/LiveSearchSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export const HandelInputSearch = ({setInput , setSearchInput}) =>
{

    const dispatch = useDispatch()
    const Navigate = useNavigate()

    const closeInputSearch = () =>
    {
        setSearchInput(false)
        dispatch(emptyResultOfLiveSearch())
        Navigate(-1)
    }

    return (
        <div className='
        flex justify-evenly items-center
        xs:w-full xs:px-5
        lg:w-6/12
        2xl:w-7/12'>
            <BiSearchAlt className='
            text-gray-400
            xs:text-xl
            2xl:text-3xl'/>
            <div className='flex w-11/12 justify-center items-center'>
                <input onChange={e => setInput(e.target.value)}
                       className='
                       w-full text-neutral-400 text-sm p-3 outline-0 border-0 bg-transparent placeholder-gray-400
                       placeholder:2xl:text-lg'
                       placeholder='More than 3 letters ...' />
            </div>

            <CgClose  onClick={closeInputSearch} className='text-gray-400 text-2xl cursor-pointer'/>
        </div>
    )
}
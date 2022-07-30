import {CartWish} from "./Cart&Wish";
import {MdOutlineManageSearch} from 'react-icons/md'
import {Link} from "react-router-dom";
import {useLayoutEffect, useState} from "react";
import {useDebounce} from "../LiveSearch/Debounce";
import {useDispatch} from "react-redux";
import {FetchLiveSearchData} from "../../Redux/LiveSearchSlice";
import {CgClose} from 'react-icons/cg'
import {BiSearchAlt} from 'react-icons/bi'
import {useNavigate , useLocation } from "react-router-dom";
import {emptyResultOfLiveSearch} from "../../Redux/LiveSearchSlice";

export const HeaderDown = ({HeaderMargin}) =>
{
    const [showSearchInput , setSearchInput] = useState(false)
    const [valInput , setInput] = useState()
    const {valDebounce} = useDebounce(valInput)
    const Navigate = useNavigate()
    const dispatch = useDispatch()


    useLayoutEffect(()=> {

        if (valDebounce?.length > 4)
        {
            dispatch(FetchLiveSearchData(valDebounce))
        }
        if (valDebounce?.length <= 4)
        {
            dispatch(emptyResultOfLiveSearch())
        }

    } , [valDebounce])


    const location = useLocation()

    const closeInputSearch = () =>
    {
        setSearchInput(false)
        dispatch(emptyResultOfLiveSearch())
        Navigate(-1)
    }

    return (
        <div className={`w-full ${HeaderMargin} flex`}>
            <div className='px-52 w-full m-auto h-28 flex items-center justify-between bg-neutral-800'>

                <div className='text-3xl flex items-center'>
                    <p className='text-4xl text-white'>FlyShop</p>
                </div>

                {
                    showSearchInput || location.pathname === '/search' ?
                        <div className='w-7/12  flex justify-evenly items-center'>
                            <BiSearchAlt className='text-gray-400 text-3xl'/>
                            <div className='flex w-11/12 justify-center items-center'>
                                <input onChange={e => setInput(e.target.value)} className='w-full text-white p-3 outline-0 border-0 bg-transparent placeholder:text-lg placeholder-gray-400' placeholder='More than 3 letters ...' />
                            </div>
                            <CgClose  onClick={closeInputSearch} className='text-gray-400 text-2xl cursor-pointer'/>
                        </div>
                        :
                        <div className='w-8/12 flex justify-evenly items-center'>
                            <p className='text-lg text-white'>Home</p>
                            <p className='text-lg text-white'>Affiliate</p>
                            <p className='text-lg text-white'>Category</p>
                            <p className='text-lg text-white'>Collections</p>
                            <p className='text-lg text-white'>Blogs</p>
                            <Link to='/search' state={{background : location}} className='' replace={false}>
                                <MdOutlineManageSearch onClick={()=> setSearchInput(true)} className='text-5xl  text-white'/>
                            </Link>
                        </div>
                }

                <CartWish/>
            </div>

        </div>
    )
}
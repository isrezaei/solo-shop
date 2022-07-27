import {CartWish} from "./Cart&Wish";
import {SearchLogo} from "./Search&Logo";
import {MdOutlineManageSearch} from 'react-icons/md'
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
import {useState} from "react";
import {IoMdArrowDropdown} from "react-icons/io";
import {useDebounce} from "../LiveSearch/Debounce";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {FetchLiveSearchData} from "../../Redux/LiveSearchSlice";
import {CgClose} from 'react-icons/cg'
import {BiSearchAlt} from 'react-icons/bi'
import {useNavigate} from "react-router-dom";

export const HeaderDown = ({HeaderMargin}) =>
{
    const [showSearchInput , setSearchInput] = useState(false)
    const [valInput , setInput] = useState()
    const {valDebounce} = useDebounce(valInput)
    const Navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(()=> {

        if (valDebounce)
        {
            dispatch(FetchLiveSearchData(valDebounce))
        }

    } , [valDebounce])

    const location = useLocation()

    const closeInputSearch = () =>
    {
        setSearchInput(false)
        Navigate('/')
    }

    return (
        <div className={`w-full ${HeaderMargin} flex`}>
            <div className='px-52 w-full m-auto h-28 flex items-center justify-between bg-neutral-800'>

                <div className='text-3xl flex items-center'>
                    <p className='text-4xl text-white'>FlyShop</p>
                </div>


                {
                    showSearchInput ?

                        <div className='w-7/12  flex justify-evenly items-center'>

                            <BiSearchAlt className='text-gray-400 text-3xl'/>


                            <div className='flex w-11/12 justify-center items-center'>
                                {/*<div className='bg-gray-300 w-px h-6'> </div>*/}
                                <input onChange={e => setInput(e.target.value)} className='w-full text-white p-3 outline-0 border-0 bg-transparent placeholder:text-lg placeholder-gray-400' placeholder='Search for product' />
                                {/*<div className='h-10 w-28 bg-blue-700 text-white flex justify-center items-center'>Search</div>*/}
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
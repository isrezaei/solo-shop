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
import {SearchLogic} from "./SearchLogic";

export const HeaderDown = ({HeaderMargin}) =>
{
    const [showSearchInput , setSearchInput] = useState(false)
    const [valInput , setInput] = useState()
    const {valDebounce} = useDebounce(valInput)
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



    const headerOptions = ['Home','Affiliate','Category','Collections','Blogs'].map(options => {
        return (
            <p
                key={options}
                className='
                text-lg text-white
                xs:hidden
                2xl:block
                '>{options}</p>
        )
    })

    return (
        <div className={`
        w-full flex 
        xs:flex-col xs:justify-start xs:items-center xs:m-0
        2xl:justify-evenly 2xl:items-center 2x:${HeaderMargin}`}>

            <div className='
            flex bg-neutral-800
            xs:w-full xs:h-12 xs:justify-start xs:items-center xs:px-0 xs:m-0
            2xl:px-52 2xl:w-full 2xl:m-auto 2xl:h-28 2xl:flex 2xl:items-center 2xl:justify-between'>

                <div className='flex justify-center items-center'>
                    <p className='
                    text-white
                    xs:hidden
                    2xl:block 2xl:text-4xl'>FlyShop</p>
                </div>

                <div className='
                xs:block xs:w-full
                2xl:hidden
                '>
                    <SearchLogic setInput={setInput} setSearchInput={setSearchInput}/>
                </div>


                {
                    showSearchInput || location.pathname === '/search' ?
                        <SearchLogic setInput={setInput} setSearchInput={setSearchInput}/>
                        :
                        <div className='
                         xs:hidden
                         2xl:w-10/12 2xl:flex 2xl:justify-evenly 2xl:items-center'>
                            {headerOptions}
                            <Link to='/search' state={{background : location}} className='' replace={false}>
                                <MdOutlineManageSearch onClick={()=> setSearchInput(true)} className='text-5xl  text-white'/>
                            </Link>
                        </div>
                }

                <div className='
                xs:hidden
                2xl:block
                '>
                    <CartWish/>
                </div>
            </div>

            <div className='
            flex justify-evenly items-center
            xs:w-full xs:h-24 xs:bg-amber-500
            2xl:hidden
            '>
                <CartWish/>
            </div>

        </div>
    )
}
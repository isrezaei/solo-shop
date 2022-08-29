import {CartWish} from "./Cart&Wish";
import {MdOutlineManageSearch} from 'react-icons/md'
import {Link} from "react-router-dom";
import {useLayoutEffect, useState} from "react";
import {useDebounce} from "./LiveSearch/Debounce";
import {useDispatch} from "react-redux";
import {FetchLiveSearchData} from "../../Redux/LiveSearchSlice";
import {CgClose} from 'react-icons/cg'
import {BiSearchAlt} from 'react-icons/bi'
import {useNavigate , useLocation } from "react-router-dom";
import {emptyResultOfLiveSearch} from "../../Redux/LiveSearchSlice";
import {HandelInputSearch} from "./LiveSearch/HandelInputSearch";

export const BottomHeader = ({HeaderMargin}) =>
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
                text-white
                xs:hidden
                lg:block lg:text-[1rem]
                2xl:text-lg
                '>{options}</p>
        )
    })

    return (
        <div className={`
        w-full flex 
        xs:flex-col xs:justify-start xs:items-center xs:m-0
        2xl:justify-evenly 2xl:items-center`}>

            <div className='
            flex bg-neutral-800
            xs:px-0 xs:w-full xs:h-16 xs:justify-start xs:items-center xs:mt-0
            lg:px-24 lg:w-full lg:mt-[4rem] lg:m-auto lg:h-20 lg:flex lg:items-center lg:justify-between lg:mt-20
            2xl:px-24 2xl:mt-20 2xl:h-28
            '>

                <div className='flex justify-center items-center'>
                    <p className='
                    text-white font-bold
                    xs:hidden
                    lg:block lg:text-lg
                    2xl:text-4xl'>SoloShop</p>
                </div>



                {/*show search input in lg responsive*/}

                {
                    showSearchInput || location.pathname === '/search' ?
                        <HandelInputSearch setInput={setInput} setSearchInput={setSearchInput}/>
                        :
                        <div className='
                         flex lg:justify-evenly lg:items-center
                         xs:w-full
                         lg:w-10/12 '>
                            {headerOptions}
                            <Link to='/search' state={{background : location}} replace={false}>
                                <MdOutlineManageSearch onClick={()=> setSearchInput(true)} className='xs:hidden lg:block lg:text-4xl 2xl:text-5xl text-white'/>

                                <span onClick={()=> setSearchInput(true)} className='xs:flex lg:hidden flex justify-center items-center gap-1 ml-3'>
                                         <MdOutlineManageSearch className='text-2xl text-neutral-400'/>
                                        <p className='outline-0 bg-transparent text-sm text-neutral-400'>can you search something ...</p>
                                    </span>
                            </Link>
                        </div>
                }


                <div className='xs:hidden lg:block'>
                    <CartWish/>
                </div>

            </div>

            <div className='
            flex justify-evenly items-center
            xs:w-full xs:h-20 xs:bg-neutral-800
            lg:hidden
            '>
                <CartWish/>
            </div>

        </div>
    )
}
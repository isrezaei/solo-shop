import {Info_Bar} from "./Info_Bar";
import {MdOutlineManageSearch} from 'react-icons/md'
import {Link} from "react-router-dom";
import {useLayoutEffect, useState} from "react";
import {useDebounce} from "./LiveSearch/Debounce";
import {useDispatch} from "react-redux";
import {FetchLiveSearchData} from "../../Redux/LiveSearchSlice";
import {useNavigate , useLocation } from "react-router-dom";
import {emptyResultOfLiveSearch} from "../../Redux/LiveSearchSlice";
import {HandelInputSearch} from "./LiveSearch/HandelInputSearch";

export const Bottom_Header = () =>
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



    const headerOptions = ['Home' , 'Collection' ,'Affiliate','Category','Blogs'].map(options => {
        return (
            <p
                key={options}
                className='
                text-white cursor-pointer
                xs:hidden
                md:block md:text-[.9rem]
                2xl:text-lg
                '>{options}</p>
        )
    })

    return (
        <div className={`
        w-full flex bg-neutral-800
        xs:flex-col xs:justify-start xs:items-center xs:m-0
        lg:justify-evenly lg:items-center`}>

            <div className='
            flex
            xs:px-0 xs:w-full xs:h-16 xs:justify-start xs:items-center xs:mt-0
            md:max-w-[1400px] md:px-6 md:w-full md:mt-[4.5rem] md:m-auto md:h-20 md:flex md:items-center md:justify-between md:mt-20
            lg:mt-[5rem]
            2xl:max-w-[1800px]  2xl:px-24 2xl:mt-20 2xl:h-24'>
                    <div className='
                    text-white font-bold
                    xs:hidden
                    md:block md:text-lg'>SoloShop</div>

                {/*show search input in lg responsive*/}

                {
                    showSearchInput || location.pathname === '/search' ?
                        <HandelInputSearch setInput={setInput} setSearchInput={setSearchInput}/>
                        :
                        <div className='
                         flex
                         xs:w-full
                         md:w-10/12 md:justify-center md:gap-8 md:items-center
                         lg:w-10/12 lg:justify-center lg:gap-8 lg:items-center
                         2xl:gap-16'>
                            {headerOptions}
                            <Link to='/search' state={{background : location}} replace={false}>
                                <MdOutlineManageSearch onClick={()=> setSearchInput(true)} className='xs:hidden md:block md:text-4xl 2xl:text-5xl text-white'/>

                                <span onClick={()=> setSearchInput(true)} className='xs:flex md:hidden flex justify-center items-center gap-1 ml-3'>
                                         <MdOutlineManageSearch className='text-2xl text-neutral-400'/>
                                        <p className='outline-0 bg-transparent text-sm text-neutral-400'>can you search something ...</p>
                                    </span>
                            </Link>
                        </div>
                }


                <div className='xs:hidden md:block'>
                    <Info_Bar/>
                </div>

            </div>

            <div className='
            flex justify-evenly items-center
            xs:w-full xs:h-20 xs:bg-neutral-800
            md:hidden
            '>
                <Info_Bar/>
            </div>

        </div>
    )
}
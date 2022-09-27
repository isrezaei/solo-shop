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
                md:block md:text-[1rem]
                '>{options}</p>
        )
    })

    return (
        <div className='
        w-full flex bg-neutral-600
        xs:flex-col xs:justify-start xs:items-center xs:m-0
        md:relative md:justify-center md:items-center'>

            <div className='
            flex bg-neutral-600
            xs:px-0 xs:w-full xs:h-16 xs:justify-evenly xs:items-center xs:mt-0
            md:max-w-[1400px] md:h-20 md:px-6 md:w-full md:flex md:items-center md:justify-between'>

                    <div className='text-white font-bold xs:hidden md:block md:text-lg'>SoloShop</div>

                {/*show search input in lg responsive*/}

                {
                    showSearchInput || location.pathname === '/search' ?
                        <HandelInputSearch setInput={setInput} setSearchInput={setSearchInput}/>
                        :
                        <div className='
                         flex
                         xs:w-9/12 xs:justify-start xs:items-center xs:border-b xs:border-neutral-600
                         md:w-10/12 md:justify-center md:gap-8 md:items-center md:border-b-0
                         lg:w-10/12 lg:justify-center lg:gap-16 lg:items-center'>
                            {headerOptions}
                            <Link to='/search' state={{background : location}} replace={false}>
                                <MdOutlineManageSearch onClick={()=> setSearchInput(true)} className='xs:hidden md:block md:text-4xl  text-white'/>
                                <span onClick={()=> setSearchInput(true)} className='xs:flex md:hidden flex justify-center items-center gap-2 py-2'>
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
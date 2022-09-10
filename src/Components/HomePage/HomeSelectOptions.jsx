import {useState} from "react";
import {useDispatch , useSelector} from "react-redux";
import {SelectProduct} from "../../Redux/SelectProductSlice";
import {filterByPrice , filterByStars , filterByProduct } from "../../Redux/FilterProductSlice";
import {ImFilter} from 'react-icons/im'
import {FaWindowClose} from 'react-icons/fa'
import {useContext} from "react";
import {AllowFilter} from "./_RootPreRendering/RootPreRender";


export const HomeSelectOptions = () =>
{
    const {allowFilter , setAllowFilter} = useContext(AllowFilter)

    const {product , price : {startPoint , endPoint} , stars} = useSelector(state => state.FilterProductSlice)
    const [Active , setActive] = useState('iphone')
    const [Hover , setHover] = useState('')
    const dispatch = useDispatch()



    //select
    const TitleProduct = ['iphone' , 'ipad' , 'ipod' , 'Watch' , 'Mac' , 'AirPod' ].map(items => {
        const setActiveProduct = () =>
        {
            dispatch(SelectProduct(items))
            setActive(items)
        }
        return (
            <div
                key={items}
                onMouseOver={()=> setHover(items)}
                onMouseLeave={()=>setHover('')}
                onClick={setActiveProduct}
                className={`
                transition cursor-pointer text-gray-500 flex items-center justify-center
                xs:w-2/6 xs:h-8 xs:p-2 xs:text-sm xs:rounded-t-full xs:rounded-b-full
                lg:w-32 lg:h-10 lg:p-0 lg:text-[1rem] lg:rounded-t-[1rem] lg:rounded-b-none
                2xl:w-48 2xl:h-14 2xl:p-0 2xl:text-xl 
                  ${Hover === items && Hover !== Active &&'lg:bg-gray-100'}
                  ${Active === items && 'text-white bg-blue-700'}`}>
                {items}
            </div>
        )
    })


    return (
        <div className='
        flex mx-auto transition transition-all duration-100 relative
        xs:w-full xs:flex-row xs:justify-center xs:items-center xs:px-4 xs:mb-3
        lg:w-9/12 lg:flex-row  lg:justify-between lg:items-end  lg:px-0 lg:mb-0
        '>

            <div className={`
            animate__animated
            animate__faster ${allowFilter ? 'animate__fadeOut pointer-events-none' : 'animate__fadeIn pointer-events-auto'} w-full flex justify-around items-center`}>
                {TitleProduct}
            </div>



            <div className={`
            animate__animated
            animate__faster ${!allowFilter ? 'animate__fadeOut pointer-events-none' : 'animate__fadeIn pointer-events-auto'} absolute
                flex w-11/12 
                xs:justify-start xs:items-center xs:top-7 xs:z-10 xs:gap-1
                lg:justify-end lg:items-center lg:top-0 lg:gap-4
            
            `}>

                <div className='
                 bg-gray-100 text-neutral-500 font-bold flex  justify-center items-center relative
                 xs:w-36 xs:h-8 xs:rounded-full xs:text-sm xs:border-2 xs:border-white
                 lg:w-36 lg:h-16 lg:rounded-none lg:text-lg lg:border-0
                 '>
                    <FaWindowClose
                        onClick={()=> dispatch(filterByPrice({endPoint : null , startPoint : null}))}
                        className={`
                        flex text-red-400 justify-center items-center absolute ${(startPoint && endPoint) ? 'block' : 'hidden'}
                        xs:bottom-4 xs:left-0 xs:text-[1rem] xs:rounded-full
                        lg:top-0 lg:right-0 lg:text-lg  lg:rounded-none
                        `}/>
                    <div>{startPoint ?  <div>{startPoint} To {endPoint}</div>  : 'price'}</div>
                </div>
                {/*--------------------*/}
                <div className='
                 bg-gray-100 text-neutral-500 font-bold flex  justify-center items-center relative
                 xs:w-24 h-8 xs:rounded-full xs:text-sm xs:border-2 xs:border-white
                 lg:w-36 lg:h-16 lg:rounded-none lg:text-lg lg:border-0
                 '>
                    <FaWindowClose
                        onClick={()=> dispatch(filterByProduct())}
                        className={`
                        flex text-red-400 justify-center items-center absolute ${product ? 'block' : 'hidden'}
                        xs:bottom-4 xs:left-0 xs:text-[1rem] xs:rounded-full
                        lg:top-0 lg:right-0 lg:text-lg  lg:rounded-none
                        `}/>
                    {product ? product : 'Product'}
                </div>
                {/*--------------------*/}
                <div className='
                 bg-gray-100 text-neutral-500 font-bold flex  justify-center items-center relative
                 xs:w-20 h-8 xs:rounded-full xs:text-sm xs:border-2 xs:border-white
                 lg:w-36 lg:h-16 lg:rounded-none lg:text-lg lg:border-0
                '>
                    <FaWindowClose
                        onClick={()=> dispatch(filterByStars())}
                        className={`
                        flex text-red-400 justify-center items-center absolute ${stars ? 'block' : 'hidden'}
                        xs:bottom-4 xs:left-0 xs:text-[1rem] xs:rounded-full
                        lg:top-0 lg:right-0 lg:text-lg  lg:rounded-none
                        `}/>
                    {stars ? stars : 'Rate'}
                </div>

            </div>


            <div onClick={()=> setAllowFilter(!allowFilter)}
                 className={
                `${allowFilter ? 'bg-blue-600 text-white' : 'bg-neutral-200 text-neutral-500'} 
                transition flex justify-center gap-3 items-center cursor-pointer
                xs:w-9 xs:h-8 xs:rounded-full xs:absolute xs:right-2 xs:top-8 xs:z-10 xs:border xs:border-4 xs:border-white
                lg:w-20 lg:h-12 lg:rounded-full lg:absolute lg:left-0 lg:top-[3.5rem]
                2xl:w-20 2xl:h-14 2xl:left-0 2xl:top-[4.3rem]`}>
                <ImFilter className='xs:text-sm lg:text-xl 2xl:text-2xl'/>
            </div>
        </div>
    )
}
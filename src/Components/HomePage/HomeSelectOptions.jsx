import {useState} from "react";
import {useDispatch , useSelector} from "react-redux";
import {SelectProduct} from "../../Redux/SelectProductSlice";
import {filterByPrice , filterByStars , filterByProduct } from "../../Redux/FilterProductSlice";
import {ImFilter} from 'react-icons/im'
import {BsCurrencyDollar , BsApple} from 'react-icons/bs'
import {AiFillStar , AiFillDollarCircle} from 'react-icons/ai'
import {SiApple} from 'react-icons/si'
import {FaWindowClose} from 'react-icons/fa'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'


export const HomeSelectOptions = ({allowFilter , setAllowFilter}) =>
{
    const {product , price : {startPoint , endPoint} , stars} = useSelector(state => state.FilterProductSlice)

    const [Active , setActive] = useState('iphone')
    const [Hover , setHover] = useState('')
    const dispatch = useDispatch()

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
                xs:w-2/6 xs:h-8 xs:p-2 xs:text-sm xs:rounded-full
                lg:w-2/12 lg:h-16 lg:p-0 lg:text-xl lg:rounded-none
                  ${Hover === items && Hover !== Active &&'bg-gray-100'}
                  ${Active === items && 'text-white bg-blue-700'}`}>
                {items}
            </div>
        )
    })

    console.log(allowFilter)

    return (
        <div className='
        flex mx-auto transition transition-all duration-100 relative
        xs:w-full xs:flex-row xs:justify-center xs:items-center xs:px-3 xs:mb-3
        lg:w-9/12 lg:flex-row  lg:justify-between lg:items-end  lg:px-0 lg:mb-0
        '>

            <div className={`${allowFilter ? 'animate__backOutDown pointer-events-none' : 'animate__bounceInUp pointer-events-auto'} animate__animated animate__faster w-full flex justify-center items-center`}>
                {TitleProduct}
            </div>

            <div className={`${!allowFilter ?'animate__backOutDown pointer-events-none' : 'animate__bounceInUp pointer-events-auto'} animate__animated animate__faster w-11/12   absolute flex justify-end items-center gap-4`}>

                <div className='w-60 h-16  bg-gray-100 text-neutral-500 font-bold flex  justify-center items-center gap-1 relative'>
                    <FaWindowClose onClick={()=> dispatch(filterByPrice({endPoint : null , startPoint : null}))} className={`w-5 h-5 flex text-red-400 justify-center items-center absolute top-0 right-0 ${startPoint ? 'block' : 'hidden'}`}/>
                    <RiMoneyDollarCircleFill className='text-2xl'/>
                    <div>{startPoint ?  <div>{startPoint} To {endPoint}</div>  : 'Your choice price'}</div>
                </div>

                <div className='w-36 h-16  bg-gray-100 text-neutral-500 font-bold flex justify-center items-center gap-1 relative' >
                    <FaWindowClose onClick={()=> dispatch(filterByProduct())} className={`w-5 h-5 flex text-red-400 justify-center items-center absolute top-0 right-0 ${product ? 'block' : 'hidden'}`}/>
                    <SiApple className='text-2xl mb-1'/>
                    {product ? product : 'Product'}
                </div>
                <div className='w-36 h-16  bg-gray-100 text-neutral-500 font-bold flex  justify-center items-center gap-1 relative'>
                    <FaWindowClose onClick={()=> dispatch(filterByStars())} className={`w-5 h-5 flex text-red-400 justify-center items-center absolute top-0 right-0 ${stars ? 'block' : 'hidden'}`}/>
                    <AiFillStar className='text-2xl'/>
                    {stars ? stars : 'Rate'}
                </div>

            </div>


            <div onClick={()=> setAllowFilter(!allowFilter)}
                 className={
                `${allowFilter ? 'bg-blue-600 text-white' : 'bg-neutral-200 text-neutral-500'} 
                transition flex justify-center gap-3 items-center cursor-pointer
                
                xs:w-9 xs:h-8 xs:rounded-full
                lg:w-24 lg:h-16 lg:rounded-none
                
                
                `}>
                <ImFilter className='xs:text-sm lg:text-3xl'/>
            </div>
        </div>
    )
}
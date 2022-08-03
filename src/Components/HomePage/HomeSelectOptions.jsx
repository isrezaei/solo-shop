import {useState} from "react";
import {useDispatch , useSelector} from "react-redux";
import {SelectProduct} from "../../Redux/SelectProductSlice";
import {filterByPrice , filterByStars , filterByProduct } from "../../Redux/FilterProductSlice";
import {ImFilter} from 'react-icons/im'
import {BsCurrencyDollar , BsApple} from 'react-icons/bs'
import {AiFillStar , AiFillDollarCircle} from 'react-icons/ai'
import {SiApple} from 'react-icons/si'
import {FaWindowClose} from 'react-icons/fa'
import {BiDollar} from 'react-icons/bi'


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
                className={`text-xl text-gray-500 cursor-pointer w-2/12 h-16 flex justify-center items-center  transition
                  ${Hover === items && Hover !== Active &&'bg-gray-100'}
                  ${Active === items && 'text-white bg-blue-700'}`}>
                {items}
            </div>
        )
    })

    console.log(allowFilter)

    return (
        <div className='w-9/12 mx-auto flex justify-between items-end transition transition-all duration-100 relative'>

            <div className={`${allowFilter ? 'animate__backOutDown pointer-events-none' : 'animate__bounceInUp pointer-events-auto'} animate__animated w-full flex justify-center items-center`}>
                {TitleProduct}
            </div>

            <div className={`${!allowFilter ?'animate__backOutDown pointer-events-none' : 'animate__bounceInUp pointer-events-auto'} animate__animated w-11/12   absolute flex justify-end items-center gap-4`}>

                <div className='w-60 h-16  bg-gray-100 text-neutral-500 font-bold flex  justify-center items-center gap-2 relative'>
                    <FaWindowClose onClick={()=> dispatch(filterByPrice({endPoint : null , startPoint : null}))} className='w-5 h-5 flex text-red-400 justify-center items-center absolute top-0 right-0'/>
                    <AiFillDollarCircle className='text-2xl'/>
                    <div>{startPoint ?  <div>{startPoint} To {endPoint}</div>  : 'Your choice price'}</div>
                </div>

                <div className='w-36 h-16  bg-gray-100 text-neutral-500 font-bold flex justify-center items-center gap-1 relative' >
                    <FaWindowClose onClick={()=> dispatch(filterByProduct())} className='w-5 h-5 flex text-red-400 justify-center items-center absolute top-0 right-0'/>
                    <SiApple className='text-2xl mb-1'/>
                    {product ? product : 'Product'}
                </div>
                <div className='w-36 h-16  bg-gray-100 text-neutral-500 font-bold flex  justify-center items-center gap-1 relative'>
                    <FaWindowClose onClick={()=> dispatch(filterByStars())} className='w-5 h-5 flex text-red-400 justify-center items-center absolute top-0 right-0'/>
                    <AiFillStar className='text-2xl'/>
                    {stars ? stars : 'Rate'}
                </div>

            </div>


            <div onClick={()=> setAllowFilter(!allowFilter)}
                 className={`${allowFilter ? 'bg-blue-600 text-white' : 'bg-neutral-200 text-neutral-500'} transition w-24 h-16 flex justify-center gap-3 items-center cursor-pointer`}>
                <ImFilter className='text-3xl'/>
            </div>
        </div>
    )
}
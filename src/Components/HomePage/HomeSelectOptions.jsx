import {useState} from "react";
import {useDispatch , useSelector} from "react-redux";
import {SelectProduct} from "../../Redux/SelectProductSlice";
import {ImFilter} from 'react-icons/im'
import {BsCurrencyDollar , BsApple} from 'react-icons/bs'
import {AiFillStar , AiFillDollarCircle} from 'react-icons/ai'
import {SiApple} from 'react-icons/si'
import 'animate.css';

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

    return (
        <div className='w-9/12 mx-auto flex justify-between items-end transition transition-all duration-100 relative'>

            <div className={`w-full flex justify-center items-center animate__animated ${allowFilter ? 'animate__zoomOut pointer-events-none' : 'animate__zoomIn pointer-events-auto'} animate__faster`}>
                {TitleProduct}
            </div>

            <div className={`animate__animated ${!allowFilter ?'animate__zoomOut pointer-events-none' : 'animate__zoomIn pointer-events-auto'} animate__faster w-auto   absolute flex justify-start items-center gap-4`}>
                <div className='w-28 h-16  bg-neutral-200 text-neutral-500 font-bold flex  justify-center items-center gap-1'>
                    <AiFillDollarCircle className='text-2xl'/>
                    <p>{startPoint ?? 'Minimum'}</p>
                </div>
                <div className='w-28 h-16  bg-neutral-200 text-neutral-500 font-bold flex  justify-center items-center gap-1'>
                    <AiFillDollarCircle className='text-2xl'/>
                    {endPoint ?? 'Maximum'}
                </div>
                <div className='w-28 h-16  bg-neutral-200 text-neutral-500 font-bold flex justify-center items-center gap-1'>
                    <SiApple className='text-2xl mb-1'/>
                    {product ? product : 'Product'}
                </div>
                <div className='w-28 h-16  bg-neutral-200 text-neutral-500 font-bold flex  justify-center items-center gap-1'>
                    <AiFillStar className='text-2xl'/>
                    {stars ? stars : 'Rate'}
                </div>

            </div>


            <div onClick={()=> setAllowFilter(!allowFilter)}
                 className={`${allowFilter ? 'bg-blue-600 text-white' : 'bg-neutral-200 text-neutral-500'} w-24 h-16 flex justify-center gap-3 items-center cursor-pointer`}>
                <ImFilter className='text-3xl'/>
            </div>




        </div>
    )
}
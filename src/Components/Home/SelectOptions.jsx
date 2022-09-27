import {useState} from "react";
import {useDispatch , useSelector} from "react-redux";
import {SelectProduct} from "../../Redux/SelectProductSlice";
import {filterByPrice , filterByStars , filterByProduct } from "../../Redux/FilterProductSlice";
import {ImFilter} from 'react-icons/im'
import {FaWindowClose} from 'react-icons/fa'
import {IoClose} from 'react-icons/io5'
import {useContext} from "react";
import {AllowFilter} from "./_RootPreRendering/RootPreRender";


export const SelectOptions = () =>
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
                xs:w-2/6 xs:h-6 xs:p-2 xs:text-[.8rem] xs:rounded-full
                md:w-20 md:h-8 md:p-2 md:text-sm md:rounded-full
                lg:w-28 lg:h-10 lg:p-0 lg:text-[1rem] lg:rounded-full
                
                  ${Hover === items && Hover !== Active &&'lg:bg-gray-100'}
                  ${Active === items && 'text-white bg-neutral-400'}`}>
                {items}
            </div>
        )
    })


    return (
        <div className='
        flex mx-auto relative
        xs:w-full xs:flex-row xs:justify-evenly xs:items-center xs:px-4 xs:my-3
        md:w-7/12 md:flex-row  md:justify-evenly md:items-center  md:px-0 md:mb-3'>

            {allowFilter ?
                <div className='
                flex
                xs:w-9/12 xs:h-10 xs:bg-neutral-100 xs:rounded-2xl xs:justify-center xs:items-center xs:gap-5
                md:w-8/12 md:h-12 md:justify-center md:items-center md:top-0 md:gap-8' >

                    <div className='text-neutral-500 flex flex-col justify-center items-center'>
                        <IoClose onClick={()=> dispatch(filterByPrice({endPoint : null , startPoint : null}))}
                                 className={`flex text-red-400 justify-center items-center mx-2  xs:text-sm md:text-xl xs:rounded-full ${(startPoint && endPoint) ? 'block' : 'hidden'}`}/>
                        <div className='xs:text-[.8rem] md:text-[.9rem]'>{startPoint && <div  className='xs:text-[.8rem] md:text-[.9rem]'>{startPoint} To {endPoint}</div>}</div>
                    </div>


                    {/*--------------------*/}
                    <div className='text-neutral-500 flex flex-col justify-center items-center'>
                        <IoClose onClick={()=> dispatch(filterByProduct())}
                                 className={`flex text-red-400 justify-center items-center mx-2  xs:text-sm md:text-xl xs:rounded-full ${product ? 'block' : 'hidden'}`}/>
                        <p className='xs:text-[.8rem] md:text-[.9rem]'>{product && 'Product'}</p>
                    </div>
                    {/*--------------------*/}
                    <div className='text-neutral-500 flex flex-col justify-center items-center'>
                        <IoClose onClick={()=> dispatch(filterByStars())}
                                 className={`flex text-red-400 justify-center items-center mx-2  xs:text-sm md:text-xl xs:rounded-full ${stars ? 'block' : 'hidden'}`}/>
                       <p className='xs:text-[.8rem] md:text-[.9rem]'>{stars && `Rate ${stars}` }</p>
                    </div>
                </div>


                :

                <div className={`
            animate__animated
            animate__faster w-full flex justify-around items-center`}>
                    {TitleProduct}
                </div>
            }



            <div onClick={()=> setAllowFilter(!allowFilter)}
                 className={`${allowFilter ? 'bg-neutral-400 text-white' : 'bg-neutral-200 text-neutral-500'} 
                transition flex justify-center items-center cursor-pointer
                xs:w-9 xs:h-8 xs:rounded-full
                lg:w-10 lg:h-10`}>
                <ImFilter className='xs:text-sm '/>
            </div>
        </div>
    )
}
import {RatingStar} from "rating-star";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../../Redux/MasterDataSlice";
import {useGetLiveWidth} from "../../Helper/useGetLiveWidth";

export const InformationHeader = () =>
{
    const {productId} = useParams()
    const {product , id , rate , type , brand , price , offer} = useSelector(state => selectMasterDataById(state , productId))
    const priceWithOffer = parseInt((price - ((price * offer) / 100)))

    const {liveWidth} = useGetLiveWidth()

    return (
        <>
            <p className='
            text-gray-500 font-bold
            xs:text-lg xs:text-center xs:w-full
            lg:text-lg lg:text-left lg:w-auto
            2xl:text-xl

            '>Buy {product}</p>


            <div className='h-24 text-gray-500 font-bold flex flex-col justify-center items-start gap-2'>
                <p className='
                xs:text-sm xs:text-center
                lg:text-sm lg:text-left
                2xl:text-lg
                '>Get $110–$700 off when you trade in an {product} or newer</p>
                <p className='
                text-sm text-blue-600
                xs:w-full xs:text-center
                lg:w-auto lg:text-left
                '>See how trade-in works</p>
            </div>

            <div className='
            flex items-center
            xs:w-full xs:justify-center xs:absolute xs:top-5 left-0
            lg:w-48 lg:h-4 lg:justify-start lg:relative lg:top-0
            '>
                <div className='flex justify-start items-center gap-1 text-gray-500 font-bold xs:hidden lg:flex'> <p className='xs:text-lg 2xl:text-2xl font-bold text-blue-600'>{rate}</p>/ 5</div>
                <RatingStar colors={{ mask: "rgba(52,96,243,0.87)" }} noBorder id={id.toString()} rating={rate} size={liveWidth > 500 ? 20 : 15}/>
            </div>

            <div className='
            xs:w-full xs:h-36 xs:grid xs:grid-cols-2 xs:justify-center xs:items-center xs:gap-3
            lg:w-[28rem] lg:h-20 lg:grid-cols-3 lg:place-items-center lg:items-start lg:gap-0 lg:my-3
            '>
                {/***************************************************************/}
                <span className='
                flex items-center w-full
                xs:h-full xs:justify-center xs:gap-1 xs:bg-gray-200 xs:rounded-full
                lg:h-auto lg:justify-start lg:gap-2  lg:bg-transparent lg:rounded-none
                '>
                    <p className='
                     text-gray-500 h-10 flex justify-start items-center
                     xs:text-sm
                     lg:text-[.9rem]
                     '>Category ></p> <p className='
                                        text-neutral-500 font-bold
                                        xs:text-sm
                                        lg:text-[.9rem]
                                        '>{type}</p>
                </span>
                {/***************************************************************/}
                <span className='
                flex items-center w-full
                xs:h-full xs:justify-center xs:gap-1 xs:bg-gray-200 xs:rounded-full
                lg:h-auto lg:justify-start lg:gap-2  lg:bg-transparent lg:rounded-none
                '>
                    <p className='
                     text-gray-500 h-10 flex justify-start items-center
                     xs:text-sm
                     lg:text-[.9rem]
                     '>Brand ></p> <p className='
                                        text-neutral-500 font-bold
                                        xs:text-sm
                                        lg:text-[.9rem]
                                        '>{brand}</p>
                </span>
                {/***************************************************************/}
                <span className='
                flex items-center w-full
                xs:h-full xs:justify-center xs:gap-1 xs:bg-gray-200 xs:rounded-full
                lg:h-auto lg:justify-start lg:gap-2  lg:bg-transparent lg:rounded-none
                '>
                    <p className='
                     text-gray-500 h-10 flex justify-start items-center
                     xs:text-sm
                     lg:text-[.9rem]
                     '>Price ></p> <p className='
                                        text-neutral-500 font-bold
                                        xs:text-sm
                                        lg:text-[.9rem]
                                        '>${price}</p>
                </span>
                {/***************************************************************/}
                <span className='
                flex items-center w-full
                xs:h-full xs:justify-center xs:gap-1 xs:bg-gray-200 xs:rounded-full
                lg:h-auto lg:justify-start lg:gap-2  lg:bg-transparent lg:rounded-none
                '>
                    <p className='
                     text-gray-500 h-10 flex justify-start items-center
                     xs:text-sm
                     lg:text-[.9rem]
                     '>Offer ></p> <p className='
                                        text-neutral-500 font-bold
                                        xs:text-sm
                                        lg:text-[.9rem]
                                        '>{offer}%</p>
                </span>
                {/***************************************************************/}
                <span className='
                flex items-center w-full
                xs:h-full xs:justify-center xs:gap-1 xs:bg-gray-200 xs:rounded-full  xs:col-span-2
                lg:h-auto lg:justify-start lg:gap-2  lg:bg-transparent lg:rounded-none
                '>
                    <p className='
                     text-gray-500 h-10 flex justify-start items-center
                     xs:text-sm
                     lg:text-[.9rem]
                     '>Available ></p> <p className='
                                        text-blue-600 font-bold
                                        xs:text-sm
                                        lg:text-[.9rem]
                                        '>${priceWithOffer}</p>
                </span>
            </div>
        </>
    )
}
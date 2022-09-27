import {RatingStar} from "rating-star";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../../Redux/MasterDataSlice";
import {useGetLiveWidth} from "../../Helper/useGetLiveWidth";

export const Information = () =>
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
            md:text-xl md:text-left md:w-auto
            lg:text-lg lg:text-left lg:w-auto
            2xl:text-xl'>Buy {product}</p>

            <div className='h-24 text-gray-500 font-bold flex flex-col justify-center items-start gap-2'>
                <p className='
                xs:text-sm xs:text-center
                md:text-sm md:text-left
                lg:text-sm lg:text-left
                2xl:text-lg
                '>Get $110–$700 off when you trade in an {product} or newer</p>
                <p className='
                text-sm text-blue-600
                xs:w-full xs:text-center
                md:w-auto md:text-left
                lg:w-auto lg:text-left
                '>See how trade-in works</p>
            </div>

            <div className='
            flex items-center
            xs:w-full xs:justify-center xs:absolute xs:top-5 left-0
            md:w-48 md:h-10 md:justify-start md:relative md:top-0
            lg:w-48 lg:h-8 lg:justify-start lg:relative lg:top-0
            '>
                <div className='flex justify-start items-center gap-1 text-gray-500 font-bold xs:hidden md:flex'> <p className='xs:text-lg 2xl:text-2xl font-bold text-blue-600'>{rate}</p>/ 5</div>
                <RatingStar colors={{ mask: "rgba(52,96,243,0.87)" }} noBorder id={id.toString()} rating={rate} size={liveWidth > 500 ? 20 : 15}/>
            </div>

            <div className='
            xs:w-full xs:h-36 xs:grid xs:grid-cols-2 xs:justify-center xs:items-center xs:gap-3
            md:w-full md:h-52 md:grid md:grid-cols-2 md:justify-center md:items-center md:gap-3 md:my-8
            lg:w-full lg:h-36 lg:grid-cols-2 lg:justify-center lg:items-center lg:gap-3 lg:my-3'>
                {/***************************************************************/}
                <span className='
                flex items-center w-full
                xs:h-full xs:justify-center xs:gap-1 xs:bg-gray-50 xs:rounded-full
                md:h-full md:justify-center md:gap-1 md:bg-gray-50 md:rounded-full

                '>
                    <p className='
                     text-gray-500 h-8 flex justify-start items-center
                     xs:text-sm'>Category ></p> <p className='
                                        text-neutral-500 font-bold
                                        xs:text-sm'>{type}</p>
                </span>
                {/***************************************************************/}
                <span className='
                flex items-center w-full
                xs:h-full xs:justify-center xs:gap-1 xs:bg-gray-50 xs:rounded-full
                md:h-full md:justify-center md:gap-1 md:bg-gray-50 md:rounded-full
                '>
                    <p className='
                     text-gray-500 h-8 flex justify-start items-center
                     xs:text-sm'>Brand ></p> <p className='
                                        text-neutral-500 font-bold
                                        xs:text-sm'>{brand}</p>
                </span>
                {/***************************************************************/}
                <span className='
                flex items-center w-full
                xs:h-full xs:justify-center xs:gap-1 xs:bg-gray-50 xs:rounded-full
                  md:h-full md:justify-center md:gap-1 md:bg-gray-50 md:rounded-full
                '>
                    <p className='
                     text-gray-500 h-8 flex justify-start items-center
                     xs:text-sm'>Price ></p> <p className='
                                        text-neutral-500 font-bold
                                        xs:text-sm'>${price}</p>
                </span>
                {/***************************************************************/}
                <span className='
                flex items-center w-full
                xs:h-full xs:justify-center xs:gap-1 xs:bg-gray-50 xs:rounded-full
                  md:h-full md:justify-center md:gap-1 md:bg-gray-50 md:rounded-full
                '>
                    <p className='
                     text-gray-500 h-8 flex justify-start items-center
                     xs:text-sm'>Offer ></p> <p className='
                                        text-neutral-500 font-bold
                                        xs:text-sm'>{offer}%</p>
                </span>
                {/***************************************************************/}
                <span className='
                flex items-center w-full
                xs:h-full xs:justify-center xs:gap-1 xs:bg-gray-50 xs:rounded-full  xs:col-span-2
                md:h-full md:justify-center md:gap-1 md:bg-gray-50 md:rounded-full
                '>
                    <p className='
                     text-gray-500 h-8 flex justify-start items-center
                     xs:text-sm'>Available ></p> <p className='
                                        text-blue-600 font-bold
                                        xs:text-sm'>${priceWithOffer}</p>
                </span>
            </div>
        </>
    )
}
import {useSelector , useDispatch} from "react-redux";
import {FetchMasterData , SortBySelect} from "../../Redux/MasterDataSlice";
import {HomeEachProduct} from "./HomeEachProduct";
import {HomeSlider} from "./HomeSlider";
import {HomeMobileSlider} from "./HomeMobileSlider";
import {HomeBenefit} from "./HomeBenefit";
import {HomeSelectOptions} from "./HomeSelectOptions";
import {HomeOfferSlider} from "./HomeOfferSlider";
import {HomeSelectBasicFilter} from "./HomeSelectBasicFilter";
import {HomeMobileFilter} from "./HomeMobileFilter";
import { Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {HeaderUp} from "../Header/HeaderUp";
import {HeaderDown} from "../Header/HeaderDown";
import {useEffect, useState} from "react";
import {Footer} from "../Footer/Footer";
import {FilterLogic} from "../FilterLogic/FilterLogic";
import {FilterResult} from "../FilterLogic/FilterResult";
import {useGetLiveWidth} from "../useGetLiveWidth";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import 'animate.css';


export const HomePreRender = () =>
{
    const MasterDataIds = useSelector(state =>  SortBySelect(state , state.MasterDataSlice.sortBy))
    const {status} = useSelector(state => state.MasterDataSlice)
    const {selectProduct} = useSelector(state => state.SelectProductSlice)
    const [headerPosition] = useState('2xl:fixed');
    const [HeaderMargin] = useState('2xl:mt-20')
    const [allowFilter , setAllowFilter] = useState(false)
    const dispatch = useDispatch()
    const {liveWidth} = useGetLiveWidth()

    console.log(liveWidth)


    useEffect(()=>{
        if (status === 'idle')
        {
            dispatch(FetchMasterData())
        }
    } , [dispatch , status])




    let Render ;

    if (status === 'pending')
    {
        Render = <h1>Loading</h1>
    }
    else if (status === 'success')
    {
        Render = (
            <div>
                {
                    MasterDataIds.filter(items => items.type === selectProduct).map(items =>
                        <SwiperSlide key={items.id} className='
                        flex justify-center items-center
                        xs:h-80
                        lg:h-101
                        '>
                            <HomeEachProduct ids={items.id}/>
                        </SwiperSlide>)
                }
            </div>
        )
    }
    else if (status === 'reject')
    {
        Render = 'reject'
    }

    let mobileRender;

    if (allowFilter && liveWidth < 500)
    {
        mobileRender = <HomeMobileFilter/>
    }

    if (!allowFilter && liveWidth <500)
    {
        mobileRender = <>
            <HomeSelectBasicFilter/>
            <Swiper
                slidesPerView={(liveWidth < 500 && 2) || (liveWidth > 500 && 4)}
                grid={{
                    rows: 2
                }}
                spaceBetween={20}
                pagination={true}
                modules={[Grid, Pagination]}
                className="mySwiper
                 xs:w-11/12  xs:h-[45rem]
                 2xl:w-full 2xl:h-60 ">
                {Render}
            </Swiper>
        </>
    }




    let largeScreenRender;

    if (allowFilter && liveWidth > 500)
    {
        largeScreenRender =   <FilterResult/>
    }
    if (!allowFilter && liveWidth > 500)
    {
        largeScreenRender = <>
                <HomeSelectBasicFilter/>
                <Swiper
                    slidesPerView={(liveWidth < 500 && 2) || (liveWidth > 500 && 4)}
                    grid={{
                        rows: 2
                    }}
                    spaceBetween={20}
                    pagination={true}
                    modules={[Grid, Pagination]}
                    className="mySwiper
                    xs:w-11/12 xs:h-[45rem]
                    2xl:w-full 2xl:h-60 ">
                    {Render}
                </Swiper>
            </>

    }



    return (
        <div className='
        m-auto
        xs:w-full
        lg:max-w-fit
        '>

            <HeaderUp headerPosition={headerPosition}/>
            <HeaderDown HeaderMargin={HeaderMargin}/>
            <HomeSlider/>
            <HomeMobileSlider/>
            <HomeBenefit/>
            <HomeSelectOptions allowFilter={allowFilter} setAllowFilter={setAllowFilter}/>




            <section className='w-full bg-gray-100 relative'>

                <div className='
                m-auto flex justify-around items-start
                xs:w-full
                lg:w-11/12 lg:relative
                '>

                    {
                        (allowFilter && liveWidth > 500) ? <FilterLogic/> :  <HomeOfferSlider/>
                    }

                    <section className='
                     flex flex-col items-center
                     xs:w-full xs:justify-center
                     lg:w-9/12 lg:justify-between

                    '>


                        {mobileRender}

                        {largeScreenRender}

                    </section>
                </div>
            </section>
            <Footer/>
        </div>
    )


}

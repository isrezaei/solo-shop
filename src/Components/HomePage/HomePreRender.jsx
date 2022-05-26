import {useSelector , useDispatch} from "react-redux";
import {FetchMasterData , SortBySelect} from "../../Redux/MasterDataSlice";
import {HomeEachProduct} from "./HomeEachProduct";
import {HomeSlider} from "./HomeSlider";
import {HomeBenefit} from "./HomeBenefit";
import {HomeSelectProduct} from "./HomeSelectProduct";
import {HomeOfferSlider} from "./HomeOfferSlider";
import {HomeFilterProduct} from "./HomeFilterProduct";
import { Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import {HeaderUp} from "../Header/HeaderUp";
import {HeaderDown} from "../Header/HeaderDown";
import {useEffect, useState} from "react";




export const HomePreRender = () =>
{
    const MasterDataIds = useSelector(state =>  SortBySelect(state , state.MasterDataSlice.sortBy))
    const {status} = useSelector(state => state.MasterDataSlice)
    const {selectProduct} = useSelector(state => state.SelectProductSlice)
    const [headerPosition] = useState('fixed');
    const dispatch = useDispatch()

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
                        <SwiperSlide key={items.id} className='flex justify-center w-auto h-101'>
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

    return (
        <div>
            <HeaderUp headerPosition={headerPosition}/>
            <HeaderDown/>
            <HomeSlider/>
            <HomeBenefit/>
            <HomeSelectProduct/>


            <section className='w-full bg-gray-100'>

                <div className='w-11/12 m-auto relative flex justify-around items-start'>

                    <HomeOfferSlider/>

                    <section className='w-9/12 flex flex-col justify-between items-center'>

                        <HomeFilterProduct/>

                        <Swiper
                            slidesPerView={4}
                            grid={{
                                rows: 2
                            }}
                            spaceBetween={20}
                            pagination={false}
                            modules={[Grid, Pagination]}
                            className="mySwiper h-60 w-full">
                            {Render}
                        </Swiper>
                    </section>

                </div>
            </section>


        </div>
    )


}

import {useSelector} from "react-redux";
import {selectMasterDataIds, SortBySelect} from "../../Redux/MasterDataSlice";
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



export const HomePreRender = () =>
{
    const MasterDataIds = useSelector(state =>  SortBySelect(state , state.MasterDataSlice.sortBy))
    const {status} = useSelector(state => state.MasterDataSlice)
    const {selectProduct} = useSelector(state => state.SelectProductSlice)

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
            <HomeSlider/>
            <HomeBenefit/>
            <HomeSelectProduct/>

            <div className='w-11/12 mx-auto relative flex justify-around items-start bg-gray-100'>

                <HomeOfferSlider/>

                <section className='w-9/12 flex flex-col justify-between items-center'>

                    <HomeFilterProduct/>

                    <Swiper
                        slidesPerView={4}
                        grid={{
                            rows: 2
                        }}
                        spaceBetween={20}
                        pagination={{
                            clickable: true
                        }}
                        modules={[Grid, Pagination]}
                        className="mySwiper h-40vw w-full">
                        {Render}

                    </Swiper>

                </section>




            </div>

        </div>
    )


}

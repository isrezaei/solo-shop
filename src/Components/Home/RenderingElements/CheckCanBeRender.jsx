import {FilterLogic} from "../../Filters_Logic/FilterLogic";
import {OfferSwiperSlider} from "../SwiperSliders/OfferSwiperSlider";
import {useGetLiveWidth} from "../../Helper/useGetLiveWidth";
import {SwiperSlide} from "swiper/react";
import {RenderingEachProduct} from "./RenderingEachProduct";
import {FilterProducts} from "../FilterProducts";
import {SortEachProduct} from "./SortEachProduct";
import {ProductSwiperSlider} from "../SwiperSliders/ProductSwiperSlider";
import {FilterResult} from "../../Filters_Logic/FilterResult";
import {useSelector} from "react-redux";
import {SortBySelect} from "../../../Redux/MasterDataSlice";
import {useContext} from "react";
import {AllowFilter} from "../_RootPreRendering/RootPreRender";

export const CheckCanBeRender = () =>
{
    const {allowFilter} = useContext(AllowFilter)
    const {liveWidth} = useGetLiveWidth()
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
                        <SwiperSlide key={items.id} className='flex justify-center items-center xs:h-80 lg:h-[24rem]'>
                            <RenderingEachProduct ids={items.id}/>
                        </SwiperSlide>
                    )
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
        mobileRender = <FilterProducts/>
    }
    if (!allowFilter && liveWidth <500)
    {
        mobileRender = <>
            <SortEachProduct/>
            <ProductSwiperSlider Render={Render}/>
        </>
    }


    let largeScreenRender;
    if (allowFilter && liveWidth > 500)
    {
        largeScreenRender = <FilterResult/>
    }
    if (!allowFilter && liveWidth > 500)
    {
        largeScreenRender = <>
            <SortEachProduct/>
            <ProductSwiperSlider Render={Render}/>
        </>
    }




    return (
        <section className='w-full bg-gray-100 relative'>
            <div className='
                m-auto flex justify-center items-start
                xs:w-full
                lg:w-11/12 lg:relative lg:px-5
                2xl:px-0 2xl:gap-8
                '>

                {(allowFilter && liveWidth > 500) ? <FilterLogic/> :  <OfferSwiperSlider/>}

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
    )
}
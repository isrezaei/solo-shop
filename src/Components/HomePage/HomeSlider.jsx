import { Pagination , Mousewheel , Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle"



export const HomeSlider = () =>
{
    return (

        <div className='w-full  bg-amber-200 flex '>

            <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination , Autoplay]}
                autoplay={{ delay: 2500}}
                className="mySwiper w-4/5 h-96 "
            >
                <SwiperSlide><img className='8/12' src= "https://user-images.githubusercontent.com/77073972/164969967-a0b54827-90b5-4dc5-94e4-1d97b6faa0cf.jpg"/></SwiperSlide>
                <SwiperSlide><img className='8/12' src= "https://user-images.githubusercontent.com/77073972/164971748-3bb6de34-ed76-4be0-8107-3fde23223dc6.jpg"/></SwiperSlide>
                <SwiperSlide><img className='8/12' src= "https://user-images.githubusercontent.com/77073972/164971757-c0131b83-14d8-4f24-9efc-ee54c6786a8d.jpg"/></SwiperSlide>
                <SwiperSlide><img className='8/12' src= "https://user-images.githubusercontent.com/77073972/164972116-11d28171-95d2-4ca8-a6a5-58aa99259ee8.jpg"/></SwiperSlide>
            </Swiper>

        </div>
    );
}
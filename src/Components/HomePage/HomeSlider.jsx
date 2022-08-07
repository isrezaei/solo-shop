import { Pagination , Mousewheel , Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle"



export const HomeSlider = () =>
{
    return (

            <Swiper
                direction={"vertical"}
                mousewheel={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination , Autoplay]}
                autoplay={{ delay: 2500}}
                className='
                mySwiper
                w-full
                xs:h-44 xs:bg-red-500
                2xl:h-100'
            >
                <SwiperSlide><img className='w-full' src= {'https://user-images.githubusercontent.com/77073972/167292683-188ee3ea-50eb-443d-b333-7f4c27b0efba.png'} alt={'test'}/></SwiperSlide>
                <SwiperSlide><img className='w-full' src= {'https://user-images.githubusercontent.com/77073972/167294276-b5aacfe0-fa3b-45c1-b492-04a021b1de47.png'} alt={'test'}/></SwiperSlide>
                <SwiperSlide><img className='w-full' src= {'https://user-images.githubusercontent.com/77073972/167292688-310156b1-11e9-4473-840a-5e0f06bfe82f.png'} alt={'test'}/></SwiperSlide>
                <SwiperSlide><img className='w-full' src= {'https://user-images.githubusercontent.com/77073972/167292689-ce946236-3582-459d-8983-38410cb11abf.png'} alt={'test'}/></SwiperSlide>
                <SwiperSlide><img className='w-full' src= {'https://user-images.githubusercontent.com/77073972/167292693-bea7ee2e-39d5-4911-993a-d2ca1b480d10.png'} alt={'test'}/></SwiperSlide>
                <SwiperSlide><img className='w-full' src= {'https://user-images.githubusercontent.com/77073972/167292700-327df37a-d9ff-428b-b853-64085afa2ed8.png'} alt={'test'}/></SwiperSlide>
                <SwiperSlide><img className='w-full' src= {'https://user-images.githubusercontent.com/77073972/167292709-b629e667-2033-45e7-ab69-ec9d6f70bcb3.png'} alt={'test'}/></SwiperSlide>
            </Swiper>

    );
}
import {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";


export const ModalGallerySlider = ({image}) =>
{

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const subImageUp = image.subImg.map(items => {
        return (
            <SwiperSlide key={items} className='h-full cursor-grab flex justify-center items-center'>
                <img src={items} className='w-full h-52' alt='product'/>
            </SwiperSlide>
        )
    })

    const subImageDown = image.subImg.map(items => {
        return (
            <SwiperSlide key={items} className='flex justify-center'>
                <img src={items} className='w-full cursor-pointer' alt='product'/>
            </SwiperSlide>
        )
    })

    return (
        <div className='p-5'>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={false}
                thumbs={{swiper: thumbsSwiper , slideThumbActiveClass : 'brightness-20'}}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {subImageUp}
            </Swiper>

            {/*<Swiper*/}
            {/*    onSwiper={setThumbsSwiper}*/}
            {/*    loop={false}*/}
            {/*    spaceBetween={20}*/}
            {/*    slidesPerView={4}*/}
            {/*    freeMode={true}*/}
            {/*    watchSlidesProgress={true}*/}
            {/*    modules={[FreeMode, Navigation, Thumbs]}*/}
            {/*    className="mySwiper "*/}
            {/*>*/}
            {/*        {subImageDown}*/}

            {/*</Swiper>*/}
        </div>
    )

}
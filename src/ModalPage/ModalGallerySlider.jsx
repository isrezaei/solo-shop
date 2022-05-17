import {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import 'swiper/css/bundle'

export const ModalGallerySlider = ({image}) =>
{

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    console.log(thumbsSwiper)

    const subImage = image.subImg.map(items => {
        return (
            <SwiperSlide key={items} className='h-full  flex justify-center items-center'>
                <img src={items} className='h-80' alt='product'/>
            </SwiperSlide>
        )
    })

    const subImages = image.subImg.map(items => {
        return (
            <SwiperSlide key={items} className='bg-lime-300'>
                <img src={items} className='h-1/6 cursor-pointer' alt='product'/>
            </SwiperSlide>
        )
    })


    return (
        <div className='p-5'>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#ff0707",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 flex justify-center items-center"
            >
                {subImage}

            </Swiper>

            <Swiper
                onSwiper={()=> setThumbsSwiper()}
                loop={false}
                spaceBetween={20}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper mt-3"
            >

                <div className='h-auto w-full bg-lime-300'>
                    {subImages}
                </div>


            </Swiper>


        </div>
    )

}
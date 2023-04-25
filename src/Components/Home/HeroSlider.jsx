import {Mousewheel , Autoplay , EffectCreative} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle"



export const HeroSlider = () =>
{
    return (

            <Swiper
                direction={"vertical"}
                mousewheel={false}
                pagination={{
                    clickable: true,
                    type : 'progressbar'
                }}
                creativeEffect={{
                    prev: {
                        shadow: false,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                effect={'creative'}
                modules={[Mousewheel , Autoplay , EffectCreative]}
                autoplay={{ delay: 2500 , disableOnInteraction : false}}
                className='
                mySwiper
                xs:w-11/12 xs:h-[18rem] xs:rounded-[1rem] xs:my-5 xs:border-2 xs:border-white
                md:w-9/12 md:block md:h-[29rem] md:rounded-[2rem]
                lg:w-8/12
                '>
                <SwiperSlide>
                    <div className='relative h-full bg-cover bg-center bg-[url("https://user-images.githubusercontent.com/77073972/192607649-455b5934-73c3-40d5-b362-20010bf91f02.png")]'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-full bg-cover bg-center bg-[url(https://user-images.githubusercontent.com/77073972/192625494-32ceb500-224b-4055-bf41-29c59863bc28.png)]'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-full bg-cover bg-center bg-[url(https://user-images.githubusercontent.com/77073972/192607725-3c76e4a9-efb9-40f4-a26e-010447fdb93b.png)]'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-full bg-cover bg-center bg-[url(https://user-images.githubusercontent.com/77073972/192607737-c521bbdd-a36a-4e8a-b4ba-86d260d2c603.png)]'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-full bg-cover bg-center bg-[url(https://user-images.githubusercontent.com/77073972/192607766-b2ca181b-5523-481e-917b-c13cfdb39b56.png)]'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-full bg-cover bg-center bg-[url(https://user-images.githubusercontent.com/77073972/192607799-b3fd09bc-870a-43a6-b541-2054f27af820.png)]'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-full bg-cover bg-center bg-[url(https://user-images.githubusercontent.com/77073972/192625246-d01bed6a-d922-4328-9450-45594b01dd18.png)]'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-full bg-cover bg-center bg-[url(https://user-images.githubusercontent.com/77073972/192625305-81738150-042b-4d59-bfeb-b1b1a93ec85c.png)]'>

                    </div>
                </SwiperSlide>
            </Swiper>

    );
}
import {Swiper} from "swiper/react";
import {Grid, Pagination} from "swiper";
import {useGetLiveWidth} from "../../useGetLiveWidth";

export const ProductSwiperSlider = ({Render}) =>
{
    const {liveWidth} = useGetLiveWidth()

    return (
        <Swiper
            slidesPerView={(liveWidth < 500 && 2) || (liveWidth < 1280 && 3) || (liveWidth > 1280 && 4)}
            grid={{
                rows: 2
            }}
            spaceBetween={20}
            pagination={true}
            modules={[Grid, Pagination]}
            className="mySwiper
                    xs:w-11/12 xs:h-[45rem]
                    lg:w-11/12 lg:h-[53rem]
                    2xl:w-full 2xl:h-[60rem] ">
            {Render}
        </Swiper>
    )
}
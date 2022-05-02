import {useSelector} from "react-redux";
import {selectMasterDataIds ,selectAll} from "../../Redux/MasterDataSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";

import 'swiper/css/bundle'


export const HomeOfferSlider = () =>
{

    const AllProduct = useSelector(state => selectAll(state))

    const BestOffer = AllProduct.filter(items => items.offer > 30)

    const Render = BestOffer.map(items => {

        console.log(items)

        const OfferPrice = new Intl.NumberFormat('en-IN').format(items.price * items.offer / 100)

        return (
            <SwiperSlide key={items.id} className='flex flex-col justify-center items-center'>

                <img className={'w-72'} src={items.image.mainImg} alt={items.product}/>

                <section className='w-full bg-amber-200 flex justify-between items-center'>
                    <p>{items.brand}</p>
                    <p>{items.price}$</p>
                </section>

                <section className='w-full bg-pink-500 flex justify-between items-center'>
                    <p>{items.product}</p>
                    <p>{OfferPrice} $</p>
                </section>

                <div>{items.offer} % Offer available</div>
            </SwiperSlide>
        )
    })

    return (
        <div className='w-1/6 bg-blue-300 h-auto'>

            <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper"
            >
                {Render}

            </Swiper>

        </div>
    )

}
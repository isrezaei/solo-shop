import {useSelector} from "react-redux";
import {selectAllMasterData} from "../../Redux/MasterDataSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import Countdown from 'react-countdown';
import 'swiper/css/bundle'


export const HomeOfferSlider = () =>
{

    const AllProduct = useSelector(state => selectAllMasterData(state))

    const BestOffer = AllProduct.filter(items => items.offer >= 30)



    const renderer = ({days , hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>You are good to go!</span>;
        } else {
            return (
                <span className='w-1/2 h-8 bg-gray-100 border border-gray-300 justify-evenly items-center rounded-sm flex'>
                    <p>{days}</p>
                    <p>{hours}</p>
                    <p>{minutes}</p>
                    <p>{seconds}</p>
                </span>
            )
        }
    };




    const Render = BestOffer.map(items => {

        const OfferPrice = new Intl.NumberFormat('en-IN').format( items.price - (items.price * items.offer / 100))

        return (
            <SwiperSlide key={items.id} className='flex flex-col font-medium justify-center items-center bg-white'>

                <section className='w-full h-12 text-xl  flex items-center'>
                    Best Offer in the weeks
                </section>

                <div className='w-full h-96 flex justify-center items-center'>
                    <img className='w-auto h-5/6' src={items.image.mainImg} alt={items.product}/>
                </div>


                <section className='w-11/12 h-11 flex justify-between items-center'>
                    <p className='text-xl text-gray-500'>{items.brand}</p>
                    <p className='text-lg line-through text-rose-500'>{items.price} $</p>
                </section>

                <section className='w-11/12 h-11 flex justify-between items-center'>
                    <p className='text-lg text-gray-500'>{items.product.slice(5)}</p>
                    <p className='text-2xl'>{OfferPrice} $</p>
                </section>

                <section className='h-11 flex items-center text-lg'> <p className='text-rose-600 mr-2'>{items.offer}%</p> <p className='text-black'>Offer available</p></section>

                <section className='w-11/12 h-20 flex flex-col justify-center  items-start'>
                    <p>Available : {items.count}</p>
                    <Progress percent={items.count} status={'success'}/>
                </section>

                <section className='w-11/12 h-14 flex justify-between items-center'>

                    <div>
                        <p>Hurry up</p>
                        <p>Offer ends in :</p>
                    </div>

                    <Countdown date={Date.now() + 604800000  } renderer={renderer} />
                </section>

            </SwiperSlide>
        )
    })

    return (
        <div className='w-96 bg-white mt-8 p-3 cursor-grabbing shadow-xl'>
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
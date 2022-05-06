import {useSelector} from "react-redux";
import {selectAll} from "../../Redux/MasterDataSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import Countdown from 'react-countdown';
import 'swiper/css/bundle'


export const HomeOfferSlider = () =>
{

    const AllProduct = useSelector(state => selectAll(state))

    const BestOffer = AllProduct.filter(items => items.offer >= 30)



    const renderer = ({days , hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>You are good to go!</span>;
        } else {
            return (
                <span className='w-1/2 h-8 bg-gray-100 justify-evenly items-center rounded-sm flex'>
                    <p>{days}</p>
                    <p>{hours}</p>
                    <p>{minutes}</p>
                    <p>{seconds}</p>
                </span>
            )
        }
    };




    const Render = BestOffer.map(items => {

        const OfferPrice = new Intl.NumberFormat('en-IN').format(items.price * items.offer / 100)

        let CountStatus ;

        if (items.count <= 30)
        {
            CountStatus = 'low'
        }
        else if (items.count >=30 )
        {
            CountStatus = 'medium'
        }
        else if (items.count >= 60)
        {
            CountStatus = 'success'
        }


        return (
            <SwiperSlide key={items.id} className='flex flex-col font-medium justify-center items-center bg-gray-100'>

                <section className='w-full h-12 text-xl  bg-amber-100 flex items-center'>
                    Best Offer in the weeks
                </section>

                <img className={'w-72'} src={items.image.mainImg} alt={items.product}/>

                <section className='w-full bg-amber-200 flex justify-between items-center'>
                    <p>{items.brand}</p>
                    <p>{items.price} $</p>
                </section>

                <section className='w-full bg-pink-500 flex justify-between items-center'>
                    <p>{items.product}</p>
                    <p>{OfferPrice} $</p>
                </section>

                <section>{items.offer} % Offer available</section>

                <section className='w-full h-20 flex flex-col justify-center  items-start'>
                    <p>Available : {items.count}</p>
                    <Progress

                        theme={{
                            success: {
                                symbol: '5',
                                color: 'rgb(78,180,0)'
                            },
                            medium: {
                                symbol: '',
                                color: '#fbc630'
                            },
                            low: {
                                symbol: '',
                                color: '#e12929'
                            }
                        }}

                        percent={items.count} status={CountStatus} />
                </section>

                <section className='flex w-full h-14 bg-blue-500 justify-evenly items-center'>

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
        <div className='w-1/4 bg-blue-300 h-100'>

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
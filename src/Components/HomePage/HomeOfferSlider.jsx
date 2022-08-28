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
            <SwiperSlide key={items.id} className='flex flex-col justify-center items-center bg-white'>

                <section className='lg:text-lg 2xl:text-xl font-bold w-full my-3 text-neutral-400 text-center'>
                    Best Offer in the weeks
                </section>

                    <img className='lg:w-40 2xl:w-64 my-3' src={items.image.mainImg} alt={items.product}/>



                <section className='w-11/12 my-2 flex justify-around items-center py-1 bg-neutral-100 rounded-xl'>
                    <p className='lg:text-lg 2xl:text-lg line-through text-rose-500 font-bold'>{items.price}$</p>
                </section>

                <section className='w-11/12 my-2 flex justify-around items-center py-1 bg-neutral-100 rounded-xl'>
                    <p className='lg:text-sm 2xl:text-lg text-gray-500'>{items.product.slice(5)}</p>
                    <p className='lg:text-sm 2xl:text-xl text-neutral-500 font-bold'>${parseInt(OfferPrice)}</p>
                </section>

                <section className='w-44 my-2 flex justify-center items-center p-1 bg-neutral-100 rounded-xl'>
                    <p className='lg:text-sm 2xl:text-lg text-rose-600 font-bold mr-2'>{items.offer}%</p>
                    <p className='lg:text-sm 2xl:text-lg text-neutral-500'>Offer available</p>
                </section>

                <section className='w-11/12 h-20 flex flex-col justify-center  items-start'>
                    <p className='lg:text-sm 2xl:text-lg text-neutral-500'>Available : {items.count}</p>
                    <Progress percent={items.count}/>
                </section>

                <section className='w-11/12 my-2 flex justify-between items-center'>

                    <div>
                        <p className='lg:text-sm 2xl:text-lg font-bold text-neutral-500'>Hurry up</p>
                        <p className='lg:text-[.8rem] 2xl:text-lg text-neutral-500'>Offer ends in :</p>
                    </div>

                    <Countdown date={Date.now() + 604800000  } renderer={renderer}/>

                </section>

            </SwiperSlide>
        )
    })

    return (
        <div className='animate__animated animate__zoomInLeft
        xs:hidden rounded-xl
        lg:block lg:w-64 lg:bg-white lg:mt-20 lg:p-3 lg:cursor-grabbing lg:shadow-xl
        2xl:w-96 xs:mt-8
        '>
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
import {useSelector , useDispatch} from "react-redux";
import {FetchMasterData , SortBySelect} from "../../Redux/MasterDataSlice";
import {HomeEachProduct} from "./HomeEachProduct";
import {HomeSlider} from "./HomeSlider";
import {HomeBenefit} from "./HomeBenefit";
import {HomeSelectOptions} from "./HomeSelectOptions";
import {HomeOfferSlider} from "./HomeOfferSlider";
import {HomeFilterProduct} from "./HomeFilterProduct";
import { Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {HeaderUp} from "../Header/HeaderUp";
import {HeaderDown} from "../Header/HeaderDown";
import {useEffect, useState} from "react";
import {Footer} from "../Footer/Footer";
import {FilterLogic} from "../FilterLogic/FilterLogic";
import {FilterResult} from "../FilterLogic/FilterResult";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import 'animate.css';


export const HomePreRender = () =>
{
    const MasterDataIds = useSelector(state =>  SortBySelect(state , state.MasterDataSlice.sortBy))
    const {status} = useSelector(state => state.MasterDataSlice)
    const {selectProduct} = useSelector(state => state.SelectProductSlice)
    const [headerPosition] = useState('2xl:fixed');
    const [HeaderMargin] = useState('2xl:mt-20')
    const [allowFilter , setAllowFilter] = useState(false)
    const [matchMedia , setMatchMedia] = useState('')
    const dispatch = useDispatch()



    useEffect(()=>{
        if (status === 'idle')
        {
            dispatch(FetchMasterData())
        }
    } , [dispatch , status])


    useEffect(()=> {

        const handleResize = () => {
          setMatchMedia(document.body.clientWidth)
        }

        handleResize()

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    } , [])

    console.log(matchMedia)

    // console.log(window.innerWidth)

    let Render ;

    if (status === 'pending')
    {
        Render = <h1>Loading</h1>
    }
    else if (status === 'success')
    {
        Render = (
            <div>
                {
                    MasterDataIds.filter(items => items.type === selectProduct).map(items =>
                        <SwiperSlide key={items.id} className='
                        flex justify-center items-center w-auto
                        xs:h-80
                        lg:h-101
                        '>
                            <HomeEachProduct ids={items.id}/>
                        </SwiperSlide>)
                }
            </div>
        )
    }
    else if (status === 'reject')
    {
        Render = 'reject'
    }
    return (
        <div className='max-w-fit m-auto'>

            <HeaderUp headerPosition={headerPosition}/>
            <HeaderDown HeaderMargin={HeaderMargin}/>
            <HomeSlider/>
            <HomeBenefit/>
            <HomeSelectOptions allowFilter={allowFilter} setAllowFilter={setAllowFilter}/>

            <section className='w-full bg-gray-100 relative'>

                <div className='
                m-auto flex justify-around items-start
                xs:w-full xs:bg-red-500
                lg:w-11/12
                lg:relative

                '>

                    {
                        allowFilter ? <FilterLogic/> :  <HomeOfferSlider/>
                    }



                    <section className='
                     flex flex-col justify-between items-center
                     xs:w-full
                     2xl:w-9/12
                    '>

                        {
                            allowFilter ?  <FilterResult/> :
                                <>
                                    <HomeFilterProduct/>
                                    <Swiper
                                        slidesPerView={(matchMedia < 500 && 2) || (matchMedia > 500 && 4)}
                                        grid={{
                                            rows: 2
                                        }}
                                        spaceBetween={20}
                                        pagination={true}
                                        modules={[Grid, Pagination]}
                                        className="mySwiper
                                        xs:w-full  xs:h-custom40 xs:bg-lime-500
                                        2xl:w-full 2xl:h-60
                                         ">
                                        {Render}
                                    </Swiper>
                                </>
                        }
                    </section>


                </div>



            </section>



            <Footer/>
        </div>
    )


}

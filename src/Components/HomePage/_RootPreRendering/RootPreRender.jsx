import {createContext} from "react";
import {useSelector , useDispatch} from "react-redux";
import {FetchMasterData} from "../../../Redux/MasterDataSlice";
import {HeaderSwiperSlider} from "../SwiperSliders/HeaderSwiperSlider";
import {HomeBenefit} from "../HomeBenefit";
import {HomeSelectOptions} from "../HomeSelectOptions";
import {UpperHeader} from "../../Header/UpperHeader";
import {BottomHeader} from "../../Header/BottomHeader";
import {useEffect, useState} from "react";
import {Footer} from "../../Footer/Footer";
import {CheckCanBeRender} from "../RenderingElements/CheckCanBeRender";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import '../../../../node_modules/animate.css/animate.css';


export const RootPreRender = () =>
{
    const {status} = useSelector(state => state.MasterDataSlice)
    const [headerPosition] = useState('lg:fixed');
    const [HeaderMargin] = useState('2xl:mt-20')
    const [allowFilter , setAllowFilter] = useState(false)
    const dispatch = useDispatch()

    useEffect(()=>{
        if (status === 'idle')
        {
            dispatch(FetchMasterData())
        }
    } , [dispatch , status])


    return (
        <div className='
        m-auto
        xs:w-full
        lg:max-w-fit
        '>
            <UpperHeader headerPosition={headerPosition}/>
            <BottomHeader HeaderMargin={HeaderMargin}/>
            <HeaderSwiperSlider/>

            <HomeBenefit/>
            <AllowFilter.Provider value={{allowFilter , setAllowFilter}}>
                <HomeSelectOptions/>
                <CheckCanBeRender/>
            </AllowFilter.Provider>
            <Footer/>

        </div>
    )


}

export const AllowFilter = createContext()

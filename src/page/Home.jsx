import {createContext} from "react";
import {useSelector, useDispatch} from "react-redux";
import {FetchMasterData} from "../Redux/reducer/MasterDataSlice";
import {HeroSlider} from "../Components/Home/HeroSlider";
import {Benefits} from "../Components/Home/Benefits";
import {OptionDevice} from "../Components/Home/OptionDevice/OptionDevice";
import {useEffect} from "react";
import {Filter} from "../Components/Home/Filter/Filter";
import {OptionSort} from "../Components/Home/OptionSort";
import {Products} from "../Components/Home/Products/Products";
import {Link, Element, animateScroll as scroll, scroller} from "react-scroll";
import {GetAppData} from "../Redux/reducer/MasterDataSlice";


export const Home = () => {


    const {status} = useSelector(state => state.MasterDataSlice)


    const {isOpen} = useSelector(status => status.FilterProductSlice)


    const dispatch = useDispatch()

    // useEffect(() => {
    //     if (status === 'idle') {
    //         dispatch(GetAppData())
    //     }
    // }, [dispatch, status])


    return (
        <div className={"max-w-[1990px] m-auto"}>


            <div className={"sm:h-auto lg:h-[100vh] md:flex md:flex-col md:items-center md:justify-center"}>
                <HeroSlider/>
                <Benefits/>
            </div>


            <div className="
            xs:w-full xs:h-auto xs:flex xs:flex-col xs:items-center xs:justify-center
            lg:h-[100vh]
            bg-neutral-100">
                <section
                    className={"m-auto scrollbar-hide xs:w-[24rem] sm:w-[35rem] md:w-[41rem] lg:w-[55rem] xl:w-[55rem] 2xl:w-[55rem]"}>
                    <OptionDevice/>
                    <OptionSort/>
                    {isOpen ? <Filter/> : <Products/>}
                </section>
            </div>

        </div>
    )
}

export const AllowFilter = createContext()

import {createContext} from "react";
import {useSelector, useDispatch} from "react-redux";
import {FetchMasterData} from "../../Redux/MasterDataSlice";
import {HeroSlider} from "./HeroSlider";
import {Benefits} from "./Benefits";
import {OptionDevice} from "./OptionDevice/OptionDevice";
import {useEffect} from "react";
import {Filter} from "./Filter/Filter";
import {OptionSort} from "./OptionSort";
import {Products} from "./Products/Products";
import {Link, Element, animateScroll as scroll, scroller} from "react-scroll";


export const Main = () => {


    const {status} = useSelector(state => state.MasterDataSlice)


    const {isOpen} = useSelector(status => status.FilterProductSlice)


    const dispatch = useDispatch()

    useEffect(() => {
        if (status === 'idle') {
            dispatch(FetchMasterData())
        }
    }, [dispatch, status])

    const handleScroll = () => {

        console.log("scroll")

        scroller.scrollTo('section2', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

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

import {createContext, useEffect, useReducer} from "react";
import {Name} from "../Product_Informaiton/Name";
import {Colors} from "../Product_Informaiton/Ansewers_Comp/Colors";
import {Capacity} from "../Product_Informaiton/Ansewers_Comp/Capacity";
import {ActiveImage} from "../Product_Informaiton/ActiveImage";
import {ChooseQuantity} from "../Product_Informaiton/Ansewers_Comp/ChooseQuantity";
import {SetTradeOldDevice} from "../../../Redux/CartShopSlice";
import {useDispatch, useSelector} from "react-redux";
import {InitialState} from "../Context_Handeling/InitialState";
import {ContextReducer} from "../Context_Handeling/ContextReducer";
import {useLocation, useParams} from "react-router-dom";
import {useGetLiveWidth} from "../../../Helper/useGetLiveWidth";
import {selectMasterDataById} from "../../../Redux/MasterDataSlice";
import Slider from "react-slick";
import {RatingStar} from "rating-star";


export const EachProductFromContext = createContext()

export const DetailsEachProduct = ({EachProduct}) => {

    const {type} = EachProduct
    const {pathname} = useLocation();

    const {mainState} = InitialState()

    const {reducer} = ContextReducer()
    const reduxDispatch = useDispatch()



    const [{activeOptions}, contextDispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('detailsPageInfo')) || mainState)

    const {productId} = useParams()
    const {price, offer , detailsImage} = useSelector(state => selectMasterDataById(state, productId))


    const finalPrice = parseInt((price - ((price * offer) / 100)))


    //set scroll 0 in first open
    // useEffect(()=> window.scrollTo(0, 0) ,[pathname])

    // useEffect(() => {
    //     reduxDispatch(SetTradeOldDevice({
    //         [type]: {
    //             deviceName: JSON.parse(localStorage.getItem('detailsPageInfo'))?.choiceOldModel?.nameOldPhone,
    //             cost: JSON.parse(localStorage.getItem('detailsPageInfo'))?.choiceOldModel?.offPrice
    //         }
    //     }))
    // }, [reduxDispatch])


    return (
        <EachProductFromContext.Provider
        value={{
            activeOptions, detailsImage, contextDispatch
        }}>


        <div className={'flex justify-center items-center z-10 m-auto h-screen w-full fixed top-0 overflow-hidden bg-glass-black'}>

            <section className='xs:w-auto xs:h-auto flex flex-col m-auto p-8 rounded-xl justify-center items-center bg-white'>

                <ActiveImage/>

                <div className={"w-full space-y-5"}>

                    <Name/>

                    <div className={"flex flex-col justify-between items-center space-y-5"}>
                        <Colors/>
                        <Capacity/>
                    </div>

                    <div className={"flex w-full space-x-2 "}>
                        <span className={"w-full rounded-md bg-pink-50 px-2 py-1 text-xs text-center line-through font-xs text-pink-700 ring-1 ring-inset ring-pink-700/10"}>${price}</span>
                        <span className={"w-full rounded-md bg-lime-50 px-2 py-1 text-xs text-center text-green-700 ring-1 ring-inset ring-green-600/20"}>${finalPrice}</span>
                    </div>

                    <ChooseQuantity/>

                </div>

            </section>


        </div>




    </EachProductFromContext.Provider>)
}
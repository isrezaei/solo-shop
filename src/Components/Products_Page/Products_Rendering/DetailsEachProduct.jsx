import {createContext, useReducer, useState, useRef, useLayoutEffect} from "react";
import {Information} from "../Product_Informaiton/Information";
import {ChooseColor} from "../Product_Informaiton/Ansewers_Comp/ChooseColor";
import {ChooseCapacity} from "../Product_Informaiton/Ansewers_Comp/ChooseCapacity";
import {AddToWishList} from "../Product_Informaiton/AddToWishList";
import {OldPhoneQuestion} from "../Product_Informaiton/Ansewers_Comp/OldPhoneQuestion";
import {ActiveImage} from "../Product_Informaiton/ActiveImage";
import {AcceptCondition} from "../Product_Informaiton/Ansewers_Comp/AcceptCondition";
import {RejectCondition} from "../Product_Informaiton/Ansewers_Comp/RejectCondition";
import {ChooseQuantity} from "../Product_Informaiton/Ansewers_Comp/ChooseQuantity";
import {useEffect} from "react";
import {SetTradeOldDevice} from "../../../Redux/CartShopSlice";
import {useDispatch} from "react-redux";
import {InitialState} from "../Context_Handeling/InitialState";
import {ContextReducer} from "../Context_Handeling/ContextReducer";
import {useLocation} from "react-router-dom";
import {useGetLiveWidth} from "../../Helper/useGetLiveWidth";
import {Footer} from "../../Footer/Footer";
export const EachProductFromContext = createContext()

export const DetailsEachProduct = ({EachProduct}) => {

    const {type , detailsImage} = EachProduct
    const {pathname} = useLocation();
    const {mainState} = InitialState()
    const {reducer} = ContextReducer()
    const reduxDispatch = useDispatch()
    const {liveWidth} = useGetLiveWidth()
    const [{enableSection, activeOptions, choicesAnswer, choiceOldModel, editAnswer}, contextDispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('detailsPageInfo')) || mainState)



    //set scroll 0 in first open
    useEffect(()=> window.scrollTo(0, 0) ,[pathname])

    useEffect(()=>{
        reduxDispatch(SetTradeOldDevice(
            {
                [type] : {
                    deviceName : JSON.parse(localStorage.getItem('detailsPageInfo'))?.choiceOldModel?.nameOldPhone,
                    cost : JSON.parse(localStorage.getItem('detailsPageInfo'))?.choiceOldModel?.offPrice
                }
            }
        ))
    } , [choicesAnswer.haveOldPhone , reduxDispatch])




    return (
        <EachProductFromContext.Provider
            value={{
                activeOptions,
                detailsImage,
                enableSection,
                choicesAnswer,
                editAnswer,
                choiceOldModel,
                contextDispatch
            }}>

            <div  className={`
             container relative mx-auto relative 
             xs:max-w-[500px] xs:flex xs:flex-col xs:justify-between xs:items-start
             md:max-w-5xl md:flex md:flex-row md:justify-center md:items-center md:h-auto
             lg:flex lg:flex-row lg:justify-center lg:items-center lg:h-auto
            `}>

                {/*********************/}
                <section style={{height : liveWidth > 500}} className='
                xs:w-full xs:relative xs:h-5/6
                md:w-3/6 md:h-[50rem] md:relative md:left-0
                lg:w-3/6 lg:h-[85rem] lg:relative lg:left-0'>
                    <ActiveImage/>
                </section>


                {/*********************/}
                <section className='
                h-auto flex flex-col justify-start items-start gap-2 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral-100 scrollbar-thumb-rounded-full
                xs:w-full xs:relative xs:px-0
                md:w-3/6 md:h-[50rem] md:my-5 md:relative md:right-0 md:p-6
                lg:w-3/6 lg:h-[85rem] lg:my-8  lg:relative lg:right-0 lg:p-6'>
                    <Information/>

                    <div className='
                    w-full flex
                    xs:h-16 xs:flex-row xs:justify-between xs:items-center xs:my-2
                    lg:h-auto lg:flex-col lg:justify-between lg:items-star'>
                        <ChooseColor/>
                        <ChooseCapacity/>
                    </div>

                    {
                        (
                            choicesAnswer.haveGoodCondition === 'Yes'||
                            choicesAnswer.haveButtonWork === 'Yes'||
                            choicesAnswer.haveGoodShape === 'Yes'||
                            choicesAnswer.haveTouchScreenWork === 'Yes'
                        )
                        && (editAnswer === 'Yes')
                            ? <AcceptCondition/>
                            : choicesAnswer.haveTouchScreenWork === 'No' && editAnswer === 'Yes'
                                ? <RejectCondition/>
                                : <OldPhoneQuestion/>
                    }



                    <ChooseQuantity/>
                    <AddToWishList/>


                </section >
            </div>

            <Footer/>

        </EachProductFromContext.Provider>
    )
}
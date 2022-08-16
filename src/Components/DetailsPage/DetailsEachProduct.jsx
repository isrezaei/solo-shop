import {createContext, useReducer, useState, useRef, useLayoutEffect} from "react";
import {InformationHeader} from "./Sections/InformationHeader";
import {ChooseColor} from "./Sections/ChooseColor";
import {ChooseCapacity} from "./Sections/ChooseCapacity";
import {AddToWishList} from "./Sections/AddToWishList";
import {OldPhoneQuestion} from "./Sections/OldPhoneQuestion";
import {ActiveImage} from "./Sections/ActiveImage";
import {AcceptCondition} from "./Sections/AcceptCondition";
import {RejectCondition} from "./Sections/RejectCondition";
import {ChooseQuantity} from "./Sections/ChooseQuantity";
import {useEffect} from "react";
import {SetTradeOldDevice} from "../../Redux/CartShopSlice";
import {useDispatch} from "react-redux";
import {InitialState} from "./ContextHandeling/InitialState";
import {ContextReducer} from "./ContextHandeling/ContextReducer";
import {useLocation} from "react-router-dom";
import {useGetLiveWidth} from "../useGetLiveWidth";

export const EachProductFromContext = createContext()

export const DetailsEachProduct = ({EachProduct}) => {

    const {type , detailsImage} = EachProduct
    const {pathname} = useLocation();
    const {mainState} = InitialState()
    const {reducer} = ContextReducer()
    const reduxDispatch = useDispatch()
    const {liveWidth} = useGetLiveWidth()
    const [{enableSection, activeOptions, choicesAnswer, choiceOldModel, editAnswer}, contextDispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('detailsPageInfo')) || mainState)

    //dynamic height for image section
    const [divHeight, setDivHeight] = useState();
    const dynamicHeight= useRef()
    useLayoutEffect(()=> {
        setDivHeight(dynamicHeight.current.clientHeight)
    }) // we don't need to dependency because we need update any seconds

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

            <div className='
             container relative max-w-5xl mx-auto
             xs:flex xs:flex-col xs:justify-between xs:items-start
             lg:block
             '>
                <section style={{height : liveWidth > 500 && divHeight}} className='
                xs:w-full xs:relative xs:h-5/6
                lg:w-3/6 lg:absolute lg:left-0
               '>
                    <ActiveImage/>
                </section>

                <section ref={dynamicHeight} className='
                h-auto flex flex-col justify-start items-start gap-2
                xs:w-full xs:relative xs:px-3
                lg:w-3/6  lg:absolute lg:right-0 lg:p-6
                '>
                    <InformationHeader/>

                    <div className='
                    w-full flex
                    xs:h-16 xs:flex-row xs:justify-evenly xs:items-center
                    lg:h-auto lg:flex-col lg::justify-between lg:items-start

                    '>
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
                </section>
            </div>

        </EachProductFromContext.Provider>
    )
}
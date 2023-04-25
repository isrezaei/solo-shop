import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {DetailsEachProduct} from "./DetailsEachProduct";
import {FetchMasterData, selectMasterDataById} from "../../../Redux/MasterDataSlice";
import {Upper_Header} from "../../Header/Upper_Header";
import {Header} from "../../Header/Header";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";


export const DetailsPreRender = () =>
{

    const {productId} = useParams()
    const EachProduct = useSelector(state => selectMasterDataById(state , productId))
    const {status} = useSelector(state => state.MasterDataSlice)
    const dispatch = useDispatch()

    const parentRef = useRef()

    useEffect(()=>{
        if (status === 'idle')
        {
            dispatch(FetchMasterData())
        }
    } , [dispatch , status])



    let Render ;

    if (status === 'pending')
    {
        Render = <h3>Loading ...</h3>
    }
    else if (status === 'success')
    {
        Render = <DetailsEachProduct EachProduct={EachProduct} parentRef={parentRef}/>
    }



    return (
        <div ref={parentRef}>

            <div className='relative max-w-full m-auto scroll-smooth'>
                <Upper_Header/>
                <Header/>
                <div className='w-full relative mx-auto '>
                    {Render}
                </div>
            </div>

        </div>
    )
}
import {useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import {DetailsEachProduct} from "./DetailsEachProduct";
import {FetchMasterData, selectMasterDataById} from "../../../Redux/MasterDataSlice";
import {Upper_Header} from "../../Header/Upper_Header";
import {Header} from "../../Header/Header";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";


export const DetailsPreRender = () => {

    const {productId} = useParams()
    const EachProduct = useSelector(state => selectMasterDataById(state, productId))
    const {status} = useSelector(state => state.MasterDataSlice)
    const dispatch = useDispatch()

    const parentRef = useRef()



    useEffect(() => {
        if (status === 'idle') {
            dispatch(FetchMasterData())
        }
    }, [dispatch, status])


    const location = useLocation()


    const data = location.state?.background;

    console.log(data)



    let Render;

    if (status === 'pending') {
        Render = <h3>Loading ...</h3>
    } else if (status === 'success') {
        Render = <DetailsEachProduct EachProduct={EachProduct} parentRef={parentRef}/>
    }


    return (
        <div ref={parentRef}>
            {Render}
        </div>
    )
}
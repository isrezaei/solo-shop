import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FetchMasterData, selectMasterDataById} from "../../Redux/MasterDataSlice";
import {useEffect} from "react";
import {ModalGalleryProduct} from "./ModalGalleryProduct";

export const ModalGalleryPreRender = () =>
{

    const {productId} = useParams()
    const {status} = useSelector(state => state.MasterDataSlice)
    const EachProduct = useSelector(state => selectMasterDataById(state , productId))
    const dispatch = useDispatch()

    console.log(EachProduct)

    useEffect(()=>{
        if (status === 'idle')
        {
            dispatch(FetchMasterData())
        }
    } , [dispatch , status])

    let render ;
    if (status === 'pending')
    {
        render = 'Loading'
    }
    else if (status === 'success')
    {
        render = <ModalGalleryProduct EachProduct={EachProduct}/>
    }
    return render
}
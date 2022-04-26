import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {DetailsEachProduct} from "./DetailsEachProduct";
import {FetchMasterData, selectMasterDataById} from "../../Redux/MasterDataSlice";
import {useEffect} from "react";

export const DetailsPreRender = () =>
{

    const {productId} = useParams()

    const singleProduct = useSelector(state => selectMasterDataById(state , productId))
    const {status} = useSelector(state => state.MasterDataSlice)

    console.log(status)



    // const dispatch = useDispatch()
    //
    // useEffect(()=>{
    //     if (status === 'idle')
    //     {
    //         dispatch(FetchMasterData())
    //     }
    // } , [dispatch , status])




    let Render ;

    if (status === 'pending')
    {
        Render = <h3>Loading ...</h3>
    }
    else if (status === 'success')
    {
        Render = <DetailsEachProduct singleProduct={singleProduct}/>
    }


    return (
        <div style={{marginTop : '3vw'}}>
            {Render}
        </div>

    )

}
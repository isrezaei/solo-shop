import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {DetailsEachProduct} from "./DetailsEachProduct";
import {selectMasterDataById} from "../../Redux/MasterDataSlice";

export const DetailsPreRender = () =>
{

    const {productId} = useParams()

    const EachProduct = useSelector(state => selectMasterDataById(state , productId))
    const {status} = useSelector(state => state.MasterDataSlice)

    console.log(status)


    let Render ;

    if (status === 'pending')
    {
        Render = <h3>Loading ...</h3>
    }
    else if (status === 'success')
    {
        Render = <DetailsEachProduct EachProduct={EachProduct}/>
    }


    return (
        <div style={{marginTop : '3vw'}}>
            {Render}
        </div>

    )

}
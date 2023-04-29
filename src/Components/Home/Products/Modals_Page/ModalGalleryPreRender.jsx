import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../../../Redux/reducer/MasterDataSlice";
import {ModalGalleryProduct} from "./ModalGalleryProduct";

export const ModalGalleryPreRender = () =>
{
    const {productId} = useParams()
    const EachProduct = useSelector(state => selectMasterDataById(state , productId))

    return <ModalGalleryProduct EachProduct={EachProduct}/>
}
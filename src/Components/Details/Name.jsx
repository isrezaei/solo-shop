import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../Redux/reducer/MasterDataSlice";

export const Name = () => {
    const {productId} = useParams()
    const {product: name} = useSelector(state => selectMasterDataById(state, productId))
    return (
        <p className=' text-neutral-500 text-center xs:text-xs md:text-lg'>{name}</p>
    )
}
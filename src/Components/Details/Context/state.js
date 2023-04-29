import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {selectMasterDataById} from "../../../Redux/reducer/MasterDataSlice";

export const State = () => {
    const {productId} = useParams()
    const {product} = useSelector(state => selectMasterDataById(state, productId))

    const mainState = {
        activeOptions: {
            activeColor: {
                color: null
            },
            activeCapacity: {
                capacity: null
            },
            activeImage: {
                [product]: 'main'
            }
        },

    }
    return {mainState}
}
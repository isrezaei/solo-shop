import {useSelector} from "react-redux";
import {selectCartShopById} from "../../../Redux/reducer/CartShopSlice";
import {selectMasterDataById} from "../../../Redux/reducer/MasterDataSlice";

const Image = ({ids}) => {

    const {activeImage, product} = useSelector(state => selectCartShopById(state, ids))
    const {detailsImage} = useSelector(state => selectMasterDataById(state, ids))

    return (
        <img id='product-image' className='xs:w-24' src={detailsImage[activeImage[product]]} alt={product}/>
    );
};

export default Image;
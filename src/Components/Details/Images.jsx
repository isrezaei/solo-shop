import {useContext} from "react";
import {ProductContext} from "../../page/Details";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../Redux/reducer/MasterDataSlice";

export const Images = () => {

    const {productId} = useParams()
    const {product, detailsImage} = useSelector(state => selectMasterDataById(state, productId))

    const {activeOptions} = useContext(ProductContext)

    const eachImage = Object.keys(JSON.parse(localStorage.getItem('detailsPageInfo'))?.activeOptions?.activeImage || {})?.filter(items => items === product)[0]

    return (
            <div className={"relative overflow-hidden xs:w-72 xs:w-[15rem] xs:h-[17rem] md:w-[18rem] md:h-[18rem]"}>
                <img className={"absolute xs:bottom-7 md:bottom-2"}
                     src={detailsImage[activeOptions.activeImage[eachImage] || 'main']} alt={product}/>
            </div>
    )
}
import {useContext} from "react";
import {EachProductFromContext} from "../Products_Rendering/DetailsEachProduct";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../../Redux/MasterDataSlice";
import {Colors} from "./Ansewers_Comp/Colors";

export const ActiveImage = () => {

    const {productId} = useParams()
    const {product, price, offer, rate, id , detailsImage} = useSelector(state => selectMasterDataById(state, productId))


    const { activeOptions} = useContext(EachProductFromContext)

    console.log(activeOptions)


    const eachImage = Object.keys(JSON.parse(localStorage.getItem('detailsPageInfo'))?.activeOptions?.activeImage || {})?.filter(items => items === product)[0]



    return (
            <div className={"relative overflow-hidden xs:w-72 xs:w-[15rem] xs:h-[17rem] md:w-[18rem] md:h-[18rem]"}>
                <img className={"absolute w-[25rem] xs:bottom-7 md:bottom-2"}
                     src={detailsImage[activeOptions.activeImage[eachImage] || 'main']} alt={product}/>

            </div>
    )
}
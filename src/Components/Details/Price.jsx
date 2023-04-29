import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../Redux/reducer/MasterDataSlice";
import {useParams} from "react-router-dom";
import {Discount} from "../../Helper/Discount";

const Price = () => {

    const {productId} = useParams()
    const {price} = useSelector(state => selectMasterDataById(state, productId))

    const discount = Discount()

    return (
        <div className={"flex w-full space-x-2 "}>
            <span
                className={"w-full rounded-md bg-pink-50 px-2 py-1 text-xs text-center line-through font-xs text-pink-700 ring-1 ring-inset ring-pink-700/10"}>${price}</span>
            <span
                className={"w-full rounded-md bg-lime-50 px-2 py-1 text-xs text-center text-green-700 ring-1 ring-inset ring-green-600/20"}>${discount}</span>
        </div>
    );
};

export default Price;
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../../Redux/MasterDataSlice";
import Images from "./Images";
import Names from "./Names";
import Rate from "./Rate";

export const Items = ({ids}) => {


    const {product, image, id, price, rate, quantity, color} = useSelector(state => selectMasterDataById(state, ids))

    console.log(color)


    return (
        <div className={`animate__animated animate__backInUp animate__faster m-auto
    
        xs:w-44 xs:h-60 xs:my-4
        md:w-52 md:h-64 
        bg-white rounded-xl flex flex-col items-center overflow-hidden`}>
            <Images
                id={id}
                image={image}
                product={product}
                price={price}
                color={color}
                quantity={quantity}/>
            <div className={"absolute top-8"}>
                <Names
                    product={product}/>
                <Rate
                    rate={rate}
                    id={id}/>
                {!color && <p className={"text-xs text-rose-400 text-center"}>unavailable</p>}
            </div>
        </div>

    )
}
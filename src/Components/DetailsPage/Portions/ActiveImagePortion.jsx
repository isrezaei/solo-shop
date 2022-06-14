import {useContext} from "react";
import {EachProductDetailsData} from "../DetailsEachProduct";
export const ActiveImagePortion = () =>
{
    const {detailsImage , activeOptions , product} = useContext(EachProductDetailsData)
    return (
        <>
            <img className='w-full sticky top-0 z-10 m-auto' src={detailsImage[activeOptions.activeImage]} alt={product}/>
            <div>
                <div>
                    <p>Get free delivery, or pick up available items at an Apple Store</p>
                </div>
                <div>
                    <p>Free and easy returns</p>
                </div>
            </div>
        </>
    )
}
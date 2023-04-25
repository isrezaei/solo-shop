import Wishlist from "./Wishlist";
import Card from "./Card";

export const Info = () => {
    return (
        <div className='
        flex items-center space-x-5
        xs:w-full xs:justify-around
        '>
            <Wishlist/>
            <Card/>
        </div>
    )
}
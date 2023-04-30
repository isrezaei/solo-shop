import {useSelector} from "react-redux";
import {selectCartShopById} from "../../../Redux/reducer/CartShopSlice";

const Color = ({ids}) => {
    const {activeColor,} = useSelector(state => selectCartShopById(state, ids))

    return (
        <span className='p-2 xs:rounded-full lg:rounded-full' style={{background: activeColor.color}}/>
    );
};

export default Color;
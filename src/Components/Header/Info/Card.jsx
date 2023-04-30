import {RiShoppingCart2Line} from "react-icons/ri";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Card = () => {

    const navigation = useNavigate()

    const {totalQuantity, totalPrice} = useSelector(state => state.MasterDataSlice)

    return (
        <section className=' flex relative justify-evenly items-center rounded-3xl space-x-2'>

            <div className={"relative"} onClick={() => navigation("/cart-shop")}>
                <RiShoppingCart2Line className='xs:text-2xl xs:text-gray-500   '/>
            </div>

            <div className='flex justify-center items-center space-x-3'>
                  <span className="flex items-center rounded-sm  text-xs ">
                    {totalQuantity}
                </span>

                <span className='xs:text-xs xs:text-neutral-800'>${totalPrice.toFixed(2)}</span>
            </div>

        </section>
    );
};

export default Card;
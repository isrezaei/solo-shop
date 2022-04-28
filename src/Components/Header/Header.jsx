import {useSelector} from "react-redux";
import {FiSearch} from 'react-icons/fi'
import {CgShoppingBag} from 'react-icons/cg'
import {FaRegHeart} from 'react-icons/fa'


export const Header = () =>
{

    const {totalQuantity , totalPrice} = useSelector(state => state.MasterDataSlice)

    const NumberFormat = new Intl.NumberFormat('en-IN').format(totalPrice)


    return (
        <div className='w-full bg-amber-400 h-20 flex justify-around'>


            <div className='w-1/4 bg-emerald-600 flex justify-between items-center'>

                <div className=' bg-amber-200 text-3xl flex items-center'>
                    <p>PhoneFlu</p>
                </div>


                <div className=' bg-emerald-200 flex justify-center items-center'>
                    <input/>
                    <span>All Categories</span>
                    <span><FiSearch/></span>
                </div>

            </div>




            <div className='w-48 flex justify-evenly bg-blue-400'>



                <section>
                    <span>wishlist</span>
                    <div>
                        <span><FaRegHeart/></span>
                        <span>0</span>
                    </div>
                </section>


                <section>
                    <span>card</span>
                    <div>
                        <span><CgShoppingBag/></span>
                        <span>0 $</span>
                    </div>

                </section>

            </div>

        </div>
    )
}


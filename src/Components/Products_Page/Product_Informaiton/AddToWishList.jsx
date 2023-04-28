import {RiBookmarkLine , RiBookmarkFill} from "react-icons/ri";
import {useDispatch} from "react-redux";
import {addToWishList , removeToWishList} from "../../../Redux/WishListSlice";

import {useSelector} from "react-redux";
import {selectWishListById} from "../../../Redux/WishListSlice";
import {useParams} from "react-router-dom";
import {selectMasterDataById} from "../../../Redux/MasterDataSlice";

export const AddToWishList = () =>
{
    const {productId} = useParams()

    const EachProductData = useSelector(state => selectMasterDataById(state , productId))

    const wishListProducts = useSelector(state => selectWishListById(state , productId))

    const dispatch = useDispatch()
    const handelClick = () =>
    {
        if (wishListProducts)
        {
            dispatch(removeToWishList(productId))
        }
        if (!wishListProducts)
        {
            dispatch(addToWishList(EachProductData))
        }
    }
    return (
        <div className='w-full h-36 flex flex-col justify-between items-center '>
            <div className='w-full flex justify-between items-center my-3'>
                <div className='w-8/12 flex flex-col justify-between items-start gap-2'>
                    <p className='xs:text-[1rem] lg:text-lg font-bold text-neutral-500'>Still deciding?</p>
                    <p className='xs:text-sm lg:text-[.9rem] text-gray-600'>Add this item to a list and easily come back to it later.</p>
                </div>
                {
                    wishListProducts ?
                        <RiBookmarkFill className='xs:text-2xl  cursor-pointer text-blue-700' onClick={handelClick}/> :
                        <RiBookmarkLine className='xs:text-2xl  cursor-pointer text-blue-700' onClick={handelClick}/>
                }
            </div>
        </div>
    )
}
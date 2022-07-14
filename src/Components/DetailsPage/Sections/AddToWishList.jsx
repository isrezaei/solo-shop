import {RiBookmarkLine , RiBookmarkFill} from "react-icons/ri";
import {useDispatch} from "react-redux";
import {addToWishList , removeToWishList} from "../../../Redux/WishListSlice";
import {useContext} from "react";
import {EachProductFromContext} from "../DetailsEachProduct";
import {useSelector} from "react-redux";
import {selectWishListById} from "../../../Redux/WishListSlice";
import {useParams} from "react-router-dom";

export const AddToWishList = () =>
{
    const {productId} = useParams()
    const {EachProductFromRedux} = useContext(EachProductFromContext)

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
            dispatch(addToWishList(EachProductFromRedux))
        }
    }
    return (
        <div className='w-full h-36 flex flex-col justify-between items-center '>
            <div className='w-full flex justify-between items-center'>
                <div className='w-8/12 flex flex-col justify-between items-start'>
                    <p className='text-xl font-bold'>Still deciding?</p>
                    <p>Add this item to a list and easily come back to it later.</p>
                </div>
                {
                    wishListProducts ?
                        <RiBookmarkFill className='text-3xl cursor-pointer' onClick={handelClick}/> :
                        <RiBookmarkLine className='text-3xl cursor-pointer' onClick={handelClick}/>
                }
            </div>
        </div>
    )
}
import {RiBookmarkLine} from "react-icons/ri";

export const AddToWishList = () =>
{
    return (
        <div className='w-full h-36 flex flex-col justify-between items-center '>
            <div className='w-full flex justify-between items-center'>
                <div className='w-8/12 flex flex-col justify-between items-start'>
                    <p className='text-xl font-bold'>Still deciding?</p>
                    <p>Add this item to a list and easily come back to it later.</p>
                </div>
                <RiBookmarkLine className='text-3xl'/>
            </div>
        </div>
    )
}
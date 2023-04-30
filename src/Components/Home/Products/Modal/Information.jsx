import {RiFileCopy2Fill} from 'react-icons/ri'
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../../../Redux/reducer/MasterDataSlice";

export const Information = ({ids}) => {

    const {introduction, price, offer, product} = useSelector(state => selectMasterDataById(state, ids))
    return (
        <div className='flex justify-center items-center w-full  overflow-hidden'>
            <div className='bg-white rounded-xl xs:w-full xs:flex xs:flex-col xs:justify-center xs:items-center'>
                <section className='xs:w-full flex flex-col justify-center items-start'>
                    <p className='xs:text-sm text-neutral-500'>{product}</p>
                    <section
                        className='text-xl flex justify-start items-center space-x-5 py-2 '>
                        <div className='text-gray-600'>
                            {
                                price === 'out' ?
                                    <p className='text-red-500 xs:text-sm'>out of stock</p>
                                    :
                                    <p className='xs:text-sm text-neutral-500'>${(price - (price * offer / 100)).toFixed(2)}</p>
                            }
                        </div>
                        <div className='text-lg line-through text-rose-500'>
                            {
                            price !== 'out' &&
                            <p className='xs:text-sm'>${price}</p>
                        }
                        </div>
                    </section>
                    <p className='xs:text-sm border-y-2 flex justify-center items-center text-gray-500 py-3'>{introduction}</p>
                    <div className='flex flex-col justify-center items-center space-y-1 my-3'>
                        <p className='xs:text-sm font-bold text-neutral-500'>SHARE THIS PRODUCT</p>
                        <div className='w-full flex justify-start items-center cursor-pointer'>
                            <p className='xs:text-sm mr-2 text-gray-400 hover:text-lime-700'>Copy Link Product</p>
                            <RiFileCopy2Fill className='xs:text-xl text-lime-500'/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
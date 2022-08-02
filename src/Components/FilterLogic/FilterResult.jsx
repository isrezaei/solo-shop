import {useSelector} from "react-redux";
import {SortByFilter} from "../../Redux/MasterDataSlice";
import {FilterProductSlice} from "../../Redux/FilterProductSlice";



export const FilterResult = () =>
{


    const filteredProduct = useSelector(state => SortByFilter(state , state.FilterProductSlice))
        .map(products => {

            const {id , product , price , color , image , detailsImage , capacity , offer} = products

            const discountedPrice = parseInt((price - ((price * offer) / 100)))

            return (

                <div className='w-44 h-56 p-1 bg-gray-100 flex flex-col justify-center items-center' key={id}>

                    <div className='w-full h-96 flex justify-center items-center'>
                        <img className='w-20 ' src={image?.mainImg}/>
                    </div>

                    <div className='h-full flex flex-col gap-1 '>

                        <p className='w-full text-sm font-bold text-gray-600 text-center'>{product}</p>


                        <div className='w-full flex flex-col justify-start items-center '>
                            {
                                price === 'out' ? <p className='font-bold text-rose-600'>out of stock</p>
                                    : <p className={`${offer !== 0 ? 'opacity-50 font-bold line-through text-red-700' : 'text-gray-500 font-bold'}`}>${price}</p>
                            }
                            <div className='text-gray-500 font-bold'>{price !== 'out' && offer !== 0 &&  <p>${discountedPrice}</p>}</div>
                        </div>


                    </div>
                </div>
            )

        })



    return (
        <div className='w-9/12 p-5 max-h-max bg-white grid grid-cols-7 justify-center items-center gap-3'>
            {filteredProduct}
        </div>
    )
}
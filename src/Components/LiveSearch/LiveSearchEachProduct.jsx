import {useSelector} from "react-redux";

export const LiveSearchEachProduct = ({products}) =>
{


    const {id , product , price , color , image , detailsImage , capacity} = products

    console.log(products)

    // const liveSearchData = useSelector(state => state.LiveSearchSlice.resultOfLiveSearch)
    //
    // console.log(liveSearchData)

    return (
        <div className=' bg-red-500 m-3 flex flex-col justify-start items-start gap-1'>

            <img className='w-20' src={image.mainImg}/>
            <p>{product}</p>
            <p>{price}</p>



        </div>
    )
}
import {filterByProduct} from "../../../../Redux/FilterProductSlice";
import {useSelector} from "react-redux";
import {selectAllMasterData} from "../../../../Redux/MasterDataSlice";
import {useDispatch} from "react-redux";

const Product = () => {

    const dispatch = useDispatch()
    const products = useSelector(selectAllMasterData)

    const {product: filteredProduct} = useSelector(state => state.FilterProductSlice)

    return ['iphone', 'ipad'].map(items => {

        return (
            <div key={items} className='
            flex w-full items-center
            xs:justify-center
            md:justify-between
            lg:justify-between'>
                <div className='w-20 flex justify-start items-center gap-2 my-1'>
                    <input className='xs:rounded-full checked:bg-neutral-400' type='checkbox'
                           checked={filteredProduct === items}
                           onChange={() => filteredProduct === items ? dispatch(filterByProduct()) : dispatch(filterByProduct(items))}/>
                    <p>{items}</p>
                </div>
                <div className='
                w-8 h-5 bg-neutral-400 text-white flex justify-center items-center
                xs:rounded-full xs:text-[.8rem]
                md:text-sm'>{products.filter(data => data.type === items).length}</div>
            </div>
        )
    })
};

export default Product;
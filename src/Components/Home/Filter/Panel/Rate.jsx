import {filterByStars} from "../../../../Redux/FilterProductSlice";
import {RatingStar} from "rating-star";
import {useDispatch, useSelector} from "react-redux";

const Rate = () => {

    const {stars : filteredStars} = useSelector(state => state.FilterProductSlice)

    const dispatch = useDispatch()

    return Array.from(Array(5).keys()).map(stars => {
        return (
            <div key={stars} className='flex justify-center items-center'>
                <input className='xs:rounded-full checked:bg-neutral-400' type='checkbox'
                       checked={filteredStars === stars}
                       onChange={() => filteredStars === stars ? dispatch(filterByStars()) : dispatch(filterByStars(stars))}/>
                <RatingStar id={stars.toString()} rating={stars} noBorder={true} size={18}/>
            </div>
        )

    }).reverse()

};

export default Rate;
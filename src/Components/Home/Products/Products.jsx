import {Items} from "./Items";
import {useSelector} from "react-redux";
import {SortBySelect} from "../../../Redux/reducer/MasterDataSlice";
import Slider from "react-slick";
import {settings} from "../ReactSlick.config";

export const Products = () => {

    const {selectProduct} = useSelector(state => state.SelectProductSlice)

    const MasterDataIds = useSelector(state => SortBySelect(state, state.MasterDataSlice.sortBy))

    const Render =  MasterDataIds.filter(items => items.type === selectProduct).map(items => <Items key={items.id} ids={items.id}/>)

    return (
        <Slider arrows={false} {...settings}>
            {Render}
        </Slider>
    )
}
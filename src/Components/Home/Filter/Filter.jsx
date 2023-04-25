import {useSelector} from "react-redux";
import Badge from "./Badge";
import Products from "./Products";
import {settings} from "../ReactSlick.config";
import {SortByFilter} from "../../../Redux/MasterDataSlice";
import Slider from "react-slick";

export const Filter = () => {

    const {stars, product, price} = useSelector(state => state.FilterProductSlice)

    const Response = useSelector(state => SortByFilter(state, state.FilterProductSlice))?.map(products => <Products key={products.id} product={products}/>)

    return (
        <>
            <Badge
                price={price}
                product={product}
                stars={stars}/>

            <Slider arrows={false} {...settings}>
                {Response}
            </Slider>
        </>

    )
}
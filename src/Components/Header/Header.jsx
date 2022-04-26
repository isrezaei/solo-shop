import {useSelector} from "react-redux";

export const Header = () =>
{

    const {totalQuantity , totalPrice} = useSelector(state => state.MasterDataSlice)

    const NumberFormat = new Intl.NumberFormat('en-IN').format(totalPrice)


    return (
        <div style={{width : '100%' , height : '3vw'}}>

            <h3>Box Count = {totalQuantity}</h3>
            <h3>Total price = {NumberFormat} $</h3>
        </div>
    )
}
import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../Redux/MasterDataSlice";


export const HomeEachProduct = ({ids}) =>
{

    const EachProduct = useSelector(state => selectMasterDataById(state , ids))

    console.log(EachProduct)

    const {product , image } = EachProduct



    return (


            <div style={{display : "flex" , flexDirection : 'column' , alignItems : "center"}}>
                <img style={{width : '10vw'}} src={image.mainImg} alt={product}/>
                <h4>{product}</h4>
            </div>

    )
}
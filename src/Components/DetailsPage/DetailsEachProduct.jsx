import {QuantityGlobal} from "../QuantityHandel/QuantityGlobal";
import {TiPlus} from "react-icons/ti";
import {RiDeleteBinLine} from "react-icons/ri";

export const DetailsEachProduct = ({EachProduct}) =>
{

    const {introduction , image , product , brand , price , id ,quantity} = EachProduct

    const { HaveQuantity, CheckQuantity, AddQuan, IncQuan, DecQuan, RemQuan} = QuantityGlobal(EachProduct)


    return (
        <div style={{marginTop : '3vw'}}>
            <div>
                <img src={image.mainImg} alt={product} style={{width : '20vw'}}/>
                <h3>{price} $</h3>
                <h3>{product}</h3>
                <h4>{brand}</h4>
                <h3>{introduction}</h3>

                <div style={{  width : '20%' ,display : 'flex' ,  justifyContent : 'space-evenly', alignItems : 'center'}}>

                    <div className='w-6/12 flex justify-evenly items-center h-10'>

                        {
                            HaveQuantity(id) ?

                                <TiPlus onClick={IncQuan} className='text-base text-indigo-400'/>
                                :

                                <div className='flex w-full ' onClick={AddQuan}>
                                    <p className='font-medium'>Add to cart</p>
                                </div>
                        }

                        <p className='text-xl'> {quantity}</p>

                        {CheckQuantity(id) === 1 && <RiDeleteBinLine onClick={RemQuan} className='text-base text-rose-500'/>}
                        {CheckQuantity(id) > 1 && <button onClick={DecQuan}>-</button>}

                    </div>

                </div>
            </div>
        </div>

    )

}
import {QuantityGlobal} from "../QuantityHandel/QuantityGlobal";
import {TiPlus} from "react-icons/ti";
import {RiDeleteBinLine} from "react-icons/ri";

export const DetailsEachProduct = ({EachProduct}) =>
{

    const {introduction , image , product , brand , price , id ,quantity} = EachProduct

    const { HaveQuantity, CheckQuantity, AddQuan, IncQuan, DecQuan, RemQuan} = QuantityGlobal(EachProduct)


    return (
        <div className='container max-w-5xl bg-amber-500 mx-auto flex justify-evenly items-start gap-10 py-5'>

            <section>
                <img className='w-48' src={image.mainImg} alt={product}/>


                <div>

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
            </section>

            <section className='w-3/6 bg-blue-300 flex flex-col justify-start items-start gap-3'>
                <p className='text-3xl font-bold'>Buy {product}</p>
                <p className='text-lg font-medium'>Get $110–$700 off when you trade in an {product} or newer</p>

                <label htmlFor='select-color' className='text-lg'>Choose your color</label>
                <div id='select-color' className='grid grid-cols-2 grid-rows-2 gap-4'>

                    <div className='w-48 h-28 bg-amber-500 flex flex-col justify-center items-center gap-2 rounded-2xl border-2 border-blue-600'>
                        <div>
                            <div className='w-9 h-9 bg-red-700 rounded-full'> </div>
                            <div className='text-center'>color</div>
                        </div>
                    </div>
                    <div className='w-48 h-28 bg-green-700 flex flex-col justify-center items-center gap-2 rounded-2xl'>
                        <div>
                            <div className='w-9 h-9 bg-red-700 rounded-full'> </div>
                            <div className='text-center'>color</div>
                        </div>
                    </div>
                    <div className='w-48 h-28 bg-amber-300 flex flex-col justify-center items-center gap-2 rounded-2xl'>
                        <div>
                            <div className='w-9 h-9 bg-red-700 rounded-full'> </div>
                            <div className='text-center'>color</div>
                        </div>
                    </div>

                </div>

                <label htmlFor='select-Capacity' className='text-lg'>Choose your capacity</label>
                <div id='select-Capacity' className='grid grid-cols-2 grid-rows-2 gap-4'>

                    <div className='w-48 h-28 bg-amber-500 flex flex-col justify-center items-center gap-2 rounded-2xl border-2 border-blue-600'>
                        <div>
                            <div className=''>
                                <p>128</p>
                                <p>GB</p>
                            </div>
                            <div className='text-center'>from $799</div>
                        </div>
                    </div>
                    <div className='w-48 h-28 bg-green-700 flex flex-col justify-center items-center gap-2 rounded-2xl'>
                        <div>
                            <div className=''>
                                <p>128</p>
                                <p>GB</p>
                            </div>
                            <div className='text-center'>from $799</div>
                        </div>
                    </div>
                    <div className='w-48 h-28 bg-amber-300 flex flex-col justify-center items-center gap-2 rounded-2xl'>
                        <div>
                            <div className=''>
                                <p>128</p>
                                <p>GB</p>
                            </div>
                            <div className='text-center'>from $799</div>
                        </div>
                    </div>

                </div>


            </section>

        </div>

    )

}
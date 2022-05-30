import {QuantityGlobal} from "../QuantityHandel/QuantityGlobal";
import {TiPlus} from "react-icons/ti";
import {RiDeleteBinLine , RiBookmarkLine , RiBookmarkFill} from "react-icons/ri";
import {FaRegBookmark} from "react-icons/fa"
import {RatingStar} from "rating-star";

export const DetailsEachProduct = ({EachProduct}) =>
{

    const {introduction , image , product , brand , price , id ,quantity , rate , type} = EachProduct

    const { HaveQuantity, CheckQuantity, AddQuan, IncQuan, DecQuan, RemQuan} = QuantityGlobal(EachProduct)


    return (

        <>

            <div className='container relative h-screen max-w-5xl bg-amber-500 mx-auto'>

                <section className='bg-red-700 w-80 h-full absolute left-0'>

                    <img className='w-80 sticky top-0 z-10' src={image.mainImg} alt={product}/>

                </section>


                <section className='w-3/6 absolute right-0 bg-blue-300 flex flex-col justify-start items-start gap-2 p-6'>

                    <p className='text-3xl font-bold'>Buy {product}</p>

                    <div>
                        <p className='text-lg font-medium'>Get $110–$700 off when you trade in an {product} or newer</p>
                        <p className='text-lg text-blue-700'>See how trade-in works</p>
                    </div>


                    <div className='w-48 flex justify-start items-center'>
                        <p>{rate} / 5</p>
                        <RatingStar id={id.toString()} rating={rate} size={17}/>
                    </div>

                    <div>
                        <span className='flex justify-start items-center gap-2 w-48'> <p className='font-bold text-lg'>Category :</p> <p className='text-lg'>{type}</p></span>
                        <span className='flex justify-start items-center gap-2 w-48'> <p className='font-bold text-lg'>Brand :</p> <p className='text-lg'>{brand}</p></span>
                    </div>


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
                    <p>How much capacity is right for you?</p>
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

                    <p>Do you have a smartphone to trade in with Apple?</p>

                    <div className='flex justify-start items-center gap-4'>

                        <div className='w-48 h-16 bg-green-700 flex flex-col justify-center items-center gap-2 rounded-2xl border-2 border-blue-600'>
                            Yes
                        </div>
                        <div className='w-48 h-16 bg-amber-300 flex flex-col justify-center items-center gap-2 rounded-2xl'>
                            No
                        </div>

                    </div>


                    <p>Which model do you have?</p>
                    <p>On your iPhone, go to Settings > Your Name. Scroll down to see the model. On other smartphones, go to Settings > About phone.</p>
                    <p>If your model is part of the iPhone Upgrade Program, <a className='text-blue-700' href='https://secure5.store.apple.com/shop/eligibility/upgradeEligibilitySignInOptions'>check your upgrade eligibility and trade inOpens in new window.</a></p>


                    <div className='w-8/12 bg-white flex flex-col justify-center items-start border border-gray-600 rounded-2xl p-2'>
                        <label htmlFor='select-model' className='ml-3'>Choose your model</label>
                        <select id='select-model' className='w-full h-9 border-none'>
                            <option>Select</option>
                        </select>
                    </div>



                    <button className='w-96 h-11 bg-blue-700 rounded-xl'>Continue</button>


                    <div className='w-full flex justify-between items-center'>
                        <div className='w-8/12'>
                            <p className='text-xl font-bold'>Still deciding?</p>
                            <p>Add this item to a list and easily come back to it later.</p>
                        </div>
                        <RiBookmarkLine className='text-3xl'/>
                    </div>

                </section>

            </div>

            <div className='w-80 h-screen bg-blue-700 relative'>

            </div>


        </>

    )

}
import {QuantityGlobal} from "../QuantityHandel/QuantityGlobal";
import {RiBookmarkLine} from "react-icons/ri";
import {RatingStar} from "rating-star";
import {useReducer, useState} from "react";


const initialState = {

    enableSection : {
        enableSectionCapacity : false,
        enableSectionTrade : false,
        enableSectionCondition : false,
    },
    activeOptions : {
        activeColor : '',
        activeCapacity : ''
    },

    choicesAnswer : {
        haveOldPhone : ''
    }
}

function reducer(state, action) {
    switch (action.type) {
        case 'enableSection / enableSectionCapacity':
            return {
                ...state,
                enableSection : {
                    ...state.enableSection,
                    enableSectionCapacity: true
                }
            }
        case 'enableSection / enableSectionTrade':
            return {
                ...state,
                enableSection : {
                    ...state.enableSection,
                    enableSectionTrade: true
                }
            }
        case 'activeOptions / activeColor' :
            return {
                ...state,
                activeOptions : {
                    ...state.activeOptions,
                    activeColor : action.payload
                }
            }
        case 'activeOptions / activeCapacity' :
            return {
                ...state,
                activeOptions : {
                    ...state.activeOptions,
                    activeCapacity : action.payload
                }
            }

        case 'choicesAnswer / haveOldPhone' :
            return {
                ...state ,
                choicesAnswer : {
                    ...state.choicesAnswer,
                    haveOldPhone : action.payload
                }
            }
        default:
            return state
    }
}


export const DetailsEachProduct = ({EachProduct}) =>
{
    const {introduction , image , product , brand , price , id ,quantity , rate , type , color , capacity} = EachProduct

    const { HaveQuantity, CheckQuantity, AddQuan, IncQuan, DecQuan, RemQuan} = QuantityGlobal(EachProduct)



    const [{enableSection , activeOptions , choicesAnswer} , dispatch] = useReducer(reducer , initialState)


    const stepColor = (colors) =>
    {
        dispatch({type : 'enableSection / enableSectionCapacity'})
        dispatch({type : 'activeOptions / activeColor' , payload : colors})
    }

    const stepCapacity = (Capacity) =>
    {
        dispatch({type : 'enableSection / enableSectionTrade'})
        dispatch({type : 'activeOptions / activeCapacity' , payload : Capacity})
    }

    const stepTrade = (answer) =>
    {
        dispatch({type : 'choicesAnswer / haveOldPhone' , payload : answer})
    }

    const setColor = color.map(colors => {
        return (
            <div key={colors} onClick={()=>stepColor(colors)} className={`w-48 h-28 flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400 ${activeOptions.activeColor === colors && 'border-2 border-blue-600'}`}>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <div style={{background : colors}} className='w-9 h-9 rounded-full shadow-inner'> </div>
                    <div className='text-center'>{colors}</div>
                </div>
            </div>
        )
    })

    const setCapacity = capacity.map(capacity => {
        return (
            <div key={capacity} onClick={()=> stepCapacity(capacity)} className={`w-48 h-28 flex flex-col justify-center items-center gap-2 rounded-2xl border border-gray-400 ${activeOptions.activeCapacity === capacity && 'border-2 border-blue-600'}`}>
                <div>
                    <div className='flex justify-center items-center gap-1'>
                        <p className='text-3xl'>{capacity}</p>
                        <p className='text-lg'>GB</p>
                    </div>
                    <div className='text-center'>from ${price}</div>
                </div>
            </div>
        )
    })

    return (

        <>

            <div className='container relative max-w-4xl  mx-auto h-220 '>

                <section className='bg-red-700 w-80 h-full absolute left-0'>

                    <img className='w-72 sticky top-0 z-10 m-auto' src={image.mainImg} alt={product}/>

                    <div>
                        <div>
                            <p>Get free delivery, or pick up available items at an Apple Store</p>
                        </div>

                        <div>
                            <p>Free and easy returns</p>
                        </div>
                    </div>

                </section>


                <section className='w-3/6 absolute right-0  flex flex-col justify-start items-start gap-2 p-6'>

                    <p className='text-3xl font-bold'>Buy {product}</p>

                    <div className='h-24 flex flex-col justify-between items-start'>
                        <p className='text-lg font-medium'>Get $110–$700 off when you trade in an {product} or newer</p>
                        <p className='text-lg text-blue-700'>See how trade-in works</p>
                    </div>


                    <div className='w-48 h-11 flex justify-start items-center'>
                        <div className='flex justify-start items-center gap-1'> <p className='text-2xl font-bold'>{rate}</p>/ 5</div>
                        <RatingStar id={id.toString()} rating={rate} size={20}/>
                    </div>

                    <div className='h-16 flex flex-col justify-center items-start'>
                        <span className='flex justify-start items-center gap-2 w-48'> <p className='font-bold text-lg'>Category :</p> <p className='text-lg'>{type}</p></span>
                        <span className='flex justify-start items-center gap-2 w-48'> <p className='font-bold text-lg'>Brand :</p> <p className='text-lg'>{brand}</p></span>
                    </div>


                    <label htmlFor='select-color' className='text-xl font-bold mt-4'>Choose your color</label>

                    <div id='select-color' className='grid pb-7 grid-cols-2 grid-rows-2 gap-4 border-b border-gray-400'>
                        {setColor}
                    </div>

                    <div className={`w-full pb-7 flex flex-col justify-center items-start gap-1 mt-3 border-b border-gray-400 ${!enableSection.enableSectionCapacity && 'pointer-events-none opacity-30' }`}>
                        <label htmlFor='select-Capacity' className='text-lg font-bold'>Choose your capacity</label>
                        <p className='text-blue-700'>How much capacity is right for you?</p>
                        <div id='select-Capacity' className='grid grid-cols-2 grid-rows-2 gap-4'>

                            {setCapacity}

                        </div>
                    </div>


                    <div className={
                        `w-full transition-all flex flex-col justify-start items-center gap-4
                         ${choicesAnswer.haveOldPhone === 'Yes' ? 'overflow-visible h-96' : 'overflow-hidden h-40'} 
                         ${!enableSection.enableSectionTrade && 'pointer-events-none opacity-30' }
                         `}>


                        <p className='font-bold text-lg mt-3'>Do you have a smartphone to trade in with Apple?</p>
                        <div className='flex justify-center items-center gap-3'>
                            {
                                ['Yes' , 'No'].map(answer => {
                                        return (
                                            <div key={answer}
                                                 onClick={()=> stepTrade(answer)}
                                                 className={`w-48 h-14 text-xl flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400 ${choicesAnswer.haveOldPhone === answer && 'border-2 border-blue-600'}`}> {answer}</div>
                                        )
                                    }
                                )
                            }
                        </div>

                        <div className='w-full mt-3'>

                            <p className='font-bold'>Which model do you have?</p>
                            <p className='mt-1 text-sm'>On your iPhone, go to Settings > Your Name. Scroll down to see the model. On other smartphones, go to Settings > About phone.</p>
                            <p className='mt-3 text-sm'>If your model is part of the iPhone Upgrade Program <a className='text-blue-700' href='https://secure5.store.apple.com/shop/eligibility/upgradeEligibilitySignInOptions'>check your upgrade eligibility and trade inOpens in new window.</a></p>

                            <div className='w-full flex flex-col justify-center items-start mt-5'>
                                <label htmlFor='select-model' className='font-bold text-lg'>Choose your model</label>
                                <select id='select-model' className='w-full mt-1  border rounded-xl flex justify-start items-start'>
                                    <option>Select</option>
                                </select>
                            </div>

                        </div>

                    </div>




                    <div className='w-full mt-3 hidden'>
                        <p className='font-bold text-lg'>Is the iPhone in good condition?</p>
                        <p className='text-sm mt-1'>Answer yes if all of the following apply :</p>
                        <ul className='list-disc text-sm px-5 mt-1'>
                            <li>It turns on and functions normally</li>
                            <li>All the buttons work</li>
                            <li>The cameras work and all lenses are free of damage</li>
                            <li>The body is free of dents and scratches</li>
                            <li>The touchscreen and back glass are undamaged</li>
                            <li>The display is free from distortion, lines, and black or white spots.</li>
                        </ul>

                        <div className='flex justify-start items-center gap-4 mt-3'>


                            <div className={`w-48 h-14 text-xl flex flex-col justify-center items-center gap-2 rounded-xl`}>
                                Yes
                            </div>
                            <div className='w-48 h-14 text-xl flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400'>
                                No
                            </div>

                        </div>
                    </div>




                    <button className='w-full h-11 bg-blue-700 rounded-xl mt-10 pointer-events-none opacity-30'>Continue</button>


                    <div className='w-full flex justify-between items-center mt-3'>
                        <div className='w-8/12'>
                            <p className='text-xl font-bold'>Still deciding?</p>
                            <p>Add this item to a list and easily come back to it later.</p>
                        </div>
                        <RiBookmarkLine className='text-3xl'/>
                    </div>


                </section>

            </div>

            <div>
                Hello
            </div>



        </>

    )

}
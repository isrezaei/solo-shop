import Slider from "r-range-slider";
import {useState} from "react";
import {filterByPrice} from "../../Redux/FilterProductSlice";
import {useDispatch, useSelector} from "react-redux";

export const RangeSlider = () =>
{

    const dispatch = useDispatch()

    const [range , setRange] = useState(
        {
            startPoint : 100 ,
            endPoint : 3000
        }
    )
    const {startPoint , endPoint} = range

    return (
        <div className='z-0'>
            <Slider
                start={100}
                end={3000}
                points={[startPoint , endPoint]}
                showValue={true}
                valueStyle={()=>{
                    return {
                        background:'rgba(112,112,112,0.63)',
                        fontSize: 12,
                        top: -37 ,
                        borderRadius : 100
                    }}}
                onChange={(points)=> {
                    setRange({
                        startPoint : points[0],
                        endPoint : points[1]
                    })
                }}
                editValue={(value)=> '$ '+ value}

                pointStyle={()=>{
                    return {
                        width : 18,
                        height : 18,
                        background : 'white',
                        border : '2px solid rgba(112,112,112,0.63)'
                    }
                }}

                fillStyle={(index)=>{
                    if(index === 1){
                        return {
                            height : 3 ,
                            background:'rgba(112,112,112,0.63)'
                        }
                    }
                }}
                lineStyle = {()=> {
                    return {
                        height : 3,
                        background : '#eceff1',
                        borderRadius : 100
                    }
                }}
            />

            <div className='
            flex justify-between items-center
            xs:w-60
            md:w-80'>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <p className='text-sm font-bold text-gray-500'>Min</p>
                    <input className='
                    border-gray-300 rounded-full text-center
                    xs:w-20 xs:h-8 xs:text-sm'type='number' disabled placeholder={startPoint}/>
                </div>

                <div className='flex flex-col justify-center items-center gap-1'>
                    <p className='text-sm font-bold text-gray-500'>Max</p>
                    <input className='
                    border-gray-300 rounded-full text-center
                    xs:w-20 xs:h-8 xs:text-sm
                    'type='number' disabled placeholder={endPoint}/>
                </div>
            </div>

            <button className='
            w-full bg-neutral-400 text-center text-white text-sm
            xs:h-7 xs:my-5 xs:rounded-2xl
            md:h-8 md:my-8
             ' onClick={()=> dispatch(filterByPrice(range))}>Set this price</button>
        </div>
    )

}
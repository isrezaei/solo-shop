import Slider from "r-range-slider";
import {useState} from "react";
import {filterByPrice} from "../../Redux/FilterProductSlice";
import {useDispatch} from "react-redux";

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

    console.log(startPoint)

    return (
        <div className='z-0'>
            <Slider
                start={100}
                end={3000}
                points={[startPoint , endPoint]}
                showValue={true}
                valueStyle={()=>{
                    return {
                        background:'#2962ff',
                        fontSize: 13,
                        top: -38 ,
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
                        border : '2px solid #2962ff'
                    }
                }}

                fillStyle={(index)=>{
                    if(index === 1){
                        return {
                            height : 3 ,
                            background:'#2962ff'
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

            <div className='w-80 flex justify-between items-center'>
                <div className='flex flex-col justify-center items-start gap-1'>
                    <p className='font-bold text-gray-500'>Min</p>
                    <input className='w-24 border-gray-300' type='number' disabled placeholder={startPoint}/>
                </div>
                <div className='flex flex-col justify-center items-start gap-1'>
                    <p className='font-bold text-gray-500'>Max</p>
                    <input className='w-24 border-gray-300' type='number' disabled placeholder={endPoint}/>
                </div>
            </div>
            <button className='w-full h-10 bg-blue-600 text-center text-white mt-8' onClick={()=> dispatch(filterByPrice(range))}>Apply</button>
        </div>
    )

}
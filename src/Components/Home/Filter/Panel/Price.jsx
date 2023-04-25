import Slider from "r-range-slider";
import {useState} from "react";
import {filterByPrice} from "../../../../Redux/FilterProductSlice";
import {useDispatch} from "react-redux";

export const Price = () =>
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

        <div className={"w-full"}>

            <Slider
                start={100}
                end={1500}
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
            <button
                onClick={()=> dispatch(filterByPrice(range))}
                type="button"
                className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md w-full py-1  transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
            >
                Set
            </button>


        </div>
    )


}
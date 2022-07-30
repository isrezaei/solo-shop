import Slider  from "r-range-slider";
import {useState} from "react";
import {selectAllMasterData} from "../../Redux/MasterDataSlice";
import {useSelector} from "react-redux";


export const FilterLogic = () =>
{


    const products = useSelector(selectAllMasterData)


    const typeProduct = ['iphone' , 'ipad' , 'ipod' , 'Watch' , 'Mac' , 'AirPod' ].map(items => {
        return (
            <div key={items} className='w-full flex justify-between items-center'>

                <div className='w-20 flex justify-start items-center gap-2 my-1'>
                    <input type='checkbox'/>
                    <p>{items}</p>
                </div>

                <div className='w-8 h-5 bg-blue-600 text-white flex justify-center items-center'>{products.filter(data => data.type === items).length}</div>
            </div>
        )
    })

    const [range , setRange] = useState(
        {
            startPoint : 100 ,
            endPoint : 3000
        }
    )

    const {startPoint , endPoint} = range

    return (
        <div className='px-8 py-2 mt-16 w-96 h-auto bg-white flex flex-col justify-start items-center gap-2'>


            <div className='w-full flex flex-col justify-start items-center gap-2'>

                <p className='w-full mb-10 font-bold text-3xl'>price</p>

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
                        <input className='w-24 border-gray-300' type='number' placeholder='$200'/>
                    </div>



                    <div className='flex flex-col justify-center items-start gap-1'>
                        <p className='font-bold text-gray-500'>Max</p>
                        <input className='w-24 border-gray-300' type='number' placeholder='$3000'/>
                    </div>

                </div>


                <button className='w-full h-10 bg-blue-600 text-center text-white mt-8'>Apply</button>
            </div>


                <p className='w-full mb-10 font-bold text-3xl'>Products</p>

            <div className='w-full flex flex-col justify-center items-center'>
                {typeProduct}
            </div>




        </div>
    )
}
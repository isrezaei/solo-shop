import Quantity from "./Quantity";
import Remove from "./Remove";
import Name from "./Name";
import Color from "./Color";
import Capacity from "./Capacity";
import Total from "./Total";
import Image from "./Image";


export const Items = ({ids}) => {

    return (
        <div className='flex relative w-full xs:justify-start xs:items-center'>

            <div className='flex flex-2 justify-start items-center'>
                <Image ids={ids}/>
                <div className={"flex flex-col"}>
                    <Name
                        ids={ids}/>
                    <div className={"flex space-x-5"}>
                        <Remove
                            ids={ids}/>
                        <Quantity
                            ids={ids}/>
                    </div>
                </div>
            </div>


            <section className='flex flex-1 justify-end items-center space-x-3'>
                <Color
                    ids={ids}/>
                <Capacity
                    ids={ids}/>
                <Total
                    ids={ids}/>
            </section>

        </div>
    )
}
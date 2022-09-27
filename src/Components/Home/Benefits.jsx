import {FiTruck} from 'react-icons/fi';
import {MdOutlineGppGood , MdOutlineLocalOffer} from 'react-icons/md'
import {Ri24HoursLine} from  'react-icons/ri'

const options = [
    {
        icon : <FiTruck/>,
        title : 'Fast Delivery',
        text : 'in city center'
    },
    {
        icon : <MdOutlineGppGood/>,
        title : 'Guarantee',
        text : 'Original product'
    },
    {
        icon : <Ri24HoursLine/>,
        title : 'Available',
        text : '24 Hours'
    },
    {
        icon : <MdOutlineLocalOffer/>,
        title : 'Offers',
        text : 'Weekly discount'
    }
]


export const Benefits = () =>
{
    const Render = options.map(items => {
        return (
            <div key={items.title} className='
            xs:w-24 xs:h-16 xs:flex xs:flex-col xs:justify-evenly xs:items-center
            md:w-52 md:h-20 md:flex md:flex-row md:grid-rows-2 md:justify-evenly md:items-center  md:rounded-2xl md:bg-neutral-50 md:shadow-md
            lg:w-52 lg:h-20 lg:flex lg:flex-row lg:grid-rows-2 lg:justify-evenly lg:items-center'>
                <div className='
                xs:text-3xl xs:text-neutral-600
                md:text-4xl
                lg:text-4xl'>
                    {items.icon}
                </div>
                <section>
                    <p className='
                    xs:text-[.80rem] xs:text-neutral-700
                    md:text-sm md:font-medium
                    lg:text-lg lg:font-medium'>{items.title}</p>
                    <p className='text-neutral-400 xs:hidden md:block md:text-sm lg:text-[.8rem] 2xl:text-sm'>{items.text}</p>
                </section>
            </div>
        )
    })
    return (
        <div className='mx-auto xs:my-5 md:my-10 lg:my-16 grid grid-cols-4 justify-items-center xs:w-11/12 lg:w-[60rem]'>
            {Render}
        </div>
    )
}
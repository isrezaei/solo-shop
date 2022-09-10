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


export const HomeBenefit = () =>
{
    const Render = options.map(items => {
        return (
            <div key={items.title} className='
            xs:w-24 xs:h-16 xs:flex xs:flex-col xs:justify-evenly xs:items-center
            lg:w-52 lg:h-20 lg:flex lg:flex-row lg:grid-rows-2 lg:justify-evenly lg:items-center lg:shadow-center
            2xl:w-72 2xl:h-24 2xl:flex 2xl:flex-row 2xl:grid-rows-2 2xl:justify-evenly 2xl:items-center 2xl:shadow-center'>
                <div className='
                xs:text-3xl xs:text-neutral-600
                lg:text-4xl lg:text-blue-900
                2xl:text-5xl 2xl:text-blue-900
                '>
                    {items.icon}
                </div>

                <section>
                    <p className='
                    xs:text-[.80rem] xs:text-neutral-400
                    lg:text-lg lg:font-medium lg:text-blue-800
                    2xl:text-xl 2xl:font-medium
                    '>{items.title}</p>
                    <p className='text-blue-700 xs:hidden lg:block lg:text-[.8rem] 2xl:text-sm'>{items.text}</p>
                </section>
            </div>
        )
    })
    return (
        <div className='
        mx-auto xs:my-5 lg:my-16 grid grid-cols-4 justify-items-center
        xs:w-11/12
        lg:w-[60rem]
        2xl:w-9/12
        '>
            {Render}
        </div>
    )
}
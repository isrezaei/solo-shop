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
            2xl:w-72 2xl:h-24 2xl:flex 2xl:flex-row 2xl:grid-rows-2 2xl:justify-evenly 2xl:items-center 2xl:shadow-center

            '>

                <div className='
                xs:text-3xl
                xs:text-neutral-600
                2xl:text-5xl
                2xl:text-blue-700
                '>
                    {items.icon}
                </div>

                <section>
                    <p className='
                    xs:text-sm
                    xs:font-bold
                    xs:text-neutral-400
                    2xl:text-xl
                    2xl:font-medium
                    2xl:text-blue-700
                    '>{items.title}</p>

                    <p className='text-sm text-blue-700 xs:hidden 2xl:block'>{items.text}</p>
                </section>

            </div>
        )
    })
    return (
        <div className='
        xs:w-full
        2xl:w-9/12
        mx-auto
        xs:my-5
        2xl:my-16
         grid grid-cols-4 justify-items-center

        '>
            {Render}
        </div>
    )
}
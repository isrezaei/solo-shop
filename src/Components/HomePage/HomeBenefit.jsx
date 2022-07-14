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
            <div key={items.title} className='w-72 h-24 flex justify-around items-center p-7 shadow-center text-blue-900'>
                <div className='text-5xl'>{items.icon}</div>
                <section>
                    <p className='text-xl font-medium'>{items.title}</p>
                    <p className='text-sm'>{items.text}</p>
                </section>
            </div>
        )
    })
    return (
        <div className='w-9/12 mx-auto my-16 grid grid-cols-4 justify-items-center'>
            {Render}
        </div>
    )
}
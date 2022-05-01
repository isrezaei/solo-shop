import {FiTruck} from 'react-icons/fi';
import {MdOutlineGppGood , MdOutlineLocalOffer} from 'react-icons/md'
import {Ri24HoursLine} from  'react-icons/ri'



export const HomeBenefit = () =>
{
    return (
        <div className='w-9/12 mx-auto my-20 grid grid-cols-4 justify-items-center'>

            <div className='w-72 h-24  flex justify-around items-center p-7 shadow-lg'>
                <FiTruck className='text-5xl'/>
                <section>
                    <p className='text-xl font-medium'>Fast Delivery</p>
                    <p className='text-sm'>in city center</p>
                </section>
            </div>

            <div className='w-72 h-24  flex justify-around items-center p-7 shadow-lg'>
                <MdOutlineGppGood className='text-5xl'/>
                <section>
                    <p className='text-xl font-medium'>Guarantee</p>
                    <p className='text-sm'>Original product</p>
                </section>
            </div>

            <div className='w-72 h-24  flex justify-around items-center p-7 shadow-lg'>
                <Ri24HoursLine className='text-5xl'/>
                <section>
                    <p className='text-xl font-medium'>Available</p>
                    <p className='text-sm'>24 Hours</p>
                </section>
            </div>

            <div className='w-72 h-24  flex justify-around items-center p-7 shadow-lg'>
                <MdOutlineLocalOffer className='text-5xl'/>
                <section>
                    <p className='text-xl font-medium'>Offers</p>
                    <p className='text-sm'>Weekly discount</p>
                </section>
            </div>


        </div>
    )
}
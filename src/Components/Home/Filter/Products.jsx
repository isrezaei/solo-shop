import {RatingStar} from "rating-star";

const Products = ({product}) => {



    const {id, product : name , price, color, image, detailsImage, capacity, offer, rate} = product

    const discountedPrice = parseInt((price - ((price * offer) / 100)))

    return (
        <div key={id} className={`
               animate__animated animate__backInUp animate__faster 
               xs:w-44 xs:h-60 xs:my-4
               md:w-52 md:h-64
               bg-white rounded-xl flex flex-col items-center overflow-hidden`}>

            <div className=' h-40 flex justify-center items-center'>
                <img className='w-24' src={image?.mainImg} alt={name}/>
            </div>

            <div className='w-full flex flex-col justify-center items-center '>
                <p className='w-full text-[.8rem] font-bold text-neutral-500 text-center'>{name}</p>
                <RatingStar id={rate.toString()} rating={rate} noBorder={true} size={15}/>
                <div className='w-full flex justify-evenly items-center '>
                    {
                        price === 'out' ? <p className='font-bold text-[.8rem] text-rose-600'>out of stock</p>
                            :
                            <p className={`${offer !== 0 ? 'opacity-50 text-[.8rem] font-bold line-through text-red-700' : 'text-[.8rem] text-neutral-500 font-bold'}`}>${price}</p>
                    }
                    <div className='text-neutral-500 '>{price !== 'out' && offer !== 0 &&
                        <p>${discountedPrice}</p>}</div>
                </div>
            </div>
        </div>
    )

};

export default Products;
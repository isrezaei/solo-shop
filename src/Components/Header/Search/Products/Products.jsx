import Images from "./Images";
import Names from "./Names";
import Price from "./Price";


export const Products = ({products}) => {


    const {id, product, price, color, image, offer} = products

    const discountedPrice = parseInt((price - ((price * offer) / 100)))

    const showColors = color?.map(colors => {
        return (
            <span
                key={colors} style={{background: colors}}
                className="inline-flex items-center rounded-full bg-red-50 px-2 py-2 my-2 ring-1 ring-inset ring-red-600/10"/>
        )
    })


    return (
        <div className={` flex justify-center items-center cursor-pointer relative 
           ${!color && "opacity-50 pointer-events-none"}
          ${price === 'out' && "opacity-50 pointer-events-none"}
        
        `}>

            <Images Image={image} Id={id}/>


            <div className='xs:w-40 lg:w-48 2xl:w-52 h-full flex flex-col justify-center items-center '>

                <Names Product={product}/>


                <div className='w-full flex justify-center items-center'>

                    <Price Price={price} Offer={offer}/>

                    {
                        price !== 'out' && offer !== 0 &&

                        <span
                            className="inline-flex items-center rounded-md bg-red-50 px-3 py-0 mx-2 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                            {offer}%
                        </span>
                    }

                    <div className='xs:text-[.8rem] lg:text-sm text-lime-600 font-bold'>
                        {price !== 'out' && offer !== 0 && <p>${discountedPrice}</p>}
                    </div>
                </div>

                <div className='flex justify-start items-center gap-2'>
                    {showColors}
                </div>

            </div>


        </div>
    )
}
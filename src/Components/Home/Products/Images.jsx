import {HiShoppingCart} from "react-icons/hi";
import {useNavigate} from "react-router-dom";


const Images = ({price , image , color , product , id , quantity}) => {

    const unavailable = !color && "pointer-events-none opacity-30"

    const Navigate = useNavigate()

    return (
        <div className='
        xs:w-32 xs:h-52
        md:w-36 md:h-52
        absolute bottom-0 translate-y-[5rem]'>


            <img
                className={`${price === 'out' && 'filter grayscale'} ${unavailable} cursor-pointer`}
                src={image.mainImg} alt={product} onClick={() => Navigate(`/details/${id}`)}/>

            {
                quantity >= 1 &&
                <span
                    className="inline-flex absolute top-2 right-2 items-center rounded-full bg-green-50 p-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                   <HiShoppingCart className='xs:text-sm'/>
                </span>
            }


        </div>
    );
};

export default Images;
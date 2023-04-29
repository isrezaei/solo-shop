import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../../Redux/reducer/MasterDataSlice";
import Images from "./Images";
import Names from "./Names";
import Rate from "./Rate";
import {Link, useLocation} from "react-router-dom";
import React, {useState} from "react";
import Modal from "./Modal";

export const Items = ({ids}) => {

    const location = useLocation()
    const {product, image, id, price, rate, quantity, color} = useSelector(state => selectMasterDataById(state, ids))

    let [isOpen, setIsOpen] = useState(false)

    const handelModal = () =>
    {
        setIsOpen(prev => !prev)
    }

    return (
        <>

        <div className={`animate__animated animate__backInUp animate__faster m-auto
    
        xs:w-44 xs:h-60 xs:my-4
        md:w-52 md:h-64 
        bg-white rounded-xl flex flex-col  items-center overflow-hidden`}>
            <Images
                id={id}
                image={image}
                product={product}
                price={price}
                color={color}
                quantity={quantity}/>
            <div className={"absolute top-8"}>
                <Names
                    product={product}/>
                <Rate
                    rate={rate}
                    id={id}/>

                {/*<Link to={`quick/${id}`} state={{background: location}}>*/}
                    <p onClick={handelModal} className={"w-full font-medium text-gray-400 text-xs text-center"}>Quick View</p>
                {/*</Link>*/}

            </div>
        </div>
            <Modal
                ids={ids}
                isOpen={isOpen}
                handelModal={handelModal}/>
</>
    )
}
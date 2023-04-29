import React, {useState} from 'react';
import {SelectProduct} from "../../../Redux/reducer/SelectProductSlice";
import {useDispatch} from "react-redux";
import {CiMobile1} from "react-icons/ci";
import {IoTabletLandscapeOutline} from "react-icons/io5";

const device = [
    {
        name: "iphone",
        icon: <CiMobile1/>
    },
    {
        name: "ipad",
        icon: <IoTabletLandscapeOutline/>
    }
]

const Device = () => {

    const [Active, setActive] = useState('iphone')
    const dispatch = useDispatch()

    return (
        <div className={"flex space-x-2"}>
            {
                device.map(items => {
                    const setActiveProduct = () => {
                        dispatch(SelectProduct(items.name))
                        setActive(items.name)
                    }
                    const textColor = Active === items.name ? "text-neutral-800" : "text-neutral-400"
                    return (
                        <div
                            key={items.name}
                            onClick={setActiveProduct}
                            className={`${textColor} cursor-pointer flex flex-col items-center justify-center`}>
                            <text className={"text-3xl"}>{items.icon}</text>
                        </div>
                    )
                })
            }
        </div>
    )

};

export default Device;
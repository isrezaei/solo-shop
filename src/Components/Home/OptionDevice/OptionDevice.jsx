import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CiGrid41} from 'react-icons/ci'
import {IoFilterOutline} from "react-icons/io5"
import Modal from "../Filter/Modal";
import {isOpenFilter} from "../../../Redux/reducer/FilterProductSlice";
import Device from "./Device";


export const OptionDevice = () => {
    const dispatch = useDispatch()
    const {isOpen} = useSelector(status => status.FilterProductSlice)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const handelModal = () => {
        setIsOpenModal(prev => !prev)
    }

    return (
        <>
            <div className='flex mx-auto relative xs:w-full xs:flex-row xs:justify-evenly xs:items-center xs:px-4 xs:my-3 md:flex-row  md:justify-center md:items-center'>
                <div className={`w-full flex justify-between items-center space-x-3`}>
                    <Device/>
                    <div
                        className={`${isOpen && 'text-lime-500'} text-neutral-400  transition flex flex flex-col items-center justify-center cursor-pointer`}>
                        {
                            isOpen ?
                                <CiGrid41 onClick={() => dispatch(isOpenFilter(false))} className={"text-3xl"}/>
                                :
                                <IoFilterOutline onClick={handelModal} className={"text-3xl"}/>
                        }
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpenModal} closeModal={handelModal}/>
        </>
    )
}
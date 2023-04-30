import {Info} from "./Info/Info";
import {useState} from "react";
import Logo from "./Logo";
import Modal from "./Search/Modal";
import {RiSearch2Line} from "react-icons/ri";

export const Header = () => {


    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }


    return (
        <div className='
        w-full flex
        xs:flex-col xs:justify-center xs:items-center xs:m-0
        md:relative md:justify-center md:items-center'>
            <div className='
            flex
            xs:px-5 xs:w-full xs:h-16 xs:justify-between xs:items-center xs:mt-0
            md:w-full md:h-16 md:px-6 md:w-full md:flex md:items-center md:justify-between'>

                <section className={"flex justify-between items-center space-x-5"}>
                    <Logo/>
                    <div className="flex items-center justify-center">
                        <RiSearch2Line
                            onClick={openModal}
                            className="text-xl text-gray-600 cursor-pointer"
                        />
                    </div>

                    <Modal isOpen={isOpen} closeModal={closeModal}/>
                </section>
                <Info/>
            </div>
        </div>
    )
}
import {Info} from "./Info/Info";

import {useState} from "react";
import Logo from "./Logo";

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Modal from "./Search/Modal";

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
        xs:flex-col xs:justify-start xs:items-center xs:m-0
        md:relative md:justify-center md:items-center'>

            <div className='
            flex
            xs:px-0 xs:w-full xs:h-16 xs:justify-evenly xs:items-center xs:mt-0
            md:w-full md:h-16 md:px-6 md:w-full md:flex md:items-center md:justify-between'>


                <section className={"flex justify-between items-center space-x-5"}>

                    <Logo/>

                    {/*show search input in lg responsive*/}


                    <div className="flex items-center justify-center">
                        <button
                            type="button"
                            onClick={openModal}
                            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        >
                            Search
                        </button>
                    </div>


                    <Modal isOpen={isOpen} closeModal={closeModal}/>


                </section>


                <div className='xs:hidden md:block'>
                    <Info/>
                </div>

            </div>

            <div className='
            flex justify-evenly items-center
            xs:w-full xs:h-20 xs:bg-neutral-800
            md:hidden
            '>
                <Info/>
            </div>

        </div>
    )
}
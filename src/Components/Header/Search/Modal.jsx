import {Dialog, Transition} from "@headlessui/react";
import {Fragment, useLayoutEffect, useState} from "react";
import {Response} from "./Response";
import {Input} from "./Input";
import {useDebounce} from "./Debounce";
import {emptyResultOfLiveSearch, FetchLiveSearchData} from "../../../Redux/reducer/LiveSearchSlice";
import {useDispatch} from "react-redux";

const Modal = ({isOpen, closeModal}) => {

    const [valInput, setInput] = useState()

    const {valDebounce} = useDebounce(valInput)


    const dispatch = useDispatch()


    useLayoutEffect(() => {

        if (valDebounce?.length > 4) {
            dispatch(FetchLiveSearchData(valDebounce))
        }
        if (valDebounce?.length <= 4) {
            dispatch(emptyResultOfLiveSearch())
        }

    }, [valDebounce])


    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25"/>
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className="w-full max-w-3xl transform overflow-hidden rounded-xl bg-zinc-100 p-5  align-center shadow-xl transition-all">
                                <Dialog.Title
                                    className={"text-lg font-medium text-gray-900 flex justify-between items-center"}
                                >
                                    <Input setInput={setInput}/>

                                    <button
                                        type="button"
                                        className=" justify-center rounded-md  bg-blue-100 p-2  text-sm font-medium text-blue-900 hover:bg-blue-200 "
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>

                                </Dialog.Title>

                                <div>
                                    <Response/>
                                </div>

                            </Dialog.Panel>

                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Modal;
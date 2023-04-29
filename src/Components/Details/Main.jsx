import {createContext, useReducer} from "react";
import {Name} from "./Name";
import {Colors} from "./Colors";
import {Capacity} from "./Capacity";
import {Images} from "./Images";
import {Quantity} from "./Quantity/Quantity";
import {useSelector} from "react-redux";
import {State} from "./Context/state";
import {Reducer} from "./Context/reducer";
import {useNavigate, useParams} from "react-router-dom";
import {selectMasterDataById} from "../../Redux/reducer/MasterDataSlice";
import {IoClose} from "react-icons/io5";
import Price from "./Price";


export const EachProductFromContext = createContext()

export const Main = () => {

    const {mainState} = State()

    const {reducer} = Reducer()

    const navigation = useNavigate()

    const [{activeOptions}, contextDispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('detailsPageInfo')) || mainState)

    const {productId} = useParams()
    const {price, offer, detailsImage} = useSelector(state => selectMasterDataById(state, productId))


    return (
        <EachProductFromContext.Provider
            value={{
                activeOptions, detailsImage, contextDispatch
            }}>
            <div
                className={'flex justify-center items-center z-10 m-auto h-screen w-full fixed top-0 overflow-hidden bg-glass-black'}>
                <section
                    className='xs:w-auto xs:h-auto flex flex-col m-auto p-8 rounded-xl justify-center items-center bg-white relative'>
                    <Images/>
                    <div className={"w-full space-y-5"}>
                        <Name/>
                        <div className={"flex flex-col justify-between items-center space-y-5"}>
                            <Colors/>
                            <Capacity/>
                        </div>
                        <Price/>
                        <Quantity/>
                    </div>
                    <div
                        className='absolute top-2 right-2 bg-gray-200 p-1 hover:bg-red-500 transition cursor-pointer group z-10 rounded-full'
                        onClick={() => navigation(-1)}>
                        <IoClose className='text-gray-400 text-sm font-bold group-hover:text-white transition'/>
                    </div>
                </section>
            </div>
        </EachProductFromContext.Provider>
    )
}
import {createContext, useReducer} from "react";
import {Name} from "../Components/Details/Name";
import {Colors} from "../Components/Details/Colors";
import {Capacity} from "../Components/Details/Capacity";
import {Images} from "../Components/Details/Images";
import {Quantity} from "../Components/Details/Quantity/Quantity";
import {useSelector} from "react-redux";
import {State} from "../Components/Details/Context/state";
import {Reducer} from "../Components/Details/Context/reducer";
import {useNavigate, useParams} from "react-router-dom";
import {selectMasterDataById} from "../Redux/reducer/MasterDataSlice";
import {IoClose} from "react-icons/io5";
import Price from "../Components/Details/Price";


export const ProductContext = createContext()

export const Details = () => {
    const {mainState} = State()
    const {reducer} = Reducer()
    const [{activeOptions}, contextDispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('detailsPageInfo')) || mainState)
    const {productId} = useParams()
    const {detailsImage} = useSelector(state => selectMasterDataById(state, productId))
    const navigation = useNavigate()

    return (
        <ProductContext.Provider
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
        </ProductContext.Provider>
    )
}
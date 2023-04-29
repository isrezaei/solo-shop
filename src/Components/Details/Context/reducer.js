import {useSelector} from "react-redux";
import {selectMasterDataById} from "../../../Redux/reducer/MasterDataSlice";
import {useParams} from "react-router-dom";


export const Reducer = () =>
{
    const {productId} = useParams()
    const {product} = useSelector(state => selectMasterDataById(state , productId))

    const reducer = (state, {type, payload}) =>
    {
        switch (type) {
            case 'activeSectionTrade':
                return {
                    ...state,
                    enableSection: {
                        ...state.enableSection,
                        enableSectionTrade: true
                    }
                }
            case 'activeColor-activeImage':
                return {
                    ...state,
                    activeOptions: {
                        ...state.activeOptions,
                        activeColor: {
                            ...state.activeOptions.activeColor,
                            color : payload
                        },
                        activeImage: {
                            ...state.activeOptions.activeImage,
                            [product] : payload
                        },
                    }
                }
            case 'activeCapacity':
                return {
                    ...state,
                    activeOptions: {
                        ...state.activeOptions,
                        activeCapacity: {
                            ...state.activeOptions.activeCapacity,
                            capacity : payload
                        }
                    }
                }

            case 'updateLocalStorage' :
                localStorage.setItem('detailsPageInfo' , JSON.stringify(state))
                return state

            default:
                return state
        }
    }

    return {reducer}
}


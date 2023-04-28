import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {selectMasterDataById} from "../../../Redux/MasterDataSlice";

export const InitialState = () =>
{
    const {productId} = useParams()
    const {product}  = useSelector(state => selectMasterDataById(state , productId))

    const mainState = {
        enableSection: {
            enableSectionTrade: false,
            enableSectionCondition: false
        },
        activeOptions: {
            activeColor: {
                [product] : ''
            },
            activeCapacity: {
                [product] : ''
            },

            activeImage: {
                [product] : 'main'
            }
        },

        choicesAnswer: {
            haveOldPhone: '',
            haveGoodCondition: '',
            haveButtonWork: '',
            haveGoodShape: '',
            haveTouchScreenWork: ''
        },

        editAnswer : '',

        choiceOldModel: {
            offPrice: '',
            nameOldPhone :''
        },
    }
    return {mainState}
}
import {useSelector} from "react-redux";
import {selectMasterDataIds} from "../../Redux/MasterDataSlice";
import {HomeEachProduct} from "./HomeEachProduct";
import {HomeSlider} from "./HomeSlider";
import {HomeBenefit} from "./HomeBenefit";
import {HomeSelectProduct} from "./HomeSelectProduct";
import {HomeOfferSlider} from "./HomeOfferSlider";

export const HomePreRender = () =>
{
    const MasterDataIds = useSelector(state => selectMasterDataIds(state))
    const {status} = useSelector(state => state.MasterDataSlice)



    let Render ;

    if (status === 'pending')
    {
        Render = <h1>Loading</h1>
    }
    else if (status === 'success')
    {
        Render = <div style={{
            display : 'grid' ,
            gridTemplateColumns :'26vw 26vw 26vw',
            justifyContent : 'center',
            alignItems : 'flex-start'
        }}>{MasterDataIds.map(ids => <HomeEachProduct key={ids} ids={ids}/>)}</div>
    }
    else if (status === 'reject')
    {
        Render = 'reject'
    }


    return (
        <>
            <HomeSlider/>
            <HomeBenefit/>
            <HomeSelectProduct/>

            <div className='w-full flex justify-center items-start'>
                <HomeOfferSlider/>
                {Render}
            </div>

        </>
    )


}

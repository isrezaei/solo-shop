import {useSelector} from "react-redux";
import {selectMasterDataIds} from "../../Redux/MasterDataSlice";
import {HomeEachProduct} from "./HomeEachProduct";
import {HomeSlider} from "./HomeSlider";
import {HomeBenefit} from "./HomeBenefit";
import {HomeSelectProduct} from "./HomeSelectProduct";

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
            gridTemplateColumns :'30vw 30vw 30vw',
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
            {Render}
        </>
    )


}

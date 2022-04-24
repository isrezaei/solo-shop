import {useSelector} from "react-redux";
import {selectMasterDataIds} from "../../Redux/MasterDataSlice";
import {HomeEachProduct} from "./HomeEachProduct";

export const HomePreRender = () =>
{
    const MasterDataIds = useSelector(state => selectMasterDataIds(state))
    const Status = useSelector(state => state.MasterDataSlice.status)

    let Render ;

    if (Status === 'pending')
    {
        Render = <h1>Loading</h1>
    }
    else if (Status === 'success')
    {
        Render = <div style={{
            display : 'grid' ,
            gridTemplateColumns :'30vw 30vw 30vw',
            justifyContent : 'center',
            alignItems : 'flex-start'
        }}>{MasterDataIds.map(ids => <HomeEachProduct key={ids} ids={ids}/>)}</div>
    }
    else if (Status === 'reject')
    {
        Render = 'reject'
    }


    return (
        <>
            {Render}
        </>
    )


}

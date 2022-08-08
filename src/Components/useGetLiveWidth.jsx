import {useEffect} from "react";
import {useState} from "react";

export const useGetLiveWidth = () =>
{

    const [liveWidth , setLiveWidth] = useState()

    useEffect(()=> {

        const getLiveWidth = () =>
        {
            setLiveWidth(document.body.clientWidth)
        }

        window.addEventListener('resize' , getLiveWidth)

        getLiveWidth()

        return ()=> window.removeEventListener('resize' , getLiveWidth)
    } , [liveWidth])


    return {liveWidth}
}
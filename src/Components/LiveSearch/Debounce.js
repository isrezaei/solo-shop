import {useEffect , useState} from "react";

export const useDebounce = (value) =>
{
    const [valDebounce , setDebounce] = useState('')

    useEffect(()=> {

        setTimeout(()=> setDebounce(value) , 1000)

    } , [value])

    return {valDebounce}
}
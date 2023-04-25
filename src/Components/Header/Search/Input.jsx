import {BiSearchAlt} from "react-icons/bi";

export const Input = ({setInput}) =>
{
    return (
        <div className='
        flex justify-start items-center'>
            <BiSearchAlt className='
            text-gray-400
            xs:text-xl
            2xl:text-3xl'/>
            <div className='flex w-11/12 justify-center items-center'>
                <input onChange={e => setInput(e.target.value)}
                       className='
                       w-full text-neutral-400 text-sm p-3 outline-0 border-0 bg-transparent placeholder-gray-400
                       placeholder:2xl:text-lg'
                       placeholder='More than 3 letters ...' />
            </div>

        </div>
    )
}
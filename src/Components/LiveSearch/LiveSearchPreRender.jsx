import {useSelector} from "react-redux";
import {LiveSearchEachProduct} from "./LiveSearchEachProduct";
import {CircleLoader} from 'react-spinners';






export const LiveSearchPreRender = () =>
{

    const {resultOfLiveSearch , status} = useSelector(state => state.LiveSearchSlice)


    let Render ;

    if (status === 'pending')
    {
        Render = <h1>Loading</h1>
    }
    if (status === 'success')
    {
        Render = resultOfLiveSearch?.map(products => <LiveSearchEachProduct products={products} key={products.product}/>)
    }



    return (
        <div className='z-10 m-auto w-full  h-screen fixed top-48  bg-glass-black overflow-scroll scrollbar-hide flex justify-center items-start'>

            <div>

            </div>



            {
                status === 'idle' ?
                    <div className='w-8/12 h-64 bg-gray-300 flex justify-evenly items-center'>

                        <p className='text-2xl text-gray-600 font-bold'>please search some apple product</p>

                        <CircleLoader color={'#3e5bcc'} size={150}/>
                    </div>
                    :
                    <div className='w-8/12 max-h-128 overflow-y-scroll scrollbar-hide bg-gray-300 grid grid-cols-3 justify-center items-start'>
                        {Render}
                    </div>

            }
        </div>
    )
}
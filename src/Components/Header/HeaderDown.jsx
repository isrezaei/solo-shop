import {CartWish} from "./Cart&Wish";
import {SearchLogo} from "./Search&Logo";

export const HeaderDown = () =>
{
    return (
        <div className='w-full mt-14 flex'>

            <div className='w-8/12 m-auto h-32 flex justify-between'>
                <SearchLogo/>
                <CartWish/>
            </div>

        </div>
    )
}
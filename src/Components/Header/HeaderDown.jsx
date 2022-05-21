import {CartWish} from "./Cart&Wish";
import {SearchLogo} from "./Search&Logo";

export const HeaderDown = () =>
{
    return (
        <div className='w-full mt-10 flex'>

            <div className='w-9/12 m-auto mt-10 h-28 flex justify-between'>
                <SearchLogo/>
                <CartWish/>
            </div>

        </div>
    )
}
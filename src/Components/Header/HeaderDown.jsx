import {CartWish} from "./Cart&Wish";
import {SearchLogo} from "./Search&Logo";

export const HeaderDown = ({HeaderMargin}) =>
{
    return (
        <div className={`w-full ${HeaderMargin} flex`}>

            <div className='w-9/12 m-auto h-28 flex justify-between'>
                <SearchLogo/>
                <CartWish/>
            </div>

        </div>
    )
}
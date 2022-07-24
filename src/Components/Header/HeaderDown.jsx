import {CartWish} from "./Cart&Wish";
import {SearchLogo} from "./Search&Logo";
import {MdOutlineManageSearch} from 'react-icons/md'
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";

export const HeaderDown = ({HeaderMargin}) =>
{

    const location = useLocation()

    return (
        <div className={`w-full ${HeaderMargin} flex`}>
            <div className='w-9/12 m-auto h-28 flex items-center justify-between'>
                <SearchLogo/>

                <Link to='search' state={{background : location}} className=''>
                    <MdOutlineManageSearch className='text-5xl  text-blue-600'/>
                </Link>

                <CartWish/>
            </div>

        </div>
    )
}
import {Link} from "react-router-dom";

const Images = ({Image , Id}) => {
    return (
        <Link to={`/details/${Id}`}>
            <img className='xs:w-16 lg:w-20' src={Image.mainImg} alt={Id}/>
        </Link>
    );
};

export default Images;
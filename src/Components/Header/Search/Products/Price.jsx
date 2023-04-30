const Price = ({Price , Offer}) => {
    return (
        <>
            {
                Price !== 'out' ? <p className={`xs:text-[.8rem] lg:text-sm ${Offer !== 0 ? 'opacity-50 font-bold line-through text-gray-600' : 'text-gray-600 font-bold'}`}>${parseInt(Price)}</p>
                    :
                    <p className={`xs:text-[.8rem] lg:text-sm font-bold text-red-800`}>OUT OF STOCK</p>
            }
        </>
    );
};

export default Price;
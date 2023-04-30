const Badge = ({product , stars ,price}) => {

    return (
        <div className={"w-full flex justify-center items-center space-x-1 p-2"}>
            {product &&  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{product}</span>}
            {stars && <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{stars}</span>}
            {
                price &&
                <>
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">${price.startPoint}</span>
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">${price.endPoint}</span>
                </>
            }
        </div>
    );
};

export default Badge;
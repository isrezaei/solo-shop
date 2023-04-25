import React from 'react';

const Prices = ({offer, PriceWithOffer, price}) => {
    return (
        <div className='
            w-full flex justify-center items-center'>
            {
                offer > 0 ?
                    <div className='w-full flex justify-evenly items-center'>
                        <p className='
                            font-medium text-gray-600
                            xs:text-sm
                            '>${PriceWithOffer}</p>

                        <p className='
                            font-medium line-through text-red-500
                            xs:text-sm

                            '>${price}</p>
                    </div>
                    :
                    <div className='w-full flex justify-evenly items-center'>
                        <div className='
                            font-medium text-gray-600
                            xs:text-sm'>
                            {price === 'out' ?
                                <div className='
                                    text-red-500 font-bold
                                    xs:text-sm
                                   '>out of stock</div> : <p>${price}</p>
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Prices;
import React from 'react';
import "../styles/pricetag.css";

const PriceTag = (item) => {
    return (
        <div className='price-tag'>
            <p>{item.item}:  {item.price}</p>
        </div>
    )
}

export default PriceTag;
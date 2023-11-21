import React from 'react';
import '../styles/itemcard.css';

const ItemCard = (item) => {
    console.log("IMG", item.img);
    return (
        <div className='card'>
            <img
                src={item.img}
                alt="card-img"
                className='card-img'
            />
            <p className='headline'>
                {item.headline}
            </p>
            <a
                className='forward'
                href={item.directTo}
                target="_blank"
            >
                Click to learn more!
            </a>
            <span className='stats'>
                {item.item.toUpperCase()}: {item.price}
            </span>
        </div>
    )
}

export default ItemCard;
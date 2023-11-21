import React from 'react';
import "../styles/chips.css";
import { inventory } from './VendingMachine';
import ItemCard from './ItemCard';
import chip from "../assets/chip2.jpg";

const Chips = () => {
    const headline = '"For $56 you get a meager 5 potato chips. That’s over $11 per chip"';
    const learnMore = "https://www.ripleys.com/weird-news/expensive-potato-chips/";
    let thisItem;
    let price;

    const getItem = (item) => {
        inventory.forEach((i) => {
            if (i.item === item) {
                thisItem = i.item;
                price = i.price;
            };
        });
    };
    getItem('chip');
    return (
        <ItemCard
            item={thisItem}
            price={price}
            img={chip}
            headline={headline}
            directTo={learnMore}
        />
    );
};

export default Chips;
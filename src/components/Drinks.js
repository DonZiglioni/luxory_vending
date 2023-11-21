import React from 'react';
import "../styles/drinks.css";
import { inventory } from './VendingMachine';
import ItemCard from './ItemCard';
import drink from '../assets/drink.jpg';

const Drinks = () => {
    const headline = '"...over 8500 diamonds, almost 300 rubies, and the equivilant of two..."';
    const learnMore = "https://www.luxuriousmagazine.com/the-worlds-most-expensive-whiskey-launches/";
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
    getItem('drink');
    return (
        <ItemCard
            item={thisItem}
            price={price}
            img={drink}
            headline={headline}
            directTo={learnMore}
        />
    );
};

export default Drinks;
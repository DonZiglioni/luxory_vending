import React from 'react';
import "../styles/cheesecake.css";
import { inventory } from './VendingMachine';
import ItemCard from './ItemCard';
import cheesecake from "../assets/cheesecake.webp";


const Cheesecake = () => {
    const headline = "Raffaele Ronca’s $5,000 cheesecake is the most expensive in the world";
    const learnMore = "https://www.cnbc.com/2017/11/27/its-the-worlds-most-expensive-cheesecake-and-i-ate-it.html";
    let thisItem;
    let price;

    const getItem = (item) => {
        inventory.forEach((i) => {
            if (i.item === item) {
                thisItem = i.item;
                price = i.price;
            }
        })
    };
    getItem('cheesecake');
    return (
        <ItemCard
            item={thisItem}
            price={price}
            img={cheesecake}
            headline={headline}
            directTo={learnMore}
        />
    );
};

export default Cheesecake;
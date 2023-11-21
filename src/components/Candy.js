import React from 'react';
import "../styles/candy.css";
import ItemCard from './ItemCard';
import { inventory } from './VendingMachine';
import candybar from "../assets/candybar.jpg";


const Candy = () => {
    const headline = "A gold-coated Cadbury’s Wispa chocolate bar...";
    const learnMore = "https://www.luxuo.com/lifestyle/gastronomy/chocolate-bar-wispa.html";
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
    getItem('candybar');

    return (
        <ItemCard
            item={thisItem}
            price={price}
            img={candybar}
            headline={headline}
            directTo={learnMore}
        />
    );
};

export default Candy;
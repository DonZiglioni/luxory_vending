import React from 'react';
import "../styles/doughnuts.css";
import { inventory } from './VendingMachine';
import ItemCard from './ItemCard';
import doughnut from "../assets/doughnut.webp";

const Doughnuts = () => {

    const headline = "This doughnut is topped with Cristal champagne caviar...";
    const learnMore = "https://www.insider.com/worlds-most-expensive-donut-2016-7";
    let thisItem;
    let price;
    let img;

    const getItem = (item) => {
        inventory.forEach((i) => {
            if (i.item === item) {
                thisItem = i.item;
                price = i.price;
                img = i.img
            };
        });
    };
    getItem('doughnut');
    return (
        <ItemCard
            item={thisItem}
            price={price}
            img={doughnut}
            headline={headline}
            directTo={learnMore}
        />
    );
};

export default Doughnuts;
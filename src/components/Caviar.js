import React from 'react';
import "../styles/caviar.css";
import { inventory } from './VendingMachine';
import ItemCard from './ItemCard';
import caviar from '../assets/caviar2.jpg';


const Caviar = () => {
    const headline = '"The white eggs are from specimens more than 100 years old..."';
    const learnMore = "https://www.azureazure.com/gastronomy/food-drink/most-expensive-caviar/";
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
    getItem('caviar');
    return (
        <ItemCard
            item={thisItem}
            price={price}
            img={caviar}
            headline={headline}
            directTo={learnMore}
        />
    );
};

export default Caviar;
import React, { useState } from "react";
import "../styles/vendingmachine.css";
import { Link } from "react-router-dom";
import machine from "../vendingmachine.png";
import candybar from "../assets/candybar.jpg";
import cheesecake from "../assets/cheesecake.webp";
import doughnut from "../assets/doughnut.webp";
import drink from "../assets/drink.jpg";
import caviar from "../assets/caviar.jpg";
import chip from "../assets/chip.jpg";
import PriceTag from "./PriceTag";

export const inventory = [
    { item: "candybar", price: "$1,630" },
    { item: "cheesecake", price: "$5,000" },
    { item: "chip", price: "$12 per/chip" },
    { item: "doughnut", price: "$1,975" },
    { item: "caviar", price: "$25,000" },
    { item: "drink", price: "$6,200,000" },
];

const VendingMachine = () => {
    const [isVis, setIsVis] = useState(false);
    const [item, setItem] = useState("");
    const [price, setPrice] = useState(0);

    const getItem = (item) => {
        inventory.forEach((i) => {
            if (i.item === item) {
                setItem(i.item);
                setPrice(i.price);
            };
        });
    };

    return (
        <div className='vending-machine'>
            {isVis ? <PriceTag item={item} price={price} /> : null}
            <div className='icons'>
                <Link to='/candy'>
                    <img
                        src={candybar}
                        alt='candybar'
                        className="icon-pics"
                        onMouseOver={() => {
                            getItem('candybar');
                            setIsVis(!isVis);
                        }}
                        onMouseLeave={() => {
                            setIsVis(!isVis);
                            setItem('');
                            setPrice(0);
                        }}
                    />
                </Link>
                <Link to='/cheesecake'>
                    <img
                        src={cheesecake}
                        alt='cheesecake'
                        className="icon-pics"
                        onMouseOver={() => {
                            getItem('cheesecake');
                            setIsVis(!isVis);
                        }}
                        onMouseLeave={() => {
                            setIsVis(!isVis);
                            setItem('');
                            setPrice(0);
                        }}
                    />
                </Link>
                <Link to='/chips'>
                    <img
                        src={chip}
                        alt='chip'
                        className="icon-pics"
                        onMouseOver={() => {
                            getItem('chip');
                            setIsVis(!isVis);
                        }}
                        onMouseLeave={() => {
                            setIsVis(!isVis);
                            setItem('');
                            setPrice(0);
                        }}
                    />
                </Link>
                <Link to='/doughnuts'>
                    <img
                        src={doughnut}
                        alt='doughnut'
                        className="icon-pics"
                        onMouseOver={() => {
                            getItem('doughnut');
                            setIsVis(!isVis);
                        }}
                        onMouseLeave={() => {
                            setIsVis(!isVis);
                            setItem('');
                            setPrice(0);
                        }}
                    />
                </Link>
                <Link to='/caviar'>
                    <img
                        src={caviar}
                        alt='caviar'
                        className="icon-pics"
                        onMouseOver={() => {
                            getItem('caviar');
                            setIsVis(!isVis);
                        }}
                        onMouseLeave={() => {
                            setIsVis(!isVis);
                            setItem('');
                            setPrice(0);
                        }}
                    />
                </Link>
                <Link to='/drinks'>
                    <img
                        src={drink}
                        alt='drink'
                        className="icon-pics"
                        onMouseOver={() => {
                            getItem('drink');
                            setIsVis(!isVis);
                        }}
                        onMouseLeave={() => {
                            setIsVis(!isVis);
                            setItem('');
                            setPrice(0);
                        }}
                    />
                </Link>
            </div>
            <img src={machine} className='machine-pic' alt="Vending Pic" >
            </img>
        </div>
    )
}

export default VendingMachine;
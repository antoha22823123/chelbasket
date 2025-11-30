"use client"
import { useState } from "react";
import Card from "../components/favoriteCard/card";
import './ball.scss'
import ball from "../../../public/img/image 5.png"

export default function Ball() {

    const initialData = [
        { id: 1,  name:"Футболка", cost:1990, img: ball, alt:"Shrek"},
        { id: 2,  name:"Футболка", cost:1200, img: ball, alt:"Shrek"},
        { id: 3,  name:"Футболка", cost:5000, img: ball, alt:"Shrek"},
        { id: 4,  name:"Футболка", cost:990,  img: ball, alt:"Shrek"},
        { id: 5,  name:"Футболка", cost:1990, img: ball, alt:"Shrek"},
        { id: 6,  name:"Футболка", cost:3000, img: ball, alt:"Shrek"},
        { id: 7,  name:"Футболка", cost:1500, img: ball, alt:"Shrek"},
        { id: 8,  name:"Футболка", cost:800,  img: ball, alt:"Shrek"},
        { id: 9,  name:"Футболка", cost:2700, img: ball, alt:"Shrek"},
        { id: 10, name:"Футболка", cost:1990, img: ball, alt:"Shrek"},
        { id: 11, name:"Футболка", cost:1100, img: ball, alt:"Shrek"},
        { id: 12, name:"Футболка", cost:500,  img: ball, alt:"Shrek"},
    ];

    const [cards, setCards] = useState(initialData);

    const sortByMaxPrice = () => {
        const sorted = [...cards].sort((a, b) => b.cost - a.cost);
        setCards(sorted);
    };

    const sortByMinPrice = () => {
        const sorted = [...cards].sort((a, b) => a.cost - b.cost);
        setCards(sorted);
    };

    return (
        <div className="favorite_page">
            <p className="page">Главная / Каталог</p>
            <h2>МЯЧИ</h2> 

            <div className="filters">
                <button className="Filter">ВСЕ ФИЛЬТРЫ</button>

                <div className="dropDownFilter">
                    <button className="dropBtnFilter">ПО НАИБОЛЬШЕЙ ЦЕНЕ</button>

                    <div className="dropContentFilter">
                        <p onClick={sortByMaxPrice}>ПО НАИБОЛЬШЕЙ ЦЕНЕ</p>
                        <p onClick={sortByMinPrice}>ПО НАИМЕНЬШЕЙ ЦЕНЕ</p>
                    </div>
                </div>
            </div>

            <div className="cards">
                {cards.map(card => (
                    <Card
                        key={card.id}
                        name={card.name}
                        cost={card.cost + "₽"}
                        img={card.img}
                        alt={card.alt}
                    />
                ))}
            </div>
        </div>
    );
}
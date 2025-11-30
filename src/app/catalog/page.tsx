"use client"

import CatalogCard from '../components/catalogCard/catalogCard';
import './catalog.scss';
import ball from "../../../public/img/ballsantols.svg";
import chel from "../../../public/img/nigerforma.svg";
import mayka from "../../../public/img/maika.svg";
import suvenir from "../../../public/img/suvenir.svg";
import tshirt from "../../../public/img/nigerfootballka.svg";
import cofta from "../../../public/img/nigerspina.svg";
import cal from "../../../public/img/tatooha.svg";

export default function Card() {
       const cardData = [
        {
            id: 1,
            name:"МЯЧИ",
            img: ball,
            link: '/ball',
            alt: "МЯЧИ",
        },
        {
            id: 2,
            name:"ФОРМА",
            img: chel,
            link: '/ball',
            alt: "ФОРМА",
        },
        {
            id: 3,
            name:"МАЙКИ",
            img: mayka,
            link: '/ball',
            alt: "МАЙКИ",
        },
        {
            id: 4,
           name:"СУВЕНИРЫ",
            img: suvenir,
            link: '/ball',
            alt: "СУВЕНИРЫ",
        },
        {
            id: 5,
            name:"ФУТБОЛКИ",
            img: tshirt,
            link: '/ball',
            alt: "ФУТБОЛКИ",
        },
        {
            id: 6,
            name:"КОФТЫ",
            img: cofta,
            alt: "КОФТЫ",
            link: '/ball'
        },
        {
            id: 7,
            name:"НОВАЯ КОЛЛЕКЦИЯ",
            img: cal,
            alt: "НОВАЯ КОЛЛЕКЦИЯ",
            link: '/ball'
        },
    ]
  return (
    <div className='catalog'>
        <h2 className='h2'>КАТАЛОГ</h2>
        <div className='cardsc'>
        {cardData.map((card) => (
                        <CatalogCard
                            key={card.id}
                            name={card.name}
                            img={card.img}
                            alt={card.alt}
                            link={card.link}
                        />
                      ))}
        </div>
    </div>
  );
}
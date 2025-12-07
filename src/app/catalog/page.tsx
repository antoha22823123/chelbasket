"use client"

import CatalogCard from '../components/catalogCard/catalogCard';
import './catalog.scss';
import suvenir from "../../../public/img/suvenir.svg";
import {ballsantols, nigerforma, maika, nigerfootballka, nigerspina, tatooha
} from "../../../img"


export default function Card() {
       const cardData = [
        {
            id: 1,
            name:"МЯЧИ",
            img: ballsantols,
            link: '/ball',
            alt: "МЯЧИ",
        },
        {
            id: 2,
            name:"ФОРМА",
            img: nigerforma,
            link: '/ball',
            alt: "ФОРМА",
        },
        {
            id: 3,
            name:"МАЙКИ",
            img: maika,
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
            img: nigerfootballka,
            link: '/ball',
            alt: "ФУТБОЛКИ",
        },
        {
            id: 6,
            name:"КОФТЫ",
            img: nigerspina,
            alt: "КОФТЫ",
            link: '/ball'
        },
        {
            id: 7,
            name:"НОВАЯ КОЛЛЕКЦИЯ",
            img: tatooha,
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
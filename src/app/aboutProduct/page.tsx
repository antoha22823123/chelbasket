"use client"
import slide1 from "../../../public/img/slide.svg";
import slide2 from "../../../public/img/slide2.svg";
import Image from "next/image";
import './aboutProduct.scss'
import SliderProduct from "../components/sliderProduct/sliderProduct";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/footer/footer";

export default function AboutProduct() {
    const [open, setOpen] = useState(false);

    const images = [
    { src: slide1, alt: "Фото 1" },
    { src: slide1, alt: "Фото 2" },
    { src: slide1, alt: "Фото 3" },
    { src: slide1, alt: "Фото 4" },
  ];
    return (
    <>
    <p className="page">Главная / Каталог / Футболки</p>
    <div className="about-page">
        <div className="slider">
            <SliderProduct images={images} />
        </div>
        <div className="about-desc">
            <h1>Футболка <br /> с логотипом</h1>
            <ul className="size">
                <li>XS <br /> 40-42</li>
                <li>XS <br />40-42</li>
                <li>XS <br />40-42</li>
                <li>XS <br />40-42</li>
            </ul>
            <div className="descBtn noselect"
            onClick={() => setOpen(!open)}>
                <div className="dropDescBtn">ОПИСАНИЕ</div>
                  <div className={`dropDescContent ${open ? "show" : ""}`}>
                    <p >dasdsadasd asdsa dasdasdasdasd asdasdsasa dsdasdasdasda sdsadasdas</p>
                  </div>
            </div>
        </div>
    </div>
    </>
  );
}
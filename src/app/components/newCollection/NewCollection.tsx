"use client";
import Image from "next/image";
import {img51, img52
} from "../../../../img"
import "./NewCollection.scss"
import { format } from "path";
const NewCollection = () => {
  return (
    <section className="new-collection">
        <div className="content-wrapper">
            <div className="left-content">
            <div className="collection">
            <h3>НОВАЯ <br/>
                КОЛЛЕКЦИЯ
            </h3>
        </div>
        <div className="merch">
             <h4>
                Официальный мерч <br/>
                <span>Сезон 25-26</span>
            </h4>
        </div>
        <div className="item1">
                <Image src={img51} alt="кофта"></Image>
        </div>
        </div>
        <div className="right-content">
            <div className="items">
            <div className="item2">
                <Image src={img52} alt="футболка"></Image>
            </div>
        </div>
        </div>
        </div>
       
        <button className="view-all-button">
        УЗНАТЬ ПОДРОБНЕЕ
        </button>
    </section>
  )
}

export default NewCollection
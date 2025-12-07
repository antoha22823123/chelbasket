"use client";
import Image from "next/image";
import man from "../../../../public/img/photo_2_2025-12-02_00-57-04.jpg"
import blackMan from "../../../../public/img/photo_1_2025-12-02_00-57-04.jpg"
import {img59
} from "../../../../img"


const SeasonForm = () => {
  return (
    <section className="season-form">
    <div className="content-grid">
        <div className="left-column">
            <div className="img-top">
                <Image src={man} alt="кофта"></Image>
            </div>
            <div className="img-bottom">
                <Image src={img59} alt="кофта"></Image>
            </div>
        </div>
        <div className="right-column">
            <div className="text-block">
                <h3>
                    СЕЗОННАЯ <br />
                    ФОРМА <br />
                    <span className="highlight">25-26</span>
                </h3>
                <p>
                    Пошив по индивидуальным <br />
                    размерам и возможностью <br />
                    нанесения фамилии и номера
                </p>
            </div>
            <div className="img-main">
                <Image src={blackMan} alt="кофта"></Image>
            </div>
        </div>

    </div>
    <button className="action-button">
        УЗНАТЬ ПОДРОБНЕЕ
    </button>
</section>
  )
}

export default SeasonForm
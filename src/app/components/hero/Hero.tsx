import "./Hero.scss";
import Image from "next/image";
import {bg1
} from "../../../../img"

export default function Hero() {
    return (
        <section className="hero">
            <Image className="back" src={bg1} alt="213"/>
            <div className="content">
                <h1><span>ОФИЦИАЛЬНЫЙ МАГАЗИН БК</span></h1>
                <h1>ЧЕЛБАСКЕТ</h1>
            </div>
        </section>
    );
}
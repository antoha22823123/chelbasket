import "./Hero.scss";
import Image from "next/image";
import back from "../../../../public/img/bg1.png";

export default function Hero() {
    return (
        <section className="hero">
            <Image className="back" src={back} alt="213"/>
            <div className="content">
                <h1><span>ОФИЦИАЛЬНЫЙ МАГАЗИН БК</span></h1>
                <h1>ЧЕЛБАСКЕТ</h1>
            </div>
        </section>
    );
}
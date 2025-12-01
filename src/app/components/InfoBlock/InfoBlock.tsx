"use client";
import Image from "next/image";
import Vector from "../../../../public/img/photo_3_2025-12-02_00-57-04.svg"
import "./InfoBlock.scss";
export default function InfoBlock() {
    return (
        <section className="info-block">
            <div className="marquee-strip">
                <div className="marquee-item">
                    <h4>16 НОЯБРЯ 2025</h4>
                    <Image src={Vector} alt="Баскетбольный мяч" className="ball-icon"></Image>
                    <h3>ЧЕЛБАСКЕТ</h3>
                </div>
               <div className="marquee-item">
                    <h4>16 НОЯБРЯ 2025</h4>
                    <Image src={Vector} alt="Баскетбольный мяч" className="ball-icon"></Image>
                    <h3>ЧЕЛБАСКЕТ</h3>
                </div>
                <div className="marquee-item">
                    <h4>16 НОЯБРЯ 2025</h4>
                    <Image src={Vector} alt="Баскетбольный мяч" className="ball-icon"></Image>
                    <h3>ЧЕЛБАСКЕТ</h3>
                </div>
            </div>
        </section>
    )
}
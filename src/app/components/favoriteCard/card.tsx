"use client"
import { useState } from "react";

import { IPropsCard } from "@/app/props/IProps";
import './card.scss';
import Image from "next/image";
import Link from "next/link";


export default function Card({img, name, cost, alt}:IPropsCard) {
   
  return (
    <Link href="/aboutProduct">
    <div className="card">

        <Image className="product" src={img} alt={alt} />
        <div className="card-text">
            <p className="name-product">{name}</p>
            <p className="cost-product">{cost}</p>
        </div>
        <button className="cardbut" >В КОРЗИНУ</button>
    </div>
    </Link>
  );
}
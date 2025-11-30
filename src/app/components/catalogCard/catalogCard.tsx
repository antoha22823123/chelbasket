"use client"
import { useState } from "react";

import { IPropsCard } from "@/app/props/IProps";
import './catalogCard.scss';
import Image from "next/image";
import Link from "next/link";


export default function catalogCard({img, name, alt, link}:IPropsCard) {
   
  return (
    <>
    <Link href={link}>
    <div className="catalogCard">
            <h3 className="name-catalog">{name}</h3>
        <Image className="product" src={img} alt={alt} />
    </div>
    </Link>
    </>
  );
}
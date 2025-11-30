"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/img/logo.svg";
import Search from "../../../../public/img/search.svg";
import Personal from "../../../../public/img/лк.svg";
import Cart from "../../../../public/img/корзина.svg";
import styles from "./header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <Image src={Logo} alt="logo" className={styles.logo} />
      </Link>

      <nav className={`${styles.center} ${menuOpen ? styles.open : ""}`}>
        <Link className="gla" href={"/"}>ГЛАВНАЯ</Link>
        <div className={styles.dropDown}>
          <div className={styles.dropBtn}>
            <Link href={"/catalog"}>Каталог</Link>
          </div>
          <div className={styles.dropContent}>
            <Link href={"/ball"}>Мячи</Link>
          </div>
        </div>
      </nav>

      <div className={styles.rightHd}>
        <Image src={Search} alt="search" />
        <Image src={Cart} alt="Корзина" />
        <Link href={"/auth"}>
          <Image src={Personal} alt="Личный кабинет" />
        </Link>
        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </button>
      </div>
    </header>
  );
}

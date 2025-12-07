"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";
import {logoSvg, search, lk, basket
} from "../../../../img"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <Image src={logoSvg} alt="logo" className={styles.logo} />
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
        <Image src={search} alt="search" />
        <Image src={basket} alt="Корзина" />
        <Link href={"/auth"}>
          <Image src={lk} alt="Личный кабинет" />
        </Link>
        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </button>
      </div>
    </header>
  );
}

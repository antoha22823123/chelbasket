"use client";
import Image from "next/image";
import {telegramIcon, logoSvg, vk, youtubeIcon,
} from "../../../../img"

export default function Footer() {


  return (
<footer>
          <div className="normalization-of-position">
            <div className="left-content">
              <Image src={logoSvg} alt="logo" width={200}></Image>
              <p className="label-text">Станьте тем, кто первый узнает об обновлениях в коллекциях</p>
              <input className="E-mail" type="text" placeholder="E-mail" required/>
              <p className="opacity-text">Указывая E-mail вы соглашаетесь на рассылку</p>
              <button className="button_enter_footer">Подписаться</button>
            </div>
            <div className="right-content">
              <ul>
                <li>Футболки</li>
                <li>Майки</li>
                <li>Кофты</li>
                <li>Мячи</li>
                <li>Сувениры</li>
              </ul>
            </div>
          </div>
          <div className="under-element">
            <div className="element_under_center">
              <p>2025</p>
              <p>Политика конфиденциальности</p>
              <div className="img_footer">
                <a href="https://web.telegram.org/k/"><Image src={vk} alt="telegram" width={25}></Image></a>
                <Image src={youtubeIcon} alt="telegram" width={25}></Image>
                <Image src={telegramIcon} alt="telegram" width={25}></Image>
              </div>
            </div>
          </div>
       </footer>
  );
}

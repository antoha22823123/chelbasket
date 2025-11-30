import Card from "../components/favoriteCard/card";
import './auth.scss'
import Shrek from "../img/Shrek.jpg";
import ball from "../img/image 5.png"
import Link from "next/link";

export default function Auth() {
    
  return (
    <div className="authorization_page">
        <div className="button_swap">
            <button className="button_enter_swap">Войти</button>
            
            <Link href={"/register"}><button className="buttont_reg_swap">Регистрация</button></Link>
        </div>
        <div className="autho_form">
            <form action="">
                <input className="Nomer" type="tel"  placeholder="Номер телефона"/><br />
                <input className="Parol" type="password" placeholder="Пароль"/> <br />
                <button className="button_enter">Войти</button>
            </form>
        </div>
    </div>
  );
}
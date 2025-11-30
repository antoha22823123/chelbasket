import Card from "../components/favoriteCard/card";
import './register.scss'
import Shrek from "../img/Shrek.jpg";
import ball from "../img/image 5.png"
import Link from "next/link";

export default function Register() {
    
  return (
    <div className="authorization_page">
        <div className="button_swap">
           <Link href={"/auth"}><button className="button_enter_swap_reg">Войти</button></Link> 
            <button className="buttont_reg_swap_reg">Регистрация</button>
        </div>
        <div className="reg_form">
            <form action="">
                <input className="FIO" type="text"  placeholder="ФИО*" required/><br />
                <input className="EL_mail" type="mail" placeholder="Эл. Почта*" required/> <br />
                <input className="Phone" type="tel"  placeholder="Номер телефона*" required/><br />
                <input className="Password" type="password"  placeholder="Пароль*" required/><br />
                    <div className="Checkbox_reg">
                        <input id="box" className="checkbox_input" type="checkbox"  placeholder="Пароль*" required/><br />
                        <label className="lable_box" htmlFor="box">Я согласен получать коммерческие сообщения о компаниях Бк“ЧЕЛБАСКЕТ“, их спонсорах и/или организациях, связанных с деятельностью Клуба.</label>
                    </div>
                <p className="conf_text">Создавая учётную запись и регистрируясь, вы подтверждаете, что прочитали и принимаете политику конфиденциальности.</p>
                <button className="button_enter">Создать</button>
            </form>
        </div>
    </div>
  );
}
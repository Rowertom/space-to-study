import { useState } from "react";
import { ReactComponent as Logo } from "../../asessts/Label.svg";
import { ReactComponent as Person } from "../../asessts/person.fill.svg";
import './style.scss';

export const Header = () => {
    const [auth, setAuth] = useState(false);

    const changeStatus = () => {
        setAuth(state => !state);
    }
    return (
        <div className="header">
            <Logo />
            <nav className="header__menu">
                <span className="header__menu__btn">Главная</span>
                <span className="header__menu__btn">Курсы</span>
                <span className="header__menu__btn">Блог</span>
                <span className="header__menu__btn">FAQ</span>
            </nav>
            <div onClick={changeStatus} style={{ cursor: "pointer" }}>
                {auth ?
                    <Person /> :
                    <button className="header__btn">Войти</button>
                }
            </div>
        </div>
    )
}
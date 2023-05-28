import React from "react"
import style from "../header/Header.module.css"


export const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.nav}>
                    <a href="/">Главная</a>
                    <a href="/">Скилы</a>
                    <a href="/">Работы</a>
                    <a href="/">Контакты</a>
                </div>
            </div>
        </div>
    );
}


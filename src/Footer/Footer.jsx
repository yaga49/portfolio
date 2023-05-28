import React from "react"
import style from "./Footer.module.css"


export const Footer = (props) => {
    return (<div className={style.footerBlock}>
            <div className={style.container}>
                <h3 className={style.title}>Владимир Комаров</h3>
                <div className={style.footer}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <span className={style.description}>2023 Все права защищены</span>
            </div>
        </div>);
}


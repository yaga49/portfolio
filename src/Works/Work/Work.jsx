import React from "react"
import style from "./Work.module.css"


export const Work = (props) => {
    return (
        <div className={style.work}>
            <div className={style.imgContainer}>

                <a className={style.imgBlock}>Отправить</a>
            </div>

            <h3 className={style.title}>{props.title}</h3>
            <p className={style.description}>{props.description}</p>
        </div>
    );
}


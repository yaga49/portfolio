import React from "react"
import style from "./Contacts.module.css"


export const Contacts = (props) => {
    return (<div className={style.contactBlock}>
            <div className={style.container}>
                <div className={style.inputContact}>
                    <h3 className={style.title}>Контакты</h3>
                    <form className={style.contactForm}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea></textarea>
                    </form>

                    <a className={style.sendLink}>Отправить</a>
                </div>
            </div>
        </div>);
}


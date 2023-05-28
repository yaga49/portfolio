import React from "react"
import style from "./Works.module.css"
import {Work} from "./Work/Work";


export const Works = (props) => {
    return (
        <div className={style.worksBlock}>
            <div className={style.container}>
                <h3 className={style.title}>Работы</h3>
                <div className={style.works}>
                    <Work title={"social network"} description={"awdawda wawd awd awd awdaawd"}/>
                    <Work title={"TodoList"} description={"awawawd awdawd awdawdaw "}/>
                </div>
            </div>

        </div>
    );
}


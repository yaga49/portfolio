import React from "react"
import style from "../Skills/Skills.module.css"
import {Skill} from "./Skill/Skill";


export const Skills = (props) => {
    return (
        <div className={style.skillsBlock}>
            <div className={style.container}>
                <h1 className={style.title}>Skills</h1>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"awdawwadadwadwadw dawdadaawdawdad awd awdawd awdaw awd aw "}/>
                    <Skill title={"CSS"} description={"awdawwadadwadwadw dawdadaawdawdad awd awdawd awdaw awd aw "}/>
                    <Skill title={"REACT"} description={"awdawwadadw adwadwdawdadaawdawdad awd awdawd awdaw awd aw "}/>
                </div>
            </div>
        </div>
    );
}


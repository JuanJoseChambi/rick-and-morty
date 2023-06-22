import style from "./About.module.css";

export default function About() {
    return (
        <div className={style.div}>
            <div className={style.containerImg}>
                <img className={style.imagen} src="https://www.dolldivine.com/images/rick-and-morty-character-maker-app.png" alt="img" />
            </div>
            <div>
                <h1 className={style.h1}>Proyecto Integrador</h1>
                <p className={style.p}>Este proyecto Integrador se creo durante la etapa del Bootcamp de SoyHenry, y se busco acoplar las 
                    enseñanzas aprendidas durante las clases desarollarlo en un proyecto individual, para reforzar conocimientos, 
                    y que sirva de base para los utlimos Proyectos Finales</p>
            </div>
        </div>
    )
}
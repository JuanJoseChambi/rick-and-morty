import { useState } from "react";
import style from "./Form.module.css";
import valiidation from "./Validation";

export default function Form(props) {
    const {login} = props;
    const [userData, setUserdata] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })

    function handleChange(evento) {
        setUserdata({
            ...userData,
            [evento.target.name]: evento.target.value,
        })
        setErrors(valiidation({
            ...userData,
            [evento.target.name]: evento.target.value,
        }))
    }
    function handleSubmit(evento){
        evento.preventDefault();
        login(userData)
    }   


    return (
        <div className={style.login}>
            <div className={style.imgContent}>
                <img className={style.imgLogin} src="https://2.bp.blogspot.com/-DbdQA7PZXz8/XdSQR_0L51I/AAAAAAAAb8Q/GJxyWu3K9i4G15o2epgr5ILCAkqD5EJDQCLcBGAsYHQ/s640-rw/864x1536.png" alt="Rick and Morty" />
            </div>
            <form className={style.formulario}>
                <div className={style.logoLogin}>
                <img className={style.imgLogo} src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" alt="rick and morty" />
                </div>
                <label className={style.nameInput}>Email</label>
                <input type="text" placeholder="Correo Electronico" value={userData.email}  name="email" onChange={handleChange} className={style.input} autoComplete="off"/>
                <p className={style.error}>{errors.email}</p>

                <label className={style.nameInput}>PassWord</label>
                <input type="password" placeholder="Contraseña" value={userData.password}  name="password" onChange={handleChange} className={style.input}/>
                <p className={style.error}>{errors.password}</p>

                <button type="submit" onClick={handleSubmit} className={style.boton}>Enviar</button>
            </form>
        </div>
    )
}
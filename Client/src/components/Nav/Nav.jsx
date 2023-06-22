
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Nav(props) {
    const { onSearch, random } = props

    const location = useLocation();

    const isHome = location.pathname === ("/Home")

    return (
        <div className={style.displayNav}>
            <div className={style.imgDiv}>
                <img className={style.imgLogo} src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" alt="rick and morty" />
            </div>
            <div className={style.search}>
                <SearchBar onSearch={onSearch} />
            </div>
            
            <div className={style.botones}>
            {isHome ? <button className={style.botonNav} onClick={random}>Random</button> : null}
                <NavLink to={"/favorites"}> 
                    <button className={style.botonNav}>Favorites</button>
                </NavLink>
                <NavLink to="/about">
                    <button className={style.botonNav}>About</button>
                </NavLink>
                <NavLink to="/Home">
                    <button className={style.botonNav}>Home</button>
                </NavLink>
            </div>
        </div>
    )
}

import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import style from "./Detail.module.css"


export default function Detail() {

    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return () => { setCharacter({}) };
    }, [id]);

    return (
        <div className={style.display}>
            <div className={style.imagen}>
                <img src={character.image} alt={character.name} />
            </div>
            <div className={style.infoCharacter}>
                <h1 className={style.h1}>Informacion</h1>
                <h2 className={style.description}>Nombre:</h2>
                <h3 className={style.data}> {character.name}</h3>
                <h2 className={style.description}>Status:</h2>
                <h3 className={style.data}>{character.status}</h3>
                <h2 className={style.description}>Species:</h2>
                <h3 className={style.data}> {character.species}</h3>
                <h2 className={style.description}>Gender:</h2>
                <h3 className={style.data}>{character.gender}</h3>
                <h2 className={style.description}>Origin:</h2>
                <h3 className={style.data}>{character.origin && character.name}</h3>
            </div>
        </div>


    )
}
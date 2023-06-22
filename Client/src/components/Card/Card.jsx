import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card(props) {
   const { character, onClose,myFavorites,addFav,removeFav} = props;
   const [isFav, setIsFav] = useState(false);

   const [botonClose, setBotonClose] = useState(true)

   useEffect(() => {
      if(!onClose){
         setBotonClose(false)
      }
   },[])

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   

   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         removeFav(character.id);
      }
      if (!isFav) {
         setIsFav(true);
         addFav(character);
      }
   }
   


   return (
      <div className={style.card}>
         {isFav ? (
            <button onClick={handleFavorite} className={style.corazon}>❤️</button>
         ) : (
            <button onClick={handleFavorite} className={style.corazon}>🤍</button>
         )}
         {botonClose && (<button onClick={() => { onClose(character.id) }} className={style.boton}>X</button>)}
         <div className={style.cardIBN}>
            <img src={character.image} alt={character.name} className={style.imgCard} />
            <Link to={`/detail/${character.id}`}>
               <h2 className={style.name}>{character.name}</h2>
            </Link>
         </div>
         <div className={style.data}>
            <h2 className={style.dataInfo}>{character.status}</h2>
            <h2 className={style.dataInfo}>{character.species}</h2>
            <h2 className={style.dataInfo}>{character.gender}</h2>
         </div>

      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
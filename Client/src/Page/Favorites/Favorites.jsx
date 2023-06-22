import { connect } from "react-redux";
import Card from "../../components/Card/Card"
import { filterCards, orderCards, resetFavorites} from "../../redux/actions";
import { useDispatch} from "react-redux";
import style from "./Favorites.module.css"


function Favorites({ favorites}) { 

  
  const dispatch = useDispatch()
  

  function handleOrder(evento) {
    dispatch(orderCards(evento.target.value));
  }
  function handleFilter(evento) {
    dispatch(filterCards(evento.target.value))
  }
  function handleReset(){
    dispatch(resetFavorites())
  }
  return (
    <div>
      <select onChange={handleOrder} className={style.selector}>
        <option value="Ascendente" className={style.opciones}>Ascendente</option>
        <option value="Descendente" className={style.opciones}>Descendente</option>
      </select>
      {/* {["Male","Female","unknown","Genderless"].map((gender) => (
        <option value={gender}>{gender}</option> | este sirve para renderizar etiquetas option
      ))} */}
      <select onChange={handleFilter} className={style.selector}>
        <option value="Male" className={style.opciones}>Male</option>
        <option value="Female" className={style.opciones}>Female</option>
        <option value="Genderless" className={style.opciones}>Genderless</option>
        <option value="unknown" className={style.opciones}>unknown</option>
      </select>
      <button onClick={handleReset} className={style.reset}>Reset</button>
      <div className={style.display}>
        {favorites.map((favorite) => (
          <Card key={favorite.id} character={favorite}/>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
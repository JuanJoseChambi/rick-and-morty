import { useState } from "react";
import style from "./SearchBar.module.css";


export default function SearchBar(props) {
   const { onSearch } = props;

   const [id, setId] = useState("");

   function changeHandler(e) {
      let input = e.target.value
      setId(input)
   }


   return (
      <div className={style.contentSearch}>
         <div className={style.searchdiv}>
            <input type='search' value={id} onChange={changeHandler} className={style.inputSearch} />
            <button onClick={() => onSearch(id)} className={style.buttonSearch}>Agregar</button>
         </div>
      </div>
   );
}

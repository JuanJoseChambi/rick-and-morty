import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const RESET = "RESET";

// -----------------FAVS

export const addFav = (character) => {
  try {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
       const {data}= await axios.post(endpoint, character);
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
    };
  } catch (error) {
    alert("No se pudo agregara a Favoritos")
  }
};

// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: ADD_FAV,
//              payload: data,
//           });
//        });
//     };
//  };

export const removeFav = (id) => {
try {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return async (dispatch) => {
     const data = (await axios.delete(endpoint)).data;
        return dispatch({
           type: REMOVE_FAV,
           payload: data,
     });
  };
} catch (error) {
  alert("No se pudo Eliminar de Favoritos")
}

};

// export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//        axios.delete(endpoint).then(({ data }) => {
//           return dispatch({
//              type: REMOVE_FAV,
//              payload: data,
//        });
//        });
//     };
//  };

/*export function addFav (character){
    return{
        type: ADD_FAV,
        payload: character
    }
}
Antigua Funcion de agregar favoritos*/
// ----------------FILTER
export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}
export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}
export function resetFavorites() {
  return {
    type: RESET,
  };
}

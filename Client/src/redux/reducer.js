import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./actions";

let initialState = {
  myFavorites: [],
  allCharacters: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case REMOVE_FAV:
      return { ...state,
        myFavorites: action.payload };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (character) => character.gender === action.payload
        ),
      };
    case ORDER:
      let characterOrder;
      if (action.payload === "Ascendente") {
        characterOrder = state.myFavorites.sort((a, b) => a.id - b.id); //a.id > b.id ? 1 : -1
      } else {
        characterOrder = state.myFavorites.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: [...characterOrder],
      };
    case RESET:
      return {
        ...state,
        myFavorites: state.allCharacters,
      };
    default:
      return { ...state };
  }
}

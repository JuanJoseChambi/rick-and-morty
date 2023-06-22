let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;
  myFavorites.push(character);
  return res.status(200).json(myFavorites);
}
//se retorna cuando es una funcion la cual tiene que ejecutar una accion como lo es 
//hacer una accion. algo a tenr en cuenta es que este no es nesecario cuando 
// es una peticion de una ruta o algo parecedo ya que es un dirreccionamiento.
const deleteFav = (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter((char) => char.id !== Number(id))
  return res.status(200).json(myFavorites);
}

module.exports = {
  postFav,
  deleteFav,
};

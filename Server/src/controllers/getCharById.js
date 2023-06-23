const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const { id } = req.params;
  try {
     /*Lo que esta entre parentesis vendria a ser la response, ya que tiene el await 
     que ese el caso de espera (await) y respuesta(response)
     y seria : response.data*/
    const data = (await axios(URL + id)).data; 
    if (data.name) {
      let character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin?.name,
        image: data.image,
        status: data.status,
      };
      return res.status(200).json(character);
    } else {
      return res.status(400).send("Not Found");
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
module.exports = { getCharById };

// const axios = require("axios");
// const URL = "https://rickandmortyapi.com/api/character/";

// function getCharById(res, id) {
//   axios(URL + id)
//     .then((response) => response.data)
//     .then((data) => {
//       const character = {
//         id: data.id,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         origin: data.origin?.name,
//         image: data.image,
//         status: data.status,
//       };
//       res.writeHead(200, { "content-type": "application/json" });
//       res.end(JSON.stringify(character));
//     })
//     .catch((err) => {
//       res.writeHead(500, { "content-type": "text/plain" });
//       res.end(err.message);
//     });
// }

// module.exports = getCharById;

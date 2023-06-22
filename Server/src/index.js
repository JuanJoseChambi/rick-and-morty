const server = require("./app")
const PORT = 3001;

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});

// let http = require("http");
// // const data = require("./utils/data.js");
// const getCharById = require("./controllers/getCharById.js")

// http
//   .createServer((req, res) => {
//     const { url } = req;
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (url.includes("/rickandmorty/character")) {
//       let id = url.split("/").pop();
//       getCharById(res,id)
//     }
//   })
//   .listen(3001);

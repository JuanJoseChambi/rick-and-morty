import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./Page/About/About.jsx";
import Detail from "./Page/Detail/Detail";
import Error from "./Page/Error/Error";
import Form from "./components/Form/Form";
import Favorites from "./Page/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  
  const url = `http://localhost:3001/rickandmorty/character/`;
  
  async function searchHandler(id) {
    try {
      const data = (await axios(url + id)).data;
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      }catch (error) {
        window.alert("¡No hay personajes con este ID!")
      }
    } 
  

  // function searchHandler(id) {
  //   axios
  //     .get(`http://localhost:3001/rickandmorty/character/${id}`)
  //     .then((response) => {
  //       const data = response.data;
  //       if (data.name) {
  //         setCharacters((oldChars) => [...oldChars, data]);
  //       } else {
  //         window.alert("¡No hay personajes con este ID!");
  //       }
  //     });
  // }


  function randomHandler() {
    let haveIt = [];
    let random = (Math.random() * 826).toFixed();
    random = Number(random);
    if (!haveIt.includes(random)) {
      haveIt.push(random);
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    } else {
      console.log("Ya agregaste todos los personajes");
      return false;
    }
  }
  function closeHandler(id) {
    const deleted = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(deleted);
  }
  const location = useLocation();

  const isNav = location.pathname === "/"; 
  //esta luego se usa en el renderizado para preguntar si se esta en el path(direccion)
  //que tenga un "/" y se usa operadores ternarion, el cual si es true no muestra nada y es null, y si es false y no esta en esa direccion este
  //muestra el componente nav
  // --------------------

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);


  async function login(userData) {
    const { email, password } = userData;
    const endpoint = "http://localhost:3001/rickandmorty/login";
    try {
      const data = (await axios(endpoint + `?email=${email}&password=${password}`)).data;
      const { access } = data;
      setAccess(access);
      access && navigate("Home");
    } catch (error) {
      alert("Datos Incorrectos:" + error)
    }
  }
  // function login(userData) {
  //   const { email, password } = userData;
  //   const URL = "http://localhost:3001/rickandmorty/login";
  //   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
  //     const { access } = data;
  //     setAccess(access);
  //     access && navigate("Home");
  //   });
  // }

  // function login(userData){
  //    if (userData.email === EMAIL && userData.password === PASSWORD) {
  //       setAccess(true);
  //      navigate('/home')
  //    }else{
  //       alert("Datos Incorrectos")
  //    }
  // }Funcion Antigua de un Login

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  // -------------------
  return (
    <div className="App">
      {isNav ? null : <Nav onSearch={searchHandler} random={randomHandler} />}
      <Routes>
        <Route
          path="/favorites"
          element={<Favorites onClose={closeHandler} />}
        />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={closeHandler} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

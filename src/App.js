import React, { useState, useEffect } from "react";
//Components
import Error from "./components/Error";
import Header from "./components/Header";
import Form from "./components/Form";
import Clima from "./components/Clima";
//Css
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState("{}");

  const consultarDatos = datos => {
    if (datos.city === "" || datos.country === "") {
      setError(true);
      return;
    }
    setCity(datos.city);
    setCountry(datos.country);
    setError(false);
  };

  //Colocando componentes condicionales
  let component = error ? (
    <Error message="Debe completas todos los formularios" />
  ) : resultado.cod === "404" ? (
    <Error message="No existe esa ciudad en ese pais" />
  ) : (
    <Clima resultado={resultado} />
  );

  useEffect(() => {
    if (city) {
      const consultarApi = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API_KEY}`;
        const respuest = await fetch(url);
        const resultado = await respuest.json();
        setResultado(resultado);
      };
      consultarApi();
    }
   
  }, [city, country]);

  return (
    <div className="App">
      <Header title="WheatherApp" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form consultarDatos={consultarDatos} />
            </div>
            <div className="col s12 m6">{component}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

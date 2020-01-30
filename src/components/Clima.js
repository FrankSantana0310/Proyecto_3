import React from "react";

const Clima = ({ resultado }) => {
  const { name, main } = resultado;

  const Kelvin = 273.15;

  return name ? (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>Resultado Clima de {name} es :</h2>
        <p className="temperatura">
          {parseInt(main.temp - Kelvin, 10)}
          <span>&#x2103;</span>
        </p>
        <p>
          Temperatura Maxima: {parseInt(main.temp_max - Kelvin, 10)} &#x2103;
        </p>
        <p>
          Temperatura Minima: {parseInt(main.temp_min - Kelvin, 10)} &#x2103;
        </p>
      </div>
    </div>
  ) : null;
};

export default Clima;

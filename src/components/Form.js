import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ consultarDatos }) => {
  //React Recomienda separar el estate en multiples states diferentes
  // const [city, setCity] = useState({city:''});
  // const [country, setCountry] = useState({country:''})

  //     const handleChange =(e) => {
  //         e.target.name === 'city' ? setCity({city:e.target.value}) : setCountry({country:e.target.value});
  //     }

  //De esta manera los hago con un solo state
  const [busqueda, setBusqueda] = useState({ city: "", country: "" });

  const handleChange = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    consultarDatos(busqueda);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          placeholder="City"
          id="city"
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
      </div>
      <div className="input-field col s12">
        <select onChange={handleChange} name="country">
          <option value="">--Select Country--</option>
          <option value="US">Unite States</option>
          <option value="MX">Mexico</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="ES">Spain</option>
          <option value="PE">Peru</option>
        </select>
      </div>
      <div className="input-field col s12">
        <input
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
          value="Buscar Clima"
          type="submit"
        />
      </div>
    </form>
  );
};

Form.propTypes = {
  consultarDatos: PropTypes.func.isRequired,
};

export default Form;

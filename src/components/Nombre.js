import React from "react";
import PropTypes from "prop-types";

function Nombre(props) {
  return (
    <p>
      Hola mi nombre es {props.nombre} {props.apellido}
    </p>
  );
}

Nombre.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
};

export default Nombre;

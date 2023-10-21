import React from "react";

function Nombre(props) {
  return (
    <p>
      Hola mi nombre es {props.nombre} {props.apellido}
    </p>
  );
}

export default Nombre;

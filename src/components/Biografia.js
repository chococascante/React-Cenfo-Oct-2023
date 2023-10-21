import React from "react";

const biografia = {
  nombre: "Luis Cascante",
  biografia: "Soy un desarrollador web",
};

// Crear un componente que muestre su nombre, y alguna biografía, usando una variable.
export const Biografia = () => {
  return (
    <React.Fragment>
      <p>{biografia.nombre}</p>
      <p>{biografia.biografia}</p>
    </React.Fragment>
  );
};

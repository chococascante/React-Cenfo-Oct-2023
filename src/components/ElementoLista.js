import React from "react";

export const ElementoLista = ({ dato, eliminarElementoLista }) => {
  function handleDeleteClick() {
    eliminarElementoLista(dato.email);
  }

  return (
    <li>
      <p>{dato.email}</p>
      <p>{dato.password}</p>
      <button type="button" onClick={handleDeleteClick}>
        Eliminar
      </button>
    </li>
  );
};

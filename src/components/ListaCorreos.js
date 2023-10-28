import React from "react";

export const ListaCorreos = ({ listaCorreos, eliminarElementoLista }) => {
  // asdasda

  function handleDeleteClick(email) {
    eliminarElementoLista(email);
  }

  return (
    <ul>
      {listaCorreos.map(function (correo) {
        return (
          <li key={correo.email}>
            <p>{correo.email}</p>
            <p>{correo.password}</p>
            <button
              type="button"
              onClick={() => {
                handleDeleteClick(correo.email);
              }}
            >
              Eliminar
            </button>
          </li>
        );
      })}
    </ul>
  );
};

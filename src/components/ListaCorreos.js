import React from "react";

export const ListaCorreos = ({ listaCorreos }) => {
  return (
    <ul>
      {listaCorreos.map((correo) => (
        <li key={correo.email}>
          <p>{correo.email}</p>
          <p>{correo.password}</p>
        </li>
      ))}
    </ul>
  );
};

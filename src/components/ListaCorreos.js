import React from "react";
import { ElementoLista } from "./ElementoLista";

export const ListaCorreos = ({ listaCorreos, eliminarElementoLista }) => {
  return (
    <ul>
      {listaCorreos.map(function (dato) {
        return (
          <ElementoLista
            key={dato.email}
            dato={dato}
            eliminarElementoLista={eliminarElementoLista}
          />
        );
      })}
    </ul>
  );
};

import React from "react";

const listaEstudiantes = [
  {
    id: 2,
    nombre: "Alonzo",
    apellido: "Franco",
  },
  {
    id: 3,
    nombre: "Carlos",
    apellido: "Cascante",
  },
  {
    id: 4,
    nombre: "Freddy",
    apellido: "Cascante",
  },
];

// ol -> Ordered list > li
// ul -> Unordered list > li

// [<li><p>Luis Cascante</p></li>, <li><p>Alonzo Franco</p></li>, <li><p>Carlos Cascante</p></li>]

export const ListaEstudiantes = () => {
  // const listaEstudiantesHTML = listaEstudiantes.map(function (estudiante) {
  //   return (
  //     <li>
  //       <p>
  //         {estudiante.nombre} {estudiante.apellido}
  //       </p>
  //     </li>
  //   );
  // });

  // let listaEstudiantesHTML2 = [];

  // for (let i = 0; i < listaEstudiantes.length; i++) {
  //   const estudiante = listaEstudiantes[i];

  //   const nuevoListItem = (
  //     <li>
  //       <p>
  //         {estudiante.nombre} {estudiante.apellido}
  //       </p>
  //     </li>
  //   );

  //   listaEstudiantesHTML2.push(nuevoListItem);
  // }

  // console.log(listaEstudiantesHTML2);

  return (
    <ul>
      {listaEstudiantes.map(function (estudiante, index) {
        return (
          <li key={`${estudiante.nombre}-${index}`}>
            <p>
              {estudiante.nombre} {estudiante.apellido}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

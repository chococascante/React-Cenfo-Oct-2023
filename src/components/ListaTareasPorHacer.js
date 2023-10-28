import React from "react";

export const ListaTareasPorHacer = () => {
  const [listaTareasPorHacer, setListaTareasPorHacer] = React.useState([]);
  const [cargando, setCargando] = React.useState(true);

  const traerTareasPorHacer = async () => {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos");
    const datos = await respuesta.json();

    setListaTareasPorHacer(datos);
    setCargando(false);
  };

  React.useEffect(() => {
    traerTareasPorHacer();
  }, []);

  if (cargando) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <ul>
        {listaTareasPorHacer.map((tarea) => (
          <li>{tarea.title}</li>
        ))}
      </ul>
    </>
  );
};

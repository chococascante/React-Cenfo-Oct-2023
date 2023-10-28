import React from "react";

export const ListaPublicaciones = () => {
  const [listaPublicaciones, setLisPublicaciones] = React.useState([]);
  const [cargando, setCargando] = React.useState(true);

  const traerPublicaciones = async () => {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
    const datos = await respuesta.json();

    setLisPublicaciones(datos);
    setCargando(false);
  };

  React.useEffect(() => {
    traerPublicaciones();
  }, []);

  if (cargando) {
    return <p>Cargando...</p>;
  }

  return (
    <ul>
      {listaPublicaciones.map((publicacion) => (
        <li>
          <p>{publicacion.title}</p>
          <p>{publicacion.body}</p>
        </li>
      ))}
    </ul>
  );
};

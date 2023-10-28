import React from "react";
import Nombre from "./Nombre";

export function EjemploFunciones() {
  // 1
  const [nombre, setNombre] = React.useState("Luis");
  const [apellido, setApellido] = React.useState("Cascante");

  const horaInicio = new Date();

  async function traerDatos() {
    const datos = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const datosJson = await datos.json();

    setNombre(datosJson.title);
    setApellido(datosJson.completed);

    const horaFin = new Date();
    console.log("Tiempo de llamado: ", horaFin - horaInicio);
  }

  React.useEffect(() => {
    const horaFin = new Date();
    console.log("Tiempo de ejecución: ", horaFin - horaInicio);

    traerDatos();
  }, []);

  // 2
  return (
    <div>
      <Nombre nombre={nombre} apellido={apellido} />
    </div>
  );
}

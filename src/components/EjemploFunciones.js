import React from "react";
import Nombre from "./Nombre";

export function EjemploFunciones() {
  // 1
  const [nombre, setNombre] = React.useState("Luis");
  const [apellido, setApellido] = React.useState("Cascante");

  React.useEffect(() => {
    setTimeout(() => {
      setNombre("Alonzo");
      setApellido("Franco");
    }, 5000);
  }, []);

  // 2
  return (
    <div>
      <Nombre nombre={nombre} apellido={apellido} />
    </div>
  );
}

import "./App.css";
import { Biografia } from "./components/Biografia";
import { EjemploClases } from "./components/EjemploClases";
import { EjemploFunciones } from "./components/EjemploFunciones";
import { ListaEstudiantes } from "./components/ListaEstudiantes";

export function App() {
  return (
    <>
      <EjemploClases />
      <EjemploFunciones />
      <Biografia />
      <ListaEstudiantes />
    </>
  );
}

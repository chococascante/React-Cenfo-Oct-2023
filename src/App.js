import "./App.css";
import { FormularioLogin } from "./components/FormularioLogin";
import { FormularioLoginClasses } from "./components/FormularioLoginClasses";
// import { Biografia } from "./components/Biografia";
import { EjemploClases } from "./components/EjemploClases";
import { EjemploFunciones } from "./components/EjemploFunciones";
// import { ListaEstudiantes } from "./components/ListaEstudiantes";

export function App() {
  return (
    <>
      <EjemploFunciones />

      <FormularioLogin />
      <FormularioLoginClasses />
    </>
  );
}

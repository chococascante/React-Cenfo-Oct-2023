import "./App.css";
import { ListaPublicaciones } from "./components/ListaPublicaciones";
import { ListaTareasPorHacer } from "./components/ListaTareasPorHacer";

export function App() {
  return (
    <>
      <ListaTareasPorHacer />
      <ListaPublicaciones />
    </>
  );
}

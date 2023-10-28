import React, { useState } from "react";
import { ListaCorreos } from "./ListaCorreos";

export function FormularioLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [listaCorreos, setListaCorreos] = useState([]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function handleButtonClick() {
    const datos = {
      email: email,
      password: password,
    };

    const nuevaListaCorreos = listaCorreos;
    nuevaListaCorreos.push(datos);

    setListaCorreos(nuevaListaCorreos);

    // Limpiar inputs
    setEmail("");
    setPassword("");
  }

  function eliminarElementoLista(email) {
    const nuevaListaCorreos = listaCorreos.filter(function (dato) {
      return dato.email !== email;
    });

    setListaCorreos(nuevaListaCorreos);
  }

  return (
    <div>
      <form>
        <h1>Inicio de sesión</h1>

        <label htmlFor="email">Correo electrónico</label>
        <input
          onChange={handleEmailChange}
          type="email"
          id="email"
          name="email"
          value={email}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          onChange={handlePasswordChange}
          type="password"
          id="password"
          name="password"
          value={password}
        />

        <button onClick={handleButtonClick} type="button">
          Iniciar sesión
        </button>
      </form>
      <ListaCorreos
        listaCorreos={listaCorreos}
        eliminarElementoLista={eliminarElementoLista}
      />
    </div>
  );
}

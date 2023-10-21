import React, { useState } from "react";

export function FormularioLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    console.log(datos);
  }

  return (
    <form>
      <h1>Inicio de sesión</h1>

      <label htmlFor="email">Correo electrónico</label>
      <input
        onChange={handleEmailChange}
        type="email"
        id="email"
        name="email"
      />

      <label htmlFor="password">Contraseña</label>
      <input
        onChange={handlePasswordChange}
        type="password"
        id="password"
        name="password"
      />

      <button onClick={handleButtonClick} type="button">
        Iniciar sesión
      </button>
    </form>
  );
}

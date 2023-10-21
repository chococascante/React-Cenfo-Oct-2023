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

  console.log(email);
  console.log(password);

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
    </form>
  );
}

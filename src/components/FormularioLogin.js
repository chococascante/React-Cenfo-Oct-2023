import React, { useState } from "react";

export function FormularioLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [state, setState] = useState({
  //   email: "",
  //   password: "",
  // })

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // setState({
    //   ...state,
    //   email: event.target.value
    // });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  React.useEffect(() => {
    console.log("Email", email);
  }, [email]);

  React.useEffect(
    function () {
      console.log("Password", password);
    },
    [password]
  );

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

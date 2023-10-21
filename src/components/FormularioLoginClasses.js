import React, { Component } from "react";

export class FormularioLoginClasses extends Component {
  // Primer paso del ciclo de vida
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleButtonClick() {
    const datos = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(datos);
  }

  render() {
    return (
      <form>
        <h1>Inicio de sesión</h1>

        <label htmlFor="email">Correo electrónico</label>
        <input
          onChange={this.handleEmailChange.bind(this)}
          type="email"
          id="email"
          name="email"
        />

        <label htmlFor="password">Contraseña</label>
        <input
          onChange={this.handlePasswordChange.bind(this)}
          type="password"
          id="password"
          name="password"
        />

        <button onClick={this.handleButtonClick.bind(this)} type="button">
          Iniciar sesión
        </button>
      </form>
    );
  }
}

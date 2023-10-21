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
    this.setState(
      {
        email: event.target.value,
      }
      // function () {
      //   console.log("Email", this.state.email);
      // }
    );
  }

  handlePasswordChange(event) {
    this.setState(
      {
        password: event.target.value,
      }
      // function () {
      //   console.log("Password", this.state.password);
      // }
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.email !== this.state.email) {
      console.log("Email", this.state.email);
    }

    if (prevState.password !== this.state.password) {
      console.log("Password", this.state.password);
    }
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

        <button>Iniciar sesión</button>
      </form>
    );
  }
}

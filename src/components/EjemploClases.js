import React, { Component } from "react";
import Nombre from "./Nombre";

export class EjemploClases extends Component {
  // 1
  constructor(props) {
    super(props);

    this.state = {
      nombre: "Luis",
      apellido: "Cascante",
    };
  }

  // 2
  render() {
    return (
      <div>
        <Nombre nombre={this.state.nombre} apellido={this.state.apellido} />
      </div>
    );
  }

  // 3
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        nombre: "Alonzo",
        apellido: "Franco",
      });
    }, 5000);
  }
}

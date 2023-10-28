import React, { Component } from "react";
import Nombre from "./Nombre";

export class EjemploClases extends Component {
  // 1
  constructor(props) {
    super(props);

    this.horaInicio = new Date();
    this.horaFin = undefined;

    this.state = {
      nombre: "Luis",
      apellido: "Cascante",
    };
  }

  async traerDatos() {
    const datos = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const datosJson = await datos.json();

    this.setState({
      nombre: datosJson.title,
      apellido: datosJson.completed,
    });

    this.horaFin = new Date();
    console.log("Tiempo de llamado: ", this.horaFin - this.horaInicio);
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
    this.horaFin = new Date();
    console.log("Tiempo de ejecución: ", this.horaFin - this.horaInicio);
    console.log("Componente montado");
    this.traerDatos();
    console.log("Llamada terminada");
  }
}

import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import ElectrodomesticoDataService from "../services/electrodomesticos.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeNombreUsuario = this.onChangeNombreUsuario.bind(this);
    this.onChangeClaveUsuario = this.onChangeClaveUsuario.bind(this);
    this.onChangeDateStart = this.onChangeDateStart.bind(this);
    this.onChangeDateEnd = this.onChangeDateEnd.bind(this);
    this.onChangeConsumo = this.onChangeConsumo.bind(this);
    this.saveUsuario = this.saveUsuario.bind(this);
    this.newUsuario = this.newUsuario.bind(this);

    this.state = {
      id: null,
      nombre_usuario: "",
      clave_usuario: "",
      date_start: this.getDate, 
      date_end: this.getDate,
      consumo: "",
      published: false,

      submitted: false
    };
  }

  onChangeNombreUsuario(e) {
    this.setState({
      nombre_usuario: e.target.value
    });
  }

  onChangeClaveUsuario(e) {
    this.setState({
      clave_usuario: e.target.value
    });
  }
  onChangeDateStart(e) {
    this.state({
      date_start: e.target.value
    });
  }
  onChangeDateEnd(e) {
    this.state({
      date_end: e.target.value
    });
  }
  onChangeConsumo(e){
    this.state({
      consumo: e.target.value
    });
  }

  saveUsuario() {
    var data = {
      nombre_usuario: this.state.nombre_usuario,
      clave_usuario: this.state.clave_usuario,
      date_start: this.state.date_start,
      date_end: this.state.date_end,
      consumo: this.state.consumo
    };

    TutorialDataService.create(data)
    .then(response => {
      this.setState({
        id: response.data.id,
        nombre_usuario: response.data.nombre_usuario,
        clave_usuario: response.data.clave_usuario,
        published: response.data.published,

        submitted: true
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });

    ElectrodomesticoDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          nombre_electrodomestico: response.data.nombre_electrodomestico,
          id_electrodomestico: response.data.id_electrodomestico,
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newUsuario() {
    this.setState({
      id: null,
      nombre_usuario: "",
      clave_usuario: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newUsuario}>
                Añadir
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="nombre_usuario">nombre usuario</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre_usuario"
                  required
                  value={this.state.nombre_usuario}
                  onChange={this.onChangeNombreUsuario}
                  name="nombre_usuario"
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="clave_usuario">clave</label>
                <input
                  type="text"
                  className="form-control"
                  id="clave_usuario"
                  required
                  value={this.state.clave_usuario}
                  onChange={this.onChangeClaveUsuario}
                  name="clave_usuario"
                />
              </div>
  
              <button onClick={this.saveUsuario} className="btn btn-success">
                Enviar
              </button>
            </div>
          )}
        </div>
      );
  }
}

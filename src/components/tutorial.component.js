import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import ElectrodomesticosDataService from "../services/electrodomesticos.service";

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeNombreUsuario = this.onChangeNombreUsuario.bind(this);
    this.onChangeClaveUsuario = this.onChangeClaveUsuario.bind(this);
    this.onChangeDateStart = this.onChangeDateStart.bind(this);
    this.onChangeDateEnd = this.onChangeDateEnd.bind(this);
    this.onChangeConsumo = this.onChangeConsumo.bind(this);
    this.getUsuario = this.getUsuario.bind(this);
    this.getElectrodomestico = this.getElectrodomestico.bind(this);
  


    //electrodomesticos
    this.onChangeNombreElectrodomestico = this.onChangeNombreElectrodomestico.bind(this);

    this.state = {
      
      currentUsuario: {
        id: null,
        nombre_usuario: "",
        clave_usuario: "",
        date_start: this.getDate, 
        date_end: this.getDate,
        consumo: "",
        published: false
      },
        currentElectrodomestico:{
          id: null,
          id_usuario:"",
          id_electrodomestico:"",
          nombre_electrodomestico: "",
    }
  }

}
  componentDidMount() {
    this.getUsuario(this.props.match.params.id);
    this.getElectrodomestico(this.props.match.param.id);
  }
  
  onChangeId(e) {
    const id = e.target.value;

    this.setState(function(prevState) {
      return {
        currentElectrodomestico: {
          ...prevState.currentElectrodomestico,
          id: id
        }
      };
    });
  }
  onChangeNombreUsuario(e) {
    const nombre_usuario = e.target.value;

    this.setState(function(prevState) {
      return {
        currentUsuario: {
          ...prevState.currentUsuario,
          nombre_usuario: nombre_usuario
        }
      };
    });
  }
  onChangeNombreElectrodomestico(e) {
    const nombre_electrodomestico = e.target.value;

    this.setState(function(prevState) {
      return {
        currentElectrodomestico: {
          ...prevState.currentElectrodomestico,
          nombre_electrodomestico: nombre_electrodomestico
        }
      };
    });
  }


  getUsuario(id) {
    TutorialDataService.get(id)
      .then(response => {
        this.setState({
          currentUsuario: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentUsuario } = this.state;
    const { currentElectrodomestico} = this.state;
    return (
      <div>
        {currentElectrodomestico ? (
          <div className="edit-form">
            <h4>Usuario</h4>
            <form>
              <div className="form-group">
                <label htmlFor="nombre_electrodomestico">nombre de usuario </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre_electrodomestico"
                  value={currentElectrodomestico.nombre_electrodomestico}
                  onChange={this.onChangeNombreElectrodomestico}
                />
              </div>
              <div className="form-group">
                <label htmlFor="clave_usuario">clave </label>
                <input
                  type="password"
                  className="form-control"
                  id="clave_usuario"
                  value={currentUsuario.clave_usuario}
                  onChange={this.onChangeClaveUsuario}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentUsuario.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentUsuario.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteUsuario}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateUsuario}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}

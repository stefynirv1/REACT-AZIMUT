import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import ElectrodomesticosDataService from "../services/electrodomesticos.service";
import { Link } from "react-router-dom";
import "./styles.css"

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.retrieveUsuarios = this.retrieveUsuarios.bind(this);
    this.refreshList = this.refreshList.bind(this);
    //this.setActiveUsuario = this.setActiveUsuario.bind(this);
    //electrodomesticos
    this.setActiveElectrodomestico = this.setActiveElectrodomestico.bind(this);
    this.retrieveElectrodomesticos = this.retrieveElectrodomesticos.bind(this);

    this.state = {
      usuarios: [],
      electrodomesticos: [],
      currentElectrodomestico:null,
      currentIndexElectrodomestico: -1,
      currentUsuario: null,
      currentIndex: -1,
      searchNombreUsuario: ""
    };
  }

  componentDidMount() {
    this.retrieveUsuarios();
    this.retrieveElectrodomesticos();
  }

  retrieveUsuarios() {
    TutorialDataService.getAll()
      .then(response => {
        this.setState({
          usuarios: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  
  retrieveElectrodomesticos() {
    ElectrodomesticosDataService.getAll()
      .then(response => {
        this.setState({
          electrodomesticos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveElectrodomesticos();
    this.setState({
      currentElectrodomestico:null,
      currentIndexElectrodomestico: -1,
    });
  }

  setActiveElectrodomestico(electrodomestico, index) {
    this.setState({
      currentElectrodomestico: electrodomestico,
      currentIndexElectrodomestico: index
    });
  }

  render() {
    const { searchNombreUsuario,
       usuarios, 
       currentUsuario, 
       currentIndex,
       currentElectrodomestico,
       currentIndexElectrodomestico,
       electrodomesticos
       } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
           
            
          </div>
        </div>
        <div className="col-md-6">
          <h4>Lista de elementos asociados</h4>

          <ul className="list-group">
            {electrodomesticos &&
              electrodomesticos.map((electrodomestico, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndexElectrodomestico ? "active" : "")
                  }
                  onClick={() => this.setActiveElectrodomestico(electrodomestico, index)}
                  key={index}
                >
                  {electrodomestico.nombre_electrodomestico}
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6">
          {currentElectrodomestico ? (
            <div>
              <h4> Elemento seleccionado: {currentElectrodomestico.nombre_electrodomestico}</h4>
              <div>
                <label>
                  <strong>Nombre:</strong>
                </label>{" "}
               {currentElectrodomestico.nombre_electrodomestico}
              </div>
              <div>
                <label>
                  <strong>id:</strong>
                </label>{" "}
                {currentElectrodomestico.id}
              </div>
              <div>
                <label>
                  <strong>Fecha de instalación:</strong>
                </label>{" "}<br></br>
                {currentElectrodomestico.fecha_instalacion}
              
                <label>
                  <hr/>
                  <label><h5>Consumo de energía</h5></label><br/>
                <strong>Rango de fechas:</strong><br></br>
                  <label for="date_start">Fecha inicio</label><br></br>
                  <label>
                  <input type="date" id="date_start" name="trip-start"
                      value={currentElectrodomestico.fecha_instalacion}
                      min={currentElectrodomestico.fecha_instalacion} max="2020-12-31"> 
                    </input>
                  </label><br></br>
                    <label for="date_end">Fecha final</label><br></br>
                  <label>
                 
                 </label>{" "}
                    <input type="date" id="date_end" name="trip-start"
                      value={currentElectrodomestico.fecha_instalacion}
                      min={currentElectrodomestico.fecha_instalacion} max="2020-12-31"> 
                    </input>
                </label>
                <div>
                <label>
                <button type="button" class="btn btn-success">Ver</button>
                </label>{" "}
              
              </div>
              </div>
            </div>
          ) : (
            <div>
              <br />
              <p>Da click en un elemento</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

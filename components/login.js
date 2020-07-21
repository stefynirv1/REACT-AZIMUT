conexion.query('SELECT * FROM usuarios', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});

import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormularioRegistro from '../formulario-registro/formulario'
import Footer from '../Footer'
// estilos
import './../registro/registro.css'

class Registro extends React.Component {

   render(){
       return(
       
        <Container fluid="true">
            <Row className="background-image-registro">
                <Row className="title">
                    Registro
                </Row>
              
            </Row>
           
            <Footer/>
        </Container>
       )
   }
}

  
export default Registro;
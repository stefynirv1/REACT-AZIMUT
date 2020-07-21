import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorial-list.component";


class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dar bg-dark">
            <a href="/tutorials" className="navbar-brand">
              Bienvenido 
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/tutorials"} className="nav-link">
                Ver reportes
                </Link>
              </li>
            </div>
          </nav>
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/","/tutorials"]} component={TutorialsList}/>
              <Route exact path="/add" component={AddTutorial}/>
              <Route path="/tutorials/:id" component={Tutorial}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;

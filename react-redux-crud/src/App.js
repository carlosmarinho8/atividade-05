import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddClient from "./components/add-client.component";
import Client from "./components/client.component";
import ClientsList from "./components/clients-list.component";
class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/clients"} className="navbar-brand">
            Agency Without Borders
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/clients"} className="nav-link">
                Clients
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/clients"]} component={ClientsList} />
            <Route exact path="/add" component={AddClient} />
            <Route path="/clients/:id" component={Client} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
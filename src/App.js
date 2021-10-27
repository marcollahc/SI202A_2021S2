import "./App.css";
import React, { Component } from "react";
import Home from "./components/layout/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Sobre from "./components/layout/Sobrenos";
import Footer from "./components/layout/footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Sobrenos.js" exact component={Sobre} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;

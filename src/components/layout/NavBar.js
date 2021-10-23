import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Home from "../../App";

export default class NavBar extends Component {
  render() {

    const data = new Date();
    const dia = String(data.getDate()).padStart(2,'0');
    const mes = String(data.getMonth() + 1).padStart(2,'0');
    const ano = data.getFullYear();

    const dataAtual = dia + '/' + mes + '/' + ano;

    return (
      <div className="header">
        <a href="index.html">
          <img className="logoBarra" src="Campnews.png" alt="logo" />
        </a>

        <div className="dateBar">
          <a>{dataAtual}</a>
        </div>

        <nav>
          <ul className="elementosBarra">
            <li>
              <a href="index.html">HOME</a>
            </li>
            <li>
              <Link to="/Sobre">SOBRE NÓS</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

//<a href="index.html"><FaSearch/></a>

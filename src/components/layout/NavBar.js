import React, { Component } from "react";
import {Link} from 'react-router-dom';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';

export default class NavBar extends Component {
  render() {

    const data = new Date();
    const dia = String(data.getDate()).padStart(2,'0');
    const mes = String(data.getMonth() + 1).padStart(2,'0');
    const ano = data.getFullYear();

    const dataAtual = dia + '/' + mes + '/' + ano;

    return (
      <div className="header">
        <Link to="/">
          <img className="logoBarra" src="Campnews.png" alt="logo" />
        </Link>

        <div className="dateBar" style={{display:"flex", marginLeft:"120px"}}>
          <CalendarTodayRoundedIcon className="calendarIcon"/>
          <a>{dataAtual}</a>
        </div>

        <nav>
          <ul className="elementosBarra">
            <li>
            <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/Sobrenos.js">SOBRE NÓS</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

//<a href="index.html"><FaSearch/></a>

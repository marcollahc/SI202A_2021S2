import React, { Component } from "react";
import NavBar from "./NavBar";
import "../../App.css";
import "./SobreStyles.css";
import PikachuImage from "../../pikachu.jfif"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Route, Link} from 'react-router-dom';

class Sobre extends Component {
  render() {
    return (
      <div className="pageSobre">
        <NavBar />
        <div className="mainCards">
            <div className="card">
                <img className="profile" src={PikachuImage} alt="Avatar"/>
                <div className="containerCard">
                    <h4><b>Guilherme Braz</b></h4>
                    <div className="linkedinIcon">
                      <i><LinkedInIcon/></i>
                      <a className="anotherA" href="https://www.linkedin.com/in/guilherme-braz-61538a21b/" target="_blank">
                        /guilhermebraz
                      </a>
                    </div>
                </div>
            </div>

            <div className="card">
                <img className="profile" src={PikachuImage} alt="Avatar"/>
                <div className="containerCard">
                    <h4><b>Gustavo Romagnolo</b></h4>
                    <div className="linkedinIcon">
                      <i><LinkedInIcon/></i>
                      <a className="anotherA" href="https://www.linkedin.com/in/gustavo-romagnolo-055584177/" target="_blank">
                        /gustavoromagnolo
                      </a>
                    </div>
                </div>
            </div>

            <div className="card">
                <img className="profile" src={PikachuImage} alt="Avatar"/>
                <div className="containerCard">
                    <h4><b>Marcos Medeiros</b></h4>
                    <div className="linkedinIcon">
                      <i><LinkedInIcon/></i>
                      <a className="anotherA" href="https://www.linkedin.com/in/marcos-medeiros-1baa7b63/" target="_blank">
                        /marcosmedeiros
                      </a>
                    </div>
                </div>
            </div>

            <div className="card">
                <img className="profile" src={PikachuImage} alt="Avatar"/>
                <div className="containerCard">
                    <h4><b>Thamires Prado</b></h4>
                    <div className="linkedinIcon">
                      <i><LinkedInIcon/></i>
                      <a className="anotherA" href="https://www.linkedin.com/in/thamiresprado/" target="_blank">
                        /thamiresprado
                      </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Sobre;

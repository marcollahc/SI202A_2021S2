import "./HomeStyles.css";
import React, { Component } from "react";
import newsImage from "../../news.svg";
import SearchBar from "./SearchBox";
import NoticeList from "./Notice/noticeList";
import Footer from "./footer";

class Home extends Component {
  render() {
    return (
      <div className="Home">
            <div className="main">
              <img className="ilustration" src={newsImage} alt="ilustra" />
              <div class="text1">
                <h1>Mantenha-se informado!</h1>
                <h6>
                  CampNews é o seu mais confiável portal de notícias nacionais.
                  <br /> Acesse e leia reportagens redirecionadas dos jornais
                  mais respeitados.
                </h6>
                <SearchBar placeholder="O que está buscando?"/>
              </div>
            </div>
          <NoticeList/>
      </div>
      
    );
  }
}

export default Home;

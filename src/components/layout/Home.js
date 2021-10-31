import "./HomeStyles.css";
import React, { Component } from "react";
import newsImage from "../../news.svg";
import SearchBar from "./SearchBox";
import NoticeList from "./Notice/noticeList";
import Footer from "./footer";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      news: []
    };

    this.handleFind = this.handleFind.bind(this);
  }

  handleFind(findBy) {
    findBy = findBy || "saúde";
    const url = `https://campnews-tads2021-gp10.herokuapp.com/?q=${findBy}`;
    const request = axios.get(url);
    request.then(response => this.setState({ news: [] }, () => this.setState({ news: response.data.result })));
  }

  componentDidMount() {
    this.handleFind();
  }

  render() {
    return (
      <div className="Home">
        <div className="main">
          <img className="ilustration" src={newsImage} alt="ilustra" />
          <div className="text1">
            <h1>Mantenha-se informado!</h1>
            <h6>
              CampNews é o seu mais confiável portal de notícias nacionais.
              <br /> Acesse e leia reportagens redirecionadas dos jornais
              mais respeitados.
            </h6>
            <SearchBar placeholder="O que está buscando?" action={this.handleFind} />
          </div>
        </div>
        { this.state.news.length > 0 && <NoticeList news={this.state.news} /> }
      </div>
      
    );
  }
}

export default Home;

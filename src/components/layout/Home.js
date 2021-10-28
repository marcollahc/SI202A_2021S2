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
      news: [],
    }
  }

  handleFind = (findBy) => {
    let url;

    if (findBy) {
      url = `https://newsapi.org/v2/top-headlines?q=${findBy}&country=br&pageSize=16&apiKey=975707ebb7d3485b9901a640d37728fa`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=br&pageSize=16&apiKey=975707ebb7d3485b9901a640d37728fa`;
    }

    const response = axios.get(url);
    response.then(response => this.setState({ news: response.data["articles"] }));
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
          { this.state.news.length > 0 && <NoticeList url={this.state.url} news={this.state.news} /> }
      </div>
      
    );
  }
}

export default Home;

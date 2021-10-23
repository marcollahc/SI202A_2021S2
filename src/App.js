import './App.css';
import React, { Component } from 'react'
import NavBar from './components/layout/NavBar';
import newsImage from './news.svg';
import SearchBox from './components/layout/SearchBox';
import Sobrenos from './components/layout/Sobrenos';
import {Route, Link} from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/Sobre" component={Sobrenos}/>
        <NavBar/>
        <div className="main">
        <img className="ilustration" src={newsImage} alt="ilustra"/>
            <div class="text1">
                <h1>Mantenha-se informado!</h1>
                <h6>CampNews é o seu mais confiável portal de notícias nacionais.<br/> Acesse e leia reportagens redirecionadas dos jornais mais respeitados.</h6>
            </div>
        </div>
        <SearchBox/>
      </div>
    )
  }
}


export default Home;

import React, { Component } from "react";
import "../../App.css";
import "./SobreStyles.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import _ from "lodash";
import teamMates from "./assets/team.json";

class Sobre extends Component {
  render() {
    return (
      <div className="pageSobre">
        <div className="mainCards">
          {_.map(teamMates, (chosenOne, index) => {
            const mateName = _.get(chosenOne, "name");
            const mateImage = require(`./assets/${chosenOne.image}`);
            const mateTag = _.get(chosenOne, "tag");
            const mateSocial = _.get(chosenOne, "social");

            return (
              <div className="card" key={index}>
                <img className="profile" src={mateImage} alt="Avatar" />
                <div className="containerCard">
                  <h4>
                    <b>{mateName}</b>
                  </h4>
                  <div className="linkedinIcon">
                    <i>
                      <LinkedInIcon />
                    </i>
                    <a className="anotherA" href={mateSocial} target="_blank">
                      {mateTag}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Sobre;

import React, { Component } from "react";
import "./noticeStyles.css";
import "./noticeList";
import styled from "styled-components";

const Capa = styled.img`
  height: 300px;
  width: 400px;
  display: none;
`;

class NoticeCD extends Component {
  state = {
    source: "",
    title: "",
    link: "",
    img: "",
    description: "",
    date: "",
    desc:"",
    imageLoading: true,
    toManyRequests: false,
  };

  componentDidMount() {
    const { source, title, img, link, date, desc} = this.props;
    this.setState({ source, title, img, link, date, desc });
  }

  render() {
    return (
      <div className="pageNotices">
        <div className="mainCardNotices">
          <div
            className="CardNotices"
            onClick={() => window.open(`https://${this.state.link}`, '_blank')}
          >
            {this.state.imageLoading ? <div className="cLoader" style={{height:"200px", 
            width:"200px",
            display: "flex",
            marginLeft: "107px",
            marginTop: "85px"}}></div> : null}
            <Capa
              className="cardImage"
              src={this.state.img}
              onLoad={() => this.setState({ imageLoading: false })}
              onError={() => this.setState({ toManyRequests: false })}
              style={this.state.imageLoading ? null : { display: "block" }}
            />
            <h4>[{this.state.source}] {this.state.title}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default NoticeCD;

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
    title: "",
    url: "",
    urlToImage: "",
    description: "",
    publishedAt: "",
    content:"",
    imageLoading: true,
    toManyRequests: false,
  };

  componentDidMount() {
    const { title, urlToImage, url, publishedAt, content} = this.props;
    this.setState({ title, urlToImage, url, publishedAt, content});
  }

  render() {
    return (
      <div className="pageNotices">
        <div className="mainCardNotices">
          <div
            className="CardNotices"
            onClick={() => window.open(this.state.url)}
          >
            {this.state.imageLoading ? <div className="cLoader" style={{height:"200px", 
            width:"200px",
            display: "flex",
            marginLeft: "107px",
            marginTop: "85px"}}></div> : null}
            <Capa
              className="cardImage"
              src={this.state.urlToImage}
              onLoad={() => this.setState({ imageLoading: false })}
              onError={() => this.setState({ toManyRequests: false })}
              style={this.state.imageLoading ? null : { display: "block" }}
            />
            <h4>{this.state.title}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default NoticeCD;

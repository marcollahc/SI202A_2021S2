import React, { Component } from "react";
import "./noticeStyles.css";
import "./noticeList";
import styled from "styled-components";

const Capa = styled.img`
    height: 300px;
    width: 400px;
    border-radius: 30px;
`;

class NoticeCD extends Component {
  state = {
    title: '',
    url: '',
    urlToImage: '',
    description: '',
    imageLoading: true,
    toManyRequests: false
  };

  componentDidMount() {
    const {title, urlToImage, url} = this.props;
    this.setState({title, urlToImage, url});
  }

  render() {
    return (
      <div className="pageNotices">
        <div className="mainCardNotices">
          <div className="CardNotices" onClick={() => (window.open(this.state.url))}>
            <Capa 
                className="cardImage" 
                src={this.state.urlToImage}
                onLoad={() => this.setState({imageLoading: false})}
                onError={() => this.setState({toManyRequests: false})}
            />
            <h4>
              {this.state.title}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default NoticeCD;

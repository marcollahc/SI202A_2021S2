import React, { Component } from "react";
import NoticeCD from "./noticeCards";
import "./noticeStyles.css";
import axios from "axios";

class NoticeList extends Component {
  state = {
    url: "https://newsapi.org/v2/top-headlines?country=br&apiKey=975707ebb7d3485b9901a640d37728fa",
    noticeOpen: null,
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ noticeOpen: res.data["articles"] });
  }

  render() {
    return (
      <React.Fragment className="Fragment">
        {this.state.noticeOpen ? (
          <div className="rowNotices">
            {this.state.noticeOpen.map((noticeShow) => (
              <NoticeCD
                title={noticeShow.title}
                urlToImage={noticeShow.urlToImage}
                url={noticeShow.url}
              />
            ))}
          </div>
        ) : (
          <div class="cLoader">
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default NoticeList;

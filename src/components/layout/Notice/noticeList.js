import React, { Component } from "react";
import NoticeCD from "./noticeCards";
import "./noticeStyles.css";

class NoticeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        { this.props.news ? (
          <div className="rowNotices">
            {this.props.news.map((noticeShow, index) => (
              <NoticeCD
                key={index}
                title={noticeShow.title}
                urlToImage={noticeShow.urlToImage}
                url={noticeShow.url}
                publishedAt={noticeShow.publishedAt}
              />
            ))}
          </div>
        ) : (
          <div className="cLoader">
          </div>
        ) }
      </React.Fragment>
    );
  }
}

export default NoticeList;

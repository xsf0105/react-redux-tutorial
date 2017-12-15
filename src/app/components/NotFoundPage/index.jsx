import React from "react";
import "./index.scss";

class NotFoundPage extends React.Component {
  componentDidMount() {
    const hash = localStorage.getItem("hash", window.location.hash);
    if (hash) {
      window.location.href = hash;
    } else {
      window.location.href = "/";
    }
  }

  render() {
    return <div className="not-found">跳转ing</div>;
  }
}

export default NotFoundPage;

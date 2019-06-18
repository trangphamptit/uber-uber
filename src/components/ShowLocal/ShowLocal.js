import React, { Component } from "react";
import "./ShowLocal.scss";

class ShowLocal extends Component {
  constructor(props) {
    super(props);
    let username = localStorage.getItem("username");
    let avatar = localStorage.getItem("avatar");
    this.state = {
      username: username,
      avatar: avatar
    };
  }

  render() {
    return (
      <div className="showUser">
        <label className="userName">{this.state.username}</label>
        <img className="avatar" src={"/image/" + this.state.avatar} alt="" />
      </div>
    );
  }
}

export default ShowLocal;

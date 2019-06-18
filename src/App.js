import React, { Component } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import PhonePage from "./Pages/PhonePage/PhonePage";
import CodePage from "./Pages/CodePage/CodePage";
import UserPage from "./Pages/UserPage/UserPage";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import "./Pages/MainPage/MainPage.scss";
import ShowMapPage from "./Pages/ShowMapPage/ShowMapPage";
import ShowDestination from "./Pages/ShowDestination/ShowDestination";
import ConfirmPage from "./Pages/ConfirmPage/ConfirmPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import { Redirect } from "react-router-dom";
import UberWorkPage from "./Pages/UberWorkPage/UberWorkPage";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  componentWillMount() {
    const username = localStorage.getItem("username");
    this.setState({ username });
  }
  checkUser = () => {
    if (this.state.username) {
      return <Redirect to="/codepage" />;
    }
    console.log(this.state.username);
  };

  render() {
    return (
      <MainPage>
        <BrowserRouter>
          <Switch>
            <Route path="/phonepage" component={PhonePage} />
            <Route path="/codepage" component={CodePage} />
            <Route path="/userpage" component={UserPage} />
            <Route path="/showmappage" component={ShowMapPage} />
            <Route path="/showdestination" component={ShowDestination} />
            <Route path="/confirmpage" component={ConfirmPage} />
            <Route path="/contactpage" component={ContactPage} />
            {/* {this.checkUser()} */}
            {/* <Route path="/" exact component={HomePage} /> */}
            <Route path="/" exact component={UberWorkPage} />
          </Switch>
        </BrowserRouter>
      </MainPage>
    );
  }
}

export default App;

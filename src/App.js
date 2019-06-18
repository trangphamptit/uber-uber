import React from "react";
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
function App() {
  return (
    <BrowserRouter>
      <MainPage>
        <Switch>
          {/* <Route path="/showmappage" component={ShowMapPage} /> */}
          {/* <Route path="/showlocal" component={ShowLocal} /> */}
          <Route path="/phonepage" component={PhonePage} />
          <Route path="/codepage" component={CodePage} />
          <Route path="/userpage" component={UserPage} />
          <Route path="/" exact component={HomePage} />
          <Route path="/showmappage" component={ShowMapPage} />
          <Route path="/showdestination" component={ShowDestination} />
          <Route path="/confirmpage" component={ConfirmPage} />
          <Route path="/contactpage" component={ContactPage} />
          {/* <Route path="/phonepage" component={PhonePage} />
          <Route path="/codepage" component={CodePage} />
          <Route path="/inforpage" component={InforPage} /> */}
        </Switch>
      </MainPage>
    </BrowserRouter>
  );
}

export default App;

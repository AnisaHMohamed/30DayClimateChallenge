//import logo from "./logo_blackyouthcommission_white.png";
import BlackYouthCommission from "./logo_blackyouthcommission_teal.png";
import logo from "./kisspng-pollution-5b31424667b850.2266725515299548864249.png";

import React from "react";
import "./App.css";
import ChallengeItem from "./components/Challenge";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="Title">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            width="24%"
            height="24%"
          />
          <div>
            <img src={BlackYouthCommission} width="300px" />
            <h4>Presents:</h4>
            <h1> The 30 Day Climate Change Challenge</h1>
          </div>
        </div>
        <ChallengeItem />
        <img
          src="http://www.myseumoftoronto.com/wp-content/uploads/2018/02/logo-toronto.png"
          width="200px"
        />
        <img src={BlackYouthCommission} width="300px" />
      </header>
    </div>
  );
}

export default App;

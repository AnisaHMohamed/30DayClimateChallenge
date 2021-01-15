import React, { Component } from "react";
import "./index.css";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav>
        <ul>
          Day:
          <li> 1</li>
          <li> /2</li>
          <li> /3</li>
          <li> /4</li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;

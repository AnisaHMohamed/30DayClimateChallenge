import React, { Component } from "react";
import "./index.css";
class ChallengeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getCurrentDate(separator = " ") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hours =
      newDate.getHours() > 12 ? newDate.getHours() - 12 : newDate.getHours();
    let minutes = newDate.getMinutes();
    switch (month) {
      case 1:
        month = "January";
        break;
      case 2:
        month = "February";
        break;
      case 3:
        month = "March";
        break;
      case 4:
        month = "April";
        break;
      case 5:
        month = "May";
        break;
      case 6:
        month = "January";
        break;
      default:
        break;
    }
    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date} // ${hours} : ${minutes}`;
  }
  render() {
    return (
      <div className="Challenge">
        <h1>Title: Have a Conversation</h1>
        <img src="https://assets.nrdc.org/sites/default/files/styles/header_background_mobile/public/personalaction-kidsclimatechange-2400x1600.jpg?itok=3T8oAx2M" />
        <h3>Current Date: {this.getCurrentDate()}</h3>
        <h1>Challenge description</h1>
      </div>
    );
  }
}

export default ChallengeItem;

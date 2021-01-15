import React, { Component } from "react";
import "./index.css";
class ChallengeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {challengeArray:[
      {
        title:"Turn off the lights whenever you leave a room",	
        challengeDescription:"Energy conservation is one of the most important things you can do to reduce your carbon footprint. Leaving your electricals on standby needlessly uses up energy – hit the off switch and you could see huge improvements, most noticeably in your energy bills!"
      },
      {
        title:"Add a compost bin to your kitchen",	
        challengeDescription:"If you have let your food go that little bit too far past its ‘best by’ then you need to be sure to compost it rather than putting it in the bin. Not only will this help create a natural fertiliser and keep your garden green, it’ll also reduce the amount of waste going to landfill - and as it won’t break down anaerobically, there will not be a build-up of methane gas."
      }
  ]
};
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
        month = "June";
        break;
      case 7:
        month = "July";
        break;
      case 8:
        month = "August";
        break;      
      case 9:
        month = "September";
      break;          
      case 10:
        month = "October";
      break;
      case 11:
        month = "November";
       break;
      case 10:
        month = "December";
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
        <h1>{this.state.challengeArray[0].title}</h1>
        <img src="https://assets.nrdc.org/sites/default/files/styles/header_background_mobile/public/personalaction-kidsclimatechange-2400x1600.jpg?itok=3T8oAx2M" />
        <h3>Current Date: {this.getCurrentDate()}</h3>
        <h1 class="challengeDescription">{this.state.challengeArray[0].challengeDescription}</h1>
      </div>
    );
  }
}

export default ChallengeItem;

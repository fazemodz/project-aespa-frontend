import "./Resources/css/Home_Page.css";
import React, { Component } from "react";
import FlagOfUkrain from "./Resources/Pictures/Flag_of_Ukrainian_People's_Republic.svg";
export default class App extends Component {
  render() {
    return (
      <div className="Message-container">
        <div className="Message">
          <img className="FlagOfUkrain" src={FlagOfUkrain} alt="Ukrain Flag" />
        </div>
      </div>
    );
  }
}

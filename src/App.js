import "./Resources/css/Home_Page.css";
import Header from "./modules/header";
import React, { Component } from 'react'
import Homepagebody from './modules/homepagebody'
export default class App extends Component {
  render() {
    return (
      <div>
         <Header/>
         <Homepagebody/>
      </div>
    )
  }
}


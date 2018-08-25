import React, { Component } from "react";
import Header from "./header";
import './home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='space'></div>
      </div>
    );
  }
}

export default Home;

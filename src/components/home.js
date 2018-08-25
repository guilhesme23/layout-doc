import React, { Component } from "react";
import Header from "./header";
import Navbar from "./navbar";
import './home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <div className='space'></div>
      </div>
    );
  }
}

export default Home;

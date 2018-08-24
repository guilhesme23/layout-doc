import React, { Component } from "react";
import FullVideo from "./components/full-video"
import "./App.css";

class Home extends Component {
  render() {
    return (
      <FullVideo video='code.mp4'/>
    );
  }
}

export default Home;

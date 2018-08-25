import React, { Component } from 'react'
import FullVideo from "./full-video";
import './header.css'

export default class Header extends Component {
  render() {
    return (
      <header className='header-container'>
        <div className='header-content'>
          <h1>Pretty Good Title</h1>
        </div>
        <FullVideo video='code.mp4' />
      </header>
    )
  }
}

import React, { Component } from 'react'
import './full-video.css'

export default class FullVideo extends Component {
  render() {
    const video = require(`../assets/video/${this.props.video}`);
    return (
      <div className='video-container'>
        <div className="full-video">
          <video src={video} autoPlay="true" loop="true" />
        </div>
        <div className='video-overlay' />
      </div>
    );
  }
}

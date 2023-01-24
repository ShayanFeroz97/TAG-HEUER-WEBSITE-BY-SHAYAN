import React from 'react'
import "./Video.css";
import Tagheuervideo from "./tagheuer.video.mp4";

function Video() {
  return (
    <div>
      <div className="Video-Clip">
      <div className="video-tagheuer">
        <video autoPlay muted src={Tagheuervideo}></video>
      </div>
      </div>
    </div>
  )
}

export default Video

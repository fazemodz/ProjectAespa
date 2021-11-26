import React from 'react'
import ReactDom from "react-dom";
import ReactPlayer from "react-player";
import AespaVideo from "../../Resources/Videos/aespaSavageMV.mp4";
import '../../Resources/css/BackgroundVideo.css'
import 'animate.css';
export default function VideoBackground() {
  // Renders this function outside of the react app render target using ReactDom.createPortal()
    return ReactDom.createPortal(
        <>
        {/* Create a player for video background */}
        <ReactPlayer
        // animate__animated animate__fadeInLeft are used to animate the video background
          className="Background_Vid_Aespa animate__animated animate__fadeInLeft"
          loop
          muted
          playing
          url={[{ src: AespaVideo, type: "video/mp4" }]}
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </>,
      document.getElementById("video"),
    )

}
const RenderHeaderText = () =>{
 
}

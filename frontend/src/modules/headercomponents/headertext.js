import React from 'react'
import ReactDom from 'react-dom'
import '../../Resources/css/header.css'
export default function headertext() {
    // Renders this function outside of the react app render target using ReactDom.createPortal()
  console.log("RenderHeaderText")
  return ReactDom.createPortal(
      <div className="Header_Text_Aespa">
          <h1 className="BandName animate__animated animate__fadeInDown">AESPA</h1>
          <h1 className="LatestMusicVideo animate__animated animate__fadeInUp">SAVAGE MV OUT NOW</h1>
      </div>,
      document.getElementById("HeaderText")
  )
}

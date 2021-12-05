import React from 'react'
import ReactDom from "react-dom";
import ReactPlayer from "react-player";
import AespaVideo from "../../Resources/Videos/aespasavage.mp4";
import '../../Resources/css/BackgroundVideo.css'
import 'animate.css';
export default function VideoBackground() {
  let VideoUrl = AespaVideo;
  // Renders this function outside of the react app render target using ReactDom.createPortal()
    return ReactDom.createPortal(
        <div>
        {/* Create a player for video background */}
        <ReactPlayer
        // animate__animated animate__fadeInLeft are used to animate the video background
          className="Background_Vid_Aespa animate__animated animate__fadeInLeft"
          loop
          muted
          playing
          controls={false}
          url={[{ src: VideoUrl, type: "video/mp4" }]}
          onError={VideoUrl = "https://streamable.com/x5g3s7"}
        />
      </div>,
      document.getElementById("video"),
    )

}
const RenderHeaderText = () =>{
 
}

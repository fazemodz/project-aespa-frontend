import React from "react";
import ReactDom from "react-dom";
import ReactPlayer from "react-player";
import AespaVideo from "../../Resources/Videos/aespasavage.mp4";
import headertext from "./headertext";
import "../../Resources/css/BackgroundVideo.css";
import "animate.css";
export default class VideoBackground extends React.Component {
  state = {
    HasVideoRenderFailed: false,
  };
  RenderVideoFrame() {
    return (
      <div>
        {/* creates a react player from file */}
        <ReactPlayer
          // animate__animated animate__fadeInLeft are used to animate the video background
          className="Background_Vid_Aespa animate__animated animate__fadeInLeft"
          loop
          muted
          playing
          controls={false}
          url={AespaVideo}
          onError={() => this.setState({ HasVideoRenderFailed: true })}
        />
      </div>
    );
  }
  RenderVideoFrameFallBack() {
    console.log("Video loading failed falling to Render Video Frame FallBack");
    // fallback to stream video url if load from file fails due to Git LFS
    return (
      <div>
        <ReactPlayer
          // animate__animated animate__fadeInLeft are used to animate the video background
          className="Background_Vid_Aespa animate__animated animate__fadeInLeft"
          loop
          muted
          playing
          controls={false}
          url="https://streamable.com/x5g3s7"
          height="100wh"
          width="100vw"
        />
      </div>
    );
  }
  render() {
    // Renders this function outside of the react app render target using ReactDom.createPortal()
    return ReactDom.createPortal(
      <div>
        {this.state.HasVideoRenderFailed === false
          ? this.RenderVideoFrame()
          : this.RenderVideoFrameFallBack()}
      </div>,
      document.getElementById("video")
    );
  }
}

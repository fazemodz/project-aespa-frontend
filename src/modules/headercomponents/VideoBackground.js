import React from "react";
import ReactDom from "react-dom";
import ReactPlayer from "react-player";
import AespaVideo from "../../Resources/Videos/aespasavage.mp4";
import "../../Resources/css/BackgroundVideo.css";
import "animate.css";
export default class VideoBackground extends React.Component {
  componentDidMount() {
    //This disables the right click so it stops the user from getting access to the video controls
    document.addEventListener('contextmenu', event => {
      event.preventDefault();
      console.log(event.target);
      this.setState({EventData: event.target});
      let Test = this.state.EventData;
      if(Test.includes()){
        console.log("Video is being clicked");
      }
    });
  }
  state = {
    HasVideoRenderFailed: false,
    EventData: ''
  };
  RenderVideoFrame() {
    return (
      
      <div className="BG_VideoPlayer">
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
    // fallback to stream video url if load from file fails due to Git LFS or an error on Users end
    return (
      <div className="BG_VideoPlayer_Fallback">
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
  // VideoBackgroundControllBlocker(){
  //   return <div className="VideoBackgroundControllBlocker"></div>
  // }
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

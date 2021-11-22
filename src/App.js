
import './App.css';
import "./style.css";
import img1 from './images/profile.jpg';
import VideoPlayer from "react-video-js-player";
import nature from './videos/Beautiful-Nature.mp4';




function App() {
  return (
    <div className="App">
      <h1  className="title-red">Your name here</h1>  
      <img src={img1} className="img" alt='profileImage' />
      <br />
      <img src="./images/login.jpg" className="img" alt='loginImage' />
      <br/>
      <VideoPlayer src={nature} className="video" width="320" height="240"/>

    </div>
  );
}


  
export default App;



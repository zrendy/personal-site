import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navi from './components/Navi';
import LinkedinProfile from './components/LinkedinProfile';
import Lottie from "lottie-react";
import codeanimation from "./components/code-animation.json";
import Accord from './components/Accord';
import GHcard from './components/GHcard';



function App() {
  const lottieStyle = {
    height: 400,
    margin: 0
  }
  return (
    <div className="App">
      <Navi/>
      <Lottie style={lottieStyle} animationData={codeanimation} loop={true} />
      <LinkedinProfile />
      <Accord />
      <GHcard/>
    
    </div>
  );
}

export default App;

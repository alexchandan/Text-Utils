import "./App.css";
import Navbar from "./Components/Navbar";
import InputBox from "./Components/InputBox";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light') // wheter mode is dark or light
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#22223b';
      document.body.style.color = 'white';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.transition = '0.3s all'
      document.body.style.color = 'black';
    }
  }
  return (
    <>
      <Navbar heading="TextUtils" mode={mode} toggleMode={toggleMode} />
      <InputBox textAreaHeading="Enter the text below to count words, characters and reading time of your paragraph." mode={mode} toggleMode={toggleMode} />
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./Components/Navbar";
import InputBox from "./Components/InputBox";
import { useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";

function App() {
  const [mode, setMode] = useState('light') // wheter mode is dark or light
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#22223b';
      document.body.style.color = 'white';
      document.title = 'TextUtils - Dark Mode'
      showAlert('Dark mode has been enabled.', 'success')
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.transition = '0.3s all'
      document.body.style.color = 'black';
      document.title = 'TextUtils - Light Mode'
      showAlert('Light mode has been enabled.', 'success')
    }

    // to manipulate the user using document title

    // setInterval(() => {
    //   document.title = 'Install textUtils'
    // }, 1500);

    // setInterval(() => {
    //   document.title = 'Virus in your PC'
    // }, 2000);

  }
  return (
    <>
      <Navbar heading="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <InputBox textAreaHeading="Enter the text below to count words, characters and reading time of your paragraph." mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
      <About mode={mode} />
    </>
  );
}

export default App;

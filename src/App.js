import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';





function App() {
  const [mode, setMode] = useState("light")
  const [switchBtnText, setswitchBtnText] = useState("Dark Mode")

  const toggleBtn = () => {
    if (mode === "light") {
      setMode("dark")
      setswitchBtnText("Light Mode")
      document.body.style.backgroundColor = "#042743"
      showAlert(": Dark mode has been enabled", "success")
    }
    else {
      setMode("light")
      setswitchBtnText("Dark Mode")
      document.body.style.backgroundColor = "white"
      showAlert(": Light mode has been enabled", "success")
    }

  }
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })


    setTimeout(() => {
      setAlert(null)

    }, 3000);

  }


  return (
    <>
      <BrowserRouter>

        <Navbar title="Text Utils" about="About" mode={mode} toggleBtn={toggleBtn} switchBtnText={switchBtnText} />
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<TextForm heading="Enter The Text To Analyze Below" mode={mode} />} />
        </Routes>
      </BrowserRouter>





    </>

  );
}

export default App;
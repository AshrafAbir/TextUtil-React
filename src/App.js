
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textfield from './components/Textfield';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {

      setAlert(null);

    }, 1500);

  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has enabled ", "success");
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "light";
      showAlert("Lighr mode has enabled ", "success");
    }

  }



  return (
     <>
      {/* <Router> */}
        <Navbar title="Text Utils" about="About" mode1={mode} togglemode1={togglemode} />
        <Alert alert1={alert} />

        <div className="container my-3 " >

          {/* <Switch>
            <Route path="/about"> */}
             {/* <About /> */}
            {/* </Route> */}

            {/* <Route path="/"> */}
              <Textfield heading="Enter Text Below" mode1={mode} showAlert1={showAlert} />
            {/* </Route> */}
          {/* </Switch> */}

        </div>
      {/* </Router> */}

    </>

  );
}

export default App;

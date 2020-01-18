import React from "react";
import logo from "./logo.svg";
import "./App.css";

import FormComponent from './components/form/formComponent';
import rl from './components/form/rl';

const Form = rl.Container(FormComponent);

const App = () => {
  return (
    <div className="App">
      <header className="">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Form />
    </div>
  );
}

export default App;

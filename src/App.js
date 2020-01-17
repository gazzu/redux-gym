import React from "react";
import logo from "./logo.svg";
import "./App.css";

import FormContainer from './components/form/formContainer';
import FormComponent from './components/form/formComponent';

const Form = FormContainer(FormComponent);

function App() {
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

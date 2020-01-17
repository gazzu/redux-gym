import React from "react";

const FormComponent = props => (
  <form onSubmit={props.onFormSubmit}>
    <h1>Our form example</h1>
    <div>
      <textarea onChange={props.onTextChange} value={props.text} />
    </div>
    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
);

export default FormComponent;

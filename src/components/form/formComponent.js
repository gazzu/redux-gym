import React, { useState } from "react";

const FormComponent = props => {
  const [open, toggle] = useState(false);
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.submitAction();
        toggle(true);
      }}
    >
      <h1>Redux Form example</h1>
      <div>
        <textarea
          onChange={event => props.textAction(event.target.value)}
          value={props.text}
        />
        <dialog open={open}>
          <p>{props.text}</p>
          <menu>
            <button type="button" onClick={() => toggle(false)}>Close</button>
          </menu>
        </dialog>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default FormComponent;

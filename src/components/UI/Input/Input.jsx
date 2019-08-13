import React from 'react';

import classes from './Input.module.css';

const Input = props => {
  const { label, elementType, elementConfig, value } = props;

  const randomID = Math.random().toString();
  const defaultInput = (
    <input className={classes.InputElement} id={randomID} {...elementConfig} value={value} />
  );
  const types = {
    input: defaultInput,
    textarea: (
      <textarea className={classes.InputElement} id={randomID} {...elementConfig} value={value} />
    ),
  };
  const inputElement = types[elementType] || defaultInput;

  return (
    <div className={classes.Input}>
      <label className={classes.Label} htmlFor={randomID}>
        {label}
      </label>
      {inputElement}
    </div>
  );
};

export default Input;

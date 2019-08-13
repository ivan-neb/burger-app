import React from 'react';

import classes from './Input.module.css';

const Input = props => {
  const { label, inputtype } = props;

  const defaultInput = <input className={classes.InputElement} {...props} />;
  const types = {
    input: defaultInput,
    textarea: <textarea className={classes.InputElement} {...props} />,
  };
  const inputElement = types[inputtype] || defaultInput;

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{label}</label>
      {inputElement}
    </div>
  );
};

export default Input;

import React from 'react';

import classes from './Input.module.css';

const Input = props => {
  const { label, elementType, elementConfig, value, name } = props;

  let inputElement = null;

  switch (elementType) {
    case 'input': {
      inputElement = (
        <input className={classes.InputElement} id={name} {...elementConfig} value={value} />
      );
      break;
    }

    case 'textarea': {
      inputElement = (
        <textarea className={classes.InputElement} id={name} {...elementConfig} value={value} />
      );
      break;
    }

    case 'select': {
      const { options } = elementConfig;

      const optionElements = options.map(option => (
        <option value={option.value} key={option.value}>
          {option.displayValue}
        </option>
      ));

      inputElement = (
        <select className={classes.InputElement} id={name} value={value}>
          {optionElements}
        </select>
      );

      break;
    }

    default: {
      inputElement = (
        <input className={classes.InputElement} id={name} {...elementConfig} value={value} />
      );
    }
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label} htmlFor={name}>
        {label}
      </label>
      {inputElement}
    </div>
  );
};

export default Input;

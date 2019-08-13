import React from 'react';

import classes from './Input.module.css';

const Input = props => {
  const { label, elementType, elementConfig, value, name, changed } = props;

  let inputElement = null;

  switch (elementType) {
    case 'input': {
      inputElement = (
        <input
          className={classes.InputElement}
          name={name}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    }

    case 'textarea': {
      inputElement = (
        <textarea
          className={classes.InputElement}
          name={name}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    }

    case 'select': {
      const { options } = elementConfig;

      const optionElements = options.map(option => (
        <option value={option.value} key={option.value} onChange={changed}>
          {option.displayValue}
        </option>
      ));

      inputElement = (
        <select className={classes.InputElement} name={name} value={value} onChange={changed}>
          {optionElements}
        </select>
      );

      break;
    }

    default: {
      inputElement = (
        <input className={classes.InputElement} name={name} {...elementConfig} value={value} />
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

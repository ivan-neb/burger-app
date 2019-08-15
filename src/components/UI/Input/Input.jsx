import React from 'react';

import classes from './Input.module.css';

const Input = props => {
  const {
    label,
    elementType,
    elementConfig,
    value,
    name,
    changed,
    invalid,
    shouldValidate,
    touched,
  } = props;
  const inputClasses = [classes.InputElement];

  if (invalid && shouldValidate && touched) {
    inputClasses.push(classes.Invalid);
  }

  let inputElement = null;

  switch (elementType) {
    case 'input': {
      inputElement = (
        <input
          className={inputClasses.join(' ')}
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
          className={inputClasses.join(' ')}
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
        <select className={inputClasses.join(' ')} name={name} value={value} onChange={changed}>
          {optionElements}
        </select>
      );

      break;
    }

    default: {
      inputElement = (
        <input className={inputClasses.join(' ')} name={name} {...elementConfig} value={value} />
      );
    }
  }

  let validationError = null;
  if (invalid && touched) {
    validationError = <p className={classes.ValidationError}>Please enter a correct value</p>;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label} htmlFor={name}>
        {label}
      </label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default Input;

import React from 'react';
import classes from './Button.module.css';
import PropTypes from 'prop-types';

const button = ({ children, clicked, btnType }) => (
  <button className={[classes.Button, classes[btnType]].join(' ')} onClick={clicked}>
    {children}
  </button>
);

button.propTypes = {
  btnType: PropTypes.string,
  children: PropTypes.node,
  clicked: PropTypes.func,
};

export default button;

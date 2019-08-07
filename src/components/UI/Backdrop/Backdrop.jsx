import React from 'react';
import classes from './Backdrop.module.css';
import PropTypes from 'prop-types';

const backdrop = ({ show, clicked }) =>
  show ? <div className={classes.Backdrop} onClick={clicked} /> : null;

backdrop.propTypes = {
  clicked: PropTypes.func,
  show: PropTypes.bool,
};

export default backdrop;

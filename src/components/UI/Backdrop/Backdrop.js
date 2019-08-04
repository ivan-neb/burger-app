import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = ({ show, modalClosed }) =>
  show ? <div className={classes.Backdrop} onClick={modalClosed} /> : null;

export default backdrop;

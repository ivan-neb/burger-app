import React from 'react';
import classes from './DrawerToggle.module.css';
import PropTypes from 'prop-types';

const drawerToggle = ({ clicked }) => (
  <div className={classes.DrawerToggle} onClick={clicked}>
    <div />
    <div />
    <div />
  </div>
);

drawerToggle.propTypes = {
  clicked: PropTypes.func,
};

export default drawerToggle;

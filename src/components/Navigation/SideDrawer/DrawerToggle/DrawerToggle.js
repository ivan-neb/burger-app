import React from 'react';
import classes from './DrawerToggle.module.css';

const drawerToggle = ({ clicked }) => (
  <div className={classes.MenuButton} onClick={clicked}>
    MENU
  </div>
);

export default drawerToggle;

import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import PropTypes from 'prop-types';

const sideDrawer = ({ closed, open }) => {
  return (
    <Aux>
      <BackDrop show={open} clicked={closed} />
      <div className={[classes.SideDrawer, open ? classes.Open : classes.Closed].join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

sideDrawer.propTypes = {
  closed: PropTypes.func,
  open: PropTypes.bool,
};

export default sideDrawer;

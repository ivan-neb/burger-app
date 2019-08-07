import React from 'react';
import classes from './NavigationItem.module.css';
import PropTypes from 'prop-types';

const navigationItem = ({ children, link, active }) => (
  <li className={classes.NavigationItem}>
    <a href={link} className={active ? classes.active : null}>
      {children}
    </a>
  </li>
);

navigationItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  link: PropTypes.string,
};

export default navigationItem;

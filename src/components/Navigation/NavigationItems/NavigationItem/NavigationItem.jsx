import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const navigationItem = ({ children, link, exact }) => (
  <li className={classes.NavigationItem}>
    <NavLink to={link} exact={exact} activeClassName={classes.active}>
      {children}
    </NavLink>
  </li>
);

export default navigationItem;

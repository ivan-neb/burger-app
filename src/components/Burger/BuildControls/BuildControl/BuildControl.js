import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = ({ clicked, label, type }) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{label}</div>
    <button className={classes.Less} onClick={() => clicked(type, -1)}>
      Less
    </button>
    <button className={classes.More} onClick={() => clicked(type, +1)}>
      More
    </button>
  </div>
);

export default buildControl;

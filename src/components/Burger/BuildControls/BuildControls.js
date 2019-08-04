import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = ({ clicked, disabledInfo }) => (
  <div className={classes.BuildControls}>
    {controls.map(({ label, type }) => (
      <BuildControl
        key={label}
        label={label}
        type={type}
        clicked={clicked}
        disabled={disabledInfo[type]}
      ></BuildControl>
    ))}
  </div>
);

export default buildControls;

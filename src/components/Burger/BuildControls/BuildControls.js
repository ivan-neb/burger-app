import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = ({ clicked, disabledInfo, totalPrice }) => (
  <div className={classes.BuildControls}>
    <p>
      Total price: <strong>${totalPrice.toFixed(2)}</strong>
    </p>
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
